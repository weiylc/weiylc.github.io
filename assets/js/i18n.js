// Internationalization (i18n) Configuration
const translations = {
    'en': {
        // Navigation
        'brand_name': 'TianDev Studio',
        'nav_home': 'Home',
        'nav_apps': 'Apps',
        'nav_about': 'About',
        'nav_contact': 'Contact',
        
        // Hero Section
        'hero_title': 'Professional iOS App Development',
        'hero_subtitle': 'Creating innovative mobile solutions that enhance your digital life',
        'hero_explore_apps': 'Explore Our Apps',
        'hero_contact': 'Get in Touch',
        
        // Apps Section
        'apps_title': 'Our Apps',
        'apps_subtitle': 'Discover our collection of professional iOS applications',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'AI Translator',
        'app_ai_translator_desc': 'Intelligent multi-language translation powered by Google ML Kit',
        'app_clean_master_name': 'Clean Master',
        'app_clean_master_desc': 'Powerful iPhone storage cleaner to free up space efficiently',
        'app_compass_pro_name': 'Compass Pro',
        'app_compass_pro_desc': 'Professional compass, GPS speedometer, and spirit level tools',
        'app_petal_browser_name': 'Petal Browser',
        'app_petal_browser_desc': 'Privacy-focused browser with ad blocking and secure browsing',
        'app_voice_recorder_name': 'Voice Recorder',
        'app_voice_recorder_desc': 'AI-powered voice to text transcription with high accuracy',
        'app_audio_editor_name': 'Audio Editor',
        'app_audio_editor_desc': 'Professional audio editing with AI-powered effects and batch processing',
        'app_watermark_camera_name': 'WaterMark Camera',
        'app_watermark_camera_desc': 'Professional watermark camera for work check-in and attendance',
        'app_bazi_master_name': 'Bazi Master',
        'app_bazi_master_desc': 'Professional Chinese astrology and fortune telling app with Bazi analysis',
        'app_ai_appearance_name': 'AI Appearance',
        'app_ai_appearance_desc': 'AI-powered facial analysis and beauty scoring app for entertainment',
        
        // Features
        'feature_offline': 'Offline Translation',
        'feature_20_languages': '20+ Languages',
        'feature_real_time': 'Real-time',
        'feature_photo_cleanup': 'Photo Cleanup',
        'feature_cache_cleaner': 'Cache Cleaner',
        'feature_storage_analysis': 'Storage Analysis',
        'feature_compass': 'Compass',
        'feature_gps_speed': 'GPS Speed',
        'feature_spirit_level': 'Spirit Level',
        'feature_ad_block': 'Ad Blocker',
        'feature_privacy': 'Privacy Protection',
        'feature_fast_browsing': 'Fast Browsing',
        'feature_ai_transcription': 'AI Transcription',
        'feature_high_quality': 'High Quality',
        'feature_text_editing': 'Text Editing',
        'feature_ai_effects': 'AI Effects',
        'feature_batch_processing': 'Batch Processing',
        'feature_format_conversion': 'Format Conversion',
        'feature_work_checkin': 'Work Check-in',
        'feature_timestamp': 'Timestamp',
        'feature_location': 'Location',
        'feature_bazi_chart': 'Bazi Chart',
        'feature_lunar_calendar': 'Lunar Calendar',
        'feature_divination': 'Divination',
        'feature_ai_analysis': 'AI Analysis',
        'feature_beauty_score': 'Beauty Score',
        'feature_13_languages': '13 Languages',
        
        // About Section
        'about_title': 'About TianDev Studio',
        'about_description': 'We are a passionate iOS development studio dedicated to creating high-quality mobile applications that solve real-world problems. Our apps are designed with user experience in mind, featuring modern interfaces and powerful functionality.',
        'stat_apps': 'Apps Published',
        'stat_languages': 'Languages Supported',
        'stat_downloads': 'Downloads',
        
        // About Features
        'feature_multilingual_title': 'Multi-language Support',
        'feature_multilingual_desc': 'Support for 12+ languages including English, Chinese, Japanese, Arabic, and more',
        'feature_responsive_title': 'Responsive Design',
        'feature_responsive_desc': 'Optimized for all devices - desktop, tablet, and mobile',
        'feature_performance_title': 'High Performance',
        'feature_performance_desc': 'Fast loading times and smooth user experience',
        'feature_security_title': 'Security First',
        'feature_security_desc': 'Built with security and privacy as top priorities',
        
        // Contact Section
        'contact_title': 'Get in Touch',
        'contact_subtitle': 'Have questions or want to collaborate? We\'d love to hear from you.',
        'contact_email_title': 'Email',
        'contact_business_title': 'Business Inquiries',
        'contact_support_title': 'Support',
        
        // Footer
        'footer_description': 'Creating innovative iOS applications for a better digital experience.',
        'footer_apps_title': 'Apps',
        'footer_company_title': 'Company',
        'footer_support_title': 'Support',
        'footer_privacy': 'Privacy Policy',
        'footer_help': 'Help Center',
        'footer_feedback': 'Feedback',
        'footer_rights': 'All rights reserved.'
    },
    
    'zh-CN': {
        // Navigation
        'brand_name': 'TianDev 工作室',
        'nav_home': '首页',
        'nav_apps': '应用',
        'nav_about': '关于',
        'nav_contact': '联系',
        
        // Hero Section
        'hero_title': '专业的iOS应用开发',
        'hero_subtitle': '创造创新的移动解决方案，提升您的数字生活',
        'hero_explore_apps': '探索我们的应用',
        'hero_contact': '联系我们',
        
        // Apps Section
        'apps_title': '我们的应用',
        'apps_subtitle': '发现我们的专业iOS应用程序集合',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'AI翻译官',
        'app_ai_translator_desc': '基于Google ML Kit的智能多语言翻译应用',
        'app_clean_master_name': '清洁大师',
        'app_clean_master_desc': '强大的iPhone存储清理工具，高效释放空间',
        'app_compass_pro_name': '指南针专业版',
        'app_compass_pro_desc': '专业指南针、GPS测速仪和水平仪工具',
        'app_petal_browser_name': '花瓣浏览器',
        'app_petal_browser_desc': '注重隐私的浏览器，具有广告拦截和安全浏览功能',
        'app_voice_recorder_name': '语音转文字',
        'app_voice_recorder_desc': 'AI驱动的高精度语音转文字转录应用',
        'app_audio_editor_name': '音频剪辑专家',
        'app_audio_editor_desc': '专业音频编辑工具，具备AI特效和批量处理功能',
        'app_watermark_camera_name': '水印相机',
        'app_watermark_camera_desc': '专业水印相机，用于工作打卡和考勤',
        'app_bazi_master_name': '五行八字大师',
        'app_bazi_master_desc': '专业的中国传统命理分析应用，提供八字排盘和运势预测',
        'app_ai_appearance_name': 'AI测颜值',
        'app_ai_appearance_desc': 'AI驱动的面部分析和颜值评分娱乐应用',
        
        // Features
        'feature_offline': '离线翻译',
        'feature_20_languages': '20+种语言',
        'feature_real_time': '实时翻译',
        'feature_photo_cleanup': '照片清理',
        'feature_cache_cleaner': '缓存清理',
        'feature_storage_analysis': '存储分析',
        'feature_compass': '指南针',
        'feature_gps_speed': 'GPS测速',
        'feature_spirit_level': '水平仪',
        'feature_ad_block': '广告拦截',
        'feature_privacy': '隐私保护',
        'feature_fast_browsing': '快速浏览',
        'feature_ai_transcription': 'AI转录',
        'feature_high_quality': '高质量',
        'feature_text_editing': '文本编辑',
        'feature_ai_effects': 'AI特效',
        'feature_batch_processing': '批量处理',
        'feature_format_conversion': '格式转换',
        'feature_work_checkin': '工作打卡',
        'feature_timestamp': '时间戳',
        'feature_location': '位置信息',
        'feature_bazi_chart': '八字排盘',
        'feature_lunar_calendar': '农历转换',
        'feature_divination': '周易占卜',
        'feature_ai_analysis': 'AI分析',
        'feature_beauty_score': '颜值评分',
        'feature_13_languages': '13种语言',
        
        // About Section
        'about_title': '关于TianDev工作室',
        'about_description': '我们是一个充满激情的iOS开发工作室，致力于创造解决现实问题的高质量移动应用程序。我们的应用以用户体验为核心，具有现代化界面和强大功能。',
        'stat_apps': '已发布应用',
        'stat_languages': '支持语言',
        'stat_downloads': '下载量',
        
        // About Features
        'feature_multilingual_title': '多语言支持',
        'feature_multilingual_desc': '支持12+种语言，包括英语、中文、日语、阿拉伯语等',
        'feature_responsive_title': '响应式设计',
        'feature_responsive_desc': '针对所有设备优化 - 桌面、平板和手机',
        'feature_performance_title': '高性能',
        'feature_performance_desc': '快速加载时间和流畅的用户体验',
        'feature_security_title': '安全第一',
        'feature_security_desc': '以安全和隐私为首要优先级构建',
        
        // Contact Section
        'contact_title': '联系我们',
        'contact_subtitle': '有问题或想要合作？我们很乐意听到您的声音。',
        'contact_email_title': '邮箱',
        'contact_business_title': '商务咨询',
        'contact_support_title': '技术支持',
        
        // Footer
        'footer_description': '创造创新的iOS应用程序，提供更好的数字体验。',
        'footer_apps_title': '应用',
        'footer_company_title': '公司',
        'footer_support_title': '支持',
        'footer_privacy': '隐私政策',
        'footer_help': '帮助中心',
        'footer_feedback': '意见反馈',
        'footer_rights': '版权所有。'
    },
    
    'ja': {
        // Navigation
        'brand_name': 'TianDev スタジオ',
        'nav_home': 'ホーム',
        'nav_apps': 'アプリ',
        'nav_about': '会社概要',
        'nav_contact': 'お問い合わせ',
        
        // Hero Section
        'hero_title': 'プロフェッショナルなiOSアプリ開発',
        'hero_subtitle': 'デジタルライフを向上させる革新的なモバイルソリューションを創造',
        'hero_explore_apps': 'アプリを探索',
        'hero_contact': 'お問い合わせ',
        
        // Apps Section
        'apps_title': '私たちのアプリ',
        'apps_subtitle': 'プロフェッショナルなiOSアプリケーションのコレクションをご覧ください',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'AI翻訳',
        'app_ai_translator_desc': 'Google ML Kitを活用したインテリジェントな多言語翻訳アプリ',
        'app_clean_master_name': 'クリーンマスター',
        'app_clean_master_desc': 'iPhoneのストレージを効率的に解放する強力なクリーナー',
        'app_compass_pro_name': 'コンパスプロ',
        'app_compass_pro_desc': 'プロフェッショナルなコンパス、GPS速度計、水準器ツール',
        'app_petal_browser_name': 'ペタルブラウザ',
        'app_petal_browser_desc': '広告ブロックと安全なブラウジング機能を備えたプライバシー重視のブラウザ',
        'app_voice_recorder_name': 'ボイスレコーダー',
        'app_voice_recorder_desc': 'AI搭載の高精度音声テキスト変換アプリ',
        'app_audio_editor_name': 'オーディオエディター',
        'app_audio_editor_desc': 'AI搭載エフェクトとバッチ処理機能を備えたプロフェッショナルなオーディオ編集ツール',
        'app_watermark_camera_name': 'ウォーターマークカメラ',
        'app_watermark_camera_desc': '勤怠管理と出勤確認のためのプロフェッショナルなウォーターマークカメラ',
        'app_bazi_master_name': '五行八字マスター',
        'app_bazi_master_desc': '八字分析による本格的な中国占星術と運勢占いアプリ',
        
        // Features
        'feature_offline': 'オフライン翻訳',
        'feature_20_languages': '20以上の言語',
        'feature_real_time': 'リアルタイム',
        'feature_photo_cleanup': '写真クリーンアップ',
        'feature_cache_cleaner': 'キャッシュクリーナー',
        'feature_storage_analysis': 'ストレージ分析',
        'feature_compass': 'コンパス',
        'feature_gps_speed': 'GPS速度',
        'feature_spirit_level': '水準器',
        'feature_ad_block': '広告ブロッカー',
        'feature_privacy': 'プライバシー保護',
        'feature_fast_browsing': '高速ブラウジング',
        'feature_ai_transcription': 'AI転写',
        'feature_high_quality': '高品質',
        'feature_text_editing': 'テキスト編集',
        'feature_ai_effects': 'AIエフェクト',
        'feature_batch_processing': 'バッチ処理',
        'feature_format_conversion': 'フォーマット変換',
        'feature_work_checkin': '勤怠チェックイン',
        'feature_timestamp': 'タイムスタンプ',
        'feature_location': '位置情報',
        'feature_bazi_chart': '八字排盤',
        'feature_lunar_calendar': '旧暦変換',
        'feature_divination': '易占い',
        
        // About Section
        'about_title': 'TianDevスタジオについて',
        'about_description': '私たちは現実の問題を解決する高品質なモバイルアプリケーションの作成に専念する情熱的なiOS開発スタジオです。私たちのアプリはユーザーエクスペリエンスを重視し、モダンなインターフェースと強力な機能を特徴としています。',
        'stat_apps': '公開アプリ数',
        'stat_languages': 'サポート言語',
        'stat_downloads': 'ダウンロード数',
        
        // About Features
        'feature_multilingual_title': '多言語サポート',
        'feature_multilingual_desc': '英語、中国語、日本語、アラビア語など12以上の言語をサポート',
        'feature_responsive_title': 'レスポンシブデザイン',
        'feature_responsive_desc': 'デスクトップ、タブレット、モバイルなど全てのデバイスに最適化',
        'feature_performance_title': '高性能',
        'feature_performance_desc': '高速読み込み時間とスムーズなユーザーエクスペリエンス',
        'feature_security_title': 'セキュリティ第一',
        'feature_security_desc': 'セキュリティとプライバシーを最優先に構築',
        
        // Contact Section
        'contact_title': 'お問い合わせ',
        'contact_subtitle': 'ご質問やコラボレーションをお考えですか？ぜひお聞かせください。',
        'contact_email_title': 'メール',
        'contact_business_title': 'ビジネスお問い合わせ',
        'contact_support_title': 'サポート',
        
        // Footer
        'footer_description': 'より良いデジタル体験のための革新的なiOSアプリケーションを創造。',
        'footer_apps_title': 'アプリ',
        'footer_company_title': '会社',
        'footer_support_title': 'サポート',
        'footer_privacy': 'プライバシーポリシー',
        'footer_help': 'ヘルプセンター',
        'footer_feedback': 'フィードバック',
        'footer_rights': '全著作権所有。'
    },
    
    'de': {
        // Navigation
        'brand_name': 'TianDev Studio',
        'nav_home': 'Startseite',
        'nav_apps': 'Apps',
        'nav_about': 'Über uns',
        'nav_contact': 'Kontakt',
        
        // Hero Section
        'hero_title': 'Professionelle iOS App-Entwicklung',
        'hero_subtitle': 'Innovative mobile Lösungen schaffen, die Ihr digitales Leben verbessern',
        'hero_explore_apps': 'Unsere Apps entdecken',
        'hero_contact': 'Kontakt aufnehmen',
        
        // Apps Section
        'apps_title': 'Unsere Apps',
        'apps_subtitle': 'Entdecken Sie unsere Sammlung professioneller iOS-Anwendungen',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'KI-Übersetzer',
        'app_ai_translator_desc': 'Intelligente mehrsprachige Übersetzung mit Google ML Kit',
        'app_clean_master_name': 'Clean Master',
        'app_clean_master_desc': 'Leistungsstarker iPhone-Speicher-Reiniger für effiziente Speicherfreigabe',
        'app_compass_pro_name': 'Kompass Pro',
        'app_compass_pro_desc': 'Professioneller Kompass, GPS-Tachometer und Wasserwaage',
        'app_petal_browser_name': 'Petal Browser',
        'app_petal_browser_desc': 'Datenschutzorientierter Browser mit Werbeblocker und sicherem Surfen',
        'app_voice_recorder_name': 'Sprachrekorder',
        'app_voice_recorder_desc': 'KI-gestützte Sprache-zu-Text-Transkription mit hoher Genauigkeit',
        'app_audio_editor_name': 'Audio Editor',
        'app_audio_editor_desc': 'Professionelle Audiobearbeitung mit KI-gestützten Effekten und Stapelverarbeitung',
        'app_watermark_camera_name': 'Wasserzeichen-Kamera',
        'app_watermark_camera_desc': 'Professionelle Wasserzeichen-Kamera für Arbeitszeit-Erfassung',
        'app_bazi_master_name': 'Bazi Meister',
        'app_bazi_master_desc': 'Professionelle chinesische Astrologie und Wahrsage-App mit Bazi-Analyse',
        
        // Features
        'feature_offline': 'Offline-Übersetzung',
        'feature_20_languages': '20+ Sprachen',
        'feature_real_time': 'Echtzeit',
        'feature_photo_cleanup': 'Foto-Bereinigung',
        'feature_cache_cleaner': 'Cache-Reiniger',
        'feature_storage_analysis': 'Speicher-Analyse',
        'feature_compass': 'Kompass',
        'feature_gps_speed': 'GPS-Geschwindigkeit',
        'feature_spirit_level': 'Wasserwaage',
        'feature_ad_block': 'Werbeblocker',
        'feature_privacy': 'Datenschutz',
        'feature_fast_browsing': 'Schnelles Surfen',
        'feature_ai_transcription': 'KI-Transkription',
        'feature_high_quality': 'Hohe Qualität',
        'feature_text_editing': 'Textbearbeitung',
        'feature_ai_effects': 'KI-Effekte',
        'feature_batch_processing': 'Stapelverarbeitung',
        'feature_format_conversion': 'Formatkonvertierung',
        'feature_work_checkin': 'Arbeitszeit-Erfassung',
        'feature_timestamp': 'Zeitstempel',
        'feature_location': 'Standort',
        'feature_bazi_chart': 'Bazi-Diagramm',
        'feature_lunar_calendar': 'Mondkalender',
        'feature_divination': 'Wahrsagung',
        
        // About Section
        'about_title': 'Über TianDev Studio',
        'about_description': 'Wir sind ein leidenschaftliches iOS-Entwicklungsstudio, das sich der Erstellung hochwertiger mobiler Anwendungen widmet, die reale Probleme lösen. Unsere Apps sind mit Fokus auf Benutzererfahrung gestaltet und bieten moderne Oberflächen und leistungsstarke Funktionalität.',
        'stat_apps': 'Veröffentlichte Apps',
        'stat_languages': 'Unterstützte Sprachen',
        'stat_downloads': 'Downloads',
        
        // About Features
        'feature_multilingual_title': 'Mehrsprachige Unterstützung',
        'feature_multilingual_desc': 'Unterstützung für 12+ Sprachen einschließlich Englisch, Chinesisch, Japanisch, Arabisch und mehr',
        'feature_responsive_title': 'Responsives Design',
        'feature_responsive_desc': 'Optimiert für alle Geräte - Desktop, Tablet und Mobilgerät',
        'feature_performance_title': 'Hohe Leistung',
        'feature_performance_desc': 'Schnelle Ladezeiten und reibungslose Benutzererfahrung',
        'feature_security_title': 'Sicherheit zuerst',
        'feature_security_desc': 'Mit Sicherheit und Datenschutz als oberste Prioritäten entwickelt',
        
        // Contact Section
        'contact_title': 'Kontakt aufnehmen',
        'contact_subtitle': 'Haben Sie Fragen oder möchten zusammenarbeiten? Wir freuen uns auf Ihre Nachricht.',
        'contact_email_title': 'E-Mail',
        'contact_business_title': 'Geschäftsanfragen',
        'contact_support_title': 'Support',
        
        // Footer
        'footer_description': 'Innovative iOS-Anwendungen für eine bessere digitale Erfahrung schaffen.',
        'footer_apps_title': 'Apps',
        'footer_company_title': 'Unternehmen',
        'footer_support_title': 'Support',
        'footer_privacy': 'Datenschutzrichtlinie',
        'footer_help': 'Hilfe-Center',
        'footer_feedback': 'Feedback',
        'footer_rights': 'Alle Rechte vorbehalten.'
    },
    
    'fr': {
        // Navigation
        'brand_name': 'TianDev Studio',
        'nav_home': 'Accueil',
        'nav_apps': 'Applications',
        'nav_about': 'À propos',
        'nav_contact': 'Contact',
        
        // Hero Section
        'hero_title': 'Développement d\'applications iOS professionnel',
        'hero_subtitle': 'Créer des solutions mobiles innovantes qui améliorent votre vie numérique',
        'hero_explore_apps': 'Explorer nos applications',
        'hero_contact': 'Nous contacter',
        
        // Apps Section
        'apps_title': 'Nos Applications',
        'apps_subtitle': 'Découvrez notre collection d\'applications iOS professionnelles',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'Traducteur IA',
        'app_ai_translator_desc': 'Traduction multilingue intelligente alimentée par Google ML Kit',
        'app_clean_master_name': 'Clean Master',
        'app_clean_master_desc': 'Nettoyeur de stockage iPhone puissant pour libérer efficacement l\'espace',
        'app_compass_pro_name': 'Boussole Pro',
        'app_compass_pro_desc': 'Boussole professionnelle, compteur de vitesse GPS et niveau à bulle',
        'app_petal_browser_name': 'Navigateur Petal',
        'app_petal_browser_desc': 'Navigateur axé sur la confidentialité avec blocage des publicités et navigation sécurisée',
        'app_voice_recorder_name': 'Enregistreur vocal',
        'app_voice_recorder_desc': 'Transcription vocale vers texte alimentée par l\'IA avec haute précision',
        'app_watermark_camera_name': 'Caméra filigrane',
        'app_watermark_camera_desc': 'Caméra filigrane professionnelle pour pointage et présence au travail',
        'app_bazi_master_name': 'Maître Bazi',
        'app_bazi_master_desc': 'Application professionnelle d\'astrologie chinoise et de divination avec analyse Bazi',
        
        // Features
        'feature_offline': 'Traduction hors ligne',
        'feature_20_languages': '20+ langues',
        'feature_real_time': 'Temps réel',
        'feature_photo_cleanup': 'Nettoyage photos',
        'feature_cache_cleaner': 'Nettoyeur cache',
        'feature_storage_analysis': 'Analyse stockage',
        'feature_compass': 'Boussole',
        'feature_gps_speed': 'Vitesse GPS',
        'feature_spirit_level': 'Niveau à bulle',
        'feature_ad_block': 'Bloqueur pub',
        'feature_privacy': 'Protection vie privée',
        'feature_fast_browsing': 'Navigation rapide',
        'feature_ai_transcription': 'Transcription IA',
        'feature_high_quality': 'Haute qualité',
        'feature_text_editing': 'Édition texte',
        'feature_work_checkin': 'Pointage travail',
        'feature_timestamp': 'Horodatage',
        'feature_location': 'Localisation',
        'feature_bazi_chart': 'Diagramme Bazi',
        'feature_lunar_calendar': 'Calendrier lunaire',
        'feature_divination': 'Divination',
        
        // About Section
        'about_title': 'À propos de TianDev Studio',
        'about_description': 'Nous sommes un studio de développement iOS passionné dédié à la création d\'applications mobiles de haute qualité qui résolvent des problèmes du monde réel. Nos applications sont conçues avec l\'expérience utilisateur à l\'esprit, avec des interfaces modernes et des fonctionnalités puissantes.',
        'stat_apps': 'Applications publiées',
        'stat_languages': 'Langues supportées',
        'stat_downloads': 'Téléchargements',
        
        // About Features
        'feature_multilingual_title': 'Support multilingue',
        'feature_multilingual_desc': 'Support pour 12+ langues incluant l\'anglais, le chinois, le japonais, l\'arabe et plus',
        'feature_responsive_title': 'Design réactif',
        'feature_responsive_desc': 'Optimisé pour tous les appareils - ordinateur, tablette et mobile',
        'feature_performance_title': 'Haute performance',
        'feature_performance_desc': 'Temps de chargement rapides et expérience utilisateur fluide',
        'feature_security_title': 'Sécurité d\'abord',
        'feature_security_desc': 'Construit avec la sécurité et la confidentialité comme priorités principales',
        
        // Contact Section
        'contact_title': 'Nous contacter',
        'contact_subtitle': 'Vous avez des questions ou souhaitez collaborer ? Nous aimerions avoir de vos nouvelles.',
        'contact_email_title': 'E-mail',
        'contact_business_title': 'Demandes commerciales',
        'contact_support_title': 'Support',
        
        // Footer
        'footer_description': 'Créer des applications iOS innovantes pour une meilleure expérience numérique.',
        'footer_apps_title': 'Applications',
        'footer_company_title': 'Entreprise',
        'footer_support_title': 'Support',
        'footer_privacy': 'Politique de confidentialité',
        'footer_help': 'Centre d\'aide',
        'footer_feedback': 'Commentaires',
        'footer_rights': 'Tous droits réservés.'
    },
    
    'ko': {
        // Navigation
        'brand_name': 'TianDev 스튜디오',
        'nav_home': '홈',
        'nav_apps': '앱',
        'nav_about': '소개',
        'nav_contact': '연락처',
        
        // Hero Section
        'hero_title': '전문 iOS 앱 개발',
        'hero_subtitle': '디지털 라이프를 향상시키는 혁신적인 모바일 솔루션 창조',
        'hero_explore_apps': '앱 둘러보기',
        'hero_contact': '연락하기',
        
        // Apps Section
        'apps_title': '우리의 앱',
        'apps_subtitle': '전문 iOS 애플리케이션 컬렉션을 발견하세요',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'AI 번역기',
        'app_ai_translator_desc': 'Google ML Kit으로 구동되는 지능형 다국어 번역 앱',
        'app_clean_master_name': '클린 마스터',
        'app_clean_master_desc': '효율적으로 공간을 확보하는 강력한 iPhone 저장소 클리너',
        'app_compass_pro_name': '나침반 프로',
        'app_compass_pro_desc': '전문 나침반, GPS 속도계 및 수평계 도구',
        'app_petal_browser_name': '페탈 브라우저',
        'app_petal_browser_desc': '광고 차단 및 보안 브라우징 기능을 갖춘 개인정보 보호 중심 브라우저',
        'app_voice_recorder_name': '음성 녹음기',
        'app_voice_recorder_desc': '높은 정확도의 AI 기반 음성-텍스트 변환 앱',
        'app_watermark_camera_name': '워터마크 카메라',
        'app_watermark_camera_desc': '업무 체크인 및 출근 확인을 위한 전문 워터마크 카메라',
        'app_bazi_master_name': '오행팔자 마스터',
        'app_bazi_master_desc': '팔자 분석을 통한 전문 중국 점성술 및 운세 앱',
        
        // Features
        'feature_offline': '오프라인 번역',
        'feature_20_languages': '20개 이상 언어',
        'feature_real_time': '실시간',
        'feature_photo_cleanup': '사진 정리',
        'feature_cache_cleaner': '캐시 클리너',
        'feature_storage_analysis': '저장소 분석',
        'feature_compass': '나침반',
        'feature_gps_speed': 'GPS 속도',
        'feature_spirit_level': '수평계',
        'feature_ad_block': '광고 차단',
        'feature_privacy': '개인정보 보호',
        'feature_fast_browsing': '빠른 브라우징',
        'feature_ai_transcription': 'AI 전사',
        'feature_high_quality': '고품질',
        'feature_text_editing': '텍스트 편집',
        'feature_work_checkin': '업무 체크인',
        'feature_timestamp': '타임스탬프',
        'feature_location': '위치',
        'feature_bazi_chart': '팔자 차트',
        'feature_lunar_calendar': '음력 달력',
        'feature_divination': '점술',
        
        // About Section
        'about_title': 'TianDev 스튜디오 소개',
        'about_description': '우리는 실제 문제를 해결하는 고품질 모바일 애플리케이션 제작에 전념하는 열정적인 iOS 개발 스튜디오입니다. 우리의 앱은 사용자 경험을 염두에 두고 설계되었으며, 현대적인 인터페이스와 강력한 기능을 특징으로 합니다.',
        'stat_apps': '출시된 앱',
        'stat_languages': '지원 언어',
        'stat_downloads': '다운로드',
        
        // Contact Section
        'contact_title': '연락하기',
        'contact_subtitle': '질문이 있거나 협업을 원하시나요? 연락 주시면 기쁘겠습니다.',
        'contact_email_title': '이메일',
        'contact_business_title': '비즈니스 문의',
        'contact_support_title': '지원',
        
        // Footer
        'footer_description': '더 나은 디지털 경험을 위한 혁신적인 iOS 애플리케이션 창조.',
        'footer_apps_title': '앱',
        'footer_company_title': '회사',
        'footer_support_title': '지원',
        'footer_privacy': '개인정보 처리방침',
        'footer_help': '도움말 센터',
        'footer_feedback': '피드백',
        'footer_rights': '모든 권리 보유.'
    },
    
    'zh-TW': {
        // Navigation
        'brand_name': 'TianDev 工作室',
        'nav_home': '首頁',
        'nav_apps': '應用程式',
        'nav_about': '關於',
        'nav_contact': '聯絡',
        
        // Hero Section
        'hero_title': '專業的iOS應用程式開發',
        'hero_subtitle': '創造創新的行動解決方案，提升您的數位生活',
        'hero_explore_apps': '探索我們的應用程式',
        'hero_contact': '聯絡我們',
        
        // Apps Section
        'apps_title': '我們的應用程式',
        'apps_subtitle': '發現我們的專業iOS應用程式集合',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'AI翻譯官',
        'app_ai_translator_desc': '基於Google ML Kit的智慧多語言翻譯應用程式',
        'app_clean_master_name': '清潔大師',
        'app_clean_master_desc': '強大的iPhone儲存清理工具，高效釋放空間',
        'app_compass_pro_name': '指南針專業版',
        'app_compass_pro_desc': '專業指南針、GPS測速儀和水平儀工具',
        'app_petal_browser_name': '花瓣瀏覽器',
        'app_petal_browser_desc': '注重隱私的瀏覽器，具有廣告攔截和安全瀏覽功能',
        'app_voice_recorder_name': '語音轉文字',
        'app_voice_recorder_desc': 'AI驅動的高精度語音轉文字轉錄應用程式',
        'app_watermark_camera_name': '浮水印相機',
        'app_watermark_camera_desc': '專業浮水印相機，用於工作打卡和考勤',
        'app_bazi_master_name': '五行八字大師',
        'app_bazi_master_desc': '專業的中國傳統命理分析應用程式，提供八字排盤和運勢預測',
        
        // Features
        'feature_offline': '離線翻譯',
        'feature_20_languages': '20+種語言',
        'feature_real_time': '即時翻譯',
        'feature_photo_cleanup': '照片清理',
        'feature_cache_cleaner': '快取清理',
        'feature_storage_analysis': '儲存分析',
        'feature_compass': '指南針',
        'feature_gps_speed': 'GPS測速',
        'feature_spirit_level': '水平儀',
        'feature_ad_block': '廣告攔截',
        'feature_privacy': '隱私保護',
        'feature_fast_browsing': '快速瀏覽',
        'feature_ai_transcription': 'AI轉錄',
        'feature_high_quality': '高品質',
        'feature_text_editing': '文字編輯',
        'feature_work_checkin': '工作打卡',
        'feature_timestamp': '時間戳記',
        'feature_location': '位置資訊',
        'feature_bazi_chart': '八字排盤',
        'feature_lunar_calendar': '農曆轉換',
        'feature_divination': '周易占卜',
        
        // About Section
        'about_title': '關於TianDev工作室',
        'about_description': '我們是一個充滿熱情的iOS開發工作室，致力於創造解決現實問題的高品質行動應用程式。我們的應用程式以使用者體驗為核心，具有現代化介面和強大功能。',
        'stat_apps': '已發布應用程式',
        'stat_languages': '支援語言',
        'stat_downloads': '下載量',
        
        // Contact Section
        'contact_title': '聯絡我們',
        'contact_subtitle': '有問題或想要合作？我們很樂意聽到您的聲音。',
        'contact_email_title': '電子郵件',
        'contact_business_title': '商務諮詢',
        'contact_support_title': '技術支援',
        
        // Footer
        'footer_description': '創造創新的iOS應用程式，提供更好的數位體驗。',
        'footer_apps_title': '應用程式',
        'footer_company_title': '公司',
        'footer_support_title': '支援',
        'footer_privacy': '隱私政策',
        'footer_help': '幫助中心',
        'footer_feedback': '意見回饋',
        'footer_rights': '版權所有。'
    },
    
    'es': {
        // Navigation
        'brand_name': 'TianDev Studio',
        'nav_home': 'Inicio',
        'nav_apps': 'Aplicaciones',
        'nav_about': 'Acerca de',
        'nav_contact': 'Contacto',
        
        // Hero Section
        'hero_title': 'Desarrollo profesional de aplicaciones iOS',
        'hero_subtitle': 'Creando soluciones móviles innovadoras que mejoran tu vida digital',
        'hero_explore_apps': 'Explorar nuestras aplicaciones',
        'hero_contact': 'Ponerse en contacto',
        
        // Apps Section
        'apps_title': 'Nuestras Aplicaciones',
        'apps_subtitle': 'Descubre nuestra colección de aplicaciones iOS profesionales',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'Traductor IA',
        'app_ai_translator_desc': 'Traducción multiidioma inteligente impulsada por Google ML Kit',
        'app_clean_master_name': 'Clean Master',
        'app_clean_master_desc': 'Potente limpiador de almacenamiento de iPhone para liberar espacio eficientemente',
        'app_compass_pro_name': 'Brújula Pro',
        'app_compass_pro_desc': 'Brújula profesional, velocímetro GPS y herramientas de nivel de burbuja',
        'app_petal_browser_name': 'Navegador Petal',
        'app_petal_browser_desc': 'Navegador centrado en la privacidad con bloqueo de anuncios y navegación segura',
        'app_voice_recorder_name': 'Grabadora de voz',
        'app_voice_recorder_desc': 'Transcripción de voz a texto impulsada por IA con alta precisión',
        'app_watermark_camera_name': 'Cámara con marca de agua',
        'app_watermark_camera_desc': 'Cámara profesional con marca de agua para registro de trabajo y asistencia',
        'app_bazi_master_name': 'Maestro Bazi',
        'app_bazi_master_desc': 'Aplicación profesional de astrología china y adivinación con análisis Bazi',
        
        // Features
        'feature_offline': 'Traducción sin conexión',
        'feature_20_languages': '20+ idiomas',
        'feature_real_time': 'Tiempo real',
        'feature_photo_cleanup': 'Limpieza de fotos',
        'feature_cache_cleaner': 'Limpiador de caché',
        'feature_storage_analysis': 'Análisis de almacenamiento',
        'feature_compass': 'Brújula',
        'feature_gps_speed': 'Velocidad GPS',
        'feature_spirit_level': 'Nivel de burbuja',
        'feature_ad_block': 'Bloqueador de anuncios',
        'feature_privacy': 'Protección de privacidad',
        'feature_fast_browsing': 'Navegación rápida',
        'feature_ai_transcription': 'Transcripción IA',
        'feature_high_quality': 'Alta calidad',
        'feature_text_editing': 'Edición de texto',
        'feature_work_checkin': 'Registro de trabajo',
        'feature_timestamp': 'Marca de tiempo',
        'feature_location': 'Ubicación',
        'feature_bazi_chart': 'Carta Bazi',
        'feature_lunar_calendar': 'Calendario lunar',
        'feature_divination': 'Adivinación',
        
        // About Section
        'about_title': 'Acerca de TianDev Studio',
        'about_description': 'Somos un estudio de desarrollo iOS apasionado dedicado a crear aplicaciones móviles de alta calidad que resuelven problemas del mundo real. Nuestras aplicaciones están diseñadas pensando en la experiencia del usuario, con interfaces modernas y funcionalidad potente.',
        'stat_apps': 'Aplicaciones publicadas',
        'stat_languages': 'Idiomas soportados',
        'stat_downloads': 'Descargas',
        
        // Contact Section
        'contact_title': 'Ponerse en contacto',
        'contact_subtitle': '¿Tienes preguntas o quieres colaborar? Nos encantaría saber de ti.',
        'contact_email_title': 'Correo electrónico',
        'contact_business_title': 'Consultas comerciales',
        'contact_support_title': 'Soporte',
        
        // Footer
        'footer_description': 'Creando aplicaciones iOS innovadoras para una mejor experiencia digital.',
        'footer_apps_title': 'Aplicaciones',
        'footer_company_title': 'Empresa',
        'footer_support_title': 'Soporte',
        'footer_privacy': 'Política de privacidad',
        'footer_help': 'Centro de ayuda',
        'footer_feedback': 'Comentarios',
        'footer_rights': 'Todos los derechos reservados.'
    },
    
    'pt': {
        // Navigation
        'brand_name': 'TianDev Studio',
        'nav_home': 'Início',
        'nav_apps': 'Aplicativos',
        'nav_about': 'Sobre',
        'nav_contact': 'Contato',
        
        // Hero Section
        'hero_title': 'Desenvolvimento profissional de aplicativos iOS',
        'hero_subtitle': 'Criando soluções móveis inovadoras que aprimoram sua vida digital',
        'hero_explore_apps': 'Explorar nossos aplicativos',
        'hero_contact': 'Entre em contato',
        
        // Apps Section
        'apps_title': 'Nossos Aplicativos',
        'apps_subtitle': 'Descubra nossa coleção de aplicativos iOS profissionais',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'Tradutor IA',
        'app_ai_translator_desc': 'Tradução multilíngue inteligente alimentada pelo Google ML Kit',
        'app_clean_master_name': 'Clean Master',
        'app_clean_master_desc': 'Limpador de armazenamento iPhone poderoso para liberar espaço eficientemente',
        'app_compass_pro_name': 'Bússola Pro',
        'app_compass_pro_desc': 'Bússola profissional, velocímetro GPS e ferramentas de nível de bolha',
        'app_petal_browser_name': 'Navegador Petal',
        'app_petal_browser_desc': 'Navegador focado em privacidade com bloqueio de anúncios e navegação segura',
        'app_voice_recorder_name': 'Gravador de voz',
        'app_voice_recorder_desc': 'Transcrição de voz para texto alimentada por IA com alta precisão',
        'app_watermark_camera_name': 'Câmera com marca d\'água',
        'app_watermark_camera_desc': 'Câmera profissional com marca d\'água para registro de trabalho e presença',
        'app_bazi_master_name': 'Mestre Bazi',
        'app_bazi_master_desc': 'Aplicativo profissional de astrologia chinesa e adivinhação com análise Bazi',
        
        // Features
        'feature_offline': 'Tradução offline',
        'feature_20_languages': '20+ idiomas',
        'feature_real_time': 'Tempo real',
        'feature_photo_cleanup': 'Limpeza de fotos',
        'feature_cache_cleaner': 'Limpador de cache',
        'feature_storage_analysis': 'Análise de armazenamento',
        'feature_compass': 'Bússola',
        'feature_gps_speed': 'Velocidade GPS',
        'feature_spirit_level': 'Nível de bolha',
        'feature_ad_block': 'Bloqueador de anúncios',
        'feature_privacy': 'Proteção de privacidade',
        'feature_fast_browsing': 'Navegação rápida',
        'feature_ai_transcription': 'Transcrição IA',
        'feature_high_quality': 'Alta qualidade',
        'feature_text_editing': 'Edição de texto',
        'feature_work_checkin': 'Check-in de trabalho',
        'feature_timestamp': 'Carimbo de tempo',
        'feature_location': 'Localização',
        'feature_bazi_chart': 'Carta Bazi',
        'feature_lunar_calendar': 'Calendário lunar',
        'feature_divination': 'Adivinhação',
        
        // About Section
        'about_title': 'Sobre o TianDev Studio',
        'about_description': 'Somos um estúdio de desenvolvimento iOS apaixonado dedicado a criar aplicativos móveis de alta qualidade que resolvem problemas do mundo real. Nossos aplicativos são projetados com a experiência do usuário em mente, apresentando interfaces modernas e funcionalidade poderosa.',
        'stat_apps': 'Aplicativos publicados',
        'stat_languages': 'Idiomas suportados',
        'stat_downloads': 'Downloads',
        
        // Contact Section
        'contact_title': 'Entre em contato',
        'contact_subtitle': 'Tem perguntas ou quer colaborar? Adoraríamos ouvir de você.',
        'contact_email_title': 'E-mail',
        'contact_business_title': 'Consultas comerciais',
        'contact_support_title': 'Suporte',
        
        // Footer
        'footer_description': 'Criando aplicativos iOS inovadores para uma melhor experiência digital.',
        'footer_apps_title': 'Aplicativos',
        'footer_company_title': 'Empresa',
        'footer_support_title': 'Suporte',
        'footer_privacy': 'Política de privacidade',
        'footer_help': 'Central de ajuda',
        'footer_feedback': 'Feedback',
        'footer_rights': 'Todos os direitos reservados.'
    },
    
    'it': {
        // Navigation
        'brand_name': 'TianDev Studio',
        'nav_home': 'Home',
        'nav_apps': 'App',
        'nav_about': 'Chi siamo',
        'nav_contact': 'Contatti',
        
        // Hero Section
        'hero_title': 'Sviluppo professionale di app iOS',
        'hero_subtitle': 'Creare soluzioni mobili innovative che migliorano la tua vita digitale',
        'hero_explore_apps': 'Esplora le nostre app',
        'hero_contact': 'Mettiti in contatto',
        
        // Apps Section
        'apps_title': 'Le nostre App',
        'apps_subtitle': 'Scopri la nostra collezione di applicazioni iOS professionali',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'Traduttore IA',
        'app_ai_translator_desc': 'Traduzione multilingue intelligente alimentata da Google ML Kit',
        'app_clean_master_name': 'Clean Master',
        'app_clean_master_desc': 'Potente pulitore di archiviazione iPhone per liberare spazio efficacemente',
        'app_compass_pro_name': 'Bussola Pro',
        'app_compass_pro_desc': 'Bussola professionale, tachimetro GPS e strumenti livella a bolla',
        'app_petal_browser_name': 'Browser Petal',
        'app_petal_browser_desc': 'Browser incentrato sulla privacy con blocco annunci e navigazione sicura',
        'app_voice_recorder_name': 'Registratore vocale',
        'app_voice_recorder_desc': 'Trascrizione da voce a testo alimentata da IA con alta precisione',
        'app_watermark_camera_name': 'Fotocamera filigrana',
        'app_watermark_camera_desc': 'Fotocamera professionale con filigrana per timbratura lavoro e presenza',
        'app_bazi_master_name': 'Maestro Bazi',
        'app_bazi_master_desc': 'Applicazione professionale di astrologia cinese e divinazione con analisi Bazi',
        
        // Features
        'feature_offline': 'Traduzione offline',
        'feature_20_languages': '20+ lingue',
        'feature_real_time': 'Tempo reale',
        'feature_photo_cleanup': 'Pulizia foto',
        'feature_cache_cleaner': 'Pulitore cache',
        'feature_storage_analysis': 'Analisi archiviazione',
        'feature_compass': 'Bussola',
        'feature_gps_speed': 'Velocità GPS',
        'feature_spirit_level': 'Livella a bolla',
        'feature_ad_block': 'Blocco annunci',
        'feature_privacy': 'Protezione privacy',
        'feature_fast_browsing': 'Navigazione veloce',
        'feature_ai_transcription': 'Trascrizione IA',
        'feature_high_quality': 'Alta qualità',
        'feature_text_editing': 'Modifica testo',
        'feature_work_checkin': 'Check-in lavoro',
        'feature_timestamp': 'Timestamp',
        'feature_location': 'Posizione',
        'feature_bazi_chart': 'Grafico Bazi',
        'feature_lunar_calendar': 'Calendario lunare',
        'feature_divination': 'Divinazione',
        
        // About Section
        'about_title': 'Chi è TianDev Studio',
        'about_description': 'Siamo uno studio di sviluppo iOS appassionato dedicato alla creazione di applicazioni mobili di alta qualità che risolvono problemi del mondo reale. Le nostre app sono progettate pensando all\'esperienza utente, con interfacce moderne e funzionalità potenti.',
        'stat_apps': 'App pubblicate',
        'stat_languages': 'Lingue supportate',
        'stat_downloads': 'Download',
        
        // Contact Section
        'contact_title': 'Mettiti in contatto',
        'contact_subtitle': 'Hai domande o vuoi collaborare? Ci piacerebbe sentirti.',
        'contact_email_title': 'Email',
        'contact_business_title': 'Richieste commerciali',
        'contact_support_title': 'Supporto',
        
        // Footer
        'footer_description': 'Creare applicazioni iOS innovative per una migliore esperienza digitale.',
        'footer_apps_title': 'App',
        'footer_company_title': 'Azienda',
        'footer_support_title': 'Supporto',
        'footer_privacy': 'Informativa privacy',
        'footer_help': 'Centro assistenza',
        'footer_feedback': 'Feedback',
        'footer_rights': 'Tutti i diritti riservati.'
    },
    
    'ar': {
        // Navigation
        'brand_name': 'استوديو TianDev',
        'nav_home': 'الرئيسية',
        'nav_apps': 'التطبيقات',
        'nav_about': 'حولنا',
        'nav_contact': 'اتصل بنا',
        
        // Hero Section
        'hero_title': 'تطوير تطبيقات iOS احترافية',
        'hero_subtitle': 'إنشاء حلول محمولة مبتكرة تعزز حياتك الرقمية',
        'hero_explore_apps': 'استكشف تطبيقاتنا',
        'hero_contact': 'تواصل معنا',
        
        // Apps Section
        'apps_title': 'تطبيقاتنا',
        'apps_subtitle': 'اكتشف مجموعتنا من تطبيقات iOS الاحترافية',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'مترجم الذكاء الاصطناعي',
        'app_ai_translator_desc': 'ترجمة ذكية متعددة اللغات مدعومة بـ Google ML Kit',
        'app_clean_master_name': 'كلين ماستر',
        'app_clean_master_desc': 'منظف تخزين iPhone قوي لتحرير المساحة بكفاءة',
        'app_compass_pro_name': 'البوصلة المحترفة',
        'app_compass_pro_desc': 'بوصلة احترافية وعداد سرعة GPS وأدوات ميزان الفقاعات',
        'app_petal_browser_name': 'متصفح بيتال',
        'app_petal_browser_desc': 'متصفح يركز على الخصوصية مع حظر الإعلانات والتصفح الآمن',
        'app_voice_recorder_name': 'مسجل الصوت',
        'app_voice_recorder_desc': 'تحويل الصوت إلى نص مدعوم بالذكاء الاصطناعي بدقة عالية',
        'app_watermark_camera_name': 'كاميرا العلامة المائية',
        'app_watermark_camera_desc': 'كاميرا علامة مائية احترافية لتسجيل الدخول في العمل والحضور',
        'app_bazi_master_name': 'سيد بازي',
        'app_bazi_master_desc': 'تطبيق احترافي للتنجيم الصيني والعرافة مع تحليل بازي',
        
        // Features
        'feature_offline': 'ترجمة بدون اتصال',
        'feature_20_languages': '20+ لغة',
        'feature_real_time': 'في الوقت الفعلي',
        'feature_photo_cleanup': 'تنظيف الصور',
        'feature_cache_cleaner': 'منظف التخزين المؤقت',
        'feature_storage_analysis': 'تحليل التخزين',
        'feature_compass': 'البوصلة',
        'feature_gps_speed': 'سرعة GPS',
        'feature_spirit_level': 'ميزان الفقاعات',
        'feature_ad_block': 'حاجب الإعلانات',
        'feature_privacy': 'حماية الخصوصية',
        'feature_fast_browsing': 'تصفح سريع',
        'feature_ai_transcription': 'نسخ بالذكاء الاصطناعي',
        'feature_high_quality': 'جودة عالية',
        'feature_text_editing': 'تحرير النص',
        'feature_work_checkin': 'تسجيل دخول العمل',
        'feature_timestamp': 'الطابع الزمني',
        'feature_location': 'الموقع',
        'feature_bazi_chart': 'مخطط بازي',
        'feature_lunar_calendar': 'التقويم القمري',
        'feature_divination': 'العرافة',
        
        // About Section
        'about_title': 'حول استوديو TianDev',
        'about_description': 'نحن استوديو تطوير iOS شغوف مكرس لإنشاء تطبيقات محمولة عالية الجودة تحل مشاكل العالم الحقيقي. تطبيقاتنا مصممة مع وضع تجربة المستخدم في الاعتبار، وتتميز بواجهات حديثة ووظائف قوية.',
        'stat_apps': 'التطبيقات المنشورة',
        'stat_languages': 'اللغات المدعومة',
        'stat_downloads': 'التحميلات',
        
        // Contact Section
        'contact_title': 'تواصل معنا',
        'contact_subtitle': 'هل لديك أسئلة أو تريد التعاون؟ نحب أن نسمع منك.',
        'contact_email_title': 'البريد الإلكتروني',
        'contact_business_title': 'الاستفسارات التجارية',
        'contact_support_title': 'الدعم',
        
        // Footer
        'footer_description': 'إنشاء تطبيقات iOS مبتكرة لتجربة رقمية أفضل.',
        'footer_apps_title': 'التطبيقات',
        'footer_company_title': 'الشركة',
        'footer_support_title': 'الدعم',
        'footer_privacy': 'سياسة الخصوصية',
        'footer_help': 'مركز المساعدة',
        'footer_feedback': 'التعليقات',
        'footer_rights': 'جميع الحقوق محفوظة.'
    },
    
    'hi': {
        // Navigation
        'brand_name': 'TianDev स्टूडियो',
        'nav_home': 'होम',
        'nav_apps': 'ऐप्स',
        'nav_about': 'हमारे बारे में',
        'nav_contact': 'संपर्क',
        
        // Hero Section
        'hero_title': 'पेशेवर iOS ऐप डेवलपमेंट',
        'hero_subtitle': 'नवाचार मोबाइल समाधान बनाना जो आपके डिजिटल जीवन को बेहतर बनाते हैं',
        'hero_explore_apps': 'हमारे ऐप्स देखें',
        'hero_contact': 'संपर्क करें',
        
        // Apps Section
        'apps_title': 'हमारे ऐप्स',
        'apps_subtitle': 'हमारे पेशेवर iOS एप्लिकेशन का संग्रह खोजें',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'AI अनुवादक',
        'app_ai_translator_desc': 'Google ML Kit द्वारा संचालित बुद्धिमान बहुभाषी अनुवाद',
        'app_clean_master_name': 'क्लीन मास्टर',
        'app_clean_master_desc': 'कुशलता से स्थान मुक्त करने के लिए शक्तिशाली iPhone स्टोरेज क्लीनर',
        'app_compass_pro_name': 'कंपास प्रो',
        'app_compass_pro_desc': 'पेशेवर कंपास, GPS स्पीडोमीटर और स्पिरिट लेवल टूल्स',
        'app_petal_browser_name': 'पेटल ब्राउज़र',
        'app_petal_browser_desc': 'विज्ञापन अवरोधन और सुरक्षित ब्राउज़िंग के साथ गोपनीयता-केंद्रित ब्राउज़र',
        'app_voice_recorder_name': 'वॉयस रिकॉर्डर',
        'app_voice_recorder_desc': 'उच्च सटीकता के साथ AI-संचालित वॉयस टू टेक्स्ट ट्रांसक्रिप्शन',
        'app_audio_editor_name': 'ऑडियो एडिटर',
        'app_audio_editor_desc': 'AI-संचालित प्रभावों और बैच प्रोसेसिंग के साथ पेशेवर ऑडियो संपादन',
        'app_watermark_camera_name': 'वॉटरमार्क कैमरा',
        'app_watermark_camera_desc': 'कार्य चेक-इन और उपस्थिति के लिए पेशेवर वॉटरमार्क कैमरा',
        'app_bazi_master_name': 'बाज़ी मास्टर',
        'app_bazi_master_desc': 'बाज़ी विश्लेषण के साथ पेशेवर चीनी ज्योतिष और भाग्य बताने वाला ऐप',
        
        // Features
        'feature_offline': 'ऑफ़लाइन अनुवाद',
        'feature_20_languages': '20+ भाषाएं',
        'feature_real_time': 'रियल-टाइम',
        'feature_photo_cleanup': 'फोटो सफाई',
        'feature_cache_cleaner': 'कैश क्लीनर',
        'feature_storage_analysis': 'स्टोरेज विश्लेषण',
        'feature_compass': 'कंपास',
        'feature_gps_speed': 'GPS गति',
        'feature_spirit_level': 'स्पिरिट लेवल',
        'feature_ad_block': 'विज्ञापन अवरोधक',
        'feature_privacy': 'गोपनीयता सुरक्षा',
        'feature_fast_browsing': 'तेज़ ब्राउज़िंग',
        'feature_ai_transcription': 'AI ट्रांसक्रिप्शन',
        'feature_high_quality': 'उच्च गुणवत्ता',
        'feature_text_editing': 'टेक्स्ट संपादन',
        'feature_ai_effects': 'AI प्रभाव',
        'feature_batch_processing': 'बैच प्रोसेसिंग',
        'feature_format_conversion': 'फॉर्मेट रूपांतरण',
        'feature_work_checkin': 'कार्य चेक-इन',
        'feature_timestamp': 'टाइमस्टैम्प',
        'feature_location': 'स्थान',
        'feature_bazi_chart': 'बाज़ी चार्ट',
        'feature_lunar_calendar': 'चंद्र कैलेंडर',
        'feature_divination': 'भविष्यवाणी',
        
        // About Section
        'about_title': 'TianDev स्टूडियो के बारे में',
        'about_description': 'हम एक भावुक iOS डेवलपमेंट स्टूडियो हैं जो वास्तविक दुनिया की समस्याओं को हल करने वाले उच्च गुणवत्ता वाले मोबाइल एप्लिकेशन बनाने के लिए समर्पित है। हमारे ऐप्स उपयोगकर्ता अनुभव को ध्यान में रखकर डिज़ाइन किए गए हैं, जिनमें आधुनिक इंटरफेस और शक्तिशाली कार्यक्षमता है।',
        'stat_apps': 'प्रकाशित ऐप्स',
        'stat_languages': 'समर्थित भाषाएं',
        'stat_downloads': 'डाउनलोड',
        
        // Contact Section
        'contact_title': 'संपर्क करें',
        'contact_subtitle': 'क्या आपके पास प्रश्न हैं या सहयोग करना चाहते हैं? हम आपसे सुनना पसंद करेंगे।',
        'contact_email_title': 'ईमेल',
        'contact_business_title': 'व्यावसायिक पूछताछ',
        'contact_support_title': 'सहायता',
        
        // Footer
        'footer_description': 'बेहतर डिजिटल अनुभव के लिए नवाचार iOS एप्लिकेशन बनाना।',
        'footer_apps_title': 'ऐप्स',
        'footer_company_title': 'कंपनी',
        'footer_support_title': 'सहायता',
        'footer_privacy': 'गोपनीयता नीति',
        'footer_help': 'सहायता केंद्र',
        'footer_feedback': 'फीडबैक',
        'footer_rights': 'सभी अधिकार सुरक्षित।'
    },
    
    'ru': {
        // Navigation
        'brand_name': 'TianDev Studio',
        'nav_home': 'Главная',
        'nav_apps': 'Приложения',
        'nav_about': 'О нас',
        'nav_contact': 'Контакты',
        
        // Hero Section
        'hero_title': 'Профессиональная разработка iOS приложений',
        'hero_subtitle': 'Создание инновационных мобильных решений, улучшающих вашу цифровую жизнь',
        'hero_explore_apps': 'Изучить наши приложения',
        'hero_contact': 'Связаться с нами',
        
        // Apps Section
        'apps_title': 'Наши Приложения',
        'apps_subtitle': 'Откройте для себя нашу коллекцию профессиональных iOS приложений',
        
        // App Names and Descriptions
        'app_ai_translator_name': 'AI Переводчик',
        'app_ai_translator_desc': 'Интеллектуальный многоязычный перевод на основе Google ML Kit',
        'app_clean_master_name': 'Clean Master',
        'app_clean_master_desc': 'Мощный очиститель хранилища iPhone для эффективного освобождения места',
        'app_compass_pro_name': 'Компас Pro',
        'app_compass_pro_desc': 'Профессиональный компас, GPS спидометр и инструменты уровня',
        'app_petal_browser_name': 'Браузер Petal',
        'app_petal_browser_desc': 'Браузер, ориентированный на конфиденциальность с блокировкой рекламы и безопасным просмотром',
        'app_voice_recorder_name': 'Диктофон',
        'app_voice_recorder_desc': 'Транскрипция речи в текст на основе ИИ с высокой точностью',
        'app_audio_editor_name': 'Аудио Редактор',
        'app_audio_editor_desc': 'Профессиональное редактирование аудио с ИИ-эффектами и пакетной обработкой',
        'app_watermark_camera_name': 'Камера с водяным знаком',
        'app_watermark_camera_desc': 'Профессиональная камера с водяным знаком для рабочих отметок и посещаемости',
        'app_bazi_master_name': 'Мастер Бацзы',
        'app_bazi_master_desc': 'Профессиональное приложение китайской астрологии и гадания с анализом Бацзы',
        
        // Features
        'feature_offline': 'Офлайн перевод',
        'feature_20_languages': '20+ языков',
        'feature_real_time': 'В реальном времени',
        'feature_photo_cleanup': 'Очистка фото',
        'feature_cache_cleaner': 'Очистка кэша',
        'feature_storage_analysis': 'Анализ хранилища',
        'feature_compass': 'Компас',
        'feature_gps_speed': 'GPS скорость',
        'feature_spirit_level': 'Уровень',
        'feature_ad_block': 'Блокировщик рекламы',
        'feature_privacy': 'Защита конфиденциальности',
        'feature_fast_browsing': 'Быстрый просмотр',
        'feature_ai_transcription': 'ИИ транскрипция',
        'feature_high_quality': 'Высокое качество',
        'feature_text_editing': 'Редактирование текста',
        'feature_ai_effects': 'ИИ эффекты',
        'feature_batch_processing': 'Пакетная обработка',
        'feature_format_conversion': 'Конвертация форматов',
        'feature_work_checkin': 'Рабочая отметка',
        'feature_timestamp': 'Временная метка',
        'feature_location': 'Местоположение',
        'feature_bazi_chart': 'Карта Бацзы',
        'feature_lunar_calendar': 'Лунный календарь',
        'feature_divination': 'Гадание',
        
        // About Section
        'about_title': 'О TianDev Studio',
        'about_description': 'Мы - страстная студия разработки iOS, посвященная созданию высококачественных мобильных приложений, решающих реальные проблемы. Наши приложения разработаны с учетом пользовательского опыта, с современными интерфейсами и мощной функциональностью.',
        'stat_apps': 'Опубликованных приложений',
        'stat_languages': 'Поддерживаемых языков',
        'stat_downloads': 'Загрузок',
        
        // Contact Section
        'contact_title': 'Связаться с нами',
        'contact_subtitle': 'Есть вопросы или хотите сотрудничать? Мы будем рады услышать от вас.',
        'contact_email_title': 'Электронная почта',
        'contact_business_title': 'Деловые запросы',
        'contact_support_title': 'Поддержка',
        
        // Footer
        'footer_description': 'Создание инновационных iOS приложений для лучшего цифрового опыта.',
        'footer_apps_title': 'Приложения',
        'footer_company_title': 'Компания',
        'footer_support_title': 'Поддержка',
        'footer_privacy': 'Политика конфиденциальности',
        'footer_help': 'Центр помощи',
        'footer_feedback': 'Обратная связь',
      'footer_rights': 'Все права защищены.'
    }
};// Language Detection and Management
class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = Object.keys(translations);
        this.init();
    }

    init() {
        this.detectLanguage();
        this.createLanguageSelector();
        this.applyTranslations();
        this.bindEvents();
    }

    detectLanguage() {
        // Check URL parameter first
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        if (urlLang && this.supportedLanguages.includes(urlLang)) {
            this.currentLanguage = urlLang;
            return;
        }

        // Check localStorage
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && this.supportedLanguages.includes(savedLang)) {
            this.currentLanguage = savedLang;
            return;
        }

        // Detect from browser
        const browserLang = this.getBrowserLanguage();
        if (browserLang && this.supportedLanguages.includes(browserLang)) {
            this.currentLanguage = browserLang;
            return;
        }

        // Default to English
        this.currentLanguage = 'en';
    }

    getBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        
        // Language mapping for browser detection
        const langMap = {
            'en': 'en',
            'en-US': 'en',
            'en-GB': 'en',
            'zh': 'zh-CN',
            'zh-CN': 'zh-CN',
            'zh-Hans': 'zh-CN',
            'zh-TW': 'zh-TW',
            'zh-Hant': 'zh-TW',
            'ja': 'ja',
            'ja-JP': 'ja',
            'de': 'de',
            'de-DE': 'de',
            'fr': 'fr',
            'fr-FR': 'fr',
            'ko': 'ko',
            'ko-KR': 'ko',
            'es': 'es',
            'es-ES': 'es',
            'pt': 'pt',
            'pt-BR': 'pt',
            'pt-PT': 'pt',
            'it': 'it',
            'it-IT': 'it',
            'ar': 'ar',
            'hi': 'hi',
            'ru': 'ru',
            'ru-RU': 'ru'
        };

        return langMap[lang] || langMap[lang.split('-')[0]];
    }

    createLanguageSelector() {
        const languageNames = {
            'en': 'English',
            'zh-CN': '简体中文',
            'ja': '日本語',
            'de': 'Deutsch',
            'fr': 'Français',
            'ko': '한국어',
            'zh-TW': '繁體中文',
            'es': 'Español',
            'pt': 'Português',
            'it': 'Italiano',
            'ar': 'العربية',
            'hi': 'हिन्दी',
            'ru': 'Русский'
        };

        const selector = document.getElementById('language-selector');
        if (!selector) return;

        // Clear existing options
        selector.innerHTML = '';

        // Add options
        this.supportedLanguages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = languageNames[lang] || lang;
            if (lang === this.currentLanguage) {
                option.selected = true;
            }
            selector.appendChild(option);
        });
    }

    changeLanguage(newLang) {
        if (!this.supportedLanguages.includes(newLang)) return;
        
        this.currentLanguage = newLang;
        localStorage.setItem('preferred-language', newLang);
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', newLang);
        window.history.replaceState({}, '', url);
        
        this.applyTranslations();
        this.updateDocumentDirection();
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        const currentTranslations = translations[this.currentLanguage] || translations['en'];
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = currentTranslations[key];
                } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = currentTranslations[key];
                } else {
                    element.textContent = currentTranslations[key];
                }
            }
        });

        // Update document language attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Update page title
        document.title = currentTranslations['brand_name'] + ' - ' + currentTranslations['hero_title'];
        
        this.updateDocumentDirection();
    }

    updateDocumentDirection() {
        // Set RTL for Arabic
        if (this.currentLanguage === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
    }

    bindEvents() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// Export for global access
window.translations = translations;