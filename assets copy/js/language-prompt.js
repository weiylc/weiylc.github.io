// 语言切换提醒组件
// 根据设计文档：多语言切换提醒设计与实现经验
// 当页面语言与浏览器首个本站支持的语言不同时，显示右下角浮动卡片

(function() {
    'use strict';

    // 站点支持的语言列表
    const SUPPORTED_LANGUAGES = [
        'en', 'zh-CN', 'zh-TW', 'ja', 'ko', 'de', 
        'fr', 'es', 'pt', 'it', 'ar', 'hi', 'ru'
    ];

    // 语言代码到显示名称的映射（使用目标语言的本地写法）
    const LANGUAGE_DISPLAY_NAMES = {
        'en': { en: 'English', 'zh-CN': '英语', 'zh-TW': '英語', ja: '英語', ko: '영어', de: 'Englisch', fr: 'Anglais', es: 'Inglés', pt: 'Inglês', it: 'Inglese', ar: 'الإنجليزية', hi: 'अंग्रेज़ी', ru: 'Английский' },
        'zh-CN': { en: 'Simplified Chinese', 'zh-CN': '简体中文', 'zh-TW': '简体中文', ja: '中国語（簡体）', ko: '중국어 간체', de: 'Chinesisch (Vereinfacht)', fr: 'Chinois (Simplifié)', es: 'Chino (Simplificado)', pt: 'Chinês (Simplificado)', it: 'Cinese (Semplificato)', ar: 'الصينية المبسطة', hi: 'सरलीकृत चीनी', ru: 'Упрощенный китайский' },
        'zh-TW': { en: 'Traditional Chinese', 'zh-CN': '繁體中文', 'zh-TW': '繁體中文', ja: '中国語（繁体）', ko: '중국어 번체', de: 'Chinesisch (Traditionell)', fr: 'Chinois (Traditionnel)', es: 'Chino (Tradicional)', pt: 'Chinês (Tradicional)', it: 'Cinese (Tradizionale)', ar: 'الصينية التقليدية', hi: 'पारंपरिक चीनी', ru: 'Традиционный китайский' },
        'ja': { en: 'Japanese', 'zh-CN': '日语', 'zh-TW': '日語', ja: '日本語', ko: '일본어', de: 'Japanisch', fr: 'Japonais', es: 'Japonés', pt: 'Japonês', it: 'Giapponese', ar: 'اليابانية', hi: 'जापानी', ru: 'Японский' },
        'ko': { en: 'Korean', 'zh-CN': '韩语', 'zh-TW': '韓語', ja: '韓国語', ko: '한국어', de: 'Koreanisch', fr: 'Coréen', es: 'Coreano', pt: 'Coreano', it: 'Coreano', ar: 'الكورية', hi: 'कोरियाई', ru: 'Корейский' },
        'de': { en: 'German', 'zh-CN': '德语', 'zh-TW': '德語', ja: 'ドイツ語', ko: '독일어', de: 'Deutsch', fr: 'Allemand', es: 'Alemán', pt: 'Alemão', it: 'Tedesco', ar: 'الألمانية', hi: 'जर्मन', ru: 'Немецкий' },
        'fr': { en: 'French', 'zh-CN': '法语', 'zh-TW': '法語', ja: 'フランス語', ko: '프랑스어', de: 'Französisch', fr: 'Français', es: 'Francés', pt: 'Francês', it: 'Francese', ar: 'الفرنسية', hi: 'फ्रेंच', ru: 'Французский' },
        'es': { en: 'Spanish', 'zh-CN': '西班牙语', 'zh-TW': '西班牙語', ja: 'スペイン語', ko: '스페인어', de: 'Spanisch', fr: 'Espagnol', es: 'Español', pt: 'Espanhol', it: 'Spagnolo', ar: 'الإسبانية', hi: 'स्पेनिश', ru: 'Испанский' },
        'pt': { en: 'Portuguese', 'zh-CN': '葡萄牙语', 'zh-TW': '葡萄牙語', ja: 'ポルトガル語', ko: '포르투갈어', de: 'Portugiesisch', fr: 'Portugais', es: 'Português', pt: 'Português', it: 'Portoghese', ar: 'البرتغالية', hi: 'पुर्तगाली', ru: 'Португальский' },
        'it': { en: 'Italian', 'zh-CN': '意大利语', 'zh-TW': '義大利語', ja: 'イタリア語', ko: '이탈리아어', de: 'Italienisch', fr: 'Italien', es: 'Italiano', pt: 'Italiano', it: 'Italiano', ar: 'الإيطالية', hi: 'इतालवी', ru: 'Итальянский' },
        'ar': { en: 'Arabic', 'zh-CN': '阿拉伯语', 'zh-TW': '阿拉伯語', ja: 'アラビア語', ko: '아랍어', de: 'Arabisch', fr: 'Arabe', es: 'Árabe', pt: 'Árabe', it: 'Arabo', ar: 'العربية', hi: 'अरबी', ru: 'Арабский' },
        'hi': { en: 'Hindi', 'zh-CN': '印地语', 'zh-TW': '印地語', ja: 'ヒンディー語', ko: '힌디어', de: 'Hindi', fr: 'Hindi', es: 'Hindi', pt: 'Hindi', it: 'Hindi', ar: 'الهندية', hi: 'हिन्दी', ru: 'Хинди' },
        'ru': { en: 'Russian', 'zh-CN': '俄语', 'zh-TW': '俄語', ja: 'ロシア語', ko: '러시아어', de: 'Russisch', fr: 'Russe', es: 'Ruso', pt: 'Russo', it: 'Russo', ar: 'الروسية', hi: 'रूसी', ru: 'Русский' },
    };

    // 提示文案（每种目标语言一套完整文案）
    const MESSAGES = {
        'en': {
            question: 'This page is in {pageLang}. Would you like to switch to {targetLang}?',
            switchBtn: 'Switch to {targetLang}',
            closeBtn: 'Dismiss',
            closeAriaLabel: 'Dismiss language suggestion'
        },
        'zh-CN': {
            question: '当前页面是{pageLang}。是否切换到{targetLang}？',
            switchBtn: '切换到{targetLang}',
            closeBtn: '关闭',
            closeAriaLabel: '关闭语言切换建议'
        },
        'zh-TW': {
            question: '目前頁面是{pageLang}。是否切換到{targetLang}？',
            switchBtn: '切換到{targetLang}',
            closeBtn: '關閉',
            closeAriaLabel: '關閉語言切換建議'
        },
        'ja': {
            question: 'このページは{pageLang}です。{targetLang}に切り替えますか？',
            switchBtn: '{targetLang}に切り替える',
            closeBtn: '閉じる',
            closeAriaLabel: '言語切り替えの提案を閉じる'
        },
        'ko': {
            question: '현재 페이지는 {pageLang}입니다. {targetLang}로 전환하시겠습니까?',
            switchBtn: '{targetLang}로 전환',
            closeBtn: '닫기',
            closeAriaLabel: '언어 전환 제안 닫기'
        },
        'de': {
            question: 'Diese Seite ist auf {pageLang}. Möchten Sie zu {targetLang} wechseln?',
            switchBtn: 'Zu {targetLang} wechseln',
            closeBtn: 'Schließen',
            closeAriaLabel: 'Sprachvorschlag schließen'
        },
        'fr': {
            question: 'Cette page est en {pageLang}. Voulez-vous passer au {targetLang}?',
            switchBtn: 'Passer au {targetLang}',
            closeBtn: 'Fermer',
            closeAriaLabel: 'Fermer la suggestion de langue'
        },
        'es': {
            question: 'Esta página está en {pageLang}. ¿Quieres cambiar a {targetLang}?',
            switchBtn: 'Cambiar a {targetLang}',
            closeBtn: 'Cerrar',
            closeAriaLabel: 'Cerrar sugerencia de idioma'
        },
        'pt': {
            question: 'Esta página está em {pageLang}. Deseja mudar para {targetLang}?',
            switchBtn: 'Mudar para {targetLang}',
            closeBtn: 'Fechar',
            closeAriaLabel: 'Fechar sugestão de idioma'
        },
        'it': {
            question: 'Questa pagina è in {pageLang}. Vuoi passare a {targetLang}?',
            switchBtn: 'Passa a {targetLang}',
            closeBtn: 'Chiudi',
            closeAriaLabel: 'Chiudi suggerimento lingua'
        },
        'ar': {
            question: 'هذه الصفحة بـ {pageLang}. هل تريد التبديل إلى {targetLang}؟',
            switchBtn: 'التبديل إلى {targetLang}',
            closeBtn: 'إغلاق',
            closeAriaLabel: 'إغلاق اقتراح اللغة'
        },
        'hi': {
            question: 'यह पृष्ठ {pageLang} में है। क्या आप {targetLang} पर स्विच करना चाहते हैं?',
            switchBtn: '{targetLang} पर स्विच करें',
            closeBtn: 'बंद करें',
            closeAriaLabel: 'भाषा सुझाव बंद करें'
        },
        'ru': {
            question: 'Эта страница на {pageLang}. Хотите переключиться на {targetLang}?',
            switchBtn: 'Переключиться на {targetLang}',
            closeBtn: 'Закрыть',
            closeAriaLabel: 'Закрыть предложение языка'
        },
    };

    // 语言代码到页面文件名的映射
    const LANG_TO_FILE = {
        'en': 'index.html',
        'zh-CN': 'index-zh.html',
        'zh-TW': 'index-zh-TW.html',
        'ja': 'index-ja.html',
        'ko': 'index-ko.html',
        'de': 'index-de.html',
        'fr': 'index-fr.html',
        'es': 'index-es.html',
        'pt': 'index-pt.html',
        'it': 'index-it.html',
        'ar': 'index-ar.html',
        'hi': 'index-hi.html',
        'ru': 'index-ru.html'
    };

    // 获取当前页面语言（从 html lang 属性或 URL 推断）
    function getCurrentPageLanguage() {
        const htmlLang = document.documentElement.lang;
        if (htmlLang && SUPPORTED_LANGUAGES.includes(htmlLang)) {
            return htmlLang;
        }
        // 从 URL 推断
        const path = window.location.pathname;
        if (path.includes('index-zh-TW')) return 'zh-TW';
        if (path.includes('index-zh')) return 'zh-CN';
        if (path.includes('index-ja')) return 'ja';
        if (path.includes('index-ko')) return 'ko';
        if (path.includes('index-de')) return 'de';
        if (path.includes('index-fr')) return 'fr';
        if (path.includes('index-es')) return 'es';
        if (path.includes('index-pt')) return 'pt';
        if (path.includes('index-it')) return 'it';
        if (path.includes('index-ar')) return 'ar';
        if (path.includes('index-hi')) return 'hi';
        if (path.includes('index-ru')) return 'ru';
        return 'en'; // 默认英语
    }

    // 规范化浏览器语言代码（处理地区变体）
    function normalizeLanguageCode(lang) {
        if (!lang) return null;
        const lower = lang.toLowerCase();
        
        // 精确匹配
        if (SUPPORTED_LANGUAGES.includes(lower)) return lower;
        
        // 处理地区变体
        if (lower.startsWith('zh-')) {
            if (lower.includes('tw') || lower.includes('hk') || lower.includes('mo')) return 'zh-TW';
            return 'zh-CN';
        }
        if (lower.startsWith('pt-')) return 'pt';
        if (lower.startsWith('es-')) return 'es';
        if (lower.startsWith('fr-')) return 'fr';
        if (lower.startsWith('de-')) return 'de';
        if (lower.startsWith('ja-')) return 'ja';
        if (lower.startsWith('ko-')) return 'ko';
        if (lower.startsWith('it-')) return 'it';
        if (lower.startsWith('ar-')) return 'ar';
        if (lower.startsWith('hi-')) return 'hi';
        if (lower.startsWith('ru-')) return 'ru';
        if (lower.startsWith('en-')) return 'en';
        
        return null;
    }

    // 获取浏览器首选的本站支持语言
    function getBrowserPreferredLanguage() {
        const languages = navigator.languages || [navigator.language || navigator.userLanguage];
        
        for (const lang of languages) {
            const normalized = normalizeLanguageCode(lang);
            if (normalized && SUPPORTED_LANGUAGES.includes(normalized)) {
                return normalized;
            }
        }
        return null; // 浏览器没有本站支持的语言
    }

    // 获取目标语言的显示名称（用目标语言自己的写法）
    function getTargetLanguageName(targetLang, pageLang) {
        const names = LANGUAGE_DISPLAY_NAMES[targetLang];
        if (names && names[targetLang]) {
            return names[targetLang]; // 目标语言的本地写法
        }
        if (names && names[pageLang]) {
            return names[pageLang]; // 回退到页面语言的写法
        }
        return targetLang;
    }

    // 获取页面语言的显示名称（用目标语言的写法）
    function getPageLanguageName(pageLang, targetLang) {
        const names = LANGUAGE_DISPLAY_NAMES[pageLang];
        if (names && names[targetLang]) {
            return names[targetLang]; // 用目标语言的写法表示页面语言
        }
        if (names && names[pageLang]) {
            return names[pageLang]; // 回退到页面语言自己的写法
        }
        return pageLang;
    }

    // 检查是否应该显示提示
    function shouldShowPrompt(pageLang, targetLang) {
        if (!targetLang) return false; // 浏览器无支持语言
        if (pageLang === targetLang) return false; // 语言相同
        
        // 检查是否已关闭过（sessionStorage: 临时关闭，localStorage: 永久不再提示）
        const storageKey = `lang-prompt-${pageLang}-${targetLang}`;
        try {
            if (sessionStorage.getItem(storageKey) === 'closed') return false;
            if (localStorage.getItem(storageKey) === 'dismissed') return false;
        } catch (e) {
            // 隐私模式下存储可能失败，忽略
        }
        return true;
    }

    // 创建提示卡片
    function createPromptCard(pageLang, targetLang) {
        const messages = MESSAGES[targetLang] || MESSAGES['en'];
        const pageLangName = getPageLanguageName(pageLang, targetLang);
        const targetLangName = getTargetLanguageName(targetLang, pageLang);
        
        const question = messages.question
            .replace('{pageLang}', pageLangName)
            .replace('{targetLang}', targetLangName);
        const switchBtnText = messages.switchBtn.replace('{targetLang}', targetLangName);
        const closeBtnText = messages.closeBtn;
        const closeAriaLabel = messages.closeAriaLabel;

        const card = document.createElement('div');
        card.className = 'lang-prompt-card';
        card.setAttribute('role', 'status');
        card.setAttribute('aria-live', 'polite');
        card.setAttribute('lang', targetLang);
        if (targetLang === 'ar') card.setAttribute('dir', 'rtl');
        
        // 样式内联（避免依赖外部 CSS，确保立即生效）
        card.style.cssText = `
            position: fixed;
            right: 16px;
            bottom: 16px;
            max-width: 390px;
            width: calc(100vw - 32px);
            background: var(--card-bg, #ffffff);
            border: 1px solid var(--border-color, #e0e0e0);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            padding: 16px 20px;
            font-family: var(--font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
            font-size: 14px;
            line-height: 1.5;
            color: var(--text-primary, #1a1a1a);
            z-index: 10000;
            animation: langPromptSlideIn 0.3s ease-out;
            display: flex;
            flex-direction: column;
            gap: 12px;
        `;

        // 添加动画样式（只添加一次）
        if (!document.getElementById('lang-prompt-styles')) {
            const style = document.createElement('style');
            style.id = 'lang-prompt-styles';
            style.textContent = `
                @keyframes langPromptSlideIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes langPromptSlideOut {
                    from { opacity: 1; transform: translateY(0) scale(1); }
                    to { opacity: 0; transform: translateY(20px) scale(0.95); }
                }
                .lang-prompt-card.closing {
                    animation: langPromptSlideOut 0.2s ease-in forwards;
                }
                .lang-prompt-content {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                }
                .lang-prompt-icon {
                    flex-shrink: 0;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    background: var(--primary-color, #667eea);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 14px;
                }
                .lang-prompt-text {
                    flex: 1;
                    min-width: 0;
                }
                .lang-prompt-actions {
                    display: flex;
                    gap: 8px;
                    margin-top: 4px;
                }
                .lang-prompt-btn {
                    padding: 10px 16px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s ease;
                    min-height: 42px;
                    touch-action: manipulation;
                }
                .lang-prompt-btn-primary {
                    background: var(--primary-color, #667eea);
                    color: white;
                }
                .lang-prompt-btn-primary:hover,
                .lang-prompt-btn-primary:active {
                    background: var(--primary-hover, #5568d3);
                    transform: translateY(-1px);
                }
                .lang-prompt-btn-secondary {
                    background: transparent;
                    color: var(--text-secondary, #666);
                    border: 1px solid var(--border-color, #ddd);
                }
                .lang-prompt-btn-secondary:hover,
                .lang-prompt-btn-secondary:active {
                    background: var(--hover-bg, #f5f5f5);
                }
                /* 深色模式适配 */
                @media (prefers-color-scheme: dark) {
                    .lang-prompt-card {
                        background: var(--card-bg-dark, #1e1e1e);
                        border-color: var(--border-color-dark, #333);
                        color: var(--text-primary-dark, #fff);
                    }
                    .lang-prompt-btn-secondary {
                        color: var(--text-secondary-dark, #aaa);
                        border-color: var(--border-color-dark, #444);
                    }
                    .lang-prompt-btn-secondary:hover,
                    .lang-prompt-btn-secondary:active {
                        background: var(--hover-bg-dark, #2a2a2a);
                    }
                }
            `;
            document.head.appendChild(style);
        }

        card.innerHTML = `
            <div class="lang-prompt-content">
                <div class="lang-prompt-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        <path d="M15 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                    </svg>
                </div>
                <div class="lang-prompt-text">
                    <p style="margin: 0;">${question}</p>
                </div>
            </div>
            <div class="lang-prompt-actions">
                <button type="button" class="lang-prompt-btn lang-prompt-btn-primary" id="lang-prompt-switch">
                    ${switchBtnText}
                </button>
                <button type="button" class="lang-prompt-btn lang-prompt-btn-secondary" id="lang-prompt-close" aria-label="${closeAriaLabel}">
                    ${closeBtnText}
                </button>
            </div>
        `;

        // 绑定事件
        const switchBtn = card.querySelector('#lang-prompt-switch');
        const closeBtn = card.querySelector('#lang-prompt-close');

        switchBtn.addEventListener('click', () => {
            // 导航到目标语言页面
            const targetFile = LANG_TO_FILE[targetLang];
            if (targetFile) {
                // 记录用户选择，避免在目标页面再次提示
                try {
                    sessionStorage.setItem(`lang-prompt-${targetLang}-${pageLang}`, 'closed');
                } catch (e) {}
                window.location.href = targetFile;
            }
        });

        closeBtn.addEventListener('click', () => {
            // 临时关闭（本次会话）
            const storageKey = `lang-prompt-${pageLang}-${targetLang}`;
            try {
                sessionStorage.setItem(storageKey, 'closed');
            } catch (e) {}
            dismissCard(card);
        });

        return card;
    }

    // 关闭卡片动画
    function dismissCard(card) {
        card.classList.add('closing');
        setTimeout(() => {
            if (card.parentNode) {
                card.parentNode.removeChild(card);
            }
        }, 200);
    }

    // 主初始化函数
    function initLanguagePrompt() {
        // 延迟执行，确保 DOM 就绪，且不阻塞页面渲染
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initLanguagePrompt);
            return;
        }

        // 避免重复初始化
        if (window.__langPromptInitialized) return;
        window.__langPromptInitialized = true;

        const pageLang = getCurrentPageLanguage();
        const targetLang = getBrowserPreferredLanguage();

        if (!shouldShowPrompt(pageLang, targetLang)) {
            return;
        }

        // 创建并显示卡片
        const card = createPromptCard(pageLang, targetLang);
        document.body.appendChild(card);
    }

    // 启动
    initLanguagePrompt();

    // 导出供调试使用
    window.LanguagePrompt = {
        init: initLanguagePrompt,
        getCurrentPageLanguage,
        getBrowserPreferredLanguage,
        SUPPORTED_LANGUAGES
    };
})();