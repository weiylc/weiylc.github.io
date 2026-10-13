#!/usr/bin/env python3
"""Offline regression checks for links, catalog, canonical URLs and sitemap.
Run from any directory: python3 scripts/check_site.py (standard library only).
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, parse_qs
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://monkeyapp.stream'

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.schemas = []
        self.schema = None
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schema = ''
    handle_startendtag = handle_starttag
    def handle_data(self, data):
        if self.schema is not None:
            self.schema += data
    def handle_endtag(self, tag):
        if tag == 'script' and self.schema is not None:
            self.schemas.append(json.loads(self.schema))
            self.schema = None
    @property
    def canonicals(self):
        return [a['href'] for t, a in self.tags if t == 'link' and a.get('rel') == 'canonical']
    @property
    def alternates(self):
        return [(a['hreflang'], a['href']) for t, a in self.tags if t == 'link' and 'hreflang' in a]


def page_url(path):
    relative = path.relative_to(ROOT).as_posix()
    return BASE + '/' + (relative[:-10] if relative.endswith('index.html') else relative)


def check():
    pages = {page_url(p): Page(p.read_text()) for p in ROOT.rglob('*.html')}
    errors = []
    edges = {u: set() for u in pages}
    for u, p in pages.items():
        if len(p.canonicals) != 1:
            errors.append(f'{u}: expected one canonical')
            continue
        canonical = p.canonicals[0]
        if canonical not in pages or pages[canonical].canonicals != [canonical]:
            errors.append(f'{u}: canonical missing or chained: {canonical}')
        for tag, attrs in p.tags:
            key = 'href' if tag in ('a', 'link') else 'src' if tag in ('img', 'script') else None
            if not key or key not in attrs:
                continue
            target = urlsplit(urljoin(u, attrs[key]))
            if target.netloc != 'monkeyapp.stream':
                continue
            dest = ROOT / target.path.lstrip('/')
            if dest.is_dir():
                dest /= 'index.html'
            if not dest.is_file():
                errors.append(f'{u}: broken {key}: {attrs[key]}')
            target_url = BASE + target.path.replace('/index.html', '/')
            if tag == 'a' and target_url in pages:
                edges[u].add(target_url)
        languages = [lang.lower() for lang, _ in p.alternates]
        if len(languages) != len(set(languages)):
            errors.append(f'{u}: duplicate hreflang language')
        for lang, target in p.alternates:
            if target not in pages or pages[target].canonicals != [target]:
                errors.append(f'{u}: hreflang is not canonical: {target}')
            elif canonical == u and u not in [v for _, v in pages[target].alternates]:
                errors.append(f'{u}: hreflang has no return link: {target}')
    seen, todo = set(), [BASE + '/']
    while todo:
        u = todo.pop()
        if u not in seen:
            seen.add(u)
            todo.extend(edges[u] - seen)
    sitemap = [e.text for e in ET.parse(ROOT / 'sitemap.xml').findall('.//{*}loc')]
    if len(sitemap) != len(set(sitemap)):
        errors.append('Duplicate sitemap URL')
    for u in sitemap:
        if u not in pages or pages[u].canonicals != [u]:
            errors.append(f'Sitemap URL is not canonical: {u}')
        if u not in seen:
            errors.append(f'Sitemap URL has no crawlable path from home: {u}')
        if u in pages and any(a.get('http-equiv', '').lower() == 'refresh' or (a.get('name') == 'robots' and 'noindex' in a.get('content', '')) for t, a in pages[u].tags if t == 'meta'):
            errors.append(f'Sitemap contains redirect/noindex page: {u}')
    apps = json.loads((ROOT / 'assets/apps.json').read_text())
    for a in apps:
        detail = BASE + '/' + a['slug'] + '/en/'
        if detail not in seen:
            errors.append(f'App detail unreachable: {detail}')
        for store in ('apple', 'google'):
            if a[store] and detail in pages and not any(attrs.get('href') == a[store] for tag, attrs in pages[detail].tags if tag == 'a'):
                errors.append(f'{detail}: missing {store} download')
        if a.get('package'):
            if parse_qs(urlsplit(a['google']).query).get('id') != [a['package']]:
                errors.append(f'Wrong Play package: {a["slug"]}')
            icon = ROOT / a['icon'].lstrip('/')
            if not icon.exists() or not icon.read_bytes().startswith(b'\x89PNG\r\n\x1a\n'):
                errors.append(f'Invalid local Android icon: {icon}')
    for u, p in pages.items():
        if '/apps/' in u or u == BASE + '/':
            cards = sum('app-card' in a.get('class', '').split() for _, a in p.tags)
            if cards and cards != len(apps):
                errors.append(f'{u}: {cards} cards, expected {len(apps)}')
    for error in errors:
        print('FAIL:', error)
    print(f'{len(pages)} HTML pages; {len(sitemap)} canonical, reachable sitemap URLs; {len(apps)} apps; {sum(bool(a["google"]) for a in apps)} Android apps; {len(errors)} errors.')
    return bool(errors)

if __name__ == '__main__':
    raise SystemExit(check())
