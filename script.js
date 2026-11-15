/* ============================================================
   INTEGRATED COMPANY — SENEGAL SUBDOMAIN
   script.js — Production Build
   Language: EN · FR · AR | SPA Navigation | Form Logic
   ============================================================ */

'use strict';

/* ──────────────────────────────────────────────
   1.  TRANSLATIONS
   ────────────────────────────────────────────── */
const translations = {
  en: {
    // Navigation
    nav_brand: "Integrated Company",
    nav_home: "Home",
    nav_about: "About Us",
    nav_products: "Products",
    nav_partners: "Partners",
    nav_contact: "Contact",

    // Hero Section
    hero_badge: "Saudi Arabia · Senegal · International",
    hero_title_1: "Bridging Continents,",
    hero_title_2: "Powering Industries",
    hero_subtitle: "Integrated Company is a premier Saudi industrial enterprise delivering world-class polymers, agri-nutrients, and lubricants from the Kingdom of Saudi Arabia to the heart of West Africa and beyond.",
    hero_btn_products: "Explore Products",
    hero_btn_contact: "Contact Us",
    stat_years: "Years Experience",
    stat_countries: "Countries Served",
    stat_products: "Product Lines",
    stat_partners: "Strategic Partners",

    // About Section
    about_badge: "Who We Are",
    about_title: "Your Trusted Industrial Partner",
    about_desc: "Connecting Saudi industrial excellence with West African growth markets.",
    about_subtitle: "INTEGRATED AFRICA COMPANY – SUARL",
    about_text_1: "Integrated Company is a premier Saudi corporate delivering top-tier industrial solutions across construction, commercial, and industrial sectors globally. As an approved distributor of world-class petrochemical products and industrial materials, we bridge the gap between Saudi Arabia's manufacturing powerhouse and the rapidly growing markets of West Africa.",
    about_text_2: "Our Senegal branch — INTEGRATED AFRICA COMPANY – SUARL — based in Dakar, serves as the strategic hub for industrial distribution across the ECOWAS region. We specialize in the supply of SABIC polymers and agri-nutrients, alongside PETROLUBE high-performance lubricants and engineering fluids, supporting agricultural expansion, packaging manufacturers, automotive fleets, and heavy industrial operations throughout West Africa.",
    about_highlight_1: "Approved SABIC Distributor",
    about_highlight_2: "ECOWAS Market Access",
    about_highlight_3: "Premium Saudi Quality",

    // Profile Download
    profile_badge: "Company Profile",
    profile_title: "Download Company Profile",
    profile_desc: "Get comprehensive information about our products, capabilities, and regional presence across West Africa.",
    profile_btn_en: "English Profile",
    profile_btn_fr: "Profil Français",
    profile_scan_en: "Scan for English",
    profile_scan_fr: "Scan for French",
    profile_scan_mobile: "Scan to download on mobile",

    // Products Section
    products_badge: "Our Products",
    products_title: "Import & Distribution You Can Rely On",
    products_desc: "Integrated Company specializes in the <strong>import and distribution</strong> of <strong>lubricants</strong>, <strong>agri-nutrients</strong> and <strong>plastic bags</strong> — sourcing quality products and delivering them dependably to our customers.",

    // Lubricants Card
    prod_lub_cat: "Industrial & Automotive",
    prod_lub_title: "Lubricants",
    prod_lub_desc: "A full range of engine oils, gear oils, hydraulic fluids and greases for passenger vehicles, heavy-duty fleets and industrial machinery.",
    prod_lub_f1: "Engine & Gear Oils",
    prod_lub_f2: "Hydraulic Fluids & Greases",
    prod_lub_f3: "Automotive & Industrial Use",

    // Agri-Nutrients Card
    prod_agri_cat: "Agriculture",
    prod_agri_title: "Agri-Nutrients",
    prod_agri_desc: "Urea and other fertilizers that help farmers improve soil fertility and increase crop yields across a wide variety of crops and soil types.",
    prod_agri_f1: "Urea & Chemical Fertilizers",
    prod_agri_f2: "Improved Crop Yields",
    prod_agri_f3: "Suitable for Diverse Soils",

    // Plastic Bags Card
    prod_bags_cat: "Packaging",
    prod_bags_title: "Plastic Bags",
    prod_bags_desc: "Durable plastic bags in a range of sizes for retail, packaging, agricultural and industrial applications.",
    prod_bags_f1: "Multiple Sizes Available",
    prod_bags_f2: "Strong & Durable",
    prod_bags_f3: "Bulk Supply",
    prod_bags_size_s: "Small",
    prod_bags_size_m: "Medium",
    prod_bags_size_l: "Large",
    prod_bags_size_custom: "Custom Sizes",

    // Global Expansion Card
    dist_tag_expansion: "Global Reach",
    dist_expansion_title: "ECOWAS Market Gateway",
    dist_expansion_desc: "Senegal serves as our strategic gateway to the entire ECOWAS economic region. We are actively expanding our supply footprint across 15 West African nations, building robust logistics pipelines from Saudi Arabia through Dakar to serve growing industrial demands in construction, agriculture, and transportation sectors.",
    dist_expansion_f1: "15 ECOWAS Nations",
    dist_expansion_f2: "Saudi-Dakar Supply Chain",

    // Request a Quote Banner
    prod_cta_title: "Looking for a reliable supplier?",
    prod_cta_desc: "Contact us for pricing, availability and bulk orders.",
    prod_cta_btn: "Request a Quote",

    // Partners Section
    partners_badge: "Strategic Alliances",
    partners_title: "Our Strategic Partners",
    partners_desc: "Authorized distributor of world-leading industrial brands.",
    partner_sabic_name: "SABIC",
    partner_sabic_desc: "Saudi Basic Industries Corporation — one of the world's largest petrochemical manufacturers. We are an approved distributor of SABIC polymers and agri-nutrients for West Africa.",
    partner_petrolube_name: "PETROLUBE",
    partner_petrolube_desc: "A leading Saudi lubricant manufacturer. We are the authorized distributor of PETROLUBE and NATIONAL brand lubricants across West Africa.",

    // Contact Section
    contact_badge: "Get In Touch",
    contact_title: "Contact Our Team",
    contact_desc: "Connect with our business development team in Dakar or Riyadh.",
    contact_info_title: "Office Locations",
    loc_dakar_title: "INTEGRATED AFRICA COMPANY – SUARL",
    loc_dakar_desc: "Villa N° 72, Cité Asecna, Ouakam, Dakar, Sénégal",
    loc_riyadh_title: "Saudi Arabia Headquarters",
    loc_riyadh_desc: "King Salman Road 36341, Al Mojil Tower – Level 6, Al Hasa, Saudi Arabia",
    contact_comm_title: "Direct Channels",
    ch_email_title: "Corporate Email",
    ch_phone_title: "Phone Lines",
    phone_saudi: "Saudi Mobile",
    phone_uae: "UAE Mobile",

    // Form
    form_title: "Send an Inquiry",
    form_desc: "Reach out to our business development team.",
    label_name: "Full Name",
    label_email: "Email Address",
    label_company: "Company Name",
    label_subject: "Subject",
    label_message: "Message",
    btn_submit: "Send Inquiry",
    success_title: "Message Sent!",
    success_desc: "Thank you for contacting Integrated Company. Our team will respond shortly.",

    // Footer
    footer_intro: "Delivering premium industrial polymers, agri-nutrients, and lubricants from Saudi Arabia to West Africa and global markets.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contacts",
    footer_copy: "Integrated Company. All rights reserved.",
    footer_addr: "Villa N° 72, Cité Asecna, Ouakam, Dakar, Sénégal",
    footer_phone_saudi: "Saudi",
    footer_phone_uae: "UAE",
    footer_main_site: "Visit Main Website",
    skip_link: "Skip to main content"
  },

  fr: {
    // Navigation
    nav_brand: "Integrated Company",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_products: "Produits",
    nav_partners: "Partenaires",
    nav_contact: "Contact",

    // Hero Section
    hero_badge: "Arabie Saoudite · Sénégal · International",
    hero_title_1: "Relier les continents,",
    hero_title_2: "Alimenter les industries",
    hero_subtitle: "Integrated Company est une entreprise industrielle saoudienne de premier plan qui fournit des polymères, des agro-nutriments et des lubrifiants de classe mondiale du Royaume d'Arabie saoudite au cœur de l'Afrique de l'Ouest et au-delà.",
    hero_btn_products: "Explorer les produits",
    hero_btn_contact: "Contactez-nous",
    stat_years: "Années d'expérience",
    stat_countries: "Pays desservis",
    stat_products: "Gammes de produits",
    stat_partners: "Partenaires stratégiques",

    // About Section
    about_badge: "Qui sommes-nous",
    about_title: "Votre partenaire industriel de confiance",
    about_desc: "Connecter l'excellence industrielle saoudienne aux marchés en croissance d'Afrique de l'Ouest.",
    about_subtitle: "INTEGRATED AFRICA COMPANY – SUARL",
    about_text_1: "Integrated Company est une entreprise saoudienne de premier plan offrant des solutions industrielles de haut niveau dans les secteurs de la construction, du commerce et de l'industrie à l'échelle mondiale. En tant que distributeur agréé de produits pétrochimiques et de matériaux industriels de classe mondiale, nous comblons le fossé entre la puissance manufacturière de l'Arabie saoudite et les marchés en pleine croissance de l'Afrique de l'Ouest.",
    about_text_2: "Notre succursale au Sénégal — INTEGRATED AFRICA COMPANY – SUARL — basée à Dakar, sert de hub stratégique pour la distribution industrielle dans la région de la CEDEAO. Nous sommes spécialisés dans la fourniture de polymères et d'agro-nutriments SABIC, ainsi que de lubrifiants haute performance PETROLUBE et de fluides d'ingénierie, soutenant l'expansion agricole, les fabricants d'emballages, les flottes automobiles et les opérations industrielles lourdes en Afrique de l'Ouest.",
    about_highlight_1: "Distributeur SABIC agréé",
    about_highlight_2: "Accès au marché de la CEDEAO",
    about_highlight_3: "Qualité saoudienne premium",

    // Profile Download
    profile_badge: "Profil de l'entreprise",
    profile_title: "Télécharger le profil de l'entreprise",
    profile_desc: "Obtenez des informations complètes sur nos produits, nos capacités et notre présence régionale en Afrique de l'Ouest.",
    profile_btn_en: "Profil anglais",
    profile_btn_fr: "Profil français",
    profile_scan_en: "Scanner pour l'anglais",
    profile_scan_fr: "Scanner pour le français",
    profile_scan_mobile: "Scannez pour télécharger sur mobile",

    // Products Section
    products_badge: "Nos produits",
    products_title: "Importation et distribution sur lesquelles vous pouvez compter",
    products_desc: "Integrated Company est spécialisée dans l'<strong>importation et la distribution</strong> de <strong>lubrifiants</strong>, d'<strong>agro-nutriments</strong> et de <strong>sacs plastiques</strong> — en sélectionnant des produits de qualité et en les livrant de manière fiable à nos clients.",

    // Lubricants Card
    prod_lub_cat: "Industrie et automobile",
    prod_lub_title: "Lubrifiants",
    prod_lub_desc: "Une gamme complète d'huiles moteur, d'huiles pour engrenages, de fluides hydrauliques et de graisses pour véhicules particuliers, flottes de poids lourds et machines industrielles.",
    prod_lub_f1: "Huiles moteur et engrenages",
    prod_lub_f2: "Fluides hydrauliques et graisses",
    prod_lub_f3: "Usage automobile et industriel",

    // Agri-Nutrients Card
    prod_agri_cat: "Agriculture",
    prod_agri_title: "Agro-nutriments",
    prod_agri_desc: "De l'urée et d'autres engrais qui aident les agriculteurs à améliorer la fertilité des sols et à augmenter les rendements sur une grande variété de cultures et de types de sols.",
    prod_agri_f1: "Urée et engrais chimiques",
    prod_agri_f2: "Meilleurs rendements agricoles",
    prod_agri_f3: "Adaptés à divers types de sols",

    // Plastic Bags Card
    prod_bags_cat: "Emballage",
    prod_bags_title: "Sacs plastiques",
    prod_bags_desc: "Des sacs plastiques résistants, disponibles en plusieurs tailles, pour le commerce de détail, l'emballage, l'agriculture et l'industrie.",
    prod_bags_f1: "Plusieurs tailles disponibles",
    prod_bags_f2: "Solides et durables",
    prod_bags_f3: "Fourniture en gros",
    prod_bags_size_s: "Petit",
    prod_bags_size_m: "Moyen",
    prod_bags_size_l: "Grand",
    prod_bags_size_custom: "Tailles sur mesure",

    // Global Expansion Card
    dist_tag_expansion: "Portée mondiale",
    dist_expansion_title: "Porte d'entrée du marché de la CEDEAO",
    dist_expansion_desc: "Le Sénégal sert de porte d'entrée stratégique vers l'ensemble de la région économique de la CEDEAO. Nous étendons activement notre empreinte d'approvisionnement dans 15 pays d'Afrique de l'Ouest, construisant des pipelines logistiques robustes de l'Arabie saoudite à travers Dakar pour répondre aux demandes industrielles croissantes dans les secteurs de la construction, de l'agriculture et du transport.",
    dist_expansion_f1: "15 nations de la CEDEAO",
    dist_expansion_f2: "Chaîne d'approvisionnement Arabie-Dakar",

    // Request a Quote Banner
    prod_cta_title: "Vous cherchez un fournisseur fiable ?",
    prod_cta_desc: "Contactez-nous pour les prix, la disponibilité et les commandes en gros.",
    prod_cta_btn: "Demander un devis",

    // Partners Section
    partners_badge: "Alliances stratégiques",
    partners_title: "Nos partenaires stratégiques",
    partners_desc: "Distributeur agréé de marques industrielles leaders mondiales.",
    partner_sabic_name: "SABIC",
    partner_sabic_desc: "Saudi Basic Industries Corporation — l'un des plus grands fabricants pétrochimiques au monde. Nous sommes distributeur agréé des polymères et agro-nutriments SABIC pour l'Afrique de l'Ouest.",
    partner_petrolube_name: "PETROLUBE",
    partner_petrolube_desc: "Un fabricant saoudien leader de lubrifiants. Nous sommes le distributeur agréé des lubrifiants PETROLUBE et de la marque NATIONAL en Afrique de l'Ouest.",

    // Contact Section
    contact_badge: "Nous contacter",
    contact_title: "Contactez notre équipe",
    contact_desc: "Connectez-vous avec notre équipe de développement commercial à Dakar ou à Riyad.",
    contact_info_title: "Nos bureaux",
    loc_dakar_title: "INTEGRATED AFRICA COMPANY – SUARL",
    loc_dakar_desc: "Villa N° 72, Cité Asecna, Ouakam, Dakar, Sénégal",
    loc_riyadh_title: "Siège social en Arabie saoudite",
    loc_riyadh_desc: "Route du Roi Salman 36341, Tour Al Mojil – Niveau 6, Al Hasa, Arabie Saoudite",
    contact_comm_title: "Canaux directs",
    ch_email_title: "Email professionnel",
    ch_phone_title: "Lignes téléphoniques",
    phone_saudi: "Mobile Arabie",
    phone_uae: "Mobile EAU",

    // Form
    form_title: "Envoyer une demande",
    form_desc: "Contactez notre équipe de développement commercial.",
    label_name: "Nom complet",
    label_email: "Adresse email",
    label_company: "Nom de l'entreprise",
    label_subject: "Sujet",
    label_message: "Message",
    btn_submit: "Envoyer la demande",
    success_title: "Message envoyé !",
    success_desc: "Merci d'avoir contacté Integrated Company. Notre équipe vous répondra rapidement.",

    // Footer
    footer_intro: "Fournir des polymères industriels, des agro-nutriments et des lubrifiants premium d'Arabie saoudite vers l'Afrique de l'Ouest et les marchés mondiaux.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contacts",
    footer_copy: "Integrated Company. Tous droits réservés.",
    footer_addr: "Villa N° 72, Cité Asecna, Ouakam, Dakar, Sénégal",
    footer_phone_saudi: "Arabie",
    footer_phone_uae: "EAU",
    footer_main_site: "Visiter le site principal",
    skip_link: "Aller au contenu principal"
  },

  ar: {
    // Navigation
    nav_brand: "الشركة المتكاملة",
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_products: "المنتجات",
    nav_partners: "الشركاء",
    nav_contact: "اتصل بنا",

    // Hero Section
    hero_badge: "السعودية · السنغال · دولياً",
    hero_title_1: "جسر بين القارات،",
    hero_title_2: "تمكين الصناعات",
    hero_subtitle: "الشركة المتكاملة هي مؤسسة صناعية سعودية رائدة تقدم بوليمرات ومغذيات زراعية وزيوت تشحيم عالمية المستوى من المملكة العربية السعودية إلى قلب غرب أفريقيا وخارجها.",
    hero_btn_products: "استكشف المنتجات",
    hero_btn_contact: "اتصل بنا",
    stat_years: "سنوات الخبرة",
    stat_countries: "دول نخدمها",
    stat_products: "خطوط إنتاج",
    stat_partners: "شركاء استراتيجيون",

    // About Section
    about_badge: "من نحن",
    about_title: "شريككم الصناعي الموثوق",
    about_desc: "ربط التميز الصناعي السعودي بالأسواق النامية في غرب أفريقيا.",
    about_subtitle: "شركة أفريقيا المتكاملة – SUARL",
    about_text_1: "الشركة المتكاملة هي شركة سعودية رائدة تقدم حلولاً صناعية متطورة عبر قطاعات البناء والتجارة والصناعة على مستوى العالم. بصفتنا موزعاً معتمداً للمنتجات البتروكيماوية والمواد الصناعية العالمية، نعمل على سد الفجوة بين القوة التصنيعية السعودية والأسواق النامية في غرب أفريقيا.",
    about_text_2: "فرعنا في السنغال — شركة أفريقيا المتكاملة – SUARL — ومقره في داكار، يعمل كمركز استراتيجي للتوزيع الصناعي عبر منطقة الإيكواس. نتخصص في توريد بوليمرات ومغذيات سابك الزراعية، إلى جانب زيوت تشحيم بترولوب عالية الأداء وسوائل هندسية، لدعم التوسع الزراعي ومصنعي التعبئة وأساطيل السيارات والعمليات الصناعية الثقيلة في جميع أنحاء غرب أفريقيا.",
    about_highlight_1: "موزع سابك المعتمد",
    about_highlight_2: "وصول لأسواق الإيكواس",
    about_highlight_3: "جودة سعودية فاخرة",

    // Profile Download
    profile_badge: "ملف الشركة",
    profile_title: "تحميل ملف الشركة",
    profile_desc: "احصل على معلومات شاملة حول منتجاتنا وقدراتنا وتواجدنا الإقليمي في غرب أفريقيا.",
    profile_btn_en: "الملف الإنجليزي",
    profile_btn_fr: "الملف الفرنسي",
    profile_scan_en: "مسح للإنجليزية",
    profile_scan_fr: "مسح للفرنسية",
    profile_scan_mobile: "امسح للتحميل على الهاتف",

    // Products Section
    products_badge: "منتجاتنا",
    products_title: "استيراد وتوزيع يمكنك الاعتماد عليه",
    products_desc: "تتخصص الشركة المتكاملة في <strong>استيراد وتوزيع</strong> <strong>زيوت التشحيم</strong> و<strong>المغذيات الزراعية</strong> و<strong>الأكياس البلاستيكية</strong> — نوفّر منتجات عالية الجودة ونوصلها إلى عملائنا بكل موثوقية.",

    // Lubricants Card
    prod_lub_cat: "صناعي وسيارات",
    prod_lub_title: "زيوت التشحيم",
    prod_lub_desc: "مجموعة كاملة من زيوت المحركات وزيوت التروس والسوائل الهيدروليكية والشحوم لسيارات الركاب وأساطيل المركبات الثقيلة والآلات الصناعية.",
    prod_lub_f1: "زيوت المحركات والتروس",
    prod_lub_f2: "السوائل الهيدروليكية والشحوم",
    prod_lub_f3: "للاستخدام في السيارات والصناعة",

    // Agri-Nutrients Card
    prod_agri_cat: "الزراعة",
    prod_agri_title: "المغذيات الزراعية",
    prod_agri_desc: "اليوريا وأسمدة أخرى تساعد المزارعين على تحسين خصوبة التربة وزيادة إنتاجية المحاصيل لمجموعة واسعة من المحاصيل وأنواع التربة.",
    prod_agri_f1: "اليوريا والأسمدة الكيماوية",
    prod_agri_f2: "إنتاجية أعلى للمحاصيل",
    prod_agri_f3: "مناسبة لمختلف أنواع التربة",

    // Plastic Bags Card
    prod_bags_cat: "التغليف",
    prod_bags_title: "الأكياس البلاستيكية",
    prod_bags_desc: "أكياس بلاستيكية متينة بمقاسات متعددة لاستخدامات البيع بالتجزئة والتغليف والزراعة والصناعة.",
    prod_bags_f1: "مقاسات متعددة متوفرة",
    prod_bags_f2: "قوية ومتينة",
    prod_bags_f3: "توريد بالجملة",
    prod_bags_size_s: "صغير",
    prod_bags_size_m: "متوسط",
    prod_bags_size_l: "كبير",
    prod_bags_size_custom: "مقاسات حسب الطلب",

    // Global Expansion Card
    dist_tag_expansion: "الانتشار العالمي",
    dist_expansion_title: "بوابة سوق الإيكواس",
    dist_expansion_desc: "يعمل السنغال كبوابتنا الاستراتيجية لمنطقة الإيكواس الاقتصادية بأكملها. نعمل بنشاط على توسيع نطاق إمداداتنا عبر 15 دولة في غرب أفريقيا، وبناء خطوط لوجستية قوية من المملكة العربية السعودية عبر داكار لخدمة الطلب الصناعي المتنامي في قطاعات البناء والزراعة والنقل.",
    dist_expansion_f1: "15 دولة في الإيكواس",
    dist_expansion_f2: "سلسلة إمداد سعودية-داكار",

    // Request a Quote Banner
    prod_cta_title: "تبحث عن مورّد موثوق؟",
    prod_cta_desc: "تواصل معنا للأسعار والتوفر وطلبات الجملة.",
    prod_cta_btn: "اطلب عرض سعر",

    // Partners Section
    partners_badge: "التحالفات الاستراتيجية",
    partners_title: "شركاؤنا الاستراتيجيون",
    partners_desc: "موزع معتمد لعلامات تجارية صناعية رائدة عالمياً.",
    partner_sabic_name: "سابك",
    partner_sabic_desc: "الشركة السعودية للصناعات الأساسية — واحدة من أكبر شركات البتروكيماويات في العالم. نحن موزع معتمد لبوليمرات ومغذيات سابك الزراعية لغرب أفريقيا.",
    partner_petrolube_name: "بترولوب",
    partner_petrolube_desc: "شركة سعودية رائدة في تصنيع زيوت التشحيم. نحن الموزع المعتمد لزيوت بترولوب وعلامة ناشيونال في غرب أفريقيا.",

    // Contact Section
    contact_badge: "تواصل معنا",
    contact_title: "تواصل مع فريقنا",
    contact_desc: "تواصل مع فريق تطوير الأعمال في داكار أو الرياض.",
    contact_info_title: "مواقع مكاتبنا",
    loc_dakar_title: "شركة أفريقيا المتكاملة – SUARL",
    loc_dakar_desc: "فيلا رقم 72، حي أسيكنا، واكام، دكار، السنغال",
    loc_riyadh_title: "المقر الرئيسي - السعودية",
    loc_riyadh_desc: "طريق الملك سلمان 36341، برج المجل – الطابق 6، الأحساء، السعودية",
    contact_comm_title: "قنوات الاتصال المباشر",
    ch_email_title: "البريد الإلكتروني المؤسسي",
    ch_phone_title: "خطوط الهاتف",
    phone_saudi: "جوال السعودية",
    phone_uae: "جوال الإمارات",

    // Form
    form_title: "إرسال استفسار",
    form_desc: "تواصل مع فريق تطوير الأعمال.",
    label_name: "الاسم الكامل",
    label_email: "البريد الإلكتروني",
    label_company: "اسم الشركة",
    label_subject: "الموضوع",
    label_message: "الرسالة",
    btn_submit: "إرسال الاستفسار",
    success_title: "تم الإرسال بنجاح!",
    success_desc: "شكراً لتواصلك مع الشركة المتكاملة. سيقوم فريقنا بالرد قريباً.",

    // Footer
    footer_intro: "توصيل بوليمرات صناعية ومغذيات زراعية وزيوت تشحيم فاخرة من السعودية إلى غرب أفريقيا والأسواق العالمية.",
    footer_nav_title: "التنقل",
    footer_contact_title: "الاتصالات",
    footer_copy: "الشركة المتكاملة. جميع الحقوق محفوظة.",
    footer_addr: "فيلا رقم 72، حي أسيكنا، واكام، دكار، السنغال",
    footer_phone_saudi: "السعودية",
    footer_phone_uae: "الإمارات",
    footer_main_site: "زيارة الموقع الرئيسي",
    skip_link: "تجاوز إلى المحتوى الرئيسي"
  }
};


