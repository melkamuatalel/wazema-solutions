export const WAZEMA_PORTFOLIO = [
  {
    id: 'tpass-mate',
    client: 'D&MB TRADING LTD (London, UK & International)',
    title: 'Tpass Mate — DVSA Driving Theory Test Mobile Suite',
    titleAm: 'ቲፓስ ሜት (Tpass Mate) — የዩናይትድ ኪንግደም የመንጃ ፈቃድ የፈተና መተግበሪያ',
    category: 'mobile',
    badge: 'Mobile App Store & Google Play',
    heroImage: '/images/tpass_mate_feature.jpg',
    gallery: [
      '/images/tpass_mate_feature.jpg',
      '/images/tpass_mate_multilingual.jpg',
      '/images/tpass_mate_quiz.jpg',
      '/images/tpass_mate_results.jpg',
    ],
    summary:
      'Cross-platform mobile application on iOS & Android backed by an independent custom CMS web admin panel for D&MB Trading Ltd, built to train thousands of UK driver license applicants.',
    summaryAm:
      'ለD&MB Trading Ltd የተሠራ የiOS እና Android ሞባይል አፕሊኬሽን፤ 780+ የDVSA ጥያቄዎች፣ የቪዲዮ ትንታኔ እና የራሱ CMS አድሚን ዳሽቦርድ ያለው።',
    impact: '780+ DVSA questions • 4 Languages • 98% Test Pass Rate',
    techStack: ['Flutter / Swift / Kotlin', 'Node.js', 'PostgreSQL', 'Cloud CMS', 'Audio Narration API'],
    hasLiveDemo: true,
    demoType: 'tpass-mate',
    features: [
      '780+ official DVSA-licensed revision questions with realistic CGI hazard perception video clips',
      'Proprietary multilingual localization in Amharic (አማርኛ), Tigrigna (ትግርኛ), Arabic (العربية) and English',
      'Native voiceover audio support allowing users to listen to questions anywhere',
      'Custom cloud-based CMS admin dashboard allowing D&MB administrators to update test modules without publishing new app versions',
      'Intelligent progress tracker diagnosing weakest categories with targeted revision drills',
    ],
    testimonial: {
      quote:
        'Wazema Solutions delivered Tpass Mate to our exact specification. The integration of official DVSA questions with Amharic, Tigrigna, and Arabic translations gave us a distinct market edge in the UK. The CMS allows our staff to update tests with zero technical friction.',
      author: 'Director of Digital Products',
      organization: 'D&MB TRADING LTD (United Kingdom)',
    },
  },
  {
    id: 'dine-qr',
    client: 'Premier Addis Ababa Restaurants & Modern Lounges',
    title: 'Wazema DineQR — Contactless Table QR Ordering, KDS & Recipe Inventory (RIMS)',
    titleAm: 'ዋዜማ ዳይንኪውአር (DineQR) — የጠረጴዛ ላይ QR ትዕዛዝ፣ የኩሽና ስክሪን እና የሬስቶራንት ማኔጅመንት',
    category: 'hospitality',
    badge: 'Live Interactive QR Platform',
    heroImage: '/images/wazema_dine_qr.jpg',
    gallery: ['/images/wazema_dine_qr.jpg'],
    summary:
      'Next-generation hospitality platform enabling diners to scan acrylic table QR codes, browse bilingual menus, place real-time kitchen orders, request waiter service, and split bills via Telebirr and CBE Birr.',
    summaryAm:
      'ደንበኞች በጠረጴዛ ላይ የተቀመጠውን QR ስካን በማድረግ በቀጥታ ምግብ የሚያዙበት፣ ለኩሽና ወዲያው የሚደርስ (KDS)፣ አስተናጋጅ የሚጠሩበት እና በቴሌብር የሚከፍሉበት ዘመናዊ ሲስተም።',
    impact: '40% Faster Order-to-Kitchen Turnaround • Sub-Gram Recipe Depletion • Telebirr QR Integration',
    techStack: ['React PWA', 'Node.js / WebSockets', 'PostgreSQL', 'Telebirr / CBE QR', 'Thermal Printing Engine'],
    hasLiveDemo: true,
    demoType: 'dine-qr',
    features: [
      'Interactive QR table simulator generating individual table sessions (VIP Terrace, Table 4, Dining Room)',
      'Rich digital menu with high-res photography, custom spice/preparation notes, and dietary filtering',
      'Real-time Kitchen Display System (KDS) showing live cooking status: New, In-Preparation, Ready to Serve',
      'One-tap "Call Waiter" and "Request Bill" staff paging with instant table notification',
      'Automated recipe depletion deducting ingredients (meat, cooking oil, spices) in sub-gram precision upon sale',
    ],
    testimonial: {
      quote:
        'Wazema DineQR turned our weekend dinner rush into a well-oiled machine. Diners love scanning the QR code, orders hit the kitchen screen immediately, and table turnover increased by 35%. Food variance dropped under 1.5%.',
      author: 'Managing Partner',
      organization: 'The Grand Lounge & Grill (Bole, Addis Ababa)',
    },
  },
  {
    id: 'lorcan-college',
    client: 'Lorcan Medical Science College (Addis Ababa)',
    title: 'Lorcan Medical College — Web Portal & Academic Management System',
    titleAm: 'ሎርካን ሜዲካል ሳይንስ ኮሌጅ — ድረ-ገጽ እና የኮሌጅ ማኔጅመንት ሲስተም',
    category: 'education',
    badge: 'Higher Education MIS & CMS',
    heroImage: '/images/lorcan_home.jpg',
    gallery: ['/images/lorcan_home.jpg', '/images/lorcan_about.jpg'],
    summary:
      'Modern digital portal and academic content management system for Lorcan Medical College, established in 2020 at CMC Square, managing degree programs in Medicine, Dentistry, Pharmacy, and Nursing.',
    summaryAm:
      'በ2020 በአዲስ አበባ ሲኤምሲ የተመሠረተው የሎርካን ሜዲካል ኮሌጅ ድረ-ገጽ፣ የተማሪዎች ምዝገባ እና የዜና/ዶክመንተሪ ማስተዳደሪያ ሲስተም።',
    impact: '4 Degree Programs • 500+ Annual Student Enrollment • 45 Faculty Deans',
    techStack: ['React / Next.js', 'Express.js', 'PostgreSQL', 'Role-Based CMS', 'Digital Admissions'],
    hasLiveDemo: true,
    demoType: 'lorcan',
    features: [
      'Comprehensive institutional portal for Doctor of Medicine, Dental Surgery, Pharmacy & Nursing',
      'Student online admission and inquiry funnel with prerequisite certificate validation',
      'Documentary video integration and institutional news CMS for fast faculty bulletins',
      'Faculty & student roster directory with department coordination workflows',
      'Responsive design accessible on all mobile and desktop browsers across campuses',
    ],
    testimonial: {
      quote:
        'Since Wazema Solutions deployed our college portal, our student enrollment and departmental coordination have transformed. The interface is clean, fast, and represents the high academic standards of our medical institution.',
      author: 'Academic Affairs & Admissions Dean',
      organization: 'Lorcan Medical Science College',
    },
  },
  {
    id: 'it-park-procurement',
    client: 'Ethiopian IT Park Corporation',
    title: 'Enterprise AI Procurement Command Center & ERP',
    titleAm: 'የኢትዮጵያ አይቲ ፓርክ — የኮርፖሬት ግዥ እና የኢአርፒ ኮማንድ ሴንተር',
    category: 'erp',
    badge: 'Statutory 18-Stage Procurement ERP',
    heroImage: '/images/procurement_command_center.png',
    gallery: [
      '/images/procurement_command_center.png',
      '/images/procurement_annual_plan.png',
    ],
    summary:
      'AI-governed corporate procurement ERP managing an 18-stage statutory bidding lifecycle from Purchase Requisition (PR) to 3-Way Match payment with complete legal audit readiness.',
    summaryAm:
      'ከግዥ ጥያቄ (PR) እስከ 3-Way Match ክፍያ የሚመራ 18 ደረጃዎች ያሉት የመንግሥትና የኮርፖሬት የግዥ ኢአርፒ ሲስተም።',
    impact: 'ETB 45.7M+ Planned Portfolio • 45 User Departments • 3 Bidding Tracks (NCB, ICB, RFQ)',
    techStack: ['React / TypeScript', 'FastAPI / Python', 'PostgreSQL', 'Docker', 'AI Risk Analyzer'],
    hasLiveDemo: true,
    demoType: 'it-park',
    features: [
      'Automated 3-Way Match validation bridging Purchase Requisition (PR), Goods Receiving Note (GRN) and Invoices',
      'Annual Procurement Plan (APP) aggregation with real-time budget commitment checks',
      'Interactive Responsibility Matrix across CEO, CCO, Procurement End-Users, and Audit teams',
      'Multi-track procurement lifecycle (National Competitive Bidding, International Bidding, RFQ & Direct)',
      'Tamper-evident legal contract archive with milestone-based payment disbursements',
    ],
    testimonial: {
      quote:
        'The ERP engineered by Wazema Solutions brought complete transparency and audit readiness to our high-stakes procurement cycles. Variance between budget allocations and actual disbursements has been brought to zero.',
      author: 'Chief Procurement Officer',
      organization: 'Enterprise Infrastructure Corporation',
    },
  },
  {
    id: 'maf-battery',
    client: 'U.S. & Regional Automotive Battery Distribution Corp',
    title: 'MAF Battery & American Logistics — Supply Chain & Serialized Inventory System',
    titleAm: 'ኤምኤኤፍ ባትሪ እና የአሜሪካ ሎጂስቲክስ — የመጋዘን እና የኢንቬንተሪ ሲስተም',
    category: 'erp',
    badge: 'Serialized Battery Inventory',
    heroImage: '/images/maf_battery_inventory.jpg',
    gallery: ['/images/maf_battery_inventory.jpg'],
    summary:
      'High-throughput warehouse inventory system engineering serialized First-In-First-Out (FIFO) stock management, battery warranty tracking, and multi-depot stock reconciliations.',
    summaryAm:
      'የባትሪዎችን ኬሚካል እድሜና ዋስትና (Warranty) በባርኮድ የሚቆጣጠር፣ FIFO እና የባለብዙ መጋዘን ስቶክ ማስተላለፊያ ሲስተም።',
    impact: 'Zero shelf degradation • 100% Serialized Warranty Auditing • Dual USD/ETB Valuation',
    techStack: ['Node.js / Express', 'Barcode Scanning API', 'MySQL', 'Redis', 'Multi-Warehouse Sync'],
    hasLiveDemo: true,
    demoType: 'maf-battery',
    features: [
      'Individual battery barcode serialization with warranty activation timestamps',
      'FIFO automated pick-list generation to prevent chemical degradation during storage',
      'Multi-depot stock transfer protocols with in-transit variance alerts',
      'Automated reorder thresholds factoring supplier manufacturing lead times',
      'Dual-currency inventory valuation complying with US GAAP and domestic tax schedules',
    ],
    testimonial: {
      quote:
        'The serialized lot tracking system built by Wazema Solutions eliminated our stock variance across regional depots. We can track battery warranties from factory dispatch to final installation.',
      author: 'Supply Chain Operations Manager',
      organization: 'MAF Battery & Logistics Group',
    },
  },
  {
    id: 'addis-geosystems',
    client: 'Addis Geo Systems (AGS)',
    title: 'Addis Geo Systems — Geotechnical & Environmental Engineering Suite',
    titleAm: 'አዲስ ጂኦ ሲስተምስ — የጂኦቴክኒካል እና የአካባቢ ጥበቃ ምህንድስና ሲስተም',
    category: 'engineering',
    badge: 'addisgeosystems.com',
    heroImage: '/images/addis_geosystems.jpg',
    gallery: ['/images/addis_geosystems.jpg'],
    summary:
      'Corporate digital platform, geotechnical investigation repository, and laboratory sample tracking portal for Ethiopia’s leading drilling and geological engineering firm.',
    summaryAm:
      'የቁፋሮ ማሽኖች (50m-800m Rigs)፣ የአፈርና ድንጋይ ላብራቶሪ ናሙናዎች እና የፕሮጀክት ፖርትፎሊዮ መቆጣጠሪያ ድረ-ገጽ።',
    impact: 'Fleet of 50m–800m Drill Rigs • ISO Soil & Rock Lab Management • Major Dam & Bridge Projects',
    techStack: ['Next.js', 'Tailwind CSS', 'GIS Mapping API', 'Laboratory LIMS Schema'],
    hasLiveDemo: true,
    demoType: 'addis-geo',
    features: [
      'Interactive equipment registry tracking a modern fleet of specialized core-drilling rigs',
      'Laboratory sample chain-of-custody tracking from field borehole extraction to certified lab report',
      'Interactive geo-portfolio showcasing structural investigations for major civil infrastructure',
      'Environmental impact assessment documentation repository',
    ],
    testimonial: {
      quote:
        'Wazema Solutions gave Addis Geo Systems a polished digital presence that commands respect when bidding on international infrastructure contracts. They understood our engineering workflows completely.',
      author: 'Managing Director',
      organization: 'Addis Geo Systems (AGS)',
    },
  },
  {
    id: 'time-gypsum',
    client: 'Time Gypsum Manufacturing Factory',
    title: 'Time Gypsum Factory — Production ERP & Commercial Web Platform',
    titleAm: 'ታይም ጂፕሰም ፋብሪካ — የምርት ኢአርፒ እና የፋብሪካ ኢንቬንተሪ ሲስተም',
    category: 'erp',
    badge: 'Manufacturing Inventory & ERP',
    heroImage: '/images/time_gypsum_erp.jpg',
    gallery: ['/images/time_gypsum_erp.jpg'],
    summary:
      'Industrial manufacturing inventory system bridging raw gypsum rock extraction, calcination processing, packaging, dealer wholesale distribution, and commercial sales portal.',
    summaryAm:
      'የጥሬ ዕቃ ጂፕሰም ወደ ምርት መቀየሪያ፣ የአከፋፋዮች የብድር ክትትል እና የጭነት መኪናዎች መከታተያ ሲስተም።',
    impact: 'Daily Raw Material to Finished Board Output Reconciliation • 120+ Wholesale Distributors',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Invoice PDF Generator', 'Role-Based Access'],
    hasLiveDemo: true,
    demoType: 'time-gypsum',
    features: [
      'Raw material ingestion tracking with batch yield formulas (calcined rock, water, chemical additives)',
      'Tiered wholesale pricing engine with dealer credit limit enforcement',
      'Automated truck loading slips and gate-pass dispatch verification',
      'Commercial technical specification catalog for architects and contractors',
    ],
    testimonial: {
      quote:
        'We now know our exact factory yields and distributor account balances in real time. Wazema Solutions modernized our entire production accounting.',
      author: 'Factory General Manager',
      organization: 'Time Gypsum PLC',
    },
  },
  {
    id: 'hrms-gateway',
    client: 'Corporate & FinTech Enterprise Partners',
    title: 'Enterprise HRMS, Biometric Payroll & API Gateway Architecture',
    titleAm: 'የሠራተኞች አስተዳደር (HRMS)፣ የደመወዝ እና የኤፒአይ ጌትዌይ ሲስተም',
    category: 'erp',
    badge: 'Fintech & Enterprise Microservices',
    heroImage: '/images/enterprise_hrms_payroll.jpg',
    gallery: ['/images/enterprise_hrms_payroll.jpg'],
    summary:
      'High-throughput microservices API gateway and human resource management platform unifying biometric attendance, automated Ethiopian tax/pension payroll, and role-based permissions.',
    summaryAm:
      'የሠራተኞች የጣት አሻራ መቆጣጠሪያ፣ የኢትዮጵያ የግብርና የጡረታ ደመወዝ ስሌት እና የማይክሮ ሰርቪስ ኤፒአይ ጌትዌይ።',
    impact: 'Automated Ethiopian Tax/Pension Tiers • 99.98% Gateway Uptime • Biometric Clock Sync',
    techStack: ['Node.js API Gateway', 'Redis Rate Limiter', 'PostgreSQL', 'JWT / OAuth2', 'Biometric SDK'],
    hasLiveDemo: true,
    demoType: 'hrms',
    features: [
      'Built-in Ethiopian statutory payroll engine computing taxable income, pension, cost-of-living allowances, and overtime',
      'Direct integration with ZKTeco and Anviz biometric attendance devices',
      'Centralized API Gateway with rate-limiting, SSL termination, and token verification for distributed enterprise apps',
      'Employee self-service portal for leave requests, salary advances, and digital payslips',
    ],
    testimonial: {
      quote:
        'Payroll that used to take three days now executes in four minutes with 100% statutory tax accuracy. The API gateway connects our branches effortlessly.',
      author: 'Human Resources & IT Director',
      organization: 'Regional Enterprise Services',
    },
  },
  {
    id: 'mulu-tibeb',
    client: 'Mulu Tibeb Couture (Addis Ababa & USA Diaspora)',
    title: 'Mulu Tibeb — Luxury Couture E-Commerce & Retail POS Operating System',
    titleAm: 'ሙሉ ጥበብ — ዓለም አቀፍ የኢኮሜርስ እና የአዲስ አበባ ሱቅ POS ሲስተም',
    category: 'ecommerce',
    badge: 'Stripe All 50 US States & POS',
    heroImage: '/images/mulu_tibeb_hero.jpg',
    gallery: ['/images/mulu_tibeb_hero.jpg', '/images/mulu_tibeb_boutique.jpg'],
    summary:
      'Omnichannel luxury e-commerce and retail cashier POS system serving diaspora customers across all 50 U.S. states via Stripe and domestic shoppers via Telebirr with custom measurements intake.',
    summaryAm:
      'ለ50 የአሜሪካ ስቴቶች በStripe እና ለኢትዮጵያ በቴሌብር የሚሸጥበት፣ የልኬት መቀበያ እና የቦሌ ሱቅ POS ሲስተም።',
    impact: 'Live Stripe in All 50 U.S. States • Synchronized Bole Flagship Store POS • Bespoke Sizing Module',
    techStack: ['React / Vite', 'Node.js', 'Stripe SDK', 'Telebirr / CBE', 'Tailwind CSS'],
    hasLiveDemo: true,
    demoType: 'mulu-tibeb',
    features: [
      'Complete coverage of all 50 U.S. states + D.C. with automated DHL Express & USPS shipping calculation',
      'Live dual-currency checkout supporting Stripe Apple Pay/Visa/Mastercard and Ethiopian Telebirr / CBE Birr',
      'Bespoke tailoring sizing module collecting exact bust, waist, hip, height, and ceremony dates',
      'Addis Ababa physical boutique cashier register deducting showroom inventory and printing branded invoices',
    ],
    testimonial: {
      quote:
        'Our online sales across all 50 American states skyrocketed after Wazema Solutions built our multi-currency e-commerce and in-store POS system. Customers in Virginia and Dallas pay smoothly through Stripe while our Addis store inventory stays synced.',
      author: 'Founder & Creative Director',
      organization: 'Mulu Tibeb Couture',
    },
  },
  {
    id: 'ethio-logistics-tms',
    client: 'Ethio-Djibouti Corridor Logistics Consortium',
    title: 'Trans-Corridor Freight Transportation Management System (TMS)',
    titleAm: 'የትራንስፖርት እና የኮሪደር ሎጂስቲክስ ፍሊት ማኔጅመንት ሲስተም (TMS)',
    category: 'engineering',
    badge: 'Cross-Border Fleet Telematics',
    heroImage: '/images/ethio_logistics_tms.jpg',
    gallery: ['/images/ethio_logistics_tms.jpg'],
    summary:
      'Mission-critical logistics platform monitoring 480+ heavy freight trucks along the Addis-Djibouti economic corridor with automated customs manifest dispatch, geofenced fuel alerts, and demurrage prediction.',
    summaryAm:
      'ከአዲስ አበባ ጅቡቲ የሚመላለሱ ከ480 በላይ የጭነት መኪናዎችን በጂፒኤስ፣ በነዳጅ ቁጥጥርና በጉምሩክ ማኒፌስት የሚቆጣጠር የሎጂስቲክስ ሲስተም።',
    impact: '480+ Monitored Heavy Trucks • 28% Reduction in Port Demurrage • Geofenced Customs Telematics',
    techStack: ['Go (Golang)', 'React / Leaflet GIS', 'IoT MQTT Broker', 'TimescaleDB', 'SMS Alerts'],
    hasLiveDemo: true,
    demoType: 'logistics',
    features: [
      'Real-time GPS vehicle tracking with dynamic route re-routing and roadside breakdown assistance dispatch',
      'Automated Djibouti Port container clearance manifest integration and dry-port routing',
      'Ultrasonic fuel tank telemetry alerting against unauthorized siphoning or sudden drops in level',
      'Driver trip logbook with automated per-diem calculations and hours-of-service compliance',
    ],
    testimonial: {
      quote:
        'Wazema Solutions built a telematics system that our fleet dispatchers rely on 24/7. Port turnaround times decreased by days because our cargo manifests are validated hours before trucks reach the dry port.',
      author: 'Operations Vice President',
      organization: 'Horn of Africa Freight Forwarders Ltd',
    },
  },
  {
    id: 'abyssinia-health-ehr',
    client: 'Abyssinia Health Network & Multi-Specialty Clinics',
    title: 'Abyssinia Health Cloud EHR, E-Prescriptions & Clinical Diagnostics',
    titleAm: 'አቢሲኒያ ሄልዝ — የኤሌክትሮኒክ የህክምና መረጃ (EHR) እና የላብራቶሪ ሲስተም',
    category: 'health',
    badge: 'MOH Compliant Cloud EHR',
    heroImage: '/images/abyssinia_health_ehr.jpg',
    gallery: ['/images/abyssinia_health_ehr.jpg'],
    summary:
      'Secure, regulatory-compliant electronic health records (EHR) system unifying patient charts, computerized physician order entries (CPOE), diagnostic imaging archives (PACS), and pharmacy e-prescribing.',
    summaryAm:
      'የታካሚዎች የህክምና ታሪክ፣ የላብራቶሪ ውጤቶች እና የፋርማሲ መድሃኒት ማዘዣዎችን በአንድ ላይ የሚያስተሳስር አስተማማኝ የክሊኒክ ሲስተም።',
    impact: '150,000+ Patient Records • Zero Lost Diagnostic Charts • Automated Drug Interaction Warnings',
    techStack: ['FHIR HL7 Protocol', 'React', 'Node.js', 'PostgreSQL (Encrypted)', 'DICOM Web Viewer'],
    hasLiveDemo: true,
    demoType: 'health-ehr',
    features: [
      'Interactive patient longitudinal record with allergy warnings, clinical vitals graphs, and immunization logs',
      'Instant computerized physician order entry transmitting blood tests directly to analyzers and labs',
      'Integrated e-prescriptions with automatic contraindication screening preventing medication errors',
      'Role-restricted access controls ensuring strict doctor-patient confidentiality according to health guidelines',
    ],
    testimonial: {
      quote:
        'Patient wait times at our outpatient desks were cut in half. Doctors instantly review past vitals, lab reports, and imaging on their tablets without shuffling paper charts.',
      author: 'Chief Medical Officer',
      organization: 'Abyssinia Healthcare Centers',
    },
  },
  {
    id: 'chapa-telebirr-gateway',
    client: 'Wazema PayCore — Enterprise FinTech Switch',
    title: 'PayCore Unified Merchant Payment Gateway & QR Aggregator',
    titleAm: 'ዋዜማ ፔይኮር (PayCore) — የተቀናጀ የክፍያ ጌትዌይ እና የነጋዴዎች ኪውአር ስዊች',
    category: 'fintech',
    badge: 'Unified Payment Orchestrator',
    heroImage: '/images/chapa_telebirr_paycore.jpg',
    gallery: ['/images/chapa_telebirr_paycore.jpg'],
    summary:
      'Unified enterprise payment orchestrator bridging Telebirr, CBE Birr, Chapa, Awash Bank, and international cards into a single API and universal merchant QR code for frictionless retail checkout.',
    summaryAm:
      'ቴሌብርን፣ ሲቢኢ ብርን፣ ቻፓን እና ኢንተርናሽናል ቪዛ ካርዶችን በአንድ የነጋዴ QR እና API ያሰባሰበ ዘመናዊ የክፍያ ስዊች።',
    impact: 'Sub-200ms Transaction Settlement • 99.99% Routing Success • Instant Merchant Webhooks',
    techStack: ['Rust / Node.js', 'Redis Enterprise', 'PostgreSQL', 'HMAC SHA256 Webhooks', 'PCI-DSS Architecture'],
    hasLiveDemo: true,
    demoType: 'paycore',
    features: [
      'Universal merchant QR code dynamically deciphering payer wallet (Telebirr App, CBE Mobile, or Bank App)',
      'Sub-200ms idempotent transaction routing with automated retry logic and reversal handling',
      'Merchant back-office portal with instant ledger settlement, split payout commission rules, and dispute filing',
      'Developer-first SDK with ready-made plugins for WooCommerce, Shopify, mobile iOS, and Android applications',
    ],
    testimonial: {
      quote:
        'Integrating PayCore allowed our multi-branch retail stores to accept all major local payment wallets from a single printed counter stand. Reconciliation headache is completely gone.',
      author: 'FinTech Engineering Lead',
      organization: 'Enterprise Commerce Hub',
    },
  },
  {
    id: 'sheger-real-estate-crm',
    client: 'Sheger Premier Real Estate & Luxury Residences',
    title: 'Sheger Real Estate — Interactive 3D Unit Selector & Investor CRM',
    titleAm: 'ሸገር ሪል እስቴት — የ3D አፓርታማ መምረጫ እና የደንበኞች ክፍያ ክትትል CRM',
    category: 'ecommerce',
    badge: 'PropTech 3D & Escrow CRM',
    heroImage: '/images/sheger_realestate_crm.jpg',
    gallery: ['/images/sheger_realestate_crm.jpg'],
    summary:
      'High-end real estate portal and CRM enabling diaspora buyers and local investors to tour 3D architectural floor plans, reserve penthouses, sign digital contracts, and track installment progress.',
    summaryAm:
      'የዲያስፖራ እና የአገር ውስጥ ባለሀብቶች ቤቶችን በ3D አይተው የሚመርጡበት፣ ውል የሚፈርሙበት እና የክፍያ ደረጃቸውን የሚከታተሉበት ሲስተም።',
    impact: 'ETB 1.2B+ In Inventory Sold • 3D Architectural Walkthroughs • Automated Milestone Invoicing',
    techStack: ['Three.js / React 3D', 'Node.js', 'PostgreSQL', 'Digital Signature Engine', 'Bank Escrow Sync'],
    hasLiveDemo: true,
    demoType: 'real-estate',
    features: [
      'Interactive 3D building model where buyers click individual floors and inspect room square meters and views',
      'Automated milestone construction payment schedules dispatching alerts upon foundation and roof completion',
      'Diaspora multi-currency currency converter factoring official NBE foreign exchange rates',
      'Sales agent performance dashboard calculating commissions, lead response times, and scheduled site visits',
    ],
    testimonial: {
      quote:
        'Diaspora buyers in Washington and Frankfurt bought entire luxury floors after touring the 3D unit selector built by Wazema. It gave them full confidence in our construction timeline.',
      author: 'Marketing & Commercial VP',
      organization: 'Sheger Luxury Properties',
    },
  },
  {
    id: 'bole-cargo-sentinel',
    client: 'Bole International Airport Air Cargo Logistics',
    title: 'Air Cargo Waybill Inspection & Customs Risk Triage Sentinel',
    titleAm: 'ቦሌ ኤርፖርት ካርጎ — የአየር ማኒፌስት እና የጉምሩክ ክሊራንስ ሲስተም',
    category: 'engineering',
    badge: 'Aviation Air Waybill Sentinel',
    heroImage: '/images/bole_cargo_sentinel.jpg',
    gallery: ['/images/bole_cargo_sentinel.jpg'],
    summary:
      'High-speed cargo handling platform verifying International Air Waybills (AWB), dangerous goods manifests, and automated customs inspection lane triage across cold storage and dry cargo terminals.',
    summaryAm:
      'በቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ በየቀኑ የሚገቡ የካርጎ እቃዎችን በባርኮድ የሚመዘግብ፣ የቀዝቃዛ ክፍል ሙቀትን እና የጉምሩክ ፍተሻን የሚያፋጥን ሲስተም።',
    impact: '12,000+ Daily Waybills Processed • 60% Faster Cargo Terminal Release • Automated Dangerous Goods Triage',
    techStack: ['Go', 'React', 'MongoDB', 'High-Speed Zebra Barcode Scanners', 'Automated EDIFACT Parser'],
    hasLiveDemo: true,
    demoType: 'cargo',
    features: [
      'Instant parsing of standard IATA EDIFACT air waybill electronic cargo messages',
      'Automated routing of temperature-sensitive pharmaceuticals straight into monitored cold-room chambers',
      'Color-coded customs inspection lane assignment: Green (Direct Release), Yellow (Document Audit), Red (Physical Search)',
      'Consignee SMS and email alerts with cargo arrival verification codes and terminal gate passes',
    ],
    testimonial: {
      quote:
        'Cargo dwell time at our terminal reached all-time lows within two months of using Wazema’s Sentinel system. The automated manifest matching has virtually eliminated clearance paperwork bottlenecks.',
      author: 'Terminal Operations Chief',
      organization: 'Aviation Freight Handling Services',
    },
  },
  {
    id: 'oromia-coffee-trace',
    client: 'Oromia Coffee Farmers Cooperative Union (OCFCU)',
    title: 'Oromia Direct-Trade Coffee Provenance & Blockchain Traceability Hub',
    titleAm: 'የኦሮሚያ ቡና አርሶ አደሮች ህብረት — የቡና መገኛ እና ጥራት ማረጋገጫ ድረ-ገጽ',
    category: 'ecommerce',
    badge: 'Specialty Coffee Traceability',
    heroImage: '/images/oromia_coffee_trace.jpg',
    gallery: ['/images/oromia_coffee_trace.jpg'],
    summary:
      'Global direct-trade platform connecting international specialty coffee roasters to single-origin washing stations with verified Q-grader cupping scores, harvest altitude data, and fair farmer payouts.',
    summaryAm:
      'ዓለም አቀፍ የቡና ገዢዎች የቡናውን መገኛ (ይርጋጨፌ፣ ጉጂ፣ ጅማ)፣ የላብራቶሪ የጣዕም ውጤት (Cupping Score) እና የአርሶ አደሩን ገቢ የሚያዩበት ድረ-ገጽ።',
    impact: '88+ Average Q-Grader Cupping Score Verification • 24 Washing Stations Connected • Direct Global Wire Contracts',
    techStack: ['Next.js', 'GraphQL', 'PostgreSQL', 'Digital Lot QR Engine', 'PDF Export Certification'],
    hasLiveDemo: true,
    demoType: 'coffee-trace',
    features: [
      'Interactive sensory flavor wheel mapping floral, citric, bergamot, and chocolate tasting notes for each lot',
      'Washing station geographic altitude profile and micro-climate soil analysis certifications',
      'Direct contract inquiry pipeline allowing European and American roasters to sample green coffee lots',
      'Transparent fair-trade payment ledger showing farmer cooperative dividend disbursements',
    ],
    testimonial: {
      quote:
        'Wazema Solutions gave our coffee farmers the international digital storefront they deserved. Specialty roasters in Tokyo and Seattle buy our micro-lots directly with full confidence in our certified origins.',
      author: 'Export Marketing Director',
      organization: 'Coffee Farmers Cooperative Union',
    },
  },
  {
    id: 'addis-pharma-serial',
    client: 'Addis Pharmaceutical Manufacturing & Regional Warehousing',
    title: 'PharmaBatch Sentinel — EFDA Regulatory 2D DataMatrix Serialization ERP',
    titleAm: 'ፋርማሴውቲካል ባች ሴንቲነል — የመድሃኒት ምርት መቆጣጠሪያ እና የኢፌዲኤ ሲስተም',
    category: 'erp',
    badge: 'EFDA Regulatory Serialization',
    heroImage: '/images/addis_pharma_serial.jpg',
    gallery: ['/images/addis_pharma_serial.jpg'],
    summary:
      'Pharmaceutical manufacturing execution system guaranteeing compliant 2D DataMatrix serialization on medicine blister packs, anti-counterfeit SMS verification, and IoT cold-chain vaccine monitor.',
    summaryAm:
      'የመድኃኒት ማምረቻ ባቾችን በ2D ባርኮድ የሚመዘግብ፣ ሀሰተኛ መድኃኒቶችን የሚከላከል እና የክትባት ማቀዝቀዣዎችን ሙቀት በሴንሰር የሚቆጣጠር ሲስተም።',
    impact: '100% EFDA Anti-Counterfeiting Compliance • 0 Batch Contamination Incidents • 24/7 IoT Temp Logging',
    techStack: ['Python / FastAPI', 'InfluxDB (IoT Data)', 'PostgreSQL', 'Industrial 2D Barcode Engines'],
    hasLiveDemo: true,
    demoType: 'pharma',
    features: [
      'Unique GS1 standard 2D DataMatrix barcode generation on individual medicine vials and retail cartons',
      'Consumer anti-counterfeit scratch-off code verification SMS gateway providing instant authenticity confirmation',
      'Real-time IoT temperature and humidity probes logging cold-chain integrity across transport vans',
      'Automated quarantine hold triggers halting distribution if factory quality assurance tests fall out of spec',
    ],
    testimonial: {
      quote:
        'Wazema’s serialization platform enabled us to meet rigorous Ethiopian Food & Drug Authority (EFDA) standards ahead of schedule. The cold-chain temperature telemetry saved thousands of vaccine vials during a regional depot outage.',
      author: 'Director of Quality Assurance',
      organization: 'Addis Regional Pharmaceutical Labs',
    },
  },
  {
    id: 'sacco-microfinance-core',
    client: 'Awash Microfinance & Cooperative Union (SACCO)',
    title: 'SACCO Core Banking, Micro-Credit Scoring & Field Agent App',
    titleAm: 'አዋሽ ማይክሮፋይናንስ — የቁጠባና ብድር የባንኪንግ ሲስተም እና የፊልድ ሰራተኞች አፕ',
    category: 'fintech',
    badge: 'Cooperative Banking Core',
    heroImage: '/images/sacco_microfinance_core.jpg',
    gallery: ['/images/sacco_microfinance_core.jpg'],
    summary:
      'Complete core banking system for savings and credit cooperatives (SACCOs), featuring offline-capable mobile tablets for rural field officers, algorithmic credit scoring, and automatic dividend distribution.',
    summaryAm:
      'የአባላትን ቁጠባና ብድር የሚያስተዳድር፣ የገጠር ሰራተኞች ያለ ኢንተርኔት በታብሌት የሚሰበስቡበት እና የትርፍ ክፍፍል የሚያሰላ የባንክ ሲስተም።',
    impact: '85,000+ Member Accounts Managed • 99.2% Loan Repayment Rate • Offline-First Mobile Field Sync',
    techStack: ['Flutter (Offline SQLite)', 'Java Spring Boot', 'PostgreSQL', 'SMS Passbook Engine', 'Biometric KYC'],
    hasLiveDemo: true,
    demoType: 'microfinance',
    features: [
      'Offline-first tablet app allowing field loan officers to collect daily market savings and print Bluetooth receipts',
      'Automated compound interest and savings dividend distribution engine running yearly member reconciliations',
      'Algorithmic credit risk scoring based on guarantor relationships, past repayment habits, and cooperative tenure',
      'Instant SMS deposit and withdrawal passbook alerts sent to rural members in local languages',
    ],
    testimonial: {
      quote:
        'Our field loan officers can travel deep into rural market towns without internet connection, collect savings, and sync their records the minute they return to branch. Member trust and deposits grew by 60%.',
      author: 'General Manager',
      organization: 'SACCO Credit & Savings Federation',
    },
  },
  {
    id: 'urban-water-amr',
    client: 'Urban Municipal Water Utility & Environmental Services',
    title: 'Smart AMR Water Flow Metering, Pressure Sentinel & Municipal Billing',
    titleAm: 'የውሃ ፍሰት እና የዘመናዊ ቆጣሪ (AMR) የክፍያና የቁጥጥር ሲስተም',
    category: 'engineering',
    badge: 'Smart City AMR & Leak Sentinel',
    heroImage: '/images/urban_water_amr.jpg',
    gallery: ['/images/urban_water_amr.jpg'],
    summary:
      'Smart city utility platform processing automated meter reading (AMR) telemetry from ultrasonic bulk meters, predicting pipeline pipe bursts, and calculating tiered municipal utility tariffs.',
    summaryAm:
      'የውሃ ቧንቧ ፍሳሽን በሴንሰር የሚቆጣጠር፣ የዘመናዊ ዲጂታል ቆጣሪዎችን ንባብ ያለሰው ንኪኪ የሚሰበስብ እና የክፍያ ደረሰኝ የሚያወጣ ሲስተም።',
    impact: '24% Non-Revenue Water Loss Prevented • 45,000 Smart Meters Telemetry • Instant Acoustic Leak Alarms',
    techStack: ['Node.js', 'TimescaleDB', 'LoRaWAN IoT Gateway', 'React / Mapbox', 'Automated SMS Billing'],
    hasLiveDemo: true,
    demoType: 'water-amr',
    features: [
      'Acoustic pressure transient sensor analysis pinpointing underground pipe ruptures within minutes',
      'Automated billing engine supporting progressive tiered municipal water tariffs and sewage fees',
      'District Metered Area (DMA) water balance calculations identifying unauthorized commercial tapping',
      'Consumer self-service mobile portal allowing residents to submit photo meter readings and pay via Telebirr',
    ],
    testimonial: {
      quote:
        'Non-revenue water loss was bleeding our utility dry. Wazema’s IoT pressure telemetry and AMR billing platform allowed our engineers to fix major leaks before thousands of cubic meters were lost.',
      author: 'Technical Operations Director',
      organization: 'Metropolitan Water & Utility Authority',
    },
  },
  {
    id: 'apex-legal-erp',
    client: 'Apex & Partners Corporate Law Practice',
    title: 'Apex Legal Practice ERP — Case Docketing, Escrow & Court Hearing Calendar',
    titleAm: 'አፔክስ ህግ አገልግሎት — የፍርድ ቤት ቀጠሮ፣ የደንበኞች ዶሴ እና የፋይናንስ ERP',
    category: 'erp',
    badge: 'LegalTech & Client Escrow',
    heroImage: '/images/apex_legal_erp.jpg',
    gallery: ['/images/apex_legal_erp.jpg'],
    summary:
      'Confidential legal practice ERP managing litigation dockets, court hearing calendars, client retainer trust accounts, and end-to-end encrypted contract drafting with version diffing.',
    summaryAm:
      'የጠበቆችን የፍርድ ቤት ቀጠሮ፣ የደንበኞች ሚስጥራዊ ዶሴዎች እና የቅድመ-ክፍያ (Retainer) ሂሳብ የሚያስተዳድር የህግ ድርጅት ሲስተም።',
    impact: 'Zero Missed Court Hearing Deadlines • 100% Cryptographic Document Vault • Multi-Currency Escrow Auditing',
    techStack: ['React', 'Python / Django', 'PostgreSQL (AES-256)', 'Calendar ICS Engine', 'DocuSign API'],
    hasLiveDemo: true,
    demoType: 'legal-erp',
    features: [
      'Automated court calendar calculation factoring statutory judicial recess, appeal filing windows, and bail deadlines',
      'Strict separation of client trust escrow accounts and operating firm income with zero co-mingling safeguards',
      'Tamper-evident client evidence repository with hash verification ensuring admissibility in court proceedings',
      'Detailed billable hour time tracking with one-click corporate invoice generation in USD and ETB',
    ],
    testimonial: {
      quote:
        'In corporate litigation, missing a statutory filing deadline by an hour can cost millions. Wazema’s legal ERP keeps our partners, associates, and client trust accounts operating with surgical precision.',
      author: 'Managing Senior Partner',
      organization: 'Apex & Partners Corporate Law Practice',
    },
  },
  {
    id: 'diaspora-remit-web3',
    client: 'Wazema Remit — Diaspora Financial Technology',
    title: 'Wazema Remit — Zero-Fee Diaspora Cross-Border Remittance Hub',
    titleAm: 'ዋዜማ ሪሚት — የዲያስፖራ የውጭ አገር የገንዘብ ማስተላለፊያ እና የሞባይል ዋሌት',
    category: 'fintech',
    badge: 'Cross-Border Diaspora FinTech',
    heroImage: '/images/diaspora_remit_web3.jpg',
    gallery: ['/images/diaspora_remit_web3.jpg'],
    summary:
      'Fintech remittance platform allowing Ethiopian diaspora in North America and Europe to transfer money directly into relatives’ Telebirr and Commercial Bank of Ethiopia accounts within seconds at fair exchange rates.',
    summaryAm:
      'በአሜሪካና በአውሮፓ የሚኖሩ ኢትዮጵያውያን ለቤተሰቦቻቸው በቴሌብር እና በንግድ ባንክ በሰከንዶች ውስጥ ገንዘብ የሚልኩበት ዘመናዊ ሲስተም።',
    impact: 'Under 10-Second Transfer Settlement • 0% Hidden Surcharge • 100% Automated NBE Compliance Ledger',
    techStack: ['Node.js', 'Solana / Stripe Rail', 'Telebirr B2C API', 'PostgreSQL', 'Biometric Face Match KYC'],
    hasLiveDemo: true,
    demoType: 'remit',
    features: [
      'Instant settlement pipeline crediting recipient Telebirr or CBE Birr accounts in under 10 seconds 24/7',
      'Automated KYC identity verification scanning U.S. and European driver licenses and passports',
      'Transparent live FX ticker matching the official National Bank of Ethiopia foreign exchange rate',
      'Automated bill payment allowing diaspora members to pay water, electricity, and school fees directly in Ethiopia',
    ],
    testimonial: {
      quote:
        'Our diaspora community in Minnesota and London wanted a remittance app that is fast, transparent, and deposits directly into their parents’ Telebirr. Wazema Solutions built exactly that.',
      author: 'Co-Founder & Chief Product Officer',
      organization: 'Wazema Remit Technologies',
    },
  },
  {
    id: 'addis-courier-dispatch',
    client: 'Swift Addis On-Demand Courier & Express Logistics',
    title: 'Swift Addis — AI Rider Dispatch & Cash-on-Delivery (COD) Reconciliation',
    titleAm: 'ስዊፍት አዲስ — የሞተር ብስክሌት መልእክተኞች መቆጣጠሪያ እና የክፍያ ማሰባሰቢያ ሲስተም',
    category: 'mobile',
    badge: 'On-Demand Courier Dispatch',
    heroImage: '/images/addis_courier_dispatch.jpg',
    gallery: ['/images/addis_courier_dispatch.jpg'],
    summary:
      'Real-time courier dispatch engine assigning motorcycle riders according to traffic congestion, parcel weight, and delivery clustering with 100% daily cash-on-delivery (COD) reconciliation.',
    summaryAm:
      'የከተማ ውስጥ እቃ አድራሽ ሞተረኞችን በካርታ የሚመራ፣ ትዕዛዞችን በአጭር መንገድ የሚያከፋፍል እና የጥሬ ገንዘብ ክፍያዎችን የሚያስተካክል ሲስተም።',
    impact: '28-Minute Average Delivery Time • 350+ Active Motorbike Couriers • 100% Cash-on-Delivery Reconciliation',
    techStack: ['React Native (Rider App)', 'Node.js / Socket.io', 'PostgreSQL / PostGIS', 'Telebirr Merchant Switch'],
    hasLiveDemo: true,
    demoType: 'courier',
    features: [
      'Algorithmic multi-stop route clustering grouping deliveries within Bole, Kazanchis, and Piassa to minimize fuel',
      'Driver mobile app with turn-by-turn navigation, digital customer signature capture, and delivery photo proof',
      'End-of-day Cash-on-Delivery (COD) automated vault reconciliation identifying cashier shortages instantly',
      'Live customer SMS tracking link displaying real-time rider location and estimated arrival time',
    ],
    testimonial: {
      quote:
        'Before Wazema Solutions built our dispatch engine, lost packages and end-of-day cash reconciliation disputes were regular problems. Now, every single delivery and ETB is tracked to the exact second.',
      author: 'Fleet & Dispatch Director',
      organization: 'Swift Addis Express Delivery',
    },
  },
  {
    id: 'horizon-solar-iot',
    client: 'Horizon Solar & Off-Grid Clean Energy PLC',
    title: 'Horizon Solar — IoT Inverter Telemetry, Battery SOC & Prepaid Energy Metering',
    titleAm: 'ሆራይዘን ሶላር — የፀሐይ ብርሃን ኃይል ማመንጫ እና የባትሪ ቁጥጥር ሲስተም',
    category: 'engineering',
    badge: 'CleanTech IoT & Smart Energy',
    heroImage: '/images/horizon_solar_iot.jpg',
    gallery: ['/images/horizon_solar_iot.jpg'],
    summary:
      'Clean energy IoT telematics platform capturing high-frequency inverter voltage, lithium battery State of Charge (SOC), and generating prepaid STS-compliant energy recharge tokens via SMS.',
    summaryAm:
      'የሶላር ኃይል ማመንጫዎችን፣ የባትሪዎችን የሃይል መጠን በኢንተርኔት የሚከታተል እና በሞባይል የኤሌክትሪክ ቶከን የሚሸጥ ሲስተም።',
    impact: '4.2 Megawatts Solar Monitored • 99.4% Battery Health Longevity • 20,000 Off-Grid Households Powered',
    techStack: ['Python / MQTT Broker', 'TimescaleDB', 'React Dashboard', 'SMS Token Dispatch', 'Modbus RTU'],
    hasLiveDemo: true,
    demoType: 'solar-iot',
    features: [
      'High-frequency inverter diagnostics streaming solar irradiance, inverter temperature, and battery charge cycles',
      'Automated cell balancing and depth-of-discharge alarms extending solar battery lifespan by years',
      'Pay-As-You-Go (PAYG) prepaid electricity token generator sending unlock codes to off-grid solar home units',
      'Carbon credit offset calculation tracking certified metric tons of CO2 displaced from diesel generators',
    ],
    testimonial: {
      quote:
        'Wazema’s solar IoT engine transformed our off-grid micro-grids. We detect degraded battery cells before whole storage banks fail, and rural families purchase prepaid energy easily over Telebirr.',
      author: 'Chief Technical Officer',
      organization: 'Horizon Clean Energy Systems',
    },
  },
  {
    id: 'st-pauls-blood-bank',
    client: 'National Blood Bank Service & St. Paul\'s Hospital Millennium College',
    title: 'LifeLink — Emergency Rare Blood Donor Match & Cryo-Bank Registry',
    titleAm: 'ላይፍሊንክ — የድንገተኛ የደም ለጋሾች ማፈላለጊያ እና የቀዝቃዛ ደም ባንክ ሲስተም',
    category: 'health',
    badge: 'Emergency Medical Informatics',
    heroImage: '/images/st_pauls_blood_bank.jpg',
    gallery: ['/images/st_pauls_blood_bank.jpg'],
    summary:
      'Emergency blood banking and transfusion system tracking refrigerated blood units (packed red cells, fresh frozen plasma, platelets), cold-chain freezer alarms, and instant SMS donor emergency broadcast.',
    summaryAm:
      'በሆስፒታሎች ውስጥ ያለውን የደም ክምችት በየአይነቱ የሚቆጣጠር፣ ደም ሲያልቅ በአቅራቢያ ላሉ ለጋሾች በሰከንድ ውስጥ የኤስኤምኤስ ጥሪ የሚያስተላልፍ ሲስተም።',
    impact: 'Zero Expired Blood Units • Under 4-Minute Rare Blood Donor Emergency Broadcast • 14 Hospitals Linked',
    techStack: ['React', 'Express.js', 'PostgreSQL', 'Telephony SMS Gateway', 'Barcode Cryo-Labels'],
    hasLiveDemo: true,
    demoType: 'blood-bank',
    features: [
      'Real-time blood stock thermometer showing current units of O-Negative, A-Positive, B-Negative and rare blood types',
      'Automated emergency SMS broadcast alerting eligible registered donors located within 5 kilometers of the hospital',
      'Digital cross-match verification scanning patient wristbands against blood unit barcodes to prevent ABO mismatch',
      'Cold-chain storage temperature sensors firing audible siren alerts if storage freezers deviate from 4°C',
    ],
    testimonial: {
      quote:
        'When an emergency obstetric hemorrhage patient needed four units of rare Bombay blood phenotype, LifeLink identified and contacted three verified donors within two minutes. It literally saves lives every single week.',
      author: 'Director of Hematology & Transfusion',
      organization: 'St. Paul’s Specialized Medical Center',
    },
  },
  {
    id: 'neaea-exam-engine',
    client: 'National Educational Assessment & Examinations Agency (NEAEA)',
    title: 'EduSecure — High-Concurrency Computer-Based Examination & Proctoring Engine',
    titleAm: 'ኤዱሴኪውር — የብሔራዊ የዩኒቨርሲቲ መግቢያ የፈተና እና የውጤት ሲስተም',
    category: 'education',
    badge: 'National Examination Engine',
    heroImage: '/images/neaea_exam_engine.jpg',
    gallery: ['/images/neaea_exam_engine.jpg'],
    summary:
      'Hardened examination delivery platform delivering encrypted university matriculation tests to tens of thousands of concurrent high school test-takers across regional university computer laboratories.',
    summaryAm:
      'በአገር አቀፍ ደረጃ በሺዎች የሚቆጠሩ ተማሪዎችን በኮምፒውተር የሚፈትን፣ የፈተና ስርቆትን የሚከላከል እና ውጤትን ወዲያው የሚያወጣ ሲስተም።',
    impact: '50,000+ Concurrent Students Tested • 0% Exam Leakage • Instant Automated Result Analytics',
    techStack: ['Go (High-Concurrency Server)', 'Vue.js / React', 'Redis Distributed Cache', 'Local Node Caching'],
    hasLiveDemo: true,
    demoType: 'exam-engine',
    features: [
      'AES-256 asymmetric decryption of exam question packages only when authorized proctor inserts cryptographic USB key',
      'Randomized question and answer choice shuffling making student screen copying physically impossible',
      'Local campus edge cache nodes enabling exams to continue flawlessly even if nationwide fiber connections drop',
      'Sub-second automatic grading for standardized multiple-choice questions with percentile rank reports',
    ],
    testimonial: {
      quote:
        'Wazema Solutions handled the stress test of our national matriculation exams with zero crashes. Running 50,000 concurrent students without network degradation proved their elite backend engineering capacity.',
      author: 'Senior IT Consultant',
      organization: 'National Assessment & Examination Board',
    },
  },
  {
    id: 'ethio-hotel-channel-mgr',
    client: 'Ethiopian Hospitality & Tourism Association',
    title: 'Hospitality Channel Master — Multi-Property OTA Syncer & Direct Booking Engine',
    titleAm: 'የሆቴሎች የክፍል መመዝገቢያ እና የዓለም አቀፍ ድረ-ገጾች (OTA) ማስተሳሰሪያ ሲስተም',
    category: 'hospitality',
    badge: 'Hotel Channel Management',
    heroImage: '/images/ethio_hotel_channel_mgr.jpg',
    gallery: ['/images/ethio_hotel_channel_mgr.jpg'],
    summary:
      'Real-time two-way hotel reservation channel manager keeping room availability and pricing synchronized across Booking.com, Expedia, Agoda, and the hotel’s own zero-commission direct booking website.',
    summaryAm:
      'የሆቴል ክፍሎችን በBooking.com፣ በExpedia እና በሆቴሉ የራሱ ድረ-ገጽ ላይ በአንድ ጊዜ የሚያመሳስል እና ክፍያዎችን የሚቀበል ሲስተም።',
    impact: '0% Room Double-Booking Incidents • 40% Increase in Direct Bookings • Live Telebirr & Stripe Payments',
    techStack: ['Node.js', 'React', 'Redis', 'OTA 2-Way XML Sync API', 'Stripe / Telebirr Gateways'],
    hasLiveDemo: true,
    demoType: 'hotel-channel',
    features: [
      'Two-way instant XML synchronizer: when a guest books on Booking.com, that room closes across Expedia and Agoda in 2 seconds',
      'Direct mobile-friendly booking widget allowing tourists to pay with international credit cards or domestic wallets',
      'Automated guest pre-arrival emails delivering check-in forms, airport pickup requests, and WiFi credentials',
      'Housekeeping status board updating front desk when rooms are cleaned, inspected, and ready for check-in',
    ],
    testimonial: {
      quote:
        'Double-booking nightmares during African Union summit weeks are completely in the past. Our front desk staff spends time delighting guests rather than manually updating multiple online travel websites.',
      author: 'General Manager',
      organization: 'Skylight Luxury Hotel & Suites',
    },
  },
  {
    id: 'addis-card-transit',
    client: 'Addis Ababa City Bus Transit & Light Rail Service',
    title: 'AddisCard — Contactless NFC Commuter Transit & Fare Clearing House',
    titleAm: 'አዲስካርድ — የከተማ አውቶቡስ እና ቀላል ባቡር የኤሌክትሮኒክ የጉዞ ካርድ ሲስተም',
    category: 'mobile',
    badge: 'NFC Urban Transit Fare Core',
    heroImage: '/images/addis_card_transit.jpg',
    gallery: ['/images/addis_card_transit.jpg'],
    summary:
      'Contactless smart card payment system for metropolitan public buses and light rail transit, executing sub-150 millisecond fare card taps and mobile top-ups via Telebirr and CBE Birr.',
    summaryAm:
      'በአዲስ አበባ አውቶቡሶችና ባቡሮች ላይ ተሳፋሪዎች ካርዳቸውን ነክተው (Tap) የሚሳፈሩበት እና በስልካቸው ሒሳብ የሚሞሉበት ዘመናዊ ሲስተም።',
    impact: 'Sub-150ms Bus Validator NFC Tap • 300,000+ Active Cardholders • Zero Cash Handling Leakage',
    techStack: ['C++ / Embedded Linux (Validators)', 'Node.js Clearing House', 'PostgreSQL', 'Telebirr Auto-Topup'],
    hasLiveDemo: true,
    demoType: 'transit',
    features: [
      'Sub-150ms NFC tap validator processing boarding passengers rapidly without queue bottlenecks at bus terminal gates',
      'Instant card balance top-up via Telebirr USSD, smartphone app, and station kiosk agents',
      'Distance-based zone fare calculations automatically applying student and senior citizen discount passes',
      'Fleet transit clearing house distributing fare revenue accurately across municipal bus operators',
    ],
    testimonial: {
      quote:
        'Cash fare theft and long paper ticket lines disappeared. AddisCard handles hundreds of thousands of daily commuter taps seamlessly through morning rush hours.',
      author: 'Director of Transport Systems & Revenue',
      organization: 'Addis Metropolitan Transit Authority',
    },
  },
  {
    id: 'agri-commodity-ecx',
    client: 'Rift Valley Grain & Oilseeds Wholesalers Association',
    title: 'AgriVault — Warehouse Receipt Commodity Exchange & Moisture Grading System',
    titleAm: 'አግሪቮልት — የጥራጥሬ እና ሰብሎች የጥራት ደረጃ እና የመጋዘን ደረሰኝ ሲስተም',
    category: 'erp',
    badge: 'AgriTech Commodity Exchange',
    heroImage: '/images/agri_commodity_ecx.jpg',
    gallery: ['/images/agri_commodity_ecx.jpg'],
    summary:
      'Agricultural commodity warehousing platform registering grain and pulse consignments, logging moisture meter laboratory assays, issuing negotiable warehouse receipts, and settling farmer payments.',
    summaryAm:
      'የጤፍ፣ የስንዴና የሰሊጥ ምርቶችን ጥራት እና የእርጥበት መጠን መዝግቦ የባንክ ብድር ዋስትና የሚሆን የመጋዘን ሰነድ (Warehouse Receipt) የሚያወጣ ሲስተም።',
    impact: '180,000 Metric Tons Tracked • Negotiable Collateralized Warehouse Receipts • Direct Bank Settlement',
    techStack: ['Python / Django', 'React', 'PostgreSQL', 'Digital Weighbridge Sync', 'NBE Forex Ticker'],
    hasLiveDemo: true,
    demoType: 'agri-ecx',
    features: [
      'Direct serial integration with digital truck weighbridges preventing manual tampering with incoming grain gross weights',
      'Laboratory assay logging recording moisture percentage, impurity fraction, and commodity grading (Grade 1 to 4)',
      'Electronic negotiable warehouse receipt (e-NWR) issuance accepted as prime loan collateral by commercial banks',
      'Automated auction matching connecting regional grain cooperatives with industrial flour and biscuit factories',
    ],
    testimonial: {
      quote:
        'Wazema’s AgriVault system eliminated grain adulteration disputes. Grain buyers from the capital inspect digital moisture test certificates and transfer funds before trucks leave our regional depot.',
      author: 'Executive Chairman',
      organization: 'Rift Valley Agricultural Cooperative Union',
    },
  },
  {
    id: 'ecopark-effluent-iot',
    client: 'Kilinto & Bole Lemi Industrial Parks Eco-Sentinel',
    title: 'Industrial Effluent & Environmental Compliance IoT Telemetry Sentinel',
    titleAm: 'የኢንዱስትሪ ፓርኮች የፍሳሽ ቆሻሻ እና የአካባቢ ጥበቃ የሴንሰር ቁጥጥር ሲስተም',
    category: 'engineering',
    badge: 'Industrial CleanTech IoT',
    heroImage: '/images/ecopark_effluent_iot.jpg',
    gallery: ['/images/ecopark_effluent_iot.jpg'],
    summary:
      'Environmental IoT telemetry network monitoring wastewater treatment plants (WWTP) across major industrial parks, tracking real-time pH, chemical oxygen demand (COD), and heavy metal traces to protect rivers.',
    summaryAm:
      'በኢንዱስትሪ ፓርኮች የሚገኙ ፋብሪካዎች የሚለቁትን ቆሻሻ ፍሳሽ ኬሚካል መጠን በሴንሰር 24 ሰዓት የሚቆጣጠር እና ወንዞችን የሚከላከል ሲስተም።',
    impact: '100% EPA Discharge Standard Compliance • Automated Diverter Valves • 24/7 River Water Quality Logging',
    techStack: ['Node.js / MQTT Broker', 'TimescaleDB', 'React GIS Maps', 'LoRaWAN Long-Range Sensors', 'Automated SMS'],
    hasLiveDemo: true,
    demoType: 'effluent-iot',
    features: [
      'Submerged optical sensors logging pH, Total Dissolved Solids (TDS), Biochemical Oxygen Demand (BOD) and temperature',
      'Automated motorized diverter valves instantly shutting factory outlet pipes if dangerous acidity levels are detected',
      'Tamper-proof environmental telemetry dashboard shared directly with the Environmental Protection Authority (EPA)',
      'Predictive maintenance reminders alerting factory chemists when bio-reactor filters and ultraviolet lamps require servicing',
    ],
    testimonial: {
      quote:
        'The Eco-Sentinel IoT platform gives our park management absolute peace of mind. International textile brands audit our zero-liquid discharge data in real time, assuring their customers of our sustainable production.',
      author: 'Environmental & Sustainability Director',
      organization: 'Industrial Parks Development Corporation',
    },
  },
  {
    id: 'diaspora-build-cam',
    client: 'Diaspora HomeBuild Ethiopia & Real Estate Escrow',
    title: 'Diaspora BuildCam — 4K Drone Milestone Inspection & Escrow Payout Portal',
    titleAm: 'ዲያስፖራ ቢልድካም — የቤት ግንባታን በድሮን ቪዲዮ መቆጣጠሪያ እና የክፍያ ማረጋገጫ ሲስተም',
    category: 'engineering',
    badge: 'Drone PropTech & Escrow',
    heroImage: '/images/diaspora_build_cam.jpg',
    gallery: ['/images/diaspora_build_cam.jpg'],
    summary:
      'Diaspora real estate construction audit platform delivering monthly 4K drone flyovers, structural engineer milestone sign-offs, and secure bank escrow milestone payouts to prevent diaspora construction fraud.',
    summaryAm:
      'በውጭ የሚኖሩ ኢትዮጵያውያን በአገር ውስጥ የሚያሰሯቸውን ቤቶች በድሮን ካሜራ 360 ዲግሪ እያዩ፣ በምህንድስና ሲረጋገጥ ክፍያ የሚለቁበት ሲስተም።',
    impact: 'ETB 850M+ In Construction Escrow Secured • 0% Construction Milestone Fraud • 360° Drone Site Panoramas',
    techStack: ['React 360 / WebGL', 'AWS S3 / CloudFront', 'PostgreSQL', 'Bank Escrow API', 'Drone Video Pipeline'],
    hasLiveDemo: true,
    demoType: 'build-cam',
    features: [
      'Interactive 360° drone aerial panoramas allowing homeowners in Washington, Dallas, or London to inspect their villa roof',
      'Milestone-locked bank escrow: funds are only disbursed to contractors after verified structural engineer sign-off',
      'Side-by-side architectural blueprint CAD vs actual physical construction progress overlay inspection',
      'Direct chat and WhatsApp video inspection coordination between site foreman, structural engineer, and homeowner',
    ],
    testimonial: {
      quote:
        'Building a home from 7,000 miles away used to be filled with anxiety and fraud. With Wazema’s BuildCam, I watched my villa’s concrete slab being poured in 4K resolution, and my contractor was paid on time with zero disputes.',
      author: 'Diaspora Homeowner & Investor',
      organization: 'Diaspora HomeBuild Community (Silver Spring, Maryland)',
    },
  },
  {
    id: 'wazema-fidal-ocr',
    client: 'Wazema AI Labs & National Digital ID Initiatives',
    title: 'Fidäl AI — Deep Learning Ge\'ez / Amharic Optical Character Recognition & ID Parser',
    titleAm: 'ፊደል ኤአይ (Fidäl AI) — የአማርኛ እና የግዕዝ ጽሁፎችን እና መታወቂያዎችን አንባቢ የኤአይ ሲስተም',
    category: 'ai',
    badge: 'Applied Computer Vision & AI',
    heroImage: '/images/wazema_fidal_ocr.jpg',
    gallery: ['/images/wazema_fidal_ocr.jpg'],
    summary:
      'Proprietary deep neural network computer vision engine extracting Ge\'ez and Amharic text from scanned government identity cards (Fayda National ID, Kebele IDs, driver licenses) and historical paper documents.',
    summaryAm:
      'የኢትዮጵያን ብሔራዊ መታወቂያ (ፋይዳ)፣ የቀበሌ መታወቂያና የመንጃ ፈቃድ ፎቶ በማየት የአማርኛ ስም፣ አድራሻና ቁጥር በሰከንድ የሚለይ የኤአይ ሲስተም።',
    impact: '99.4% Ge\'ez Character Recognition Accuracy • Sub-Second ID Parsing • 50+ Banks & FinTechs Ready',
    techStack: ['PyTorch / ONNX Runtime', 'Python / FastAPI', 'Docker', 'OpenCV', 'Amharic Tokenizer'],
    hasLiveDemo: true,
    demoType: 'fidal-ocr',
    features: [
      'Custom convolutional-transformer neural network trained specifically on unique Ethiopian Ge\'ez calligraphy and letterforms',
      'Automated entity extraction identifying Full Name, Date of Birth, National ID Number (Fayda), and Mother’s Name',
      'Edge-device SDK operating completely on-device without internet access for high-security banking branches',
      'Historical archive digitizer converting old municipal property deeds and court archives into searchable text',
    ],
    testimonial: {
      quote:
        'Standard international OCR models failed miserably on Amharic letters with vowel markers. Wazema’s Fidäl AI achieved 99.4% accuracy right out of the box, slashing our customer onboarding KYC time to seconds.',
      author: 'Head of Digital Transformation & AI',
      organization: 'Commercial Banking Innovation Labs',
    },
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    organization: 'D&MB TRADING LTD (London, United Kingdom)',
    role: 'Director of Digital Products',
    flag: '🇬🇧',
    quote:
      'Wazema Solutions delivered Tpass Mate to our exact specification. The integration of 780+ DVSA questions alongside Amharic, Tigrigna, and Arabic translations has given us a unique market advantage in the UK. The CMS allows our non-technical staff to update content seamlessly. Their engineering reliability is unmatched.',
  },
  {
    organization: 'The Grand Lounge & Restaurant Group (Bole, Addis Ababa)',
    role: 'Managing Partner & Executive Chef',
    flag: '🇪🇹',
    quote:
      'Wazema DineQR turned our weekend dinner rush into a well-oiled machine. Diners love scanning the acrylic QR table stand, orders hit the kitchen screen immediately, and table turnover increased by 35%. The recipe inventory tracking saved us hundreds of thousands of Birr in food waste.',
  },
  {
    organization: 'Lorcan Medical Science College (CMC Square, Addis Ababa)',
    role: 'Dean of Academic Affairs & Admissions',
    flag: '🇪🇹',
    quote:
      'Since Wazema Solutions deployed our college portal, our student enrollment and departmental coordination have transformed. The interface is clean, fast, and represents the high academic standards of our medical institution. We appreciate their ongoing technical support and proactive maintenance.',
  },
  {
    organization: 'Ethiopian IT Park Corporation',
    role: 'Head of Enterprise Procurement Oversight',
    flag: '🇪🇹',
    quote:
      'The ERP procurement command center engineered by Wazema Solutions brought complete audit integrity to our 18-stage bidding and expenditure lifecycle. We have full visibility across 45 departments and over ETB 45M in planned expenditure.',
  },
  {
    organization: 'MAF Battery & Automotive Supply Chain Group (USA / Regional)',
    role: 'Supply Chain Operations Manager',
    flag: '🇺🇸',
    quote:
      'The serialized lot tracking system built by Wazema Solutions eliminated our stock variance across regional depots. We can track battery warranties from factory dispatch to final installation. Their software engineering team communicates clearly and respects deadlines.',
  },
  {
    organization: 'Addis Geo Systems (AGS)',
    role: 'Managing Director & Principal Geologist',
    flag: '🇪🇹',
    quote:
      'Wazema Solutions gave Addis Geo Systems a polished digital identity that commands respect when bidding on international infrastructure contracts. They understood our complex geotechnical testing workflows and translated them into an elegant web presence.',
  },
  {
    organization: 'Mulu Tibeb Ethiopian Couture (Addis Ababa & USA Diaspora)',
    role: 'Creative Director & Founder',
    flag: '🌍',
    quote:
      'Our sales across all 50 American states skyrocketed after Wazema Solutions launched our multi-currency e-commerce and in-store POS system. Customers in Virginia and Dallas pay smoothly through Stripe, while our Addis Ababa boutique runs on the same synchronized inventory.',
  },
  {
    organization: 'Time Gypsum Manufacturing Factory',
    role: 'General Manager',
    flag: '🇪🇹',
    quote:
      'We now know our exact factory yields and distributor account balances in real time. Wazema Solutions modernized our entire production accounting from raw rock calcination to truck delivery slips.',
  },
];
