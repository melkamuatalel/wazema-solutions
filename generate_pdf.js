import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { WAZEMA_PORTFOLIO, CLIENT_TESTIMONIALS } from './server/data.js';

const rootDir = process.cwd();
const publicImagesDir = path.join(rootDir, 'public', 'images');

function getBase64Image(filename) {
  try {
    const filePath = path.join(publicImagesDir, filename);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filename).toLowerCase().replace('.', '');
      const mime = ext === 'png' ? 'image/png' : 'image/jpeg';
      const b64 = fs.readFileSync(filePath).toString('base64');
      return `data:${mime};base64,${b64}`;
    }
  } catch (e) {
    console.error('Error reading image:', filename, e);
  }
  return '';
}

const logoBase64 = getBase64Image('wazema_logo.jpg');
const tpassBase64 = getBase64Image('tpass_mate_feature.jpg');
const dineQrBase64 = getBase64Image('wazema_dine_qr.jpg');
const lorcanBase64 = getBase64Image('lorcan_home.jpg');
const itParkBase64 = getBase64Image('procurement_command_center.png');
const mafBase64 = getBase64Image('maf_battery_inventory.jpg');
const paycoreBase64 = getBase64Image('chapa_telebirr_paycore.jpg');

// 6 Top Flagship Systems
const flagshipSystems = [
  {
    title: 'Tpass Mate — DVSA Driving Theory Test Mobile Suite',
    client: 'D&MB TRADING LTD (London, UK & International)',
    flag: '🇬🇧',
    badge: 'MOBILE & CMS',
    image: tpassBase64,
    impact: '780+ DVSA Questions • 4 Languages (Amharic, Tigrigna, Arabic, English) • 98% Pass Rate',
    summary: 'Dual iOS & Android app backed by independent custom CMS web admin panel allowing D&MB staff to update test modules dynamically without new app store releases.',
    deliverables: [
      'Official DVSA licensed questions with realistic hazard perception CGI video clips',
      'Proprietary multilingual localization with native voiceover audio narration',
      'Diagnostic AI progress tracker targeting user weakest question categories'
    ],
    tech: ['Flutter / Swift / Kotlin', 'Node.js', 'PostgreSQL', 'Cloud CMS']
  },
  {
    title: 'Wazema DineQR — Contactless Table QR Ordering & KDS',
    client: 'Premier Addis Ababa Restaurants & Modern Lounges',
    flag: '🇪🇹',
    badge: 'HOSPITALITY',
    image: dineQrBase64,
    impact: '60% Faster Kitchen Order Turnaround • Sub-Gram Recipe Depletion • Telebirr & CBE',
    summary: 'Self-serve acrylic QR table stands, instant sub-second kitchen display screen (KDS) order routing, waiter paging, split-billing, and real-time recipe ingredient depletion.',
    deliverables: [
      'Instant smartphone camera QR scanning with bilingual menus (Amharic & English)',
      'Head Chef Kitchen Display System (KDS) replacing slow paper tickets',
      'Direct Telebirr and CBE Birr instant dynamic QR bill settlement'
    ],
    tech: ['React PWA', 'Node.js', 'WebSockets', 'Telebirr API', 'PostgreSQL']
  },
  {
    title: 'Lorcan Medical Science College — Academic Portal & CMS',
    client: 'Lorcan Medical Science College (CMC Square, Addis Ababa)',
    flag: '🇪🇹',
    badge: 'EDUCATION',
    image: lorcanBase64,
    impact: '4 Degree Programs • 500+ Annual Student Enrollment • 45 Faculty Deans',
    summary: 'Institutional web portal and registrar management suite showcasing accredited Doctor of Medicine, Dental Science, Pharmacy, and Nursing programs with TVET grading.',
    deliverables: [
      'Online student admissions workflow, digital document intake and validation',
      'Comprehensive faculty directory and departmental academic routine management',
      'Modern, responsive medical campus digital identity and news broadcast hub'
    ],
    tech: ['React / Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    title: 'Ethiopian IT Park — AI Procurement ERP Command Center',
    client: 'Ethiopian IT Park Corporation (Addis Ababa)',
    flag: '🇪🇹',
    badge: 'GOV ERP',
    image: itParkBase64,
    impact: 'ETB 45.7M Planned Portfolio • 45 User Departments • 3 Bidding Tracks (NCB/ICB/RFQ)',
    summary: 'Enterprise 18-stage procurement lifecycle from departmental requisition (PR) to 3-way match payment audit, built for total budget accountability.',
    deliverables: [
      'Automated Annual Procurement Plans (APP) with department demand windows',
      'Sealed digital bid box with cryptographic timestamping for fair supplier tenders',
      'AI-assisted 3-way matching of Purchase Requisitions, GRNs, and Invoices'
    ],
    tech: ['React / TypeScript', 'FastAPI / Python', 'PostgreSQL', 'Audit Engine']
  },
  {
    title: 'MAF Battery & Automotive Logistics — Supply Chain ERP',
    client: 'U.S. & Regional Automotive Battery Distribution Corp',
    flag: '🇺🇸',
    badge: 'LOGISTICS ERP',
    image: mafBase64,
    impact: '100% Serialized Barcode Tracking • Zero Stock Variance • Real-Time Warranty',
    summary: 'Serialized barcode inventory and multi-depot supply chain platform managing automotive battery distribution, FIFO shelf-life rotation, and warranty claims.',
    deliverables: [
      'Unit-level serialized QR/barcode scanning from factory receipt to vehicle install',
      'FIFO rotation alerts preventing chemical battery degradation in regional warehouses',
      'Instant customer warranty claim verification across all regional distributor branches'
    ],
    tech: ['Node.js', 'Express.js', 'Barcode Scanner API', 'PostgreSQL']
  },
  {
    title: 'PayCore — Multi-Rail National FinTech Switching Platform',
    client: 'National Microfinance, Commercial Banks & Aggregators',
    flag: '🇪🇹',
    badge: 'FINTECH',
    image: paycoreBase64,
    impact: '99.99% Routing Uptime • <450ms Processing Latency • Multi-Currency Ledger',
    summary: 'High-throughput payment gateway switch uniting Telebirr, CBE Birr, Chapa, Awash Bank, and international card schemes into a unified sub-second merchant settlement API.',
    deliverables: [
      'Automated dual-rail smart routing with sub-450ms fallback redundancy',
      'Real-time transaction anomaly heuristics and anti-fraud velocity triggers',
      'Automated end-of-day multi-bank ledger balancing and merchant disbursement'
    ],
    tech: ['Go / Node.js', 'Redis Cluster', 'ISO 8583', 'Telebirr/CBE APIs']
  }
];

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wazema Solutions PLC — Corporate Dossier</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Noto+Sans+Ethiopic:wght@400;700;900&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Plus Jakarta Sans', 'Noto Sans Ethiopic', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #eaedf2;
      color: #0f172a;
      -webkit-font-smoothing: antialiased;
      line-height: 1.35;
    }

    .page {
      width: 210mm;
      height: 297mm;
      margin: 0 auto;
      background: #ffffff;
      padding: 12mm 14mm 12mm 14mm;
      position: relative;
      page-break-after: always;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    /* Running Header & Footer */
    .running-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 3.5mm;
      border-bottom: 1.5px solid #059669;
      font-size: 7.5pt;
      font-weight: 700;
      color: #334155;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .running-header .brand {
      color: #047857;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .running-header .brand-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #059669;
    }

    .running-header .portal {
      color: #0f172a;
      font-family: monospace;
      font-weight: 800;
    }

    .running-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3.5mm;
      border-top: 1px solid #e2e8f0;
      font-size: 7pt;
      font-weight: 600;
      color: #64748b;
    }

    .page-body {
      flex: 1;
      padding-top: 5mm;
      padding-bottom: 3mm;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 4.5mm;
    }

    /* Cover Styling */
    .cover-top {
      text-align: center;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 4mm;
    }

    .logo-img {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      border: 1.5px solid #059669;
      padding: 3px;
      background: #ffffff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.06);
      margin-bottom: 6px;
    }

    .doc-pill {
      display: inline-block;
      font-size: 7pt;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #047857;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 3px 10px;
      border-radius: 20px;
      margin-bottom: 4px;
    }

    .main-title {
      font-size: 20pt;
      font-weight: 900;
      color: #020617;
      letter-spacing: -0.5px;
      line-height: 1.1;
    }

    .amharic-sub {
      font-size: 10.5pt;
      font-weight: 800;
      color: #047857;
      margin-top: 2px;
    }

    .tagline {
      font-size: 8pt;
      color: #475569;
      font-weight: 600;
      margin-top: 3px;
    }

    .contact-pills {
      display: flex;
      justify-content: center;
      gap: 6px;
      flex-wrap: wrap;
      margin-top: 7px;
    }

    .contact-pill {
      font-size: 7.5pt;
      font-weight: 700;
      color: #334155;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      padding: 3px 8px;
      border-radius: 6px;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
      margin-top: 6px;
    }

    .metric-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 6px 8px;
      text-align: left;
    }

    .metric-card.highlight {
      background: #ecfdf5;
      border-color: #a7f3d0;
    }

    .metric-label {
      font-size: 6.5pt;
      text-transform: uppercase;
      font-weight: 800;
      color: #64748b;
    }

    .metric-card.highlight .metric-label {
      color: #047857;
    }

    .metric-val {
      font-size: 13pt;
      font-weight: 900;
      color: #020617;
      line-height: 1.1;
      margin: 2px 0;
    }

    .metric-desc {
      font-size: 6.5pt;
      color: #64748b;
      font-weight: 600;
    }

    /* Customer Desk Banner */
    .portal-banner {
      background: linear-gradient(135deg, #022c22 0%, #064e3b 50%, #0f172a 100%);
      color: #ffffff;
      border-radius: 8px;
      padding: 7px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1.5px solid #10b981;
      box-shadow: 0 4px 12px rgba(4, 120, 87, 0.15);
    }

    .portal-info h4 {
      font-size: 8pt;
      font-weight: 900;
      color: #34d399;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .portal-info p {
      font-size: 7pt;
      color: #e2e8f0;
      margin-top: 1px;
    }

    .portal-btn {
      background: #10b981;
      color: #022c22;
      font-size: 7.5pt;
      font-weight: 900;
      padding: 5px 12px;
      border-radius: 6px;
      text-decoration: none;
      white-space: nowrap;
      letter-spacing: 0.2px;
    }

    /* Headings */
    .sec-heading {
      font-size: 11pt;
      font-weight: 900;
      color: #020617;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 3px;
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .sec-sub {
      font-size: 7pt;
      font-weight: 600;
      color: #64748b;
    }

    .prose-text {
      font-size: 8pt;
      color: #334155;
      line-height: 1.45;
      text-align: justify;
    }

    /* 4 Pillars */
    .pillars-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .pillar-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 6px 8px;
    }

    .pillar-title {
      font-size: 8pt;
      font-weight: 800;
      color: #047857;
      margin-bottom: 2px;
    }

    .pillar-desc {
      font-size: 7pt;
      color: #475569;
      line-height: 1.35;
    }

    /* Page 2: Case Studies */
    .cases-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .case-card {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 6px 7px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }

    .case-top {
      display: flex;
      gap: 7px;
      align-items: flex-start;
      margin-bottom: 4px;
    }

    .case-thumb {
      width: 62px;
      height: 48px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      background: #f1f5f9;
      flex-shrink: 0;
    }

    .case-header-info {
      flex: 1;
    }

    .case-badge {
      font-size: 5.5pt;
      font-weight: 800;
      color: #047857;
      background: #ecfdf5;
      border: 0.5px solid #a7f3d0;
      padding: 1px 4px;
      border-radius: 3px;
      display: inline-block;
      text-transform: uppercase;
    }

    .case-title {
      font-size: 7.5pt;
      font-weight: 900;
      color: #020617;
      line-height: 1.15;
      margin-top: 1px;
    }

    .case-client {
      font-size: 6.5pt;
      font-weight: 700;
      color: #475569;
    }

    .case-kpi {
      font-size: 6.5pt;
      font-weight: 800;
      color: #047857;
      background: #f0fdf4;
      border-left: 2px solid #059669;
      padding: 2px 4px;
      margin: 3px 0;
      border-radius: 0 3px 3px 0;
    }

    .case-summary {
      font-size: 6.5pt;
      color: #475569;
      line-height: 1.3;
      margin-bottom: 3px;
    }

    .case-deliverables {
      list-style: none;
      margin-bottom: 4px;
    }

    .case-deliverables li {
      font-size: 6.5pt;
      color: #334155;
      line-height: 1.25;
      padding-left: 9px;
      position: relative;
    }

    .case-deliverables li:before {
      content: "✔";
      color: #059669;
      position: absolute;
      left: 0;
      font-size: 5.5pt;
    }

    .case-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
    }

    .case-tag {
      font-size: 5.5pt;
      font-family: monospace;
      font-weight: 700;
      color: #334155;
      background: #f1f5f9;
      border: 1px solid #e2e8f0;
      padding: 1px 4px;
      border-radius: 3px;
    }

    /* Page 3: Master Table */
    .master-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 5.8pt;
      line-height: 1.15;
    }

    .master-table th {
      background: #0f172a;
      color: #ffffff;
      font-weight: 800;
      padding: 2.5px 4px;
      text-align: left;
      font-size: 5.5pt;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .master-table td {
      padding: 1.8px 4px;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: middle;
    }

    .master-table tr:nth-child(even) td {
      background: #f8fafc;
    }

    .master-table tr:hover td {
      background: #f0fdf4;
    }

    .td-num {
      font-family: monospace;
      font-weight: 800;
      color: #64748b;
      width: 14px;
    }

    .td-title {
      font-weight: 800;
      color: #0f172a;
    }

    .td-client {
      color: #334155;
      font-weight: 600;
    }

    .td-domain {
      font-size: 5.2pt;
      font-weight: 800;
      text-transform: uppercase;
      color: #047857;
      background: #ecfdf5;
      padding: 1px 3px;
      border-radius: 2px;
      display: inline-block;
    }

    .td-kpi {
      color: #047857;
      font-weight: 800;
    }

    .td-stack {
      font-family: monospace;
      color: #475569;
      font-size: 5.2pt;
    }

    /* Page 4: Testimonials & Framework */
    .testimonials-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }

    .test-card {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 7px;
      padding: 6px 8px;
    }

    .test-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1px;
    }

    .test-org {
      font-size: 7.5pt;
      font-weight: 900;
      color: #0f172a;
    }

    .test-role {
      font-size: 6.5pt;
      font-weight: 700;
      color: #047857;
      margin-bottom: 3px;
    }

    .test-quote {
      font-size: 6.8pt;
      color: #334155;
      font-style: italic;
      line-height: 1.35;
    }

    /* 4-Step Framework */
    .steps-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px;
    }

    .step-card {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 7px;
      padding: 6px;
      text-align: left;
    }

    .step-num {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background: #059669;
      color: #ffffff;
      font-size: 7pt;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 3px;
    }

    .step-title {
      font-size: 7.5pt;
      font-weight: 900;
      color: #0f172a;
      margin-bottom: 2px;
    }

    .step-desc {
      font-size: 6.5pt;
      color: #475569;
      line-height: 1.3;
    }

    /* Executive Callout CTA Box */
    .cta-box {
      background: linear-gradient(135deg, #091224 0%, #064e3b 100%);
      border: 1.5px solid #10b981;
      border-radius: 10px;
      padding: 10px 14px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .cta-text h3 {
      font-size: 11pt;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: -0.2px;
    }

    .cta-text p {
      font-size: 7.5pt;
      color: #cbd5e1;
      margin-top: 2px;
    }

    .cta-contacts {
      display: flex;
      flex-direction: column;
      gap: 4px;
      text-align: right;
    }

    .cta-hotline {
      font-size: 11pt;
      font-weight: 900;
      color: #34d399;
      font-family: monospace;
      letter-spacing: 0.5px;
    }

    .cta-email {
      font-size: 7.5pt;
      font-weight: 700;
      color: #ffffff;
    }

    .cta-loc {
      font-size: 6.5pt;
      color: #94a3b8;
    }
  </style>
</head>
<body>

  <!-- ======================================================== -->
  <!-- PAGE 1: COVER, CREDENTIALS & CAPABILITY STATEMENT -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="running-header">
      <div class="brand">
        <span class="brand-dot"></span>
        <span>WAZEMA SOLUTIONS PLC • CORPORATE CAPABILITY STATEMENT</span>
      </div>
      <div class="portal">DIGITAL CUSTOMER DESK: HTTPS://WAZEMA-SOLUTIONS.VERCEL.APP</div>
    </div>

    <div class="page-body">
      <!-- Cover Header -->
      <div class="cover-top">
        <img src="${logoBase64}" alt="Wazema Logo" class="logo-img" />
        <br />
        <span class="doc-pill">Official Executive Capability Statement & 30-System Prospectus</span>
        <h1 class="main-title">WAZEMA SOLUTIONS PLC</h1>
        <div class="amharic-sub">ዋዜማ ሶሉሽንስ — የቴክኖሎጂ እና የሶፍትዌር ኢንጂነሪንግ ኩባንያ</div>
        <p class="tagline">Enterprise Cloud Architecture • High-Concurrency Mobile Suites • Multi-Rail FinTech • Custom ERPs</p>

        <div class="contact-pills">
          <span class="contact-pill">📍 Addis Ababa, Ethiopia</span>
          <span class="contact-pill">📞 Direct Hotline: +251 95 386 8816</span>
          <span class="contact-pill">✉️ contact@wazemasolutions.com</span>
          <span class="contact-pill">🌐 wazema-solutions.vercel.app</span>
        </div>

        <!-- Metrics Grid -->
        <div class="metrics-grid">
          <div class="metric-card highlight">
            <div class="metric-label">Delivered Portfolio</div>
            <div class="metric-val">30 Systems</div>
            <div class="metric-desc">Enterprise Grade • Production Live</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Production SLA</div>
            <div class="metric-val">99.98%</div>
            <div class="metric-desc">High-Availability Cloud Hosting</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Deployment Reach</div>
            <div class="metric-val">4 Regions</div>
            <div class="metric-desc">UK, USA, East Africa & Ethiopia</div>
          </div>
          <div class="metric-card highlight">
            <div class="metric-label">Client IP Handover</div>
            <div class="metric-val">100% Owned</div>
            <div class="metric-desc">Full Source Code & Architecture Rights</div>
          </div>
        </div>
      </div>

      <!-- Customer Desk Banner -->
      <div class="portal-banner">
        <div class="portal-info">
          <h4>🌐 Official Interactive Customer Desk & System Hub</h4>
          <p>To explore interactive simulators, live video case studies, and verified client testimonials, visit our digital portal:</p>
        </div>
        <a href="https://wazema-solutions.vercel.app/" class="portal-btn">wazema-solutions.vercel.app</a>
      </div>

      <!-- Section 1: Executive Capability Statement -->
      <div>
        <div class="sec-heading">
          <span>1. Executive Capability Statement & Engineering Authority</span>
          <span class="sec-sub">Delivering Mission-Critical Enterprise Platforms</span>
        </div>
        <p class="prose-text">
          <strong>Wazema Solutions PLC</strong> is a high-growth software engineering and enterprise digital systems consultancy based in Addis Ababa, Ethiopia. We architect, engineer, and deploy high-concurrency systems, cross-platform mobile ecosystems for competitive international markets (including official DVSA-licensed theory suites in the United Kingdom), custom enterprise resource planning (ERP) suites, and full-stack contactless restaurant platforms. Every system in our portfolio is engineered for production reliability, real-time throughput, and scalable performance.
        </p>
      </div>

      <!-- 4 Core Pillars Grid -->
      <div>
        <div class="sec-heading">
          <span>Core Engineering Disciplines & Architectural Pillars</span>
        </div>
        <div class="pillars-grid">
          <div class="pillar-box">
            <div class="pillar-title">⚙ High-Concurrency Microservices</div>
            <div class="pillar-desc">Ultra-low latency Node.js, Go, and Python/FastAPI backends with Redis clustering, WebSocket live event pipelines, and PostgreSQL read-replicas handling millions of requests.</div>
          </div>
          <div class="pillar-box">
            <div class="pillar-title">📱 International Mobile Suites & Cloud CMS</div>
            <div class="pillar-desc">Dual iOS & Android apps (Flutter / Native) paired with proprietary cloud CMS admin portals allowing client non-technical staff to update content dynamically with zero app store delays.</div>
          </div>
          <div class="pillar-box">
            <div class="pillar-title">💳 Multi-Rail FinTech & Payment Switches</div>
            <div class="pillar-desc">Direct API routing across Telebirr, CBE Birr, Chapa, Awash Bank, and international card rails with sub-second response times, automated ledger reconciliation, and fraud prevention.</div>
          </div>
          <div class="pillar-box">
            <div class="pillar-title">🏭 Custom ERP, Supply Chain & IoT Telemetry</div>
            <div class="pillar-desc">Multi-department procurement workflows, serialized barcode inventory, GPS cross-corridor fleet telemetry, and industrial factory yield accounting built for operational efficiency.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="running-footer">
      <span>Wazema Solutions PLC • Addis Ababa, Ethiopia</span>
      <span>Direct Hotline: +251 95 386 8816 • Page 1 of 4</span>
    </div>
  </div>


  <!-- ======================================================== -->
  <!-- PAGE 2: 6 FLAGSHIP ENTERPRISE CASE STUDIES -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="running-header">
      <div class="brand">
        <span class="brand-dot"></span>
        <span>WAZEMA SOLUTIONS PLC • FLAGSHIP DELIVERED SYSTEMS</span>
      </div>
      <div class="portal">DIGITAL CUSTOMER DESK: HTTPS://WAZEMA-SOLUTIONS.VERCEL.APP</div>
    </div>

    <div class="page-body">
      <div class="sec-heading">
        <span>2. Flagship Enterprise Case Studies & Operational Outcomes</span>
        <span class="sec-sub">Proven Digital Platforms Delivered to Global & Local Clients</span>
      </div>

      <div class="cases-grid">
        ${flagshipSystems.map((item, idx) => `
          <div class="case-card">
            <div>
              <div class="case-top">
                <img src="${item.image}" alt="${item.title}" class="case-thumb" />
                <div class="case-header-info">
                  <span class="case-badge">${item.badge}</span>
                  <div class="case-title">${idx + 1}. ${item.title}</div>
                  <div class="case-client">Client: ${item.client} ${item.flag}</div>
                </div>
              </div>

              <div class="case-kpi">★ KPI: ${item.impact}</div>
              <div class="case-summary">${item.summary}</div>

              <ul class="case-deliverables">
                ${item.deliverables.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>

            <div class="case-tags">
              ${item.tech.map(t => `<span class="case-tag">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="running-footer">
      <span>Wazema Solutions PLC • Confidential Corporate Dossier</span>
      <span>Direct Hotline: +251 95 386 8816 • Page 2 of 4</span>
    </div>
  </div>


  <!-- ======================================================== -->
  <!-- PAGE 3: MASTER DIRECTORY OF 30 DELIVERED SYSTEMS -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="running-header">
      <div class="brand">
        <span class="brand-dot"></span>
        <span>WAZEMA SOLUTIONS PLC • MASTER SYSTEM REGISTRY</span>
      </div>
      <div class="portal">DIGITAL CUSTOMER DESK: HTTPS://WAZEMA-SOLUTIONS.VERCEL.APP</div>
    </div>

    <div class="page-body">
      <div class="sec-heading">
        <span>3. Complete Registry of 30 Delivered Enterprise Systems</span>
        <span class="sec-sub">Categorized by Operational Domain & Verified Deliverables</span>
      </div>

      <table class="master-table">
        <thead>
          <tr>
            <th style="width: 20px;">#</th>
            <th style="width: 170px;">System Name & Architectural Scope</th>
            <th style="width: 140px;">Client Organization</th>
            <th style="width: 65px;">Domain</th>
            <th style="width: 160px;">Primary Operational Impact</th>
            <th style="width: 110px;">Core Tech Stack</th>
          </tr>
        </thead>
        <tbody>
          ${WAZEMA_PORTFOLIO.map((item, idx) => `
            <tr>
              <td class="td-num">${idx + 1}</td>
              <td class="td-title">${item.title}</td>
              <td class="td-client">${item.client}</td>
              <td><span class="td-domain">${item.category}</span></td>
              <td class="td-kpi">${item.impact}</td>
              <td class="td-stack">${item.techStack.slice(0, 2).join(', ')}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="running-footer">
      <span>Wazema Solutions PLC • All Systems 100% Client-Owned Intellectual Property</span>
      <span>Direct Hotline: +251 95 386 8816 • Page 3 of 4</span>
    </div>
  </div>


  <!-- ======================================================== -->
  <!-- PAGE 4: TESTIMONIALS, ENGAGEMENT FRAMEWORK & DIRECT HOTLINE -->
  <!-- ======================================================== -->
  <div class="page">
    <div class="running-header">
      <div class="brand">
        <span class="brand-dot"></span>
        <span>WAZEMA SOLUTIONS PLC • CLIENT VERIFICATION & ENGAGEMENT</span>
      </div>
      <div class="portal">DIGITAL CUSTOMER DESK: HTTPS://WAZEMA-SOLUTIONS.VERCEL.APP</div>
    </div>

    <div class="page-body">
      <!-- Section 4: Verified Testimonials -->
      <div>
        <div class="sec-heading">
          <span>4. Verified Institutional Client Endorsements</span>
          <span class="sec-sub">Direct Feedback from Executive Sponsors across UK, USA & Ethiopia</span>
        </div>
        <div class="testimonials-grid">
          ${CLIENT_TESTIMONIALS.slice(0, 6).map(t => `
            <div class="test-card">
              <div class="test-top">
                <span class="test-org">${t.organization}</span>
                <span>${t.flag}</span>
              </div>
              <div class="test-role">${t.role}</div>
              <p class="test-quote">"${t.quote}"</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 5: 4-Stage Project Framework -->
      <div>
        <div class="sec-heading">
          <span>5. Enterprise Engagement & Project Execution Framework</span>
          <span class="sec-sub">Rigorous 4-Stage Technical Delivery Lifecycle</span>
        </div>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-num">01</div>
            <div class="step-title">Technical Scoping</div>
            <div class="step-desc">Complimentary 1-on-1 discovery with our Principal Systems Architect to map data models, workflows, and integrations.</div>
          </div>
          <div class="step-card">
            <div class="step-num">02</div>
            <div class="step-title">7-Day Prototype</div>
            <div class="step-desc">Rapid turn-around of an interactive UI/UX prototype and formal architecture blueprint before client capital commitment.</div>
          </div>
          <div class="step-card">
            <div class="step-num">03</div>
            <div class="step-title">Agile Sprints</div>
            <div class="step-desc">Bi-weekly staging deployments with live sprint reviews, continuous automated test coverage, and transparent progress metrics.</div>
          </div>
          <div class="step-card">
            <div class="step-num">04</div>
            <div class="step-title">Launch & 24/7 SLA</div>
            <div class="step-desc">Full IP ownership handover, cloud infrastructure provisioning, on-site/remote team training, and 99.98% uptime maintenance.</div>
          </div>
        </div>
      </div>

      <!-- Direct Executive Contact CTA Box -->
      <div class="cta-box">
        <div class="cta-text">
          <h3>Initiate Your Enterprise Solution Today</h3>
          <p>Schedule a confidential architectural scoping session or in-person boardroom demonstration.</p>
          <p style="margin-top: 4px; font-size: 7pt; color: #a7f3d0;">
            🌐 Explore our full digital customer desk: <strong>https://wazema-solutions.vercel.app/</strong>
          </p>
        </div>
        <div class="cta-contacts">
          <div class="cta-hotline">📞 +251 95 386 8816</div>
          <div class="cta-email">✉️ contact@wazemasolutions.com</div>
          <div class="cta-loc">📍 Addis Ababa, Ethiopia (Meetings by Appointment)</div>
        </div>
      </div>
    </div>

    <div class="running-footer">
      <span>Wazema Solutions PLC • Software Engineering & Cloud Platforms</span>
      <span>Direct Hotline: +251 95 386 8816 • Page 4 of 4</span>
    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync(path.join(rootDir, 'dossier_print.html'), htmlContent);
console.log('dossier_print.html generated successfully.');