/* ──────────────────────────────────────────────
   2.  DOM SELECTORS
   ────────────────────────────────────────────── */
const langButtons    = document.querySelectorAll('.btn-lang-option');
const copyrightYear  = document.getElementById('copyright-year');
const mainNavbar     = document.getElementById('main-navbar');
const mobileToggle   = document.getElementById('mobile-toggle');
const navbarLinks    = document.getElementById('navbar-links');
const menuOverlay    = document.getElementById('menu-overlay');
const contactForm    = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');


/* ──────────────────────────────────────────────
   3.  LANGUAGE SWITCHING
   ────────────────────────────────────────────── */
const VALID_LANGS   = ['en', 'fr', 'ar'];
const FONT_LTR      = "'Outfit', sans-serif";
const FONT_RTL      = "'Cairo', sans-serif";

/**
 * Reads the user's saved language preference from localStorage.
 * Falls back to 'en' when the stored value is missing or invalid.
 */
function getSavedLang() {
  const stored = localStorage.getItem('preferredLang');
  return VALID_LANGS.includes(stored) ? stored : 'en';
}

/**
 * Walks every element carrying a [data-i18n] attribute and replaces
 * its textContent with the matching key from the translations map.
 * Also adjusts `dir`, `lang`, and body font for RTL / LTR layouts.
 */
