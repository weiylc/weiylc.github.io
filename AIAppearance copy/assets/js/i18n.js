const translations = {
    en: {
        // Meta and Title
        'page_title': 'AI Appearance - Beauty Scan | Intelligent Facial Analysis App',
        'page_description': 'AI Appearance is an AI-powered facial analysis entertainment app that provides beauty scoring and facial feature analysis. Supports 13 languages with freemium model.',
        'page_keywords': 'AI Appearance,Beauty Scan,facial analysis,beauty scoring,artificial intelligence,iOS app',
        
        // Navigation
        'nav_home': 'Home',
        'nav_features': 'Features',
        'nav_screenshots': 'Screenshots',
        'nav_download': 'Download',
        
        // Hero Section
        'hero_title': 'AI Appearance',
        'hero_subtitle': 'Intelligent Facial Analysis Entertainment App',
        'hero_description': 'Discover your beauty score with AI-powered facial analysis. Fun, entertaining, and supports 13 languages.',
        'hero_download': 'Download Now',
        'hero_free': 'Free Download',
        
        // Features Section
        'features_title': 'Core Features',
        'feature_ai_title': 'AI Analysis',
        'feature_ai_desc': 'Advanced AI algorithms for accurate facial feature analysis',
        'feature_score_title': 'Beauty Scoring',
        'feature_score_desc': 'Get your beauty score based on facial symmetry and features',
        'feature_multilang_title': '13 Languages',
        'feature_multilang_desc': 'Support for 13 languages including Chinese, English, Japanese, etc.',
        'feature_privacy_title': 'Privacy Protection',
        'feature_privacy_desc': 'All analysis is done locally, your photos never leave your device',
        'feature_fun_title': 'Entertainment Focus',
        'feature_fun_desc': 'Designed for fun and entertainment, not professional assessment',
        'feature_free_title': 'Freemium Model',
        'feature_free_desc': 'Basic features are free, premium features available via in-app purchase',
        
        // Screenshots Section
        'screenshots_title': 'App Screenshots',
        
        // Download Section
        'download_title': 'Download AI Appearance',
        'download_subtitle': 'Available on iOS App Store',
        'download_description': 'Experience the fun of AI-powered beauty analysis. Download now and discover your beauty score!',
        'download_button': 'Download from App Store',
        'download_coming_soon': 'Coming Soon',
        
        // Footer
        'footer_links': 'Quick Links',
        'footer_home': 'Home',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms of Service',
        'footer_contact': 'Contact Us',
        'footer_copyright': '© 2024 Monkey APP Studio. All rights reserved.',
        'footer_disclaimer': 'This app is for entertainment purposes only and should not be used for professional assessment.'
    },
    
    'zh-CN': {
        // Meta and Title
        'page_title': 'AI测颜值 - Beauty Scan | 智能面部分析应用',
        'page_description': 'AI测颜值是一款基于人工智能的面部分析娱乐应用，提供颜值评分、面部特征分析等功能。支持13种语言，免费增值模式。',
        'page_keywords': 'AI测颜值,Beauty Scan,面部分析,颜值评分,人工智能,iOS应用',
        
        // Navigation
        'nav_home': '首页',
        'nav_features': '功能特色',
        'nav_screenshots': '应用截图',
        'nav_download': '立即下载',
        
        // Hero Section
        'hero_title': 'AI测颜值',
        'hero_subtitle': '智能面部分析娱乐应用',
        'hero_description': '通过AI驱动的面部分析发现你的颜值评分。有趣、娱乐，支持13种语言。',
        'hero_download': '立即下载',
        'hero_free': '免费下载',
        
        // Features Section
        'features_title': '核心功能',
        'feature_ai_title': 'AI分析',
        'feature_ai_desc': '先进的AI算法，准确分析面部特征',
        'feature_score_title': '颜值评分',
        'feature_score_desc': '基于面部对称性和特征获得颜值评分',
        'feature_multilang_title': '13种语言',
        'feature_multilang_desc': '支持中文、英文、日文等13种语言',
        'feature_privacy_title': '隐私保护',
        'feature_privacy_desc': '所有分析在本地完成，照片不会离开您的设备',
        'feature_fun_title': '娱乐导向',
        'feature_fun_desc': '专为娱乐和趣味设计，非专业评估工具',
        'feature_free_title': '免费增值',
        'feature_free_desc': '基础功能免费，高级功能通过应用内购买获得',
        
        // Screenshots Section
        'screenshots_title': '应用截图',
        
        // Download Section
        'download_title': '下载AI测颜值',
        'download_subtitle': 'iOS App Store现已上线',
        'download_description': '体验AI驱动的颜值分析乐趣。立即下载，发现你的颜值评分！',
        'download_button': '从App Store下载',
        'download_coming_soon': '即将上线',
        
        // Footer
        'footer_links': '快速链接',
        'footer_home': '首页',
        'footer_privacy': '隐私政策',
        'footer_terms': '服务条款',
        'footer_contact': '联系我们',
        'footer_copyright': '© 2024 Monkey APP Studio. 保留所有权利。',
        'footer_disclaimer': '本应用仅供娱乐使用，不应用于专业评估。'
    }
};

