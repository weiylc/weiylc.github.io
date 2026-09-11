# TianDev Studio 官网

> 专业移动应用开发工作室的官方网站

## 🌟 Features

- **Multi-language Support**: 13 languages including English, Chinese, Japanese, German, French, Korean, Spanish, Portuguese, Italian, Arabic, Hindi, and Russian
- **Automatic Language Detection**: Based on browser settings and URL parameters
- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Progressive Web App**: Manifest file and service worker ready
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels
- **Performance**: Optimized images, lazy loading, and minimal JavaScript

## 📱 Featured Apps

- **AI Translator**: Advanced translation app with 100+ languages
- **Clean Master**: System optimization and cleaning utility
- **Compass Pro**: Professional navigation and compass tool
- **Petal Browser**: Privacy-focused web browser
- **ShadowSocksPRO**: Advanced proxy and VPN solution
- **Voice Recorder**: High-quality audio recording with AI transcription
- **WaterMark Camera**: Professional watermark and timestamp camera

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/app-website.git
   cd app-website
   ```

2. **Customize the content**
   - Update URLs in `index.html`, `sitemap.xml`, and `robots.txt`
   - Replace placeholder images in `assets/images/`
   - Modify contact information and social links

3. **Deploy to GitHub Pages**
   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings
   - The site will be automatically deployed via GitHub Actions

## 🌐 Language Support

The website automatically detects the user's preferred language using:
1. URL parameter (`?lang=en`)
2. Browser's `Accept-Language` header
3. Previously saved language preference

Supported languages:
- English (en)
- 简体中文 (zh-CN)
- 日本語 (ja)
- Deutsch (de)
- Français (fr)
- 한국어 (ko)
- 繁體中文 (zh-TW)
- Español (es)
- Português (pt)
- Italiano (it)
- العربية (ar)
- हिन्दी (hi)
- Русский (ru)

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   ├── i18n.js         # Translation data
│   │   ├── language.js     # Language management
│   │   └── main.js         # Main JavaScript
│   ├── images/             # Image assets
│   └── manifest.json       # PWA manifest
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
└── README.md               # This file
```

## 🔧 Customization

### Adding New Languages

1. Add translations to `assets/js/i18n.js`
2. Update language selector in `assets/js/language.js`
3. Add hreflang links in `index.html`
4. Update sitemap.xml with new language URLs

### Modifying App Information

Edit the app data in `index.html` within the apps section. Each app card includes:
- App name and description
- Feature list
- Download links
- Screenshots

### SEO Configuration

Update the following files with your domain:
- `index.html`: Meta tags and structured data
- `sitemap.xml`: URL references
- `robots.txt`: Sitemap URL
- `assets/manifest.json`: Start URL and scope

## 📊 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Schema.org Organization markup
- **Sitemap**: XML sitemap with multi-language support
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization
- **Hreflang**: Multi-language SEO support

## 🎨 Design System

- **Colors**: Modern gradient-based color scheme
- **Typography**: Inter font family for optimal readability
- **Layout**: CSS Grid and Flexbox for responsive design
- **Animations**: Subtle CSS animations and transitions
- **Icons**: SVG icons for scalability

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 联系我们

- **开发团队**: TianDev Studio
- **邮箱**: devapptian@gmail.com
- **GitHub**: https://github.com/devforapp

---

Built with ❤️ for the mobile app community