function applyTranslations(lang) {
  if (!VALID_LANGS.includes(lang)) lang = 'en';

  const dict = translations[lang];
  const html = document.documentElement;

  /* --- Text content --- */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  /* --- Rich text (trusted static strings with inline markup) --- */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  /* --- Direction & font --- */
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    document.body.style.fontFamily = FONT_RTL;
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', lang);
    document.body.style.fontFamily = FONT_LTR;
  }

  /* --- Active indicator on language buttons --- */
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/**
 * Creates a full-viewport mask overlay that fades in, swaps translations,
 * then fades back out — identical to the parent-site transition effect.
 */
function switchLanguageWithMask(lang) {
  localStorage.setItem('preferredLang', lang);

  /* Build mask */
  const mask = document.createElement('div');
  Object.assign(mask.style, {
    position:        'fixed',
    inset:           '0',
    zIndex:          '99999',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    backdropFilter:  'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    opacity:         '0',
    transition:      'opacity 0.25s ease',
    pointerEvents:   'all'
  });
  document.body.appendChild(mask);

  /* Fade in */
  requestAnimationFrame(() => {
    mask.style.opacity = '1';
  });

  /* After fade-in completes, apply translations, then fade out */
  setTimeout(() => {
    applyTranslations(lang);

    requestAnimationFrame(() => {
      mask.style.opacity = '0';
    });

    /* Remove mask after fade-out */
    setTimeout(() => {
      if (mask.parentNode) mask.parentNode.removeChild(mask);
    }, 260);
  }, 260);
}