class LanguageManager {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && translations[langParam]) {
            return langParam;
        }

        // Check localStorage
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) {
            return 'zh-CN';
        }

        return 'en'; // Default to English
    }

    init() {
        this.createLanguageSelector();
        this.applyTranslations();
        this.updateDocumentLanguage();
        this.bindEvents();
    }

    createLanguageSelector() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.innerHTML = `
                <select id="language-select">
                    <option value="zh-CN" ${this.currentLanguage === 'zh-CN' ? 'selected' : ''}>中文</option>
                    <option value="en" ${this.currentLanguage === 'en' ? 'selected' : ''}>English</option>
                </select>
            `;
        }
    }

    changeLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('preferred-language', lang);
            this.applyTranslations();
            this.updateDocumentLanguage();
            this.updateURL();
        }
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update meta tags
        this.updateMetaTags();
        
        // Update dynamic links
        this.updateDynamicLinks();
    }

    updateMetaTags() {
        const lang = translations[this.currentLanguage];
        
        // Update title
        document.title = lang['page_title'];
        
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', lang['page_description']);
        }
        
        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', lang['page_keywords']);
        }
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', lang['page_title']);
        }
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', lang['page_description']);
        }
    }

    updateDynamicLinks() {
        // Update privacy policy link
        const privacyLink = document.getElementById('privacy-link');
        if (privacyLink) {
            const privacyFile = this.currentLanguage === 'zh-CN' ? 'privacy_policy_zh.html' : 'privacy_policy_en.html';
            const privacyUrl = `https://monkeyapp.stream/AIAppearance/${privacyFile}`;
            privacyLink.href = privacyUrl;
            privacyLink.target = '_blank'; // Open in new tab
            console.log('Privacy link updated:', privacyUrl);
        }
        
        // Update terms of service link
        const termsLink = document.getElementById('terms-link');
        if (termsLink) {
            const termsFile = this.currentLanguage === 'zh-CN' ? 'terms_of_service_zh.html' : 'terms_of_service_en.html';
            const termsUrl = `https://monkeyapp.stream/AIAppearance/${termsFile}`;
            termsLink.href = termsUrl;
            termsLink.target = '_blank'; // Open in new tab
            console.log('Terms link updated:', termsUrl);
        }
    }

    updateDocumentLanguage() {
        document.documentElement.lang = this.currentLanguage;
    }

    updateURL() {
        const url = new URL(window.location);
        url.searchParams.set('lang', this.currentLanguage);
        window.history.replaceState({}, '', url);
    }

    bindEvents() {
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const languageManager = new LanguageManager();
    
    // Ensure links are updated after a short delay to handle any timing issues
    setTimeout(() => {
        languageManager.updateDynamicLinks();
    }, 100);
});