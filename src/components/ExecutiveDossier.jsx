import React from 'react';
import {
  Shield,
  Layers,
  Smartphone,
  Cpu,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  Sparkles,
  Server,
  Zap,
  Lock,
  ExternalLink,
} from 'lucide-react';

export default function ExecutiveDossier({ portfolio, testimonials }) {
  // Flagship showcase selection
  const flagshipIds = [
    'tpass-mate',
    'dine-qr',
    'lorcan-medical',
    'it-park-procurement',
    'maf-battery',
    'paycore-switch',
    'ethio-djibouti-tms',
    'abyssinia-health-ehr',
    'sheger-realestate',
    'addis-geosystems',
    'mulu-tibeb',
    'time-gypsum',
  ];

  const flagshipProjects = flagshipIds
    .map((id) => portfolio.find((p) => p.id === id))
    .filter(Boolean);

  // Group all 30 systems by sector
  const categories = [
    { key: 'hospitality', label: 'Hospitality, Dining & Contactless Systems' },
    { key: 'mobile', label: 'Cross-Platform Mobile Suites & Apps' },
    { key: 'fintech', label: 'FinTech, Banking Switches & Payment Systems' },
    { key: 'erp', label: 'Enterprise ERP, Supply Chain & Industrial Systems' },
    { key: 'health', label: 'Healthcare, Clinical EHR & Diagnostics' },
    { key: 'education', label: 'Higher Education, CMS & Exam Engines' },
    { key: 'engineering', label: 'Heavy Infrastructure, IoT Telemetry & GIS' },
  ];

  return (
    <div className="dossier-document font-sans text-slate-900 bg-white max-w-5xl mx-auto p-4 sm:p-8 space-y-10 leading-normal">
      {/* ======================================================== */}
      {/* 1. COVER & CORPORATE CREDENTIAL HEADER */}
      {/* ======================================================== */}
      <div className="dossier-header border-b-4 border-emerald-600 pb-6 text-center avoid-break">
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 mb-3 rounded-2xl overflow-hidden shadow-md border-2 border-emerald-600/30 p-1 bg-white">
            <img
              src="/images/wazema_logo.jpg"
              alt="Wazema Solutions PLC"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <span className="text-[11px] font-black tracking-widest uppercase text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
            Official Corporate Capability Statement & 30-System Prospectus
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            WAZEMA SOLUTIONS PLC
          </h1>
          <p className="text-base sm:text-lg font-bold text-emerald-700 mt-1">
            ዋዜማ ሶሉሽንስ — የቴክኖሎጂ እና የሶፍትዌር ኢንጂነሪንግ ኩባንያ
          </p>
          <p className="text-xs text-slate-600 max-w-2xl mt-1.5 font-medium">
            Enterprise Cloud Architecture • High-Concurrency Mobile Suites • Multi-Rail FinTech • Custom ERPs
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-4 text-[11px] font-semibold text-slate-700">
            <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Addis Ababa, Ethiopia
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-300 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-600" /> +251 95 386 8816
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-300 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-600" /> wazemasolutions@gmail.com
            </span>
            <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-300 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-600" /> wazema-solutions.vercel.app
            </span>
          </div>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-6 text-left">
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <div className="text-[10px] uppercase font-bold text-emerald-800">Delivered Portfolio</div>
              <div className="text-xl font-black text-slate-950">30 Systems</div>
              <div className="text-[10px] text-slate-600">Enterprise Grade • Production Live</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-700">Production SLA</div>
              <div className="text-xl font-black text-slate-950">99.98%</div>
              <div className="text-[10px] text-slate-600">High-Availability Cloud Hosting</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-700">Global Deployment</div>
              <div className="text-xl font-black text-slate-950">4 Regions</div>
              <div className="text-[10px] text-slate-600">UK, USA, East Africa & Ethiopia</div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <div className="text-[10px] uppercase font-bold text-emerald-800">Client IP Rights</div>
              <div className="text-xl font-black text-slate-950">100% Owned</div>
              <div className="text-[10px] text-slate-600">Full Source Code & Architecture Rights</div>
            </div>
          </div>

          {/* Official Live Digital Customer Desk Callout Banner */}
          <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 text-white border-2 border-emerald-500/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-left w-full avoid-break">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Official Live Customer Desk & System Hub
                </span>
              </div>
              <p className="text-xs text-slate-200">
                To explore live interactive systems, full blueprints, and verified client testimonials:
              </p>
            </div>
            <a
              href="https://wazema-solutions.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-md shrink-0 transition"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>https://wazema-solutions.vercel.app/</span>
            </a>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. EXECUTIVE STATEMENT & ARCHITECTURAL PILLARS */}
      {/* ======================================================== */}
      <div className="space-y-4 avoid-break">
        <h2 className="text-xl font-black text-slate-950 border-b-2 border-slate-300 pb-2 flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          1. Executive Capability Statement & Engineering Authority
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          <strong>Wazema Solutions PLC</strong> is a high-growth software engineering and enterprise digital systems consultancy based in Addis Ababa, Ethiopia. We architect, engineer, and deploy high-concurrency systems, cross-platform mobile ecosystems for competitive international markets (including official DVSA-licensed theory suites in the United Kingdom), custom enterprise resource planning (ERP) suites, and full-stack contactless restaurant platforms. Every system in our portfolio is engineered for production reliability, real-time throughput, and scalable performance.
        </p>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-xs mb-1">
              <Server className="w-4 h-4 text-emerald-600" />
              <span>High-Concurrency Microservices</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              Ultra-low latency Node.js, Go, and Python/FastAPI backends with Redis clustering, WebSocket live event pipelines, and PostgreSQL read-replicas handling millions of requests.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-xs mb-1">
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span>International Mobile Suites & Cloud CMS</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              Dual iOS & Android apps (Flutter / Native) paired with proprietary cloud CMS admin portals allowing client non-technical staff to update content dynamically with zero app store delays.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-xs mb-1">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Multi-Rail FinTech & Payment Switches</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              Direct API routing across Telebirr, CBE Birr, Chapa, Awash Bank, and international card rails with sub-second response times, automated ledger reconciliation, and fraud prevention.
            </p>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-slate-950 font-bold text-xs mb-1">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span>Custom ERP, Supply Chain & IoT Telemetry</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              Multi-department procurement workflows, serialized barcode inventory, GPS cross-corridor fleet telemetry, and industrial factory yield accounting built for operational efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FLAGSHIP SYSTEM SHOWCASE (12 DEEP CASE STUDIES) */}
      {/* ======================================================== */}
      <div className="space-y-6 pt-4">
        <div className="border-b-2 border-slate-300 pb-2">
          <h2 className="text-xl font-black text-slate-950 flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-600" />
            2. Flagship Enterprise Case Studies & Delivered Systems
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Proven engineering outcomes delivered to international and national enterprise partners.
          </p>
        </div>

        <div className="space-y-4">
          {flagshipProjects.map((p, idx) => (
            <div
              key={p.id}
              className="dossier-card border border-slate-300 rounded-xl p-4 bg-white shadow-sm avoid-break"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {/* Visual Thumbnail */}
                <div className="w-full sm:w-44 h-32 shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-mono font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h3 className="font-extrabold text-sm sm:text-base text-slate-950">
                        {p.title}
                      </h3>
                    </div>
                    <span className="dossier-badge text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {p.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-600">
                    <strong>Client / Partner:</strong> {p.client}
                  </div>

                  <div className="text-[11px] text-emerald-700 font-bold bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-200 inline-block">
                    ★ Key Operational KPI: {p.impact}
                  </div>

                  <p className="text-[11px] text-slate-700 leading-relaxed">
                    {p.summary}
                  </p>

                  {/* Core Deliverable Bullets */}
                  {p.features && p.features.length > 0 && (
                    <div className="pt-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Verified Technical Deliverables:
                      </div>
                      <ul className="grid grid-cols-1 gap-1 text-[10.5px] text-slate-700">
                        {p.features.slice(0, 3).map((f, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="pt-1 flex flex-wrap gap-1">
                    {p.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="dossier-tag text-[9.5px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4. COMPLETE CATEGORIZED INDEX OF ALL 30 SYSTEMS */}
      {/* ======================================================== */}
      <div className="space-y-6 pt-6 page-break">
        <div className="border-b-2 border-slate-300 pb-2">
          <h2 className="text-xl font-black text-slate-950 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            3. Master Categorized Registry of 30 Delivered Systems
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Complete architectural inventory categorized by operational domain and verified deliverables.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="dossier-table w-full text-left border-collapse text-[10px]">
            <thead>
              <tr className="bg-slate-900 text-white font-bold">
                <th className="py-2.5 px-2.5 w-8">#</th>
                <th className="py-2.5 px-3">System Name & Architectural Scope</th>
                <th className="py-2.5 px-3">Client Organization</th>
                <th className="py-2.5 px-2.5">Domain</th>
                <th className="py-2.5 px-3">Primary Operational Impact</th>
                <th className="py-2.5 px-3">Core Stack</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b border-slate-200 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  }`}
                >
                  <td className="py-2 px-2.5 font-mono font-bold text-slate-500">
                    {idx + 1}
                  </td>
                  <td className="py-2 px-3 font-bold text-slate-900">
                    {item.title}
                  </td>
                  <td className="py-2 px-3 text-slate-700 font-medium">
                    {item.client}
                  </td>
                  <td className="py-2 px-2.5 uppercase font-semibold text-emerald-800 text-[9px]">
                    {item.category}
                  </td>
                  <td className="py-2 px-3 text-emerald-700 font-bold">
                    {item.impact}
                  </td>
                  <td className="py-2 px-3 text-slate-600 font-mono text-[9px]">
                    {item.techStack.slice(0, 3).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 5. VERIFIED CLIENT ENDORSEMENTS & TESTIMONIALS */}
      {/* ======================================================== */}
      <div className="space-y-4 pt-6 page-break avoid-break">
        <div className="border-b-2 border-slate-300 pb-2">
          <h2 className="text-xl font-black text-slate-950 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            4. Verified Institutional Client Endorsements
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Direct feedback from client directors and executive sponsors across the UK, USA, and Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="dossier-card border border-slate-300 p-3.5 rounded-xl bg-slate-50 flex flex-col justify-between avoid-break"
            >
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-extrabold text-xs text-slate-900">
                    {t.organization}
                  </span>
                  <span className="text-base">{t.flag}</span>
                </div>
                <div className="text-[10px] font-bold text-emerald-700 mb-2">
                  {t.role}
                </div>
                <p className="text-[11px] text-slate-700 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 6. CORPORATE ENGAGEMENT & PROJECT ONBOARDING PROTOCOL */}
      {/* (NO SIGNATURE BLOCK AS EXPLICITLY COMMANDED BY USER) */}
      {/* ======================================================== */}
      <div className="space-y-6 pt-6 page-break avoid-break">
        <div className="border-b-2 border-slate-300 pb-2">
          <h2 className="text-xl font-black text-slate-950 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-600" />
            5. Enterprise Engagement & Project Execution Framework
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            How Wazema Solutions initiates, prototypes, delivers, and supports enterprise-grade software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-sm space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              01
            </div>
            <h4 className="font-bold text-xs text-slate-900">Technical Scoping</h4>
            <p className="text-[10.5px] text-slate-600">
              Complimentary 1-on-1 technical discovery with our Principal Systems Architect to map data models, workflows, and integrations.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-sm space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              02
            </div>
            <h4 className="font-bold text-xs text-slate-900">7-Day Prototype</h4>
            <p className="text-[10.5px] text-slate-600">
              Rapid turn-around of an interactive UI/UX prototype and formal architecture blueprint before client capital commitment.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-sm space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              03
            </div>
            <h4 className="font-bold text-xs text-slate-900">Agile Sprint Delivery</h4>
            <p className="text-[10.5px] text-slate-600">
              Bi-weekly staging deployments with live sprint reviews, continuous automated test coverage, and transparent progress metrics.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-300 bg-white shadow-sm space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              04
            </div>
            <h4 className="font-bold text-xs text-slate-900">Launch & 24/7 SLA</h4>
            <p className="text-[10.5px] text-slate-600">
              Full IP ownership handover, cloud infrastructure provisioning, on-site/remote team training, and 99.98% uptime maintenance.
            </p>
          </div>
        </div>

        {/* Executive Direct Contacts Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950 text-white border border-emerald-500/30 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/40">
                Direct Engineering & Executive Office
              </span>
              <h3 className="text-xl font-black text-white">
                Initiate Your Enterprise Solution Today
              </h3>
              <p className="text-xs text-slate-300 max-w-lg">
                Book a direct scoping session in Addis Ababa (by appointment) or schedule a remote video conference session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:+251953868816"
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call +251 95 386 8816</span>
              </a>
              <a
                href="mailto:wazemasolutions@gmail.com"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 transition"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>wazemasolutions@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400">
            <span>Engineering Hub: Addis Ababa, Ethiopia</span>
            <span>All System Source Codes, Intellectual Property & Schemas 100% Client Owned</span>
            <span>Confidential Dossier • Wazema Solutions PLC © 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