/* Bind language buttons */
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    if (lang) switchLanguageWithMask(lang);
  });
});


/* ──────────────────────────────────────────────
   4.  SPA NAVIGATION
   ────────────────────────────────────────────── */
const VALID_SECTIONS = ['home', 'about', 'products', 'partners', 'contact'];

/**
 * Shows the requested section (by hash string) and hides the current one.
 * Also syncs the navbar active indicator and closes the mobile menu.
 */
function navigateToSection(hash) {
  let cleanHash = (hash || '').replace(/^#/, '').toLowerCase();
  if (!VALID_SECTIONS.includes(cleanHash)) cleanHash = 'home';

  const targetId = cleanHash + '-section';
  const target   = document.getElementById(targetId);
  if (!target) return;

  /* Deactivate current section */
  const activeSection = document.querySelector('.page-section.active');
  if (activeSection) activeSection.classList.remove('active');

  /* Activate target */
  target.classList.add('active');

  /* Sync navbar indicators */
  document.querySelectorAll('[data-page]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === cleanHash);
  });

  /* Scroll to top */
  window.scrollTo({ top: 0, behavior: 'instant' });

  /* Close mobile menu if open */
  closeMobileMenu();
}

/* Delegate all internal hash-link clicks */
document.body.addEventListener('click', e => {
  const anchor = e.target.closest("a[href^='#']");
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href || href === '#') return;

  e.preventDefault();
  const hash = href.replace('#', '');
  window.location.hash = hash;
  navigateToSection(hash);
});

