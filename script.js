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
    products_title: "Industrial Products & Distribution",
    products_desc: "Premium industrial materials from world-leading manufacturers, delivered with robust global supply chain excellence.",

    // SABIC Polymers Card
    dist_tag_plastic: "Manufacturing",
    dist_hdpe_title: "SABIC Polymers",
    dist_hdpe_desc: "High-density polyethylene (HDPE) and polypropylene (PP) polymers essential for blowing extrusion, injection molding, and agricultural pipe manufacturing. Our SABIC polymer grades — including HDPE F00952 and PP 500GA — are specifically selected for the West African market, supporting packaging manufacturers, water pipe producers, and agricultural film extruders across Senegal and the ECOWAS region.",
    dist_hdpe_f1: "High Tensile Strength",
    dist_hdpe_f2: "Excellent Chemical Resistance",
    dist_hdpe_f3: "Multiple Processing Grades",

    // SABIC Agri-Nutrients Card
    dist_tag_agri: "Agriculture",
    dist_fertilizer_title: "SABIC Agri-Nutrients",
    dist_fertilizer_desc: "Approved global distributor of SABIC's world-leading agricultural urea and chemical fertilizers, designed to maximize crop yields across diverse soil types. In Senegal, our fertilizers play a critical role in supporting the national agricultural sector — from rice paddies in the Casamance to groundnut farms in the Sine-Saloum — helping local farmers improve food security and economic productivity across the country.",
    dist_fertilizer_f1: "High Nitrogen Content",
    dist_fertilizer_f2: "Optimized Solubility",
    dist_fertilizer_f3: "Soil-Adaptive Formulas",

    // PETROLUBE Lubricants Card
    dist_tag_fluid: "Industrial",
    dist_lubricant_title: "PETROLUBE Lubricants",
    dist_lubricant_desc: "Approved distribution of premium PETROLUBE and NATIONAL heavy-duty automotive engine oils, gear oils, hydraulic fluids, and grease systems. Our lubricant portfolio serves the entire West African market — from mining fleet operators in Guinea to transport companies in Senegal and Mali — providing maximum engine protection, thermal stability, and extended drain intervals across extreme operating conditions.",
    dist_lubricant_f1: "Maximum Wear Protection",
    dist_lubricant_f2: "Thermal Stability",
    dist_lubricant_f3: "Extended Drain Intervals",

    // Global Expansion Card
    dist_tag_expansion: "Global Reach",
    dist_expansion_title: "ECOWAS Market Gateway",
    dist_expansion_desc: "Senegal serves as our strategic gateway to the entire ECOWAS economic region. We are actively expanding our supply footprint across 15 West African nations, building robust logistics pipelines from Saudi Arabia through Dakar to serve growing industrial demands in construction, agriculture, and transportation sectors.",
    dist_expansion_f1: "15 ECOWAS Nations",
    dist_expansion_f2: "Saudi-Dakar Supply Chain",

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
    products_title: "Produits industriels et distribution",
    products_desc: "Matériaux industriels de qualité supérieure des fabricants leaders mondiaux, livrés avec une excellence logistique mondiale.",

    // SABIC Polymers Card
    dist_tag_plastic: "Fabrication",
    dist_hdpe_title: "Polymères SABIC",
    dist_hdpe_desc: "Polymères de polyéthylène haute densité (PEHD) et de polypropylène (PP) essentiels pour l'extrusion-soufflage, le moulage par injection et la fabrication de tuyaux agricoles. Nos grades de polymères SABIC — dont le PEHD F00952 et le PP 500GA — sont spécifiquement sélectionnés pour le marché ouest-africain, soutenant les fabricants d'emballages, les producteurs de tuyaux d'eau et les extrudeurs de films agricoles au Sénégal et dans la région de la CEDEAO.",
    dist_hdpe_f1: "Haute résistance à la traction",
    dist_hdpe_f2: "Excellente résistance chimique",
    dist_hdpe_f3: "Multiples grades de traitement",

    // SABIC Agri-Nutrients Card
    dist_tag_agri: "Agriculture",
    dist_fertilizer_title: "Agro-nutriments SABIC",
    dist_fertilizer_desc: "Distributeur mondial agréé des engrais chimiques et de l'urée agricole de classe mondiale de SABIC, conçus pour maximiser les rendements agricoles sur divers types de sols. Au Sénégal, nos engrais jouent un rôle essentiel dans le soutien du secteur agricole national — des rizières de la Casamance aux exploitations d'arachides du Sine-Saloum — aidant les agriculteurs locaux à améliorer la sécurité alimentaire et la productivité économique dans tout le pays.",
    dist_fertilizer_f1: "Haute teneur en azote",
    dist_fertilizer_f2: "Solubilité optimisée",
    dist_fertilizer_f3: "Formules adaptées aux sols",

    // PETROLUBE Lubricants Card
    dist_tag_fluid: "Industriel",
    dist_lubricant_title: "Lubrifiants PETROLUBE",
    dist_lubricant_desc: "Distribution agréée de lubrifiants premium PETROLUBE et NATIONAL : huiles moteurs lourds, huiles d'engrenages, fluides hydrauliques et systèmes de graisse. Notre portefeuille de lubrifiants dessert l'ensemble du marché ouest-africain — des opérateurs de flottes minières en Guinée aux sociétés de transport au Sénégal et au Mali — offrant une protection maximale du moteur, une stabilité thermique et des intervalles de vidange prolongés dans des conditions de fonctionnement extrêmes.",
    dist_lubricant_f1: "Protection maximale contre l'usure",
    dist_lubricant_f2: "Stabilité thermique",
    dist_lubricant_f3: "Intervalles de vidange prolongés",

    // Global Expansion Card
    dist_tag_expansion: "Portée mondiale",
    dist_expansion_title: "Porte d'entrée du marché de la CEDEAO",
    dist_expansion_desc: "Le Sénégal sert de porte d'entrée stratégique vers l'ensemble de la région économique de la CEDEAO. Nous étendons activement notre empreinte d'approvisionnement dans 15 pays d'Afrique de l'Ouest, construisant des pipelines logistiques robustes de l'Arabie saoudite à travers Dakar pour répondre aux demandes industrielles croissantes dans les secteurs de la construction, de l'agriculture et du transport.",
    dist_expansion_f1: "15 nations de la CEDEAO",
    dist_expansion_f2: "Chaîne d'approvisionnement Arabie-Dakar",

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
    products_title: "المنتجات الصناعية والتوزيع",
    products_desc: "مواد صناعية فاخرة من كبرى الشركات المصنعة العالمية، يتم توصيلها بتميز لوجستي عالمي.",

    // SABIC Polymers Card
    dist_tag_plastic: "التصنيع",
    dist_hdpe_title: "بوليمرات سابك",
    dist_hdpe_desc: "بوليمرات البولي إيثيلين عالي الكثافة (HDPE) والبولي بروبيلين (PP) الأساسية لخطوط سحب الأنابيب والقولبة بالحقن وتصنيع الأنابيب الزراعية. درجات بوليمرات سابك لدينا — بما في ذلك HDPE F00952 وPP 500GA — مختارة خصيصاً لسوق غرب أفريقيا، لدعم مصنعي التعبئة ومنتجي أنابيب المياه ومصنعي الأفلام الزراعية في السنغال ومنطقة الإيكواس.",
    dist_hdpe_f1: "مقاومة شد عالية",
    dist_hdpe_f2: "مقاومة كيميائية ممتازة",
    dist_hdpe_f3: "درجات معالجة متعددة",

    // SABIC Agri-Nutrients Card
    dist_tag_agri: "الزراعة",
    dist_fertilizer_title: "مغذيات سابك الزراعية",
    dist_fertilizer_desc: "موزع عالمي معتمد لأسمدة اليوريا الزراعية والأسمدة الكيماوية الرائدة عالمياً من سابك، المصممة لتعظيم إنتاجية المحاصيل عبر أنواع التربة المتنوعة. في السنغال، تلعب أسمدتنا دوراً حيوياً في دعم القطاع الزراعي الوطني — من حقول الأرز في كازامانس إلى مزارع الفول السوداني في سين-سالوم — مساعدة المزارعين المحليين على تحسين الأمن الغذائي والإنتاجية الاقتصادية في جميع أنحاء البلاد.",
    dist_fertilizer_f1: "محتوى نيتروجين عالي",
    dist_fertilizer_f2: "قابلية ذوبان محسّنة",
    dist_fertilizer_f3: "تركيبات متكيفة مع التربة",

    // PETROLUBE Lubricants Card
    dist_tag_fluid: "صناعي",
    dist_lubricant_title: "زيوت تشحيم بترولوب",
    dist_lubricant_desc: "التوزيع المعتمد لزيوت تشحيم بترولوب وناشيونال الفاخرة: زيوت محركات شاقة، زيوت تروس، سوائل هيدروليكية، وأنظمة شحوم. تخدم محفظة زيوت التشحيم لدينا سوق غرب أفريقيا بالكامل — من مشغلي أساطيل التعدين في غينيا إلى شركات النقل في السنغال ومالي — مما يوفر أقصى حماية للمحرك واستقراراً حرارياً وفترات تصريف ممتدة في ظروف التشغيل القاسية.",
    dist_lubricant_f1: "حماية قصوى من التآكل",
    dist_lubricant_f2: "استقرار حراري",
    dist_lubricant_f3: "فترات تصريف ممتدة",

    // Global Expansion Card
    dist_tag_expansion: "الانتشار العالمي",
    dist_expansion_title: "بوابة سوق الإيكواس",
    dist_expansion_desc: "يعمل السنغال كبوابتنا الاستراتيجية لمنطقة الإيكواس الاقتصادية بأكملها. نعمل بنشاط على توسيع نطاق إمداداتنا عبر 15 دولة في غرب أفريقيا، وبناء خطوط لوجستية قوية من المملكة العربية السعودية عبر داكار لخدمة الطلب الصناعي المتنامي في قطاعات البناء والزراعة والنقل.",
    dist_expansion_f1: "15 دولة في الإيكواس",
    dist_expansion_f2: "سلسلة إمداد سعودية-داكار",

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