/* React to browser back / forward */
window.addEventListener('hashchange', () => {
  navigateToSection(window.location.hash);
});


/* ──────────────────────────────────────────────
   5.  NAVBAR SCROLL STATE
   ────────────────────────────────────────────── */
let scrollTicking = false;

function onScrollUpdate() {
  if (!mainNavbar) return;
  if (window.scrollY > 50) {
    mainNavbar.classList.add('scrolled');
  } else {
    mainNavbar.classList.remove('scrolled');
  }
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(onScrollUpdate);
    scrollTicking = true;
  }
}, { passive: true });


/* ──────────────────────────────────────────────
   6.  MOBILE MENU
   ────────────────────────────────────────────── */
function openMobileMenu() {
  if (mobileToggle) mobileToggle.classList.add('open');
  if (menuOverlay) {
    menuOverlay.classList.add('open');
    menuOverlay.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (mobileToggle) mobileToggle.classList.remove('open');
  if (menuOverlay) {
    menuOverlay.classList.remove('open');
    menuOverlay.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

function toggleMobileMenu() {
  const isOpen = menuOverlay && menuOverlay.classList.contains('open');
  isOpen ? closeMobileMenu() : openMobileMenu();
}

if (mobileToggle) {
  mobileToggle.addEventListener('click', toggleMobileMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener('click', function(e) {
    if (e.target === menuOverlay) closeMobileMenu();
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileMenu();
});


/* ──────────────────────────────────────────────
   7.  CONTACT FORM
   ────────────────────────────────────────────── */
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    /* Gather field values */
    const name    = (contactForm.querySelector('#contact-name')    || {}).value || '';
    const email   = (contactForm.querySelector('#contact-email')   || {}).value || '';
    const company = (contactForm.querySelector('#contact-company') || {}).value || '';
    const subject = (contactForm.querySelector('#contact-subject') || {}).value || '';
    const message = (contactForm.querySelector('#contact-message') || {}).value || '';

    /* Build mailto link */
    const recipient = 'info@integrated-equipment.com';
    const subjectLine = encodeURIComponent(subject || 'Website Inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company}\n` +
      `Subject: ${subject}\n\n` +
      `Message:\n${message}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subjectLine}&body=${body}`;

    /* Open email client */
    window.location.href = mailtoLink;

    /* Show success overlay */
    if (successMessage) {
      successMessage.classList.add('active');
    }

    /* Reset form and hide success after 6 seconds */
    setTimeout(() => {
      contactForm.reset();
      if (successMessage) {
        successMessage.classList.remove('active');
      }
    }, 6000);
  });
}


/* ──────────────────────────────────────────────
   8.  COPYRIGHT YEAR
   ────────────────────────────────────────────── */
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}


/* ──────────────────────────────────────────────
   9.  INITIALISE ON PAGE LOAD
   ────────────────────────────────────────────── */
(function init() {
  /* Apply saved / default language */
  const lang = getSavedLang();
  applyTranslations(lang);

  /* Route to the correct section from the URL hash */
  const initialHash = window.location.hash.replace('#', '') || 'home';
  navigateToSection(initialHash);

  /* Set initial scroll state */
  onScrollUpdate();
})();
