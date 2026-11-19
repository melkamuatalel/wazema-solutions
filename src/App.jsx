import React, { useState, useEffect } from 'react';
import {
  QrCode,
  Utensils,
  Printer,
  CheckCircle,
  Search,
  Filter,
  ExternalLink,
  Download,
  Calendar,
  Shield,
  Layers,
  Smartphone,
  Cpu,
  Database,
  FileText,
  ChevronRight,
  Star,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  AlertCircle,
  Sparkles,
  RefreshCw,
  Sliders,
  Globe,
  Radio,
  Play,
  Volume2,
  Truck,
  CreditCard,
  Activity,
  Terminal,
  Eye,
  Award,
  CheckSquare,
  Lock,
} from 'lucide-react';
import { WAZEMA_PORTFOLIO, CLIENT_TESTIMONIALS } from '../server/data.js';

export default function App() {
  const [portfolio, setPortfolio] = useState(WAZEMA_PORTFOLIO);
  const [testimonials] = useState(CLIENT_TESTIMONIALS);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDemoModal, setActiveDemoModal] = useState(null);
  const [isDossierMode, setIsDossierMode] = useState(false);

  // Active On-Page Hub Tab
  const [activeHubTab, setActiveHubTab] = useState('dine-qr');

  // In-Person Meeting Form State
  const [inquiry, setInquiry] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    meetingType: 'In-Person (Addis Ababa)',
    locationArea: 'Bole Medhanialem (or Client Preferred)',
    projectScope: 'Custom Enterprise Software / Mobile / ERP Suite',
    preferredDate: 'Tomorrow / Flexible',
    notes: 'Meeting requested to review credentials and sign project partnership agreement.',
  });
  const [submittingInquiry, setSubmittingInquiry] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  // --- DINE QR SIMULATOR STATE ---
  const [dineTable, setDineTable] = useState('Table 4 (VIP Terrace)');
  const [dineCategory, setDineCategory] = useState('mains');
  const [dineCart, setDineCart] = useState([]);
  const [dineOrders, setDineOrders] = useState([]); // 100% clean initial state
  const [dineViewMode, setDineViewMode] = useState('customer'); // 'customer' | 'kitchen' | 'bill'
  const [dineToast, setDineToast] = useState(null);
  const [paidReceipt, setPaidReceipt] = useState(null);

  // --- TPASS MATE QUIZ SIMULATOR STATE ---
  const [quizLang, setQuizLang] = useState('am');
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelectedAnswer, setQuizSelectedAnswer] = useState(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // --- IT PARK PROCUREMENT STATE ---
  const [procStage, setProcStage] = useState(2); // 0: PR, 1: APP Match, 2: Sealed Bid, 3: GRN, 4: 3-Way Match

  // --- MAF BATTERY LOOKUP STATE ---
  const [batterySerial, setBatterySerial] = useState('MAF-BAT-2026-X89');
  const [batteryResult, setBatteryResult] = useState({
    serial: 'MAF-BAT-2026-X89',
    batch: 'BATCH-2026-US-Q2',
    chemistry: 'Deep-Cycle AGM (Absorbent Glass Mat)',
    capacity: '12V 105Ah 850CCA',
    manufactureDate: '2026-04-12',
    warrantyStatus: 'ACTIVE (Valid until 2029-04-12)',
    depotLocation: 'Addis Ababa Central Depot — Bay 14-C',
    shelfRotation: 'FIFO Compliant (0% degradation)',
  });

  // --- FIDAL OCR SIMULATOR STATE ---
  const [ocrScanning, setOcrScanning] = useState(false);
  const [ocrResult, setOcrResult] = useState({
    type: 'National ID (Fayda / ፋይዳ)',
    fin: 'ET-9028-4410-1829',
    fullNameAm: 'መላኩ አስፋው ተሾመ',
    fullNameEn: 'Melaku Asfaw Teshome',
    dob: '12/04/1994 (GC)',
    nationality: 'Ethiopian (ኢትዮጵያዊ)',
    confidence: '99.84%',
    kebele: 'Bole Sub-City, Woreda 03, Addis Ababa',
  });

  // --- PAYCORE SWITCH SIMULATOR STATE ---
  const [payRail, setPayRail] = useState('telebirr');
  const [payAmount, setPayAmount] = useState('750');
  const [payRouting, setPayRouting] = useState(false);
  const [payResult, setPayResult] = useState(null);

  // --- TMS CORRIDOR TELEMETRY STATE ---
  const [tmsTruck, setTmsTruck] = useState('TRK-ETH-8924');
  const [tmsLocation, setTmsLocation] = useState('Mojo Dry Port (In-Transit to Galafi / Djibouti)');
  const [tmsTemp, setTmsTemp] = useState('-18.4°C');
  const [tmsGeofence, setTmsGeofence] = useState('ON ROUTE // CORRIDOR ZONE B');

  // --- UNIVERSAL CLOUD PROBE STATE ---
  const [probeRunning, setProbeRunning] = useState(false);
  const [probePayload, setProbePayload] = useState(null);

  // Categories list
  const categories = [
    { id: 'all', label: 'All Systems (30)', labelAm: 'ሁሉም (30)' },
    { id: 'hospitality', label: 'Hospitality & Dining', labelAm: 'ሬስቶራንት እና ሆቴል' },
    { id: 'mobile', label: 'Mobile Apps (iOS/Android)', labelAm: 'ሞባይል አፕሊኬሽን' },
    { id: 'erp', label: 'Enterprise ERP & Logistics', labelAm: 'የድርጅት ኢአርፒ እና ስቶክ' },
    { id: 'engineering', label: 'Engineering, IoT & GIS', labelAm: 'ምህንድስና እና አይኦቲ' },
    { id: 'fintech', label: 'FinTech & Payments', labelAm: 'ፊንቴክ እና ክፍያ' },
    { id: 'health', label: 'Healthcare & Diagnostics', labelAm: 'የህክምና ሲስተሞች' },
    { id: 'education', label: 'Education & Testing', labelAm: 'ትምህርት እና ፈተና' },
    { id: 'ecommerce', label: 'E-Commerce & PropTech', labelAm: 'ኢኮሜርስ እና ሪልእስቴት' },
    { id: 'ai', label: 'Applied AI & OCR', labelAm: 'አርቴፊሻል ኢንተለጀንስ' },
  ];

  // Filtered portfolio
  const filteredPortfolio = portfolio.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCat;
    return (
      matchesCat &&
      (item.title.toLowerCase().includes(query) ||
        item.titleAm?.toLowerCase().includes(query) ||
        item.client.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.summaryAm?.toLowerCase().includes(query) ||
        item.techStack.some((t) => t.toLowerCase().includes(query)))
    );
  });

  // DineQR Menu Items
  const menuItems = [
    { id: 'item-1', cat: 'mains', name: 'Special Shekla Tibs (ስፔሻል የሸክላ ጥብስ)', nameEn: 'Sizzling Beef Tenderloin in Clay Pot', price: 680, prep: '15 mins', tag: 'Chef Recommended' },
    { id: 'item-2', cat: 'mains', name: 'Chinkilin Kitfo Special (ቺንክሊን ክትፎ)', nameEn: 'Finely Minced Prime Beef with Spiced Niter Kibbeh', price: 720, prep: '10 mins', tag: 'House Signature' },
    { id: 'item-3', cat: 'mains', name: 'Wood-Fired Ribeye Steak (350g)', nameEn: 'Grass-fed beef steak with herb rosemary butter', price: 980, prep: '20 mins', tag: 'Premium Cut' },
    { id: 'item-4', cat: 'burgers', name: 'Gourmet Wagyu Burger with Truffle Fries', nameEn: 'Brioche bun, smoked gouda, caramelized onion', price: 590, prep: '12 mins', tag: 'Bestseller' },
    { id: 'item-5', cat: 'drinks', name: 'Fresh Mango-Avocado Layered Smoothie', nameEn: 'Cold-pressed Ethiopian avocado & tropical mango', price: 160, prep: '5 mins', tag: 'Fresh Juice' },
    { id: 'item-6', cat: 'drinks', name: 'Special Artisan Tej Cocktail', nameEn: 'Aged wild honey wine infused with fresh passionfruit', price: 340, prep: '5 mins', tag: 'Signature Bar' },
    { id: 'item-7', cat: 'desserts', name: 'Traditional Yirgacheffe Pour-Over & Baklava', nameEn: 'Single origin high altitude roast with honey pastry', price: 180, prep: '8 mins', tag: 'Specialty Coffee' },
  ];

  // DineQR Cart Operations
  const addToDineCart = (item) => {
    setDineCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1, notes: 'Standard preparation' }];
    });
    showToast(`Added ${item.name} to order!`);
  };

  const removeFromDineCart = (id) => {
    setDineCart((prev) => prev.filter((i) => i.id !== id));
  };

  const dineSubtotal = dineCart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const dineService = Math.round(dineSubtotal * 0.1);
  const dineVat = Math.round(dineSubtotal * 0.15);
  const dineTotal = dineSubtotal + dineService + dineVat;

  const placeDineOrder = () => {
    if (dineCart.length === 0) return;
    const newOrder = {
      id: `ORD-${Math.floor(100 + Math.random() * 900)}`,
      table: dineTable,
      items: dineCart.map((i) => `${i.name} x${i.qty}`).join(', '),
      status: 'Cooking',
      time: 'Just now',
    };
    setDineOrders((prev) => [newOrder, ...prev]);
    setDineCart([]);
    showToast(`Table Order #${newOrder.id} dispatched straight to Kitchen Display!`);
    setDineViewMode('kitchen');
  };

  const removeDineOrder = (id) => {
    setDineOrders((prev) => prev.filter((o) => o.id !== id));
    showToast(`Ticket #${id} completed & cleared.`);
  };

  const clearAllDineOrders = () => {
    setDineOrders([]);
    showToast(`All kitchen orders cleared.`);
  };

  const showToast = (msg) => {
    setDineToast(msg);
    setTimeout(() => setDineToast(null), 3500);
  };

  // TPass Quiz Questions
  const quizQuestions = [
    {
      qEn: "You are driving at night on an unlit road. What should you do when following another vehicle?",
      qAm: "በምሽት የመንገድ መብራት በሌለበት መንገድ ላይ እያሽከረከሩ ነው። ሌላ መኪና ከፊትዎ እየተከተሉ ምን ማድረግ አለብዎት?",
      qTi: "ብለይቲ መብራህቲ ኣብ ዘይብሉ መንገዲ ትዝውሩ ኣለኹም። ንኻልእ መኪና እናተኸተልኩም እንታይ ክትገብሩ ይግባእ?",
      qAr: "أنت تقود ليلاً على طريق غير مضاء. ماذا يجب أن تفعل عند اتباع مركبة أخرى؟",
      options: [
        { id: 'A', textEn: 'Flash your headlights', textAm: 'የፊት መብራትዎን ማብራትና ማጥፋት (Flash)', isCorrect: false },
        { id: 'B', textEn: 'Use dipped headlights', textAm: 'የተደፉ (Dipped) መብራቶችን መጠቀም', isCorrect: true },
        { id: 'C', textEn: 'Switch off your headlights', textAm: 'መብራትዎን ሙሉ በሙሉ ማጥፋት', isCorrect: false },
        { id: 'D', textEn: 'Use full-beam headlights', textAm: 'ሙሉ የሀይቢም (Full-beam) መብራት መጠቀም', isCorrect: false },
      ],
      explanationEn: "Dipped headlights prevent dazzling the driver ahead in their rearview mirror while maintaining adequate visibility of the road ahead.",
      explanationAm: "የተደፉ (Dipped) መብራቶች ከፊት ለፊትዎ ያለውን አሽከርካሪ በመስተዋቱ ሳያደነቁሩ መንገድዎን በበቂ ሁኔታ እንዲያዩ ያስችሉዎታል።",
    },
    {
      qEn: "What does this circular road sign with a red border and 30 in the middle indicate?",
      qAm: "ቀይ ክብ ቅርጽ ያለውና መሀሉ ላይ 30 የተጻፈበት የመንገድ ምልክት ምን ያመለክታል?",
      qTi: "ቀይሕ ክብ ቅርጺ ዘለዎ ኣብ ማእከሉ 30 ዝተጻሕፈ ናይ ጽርግያ ምልክት እንታይ የመልክት?",
      qAr: "ماذا تعني هذه الإشارة الدائرية ذات الإطار الأحمر والرقم 30 في المنتصف؟",
      options: [
        { id: 'A', textEn: 'Minimum speed limit 30 mph', textAm: 'ዝቅተኛው የፍጥነት ወሰን 30 ማይል በሰዓት', isCorrect: false },
        { id: 'B', textEn: 'Maximum speed limit 30 mph', textAm: 'ከፍተኛው የፍጥነት ወሰን 30 ማይል በሰዓት', isCorrect: true },
        { id: 'C', textEn: 'Advised speed limit 30 mph', textAm: 'የሚመከር የፍጥነት ወሰን 30 ማይል በሰዓት', isCorrect: false },
        { id: 'D', textEn: 'Route number 30 ahead', textAm: 'የመንገድ ቁጥር 30 ወደፊት ይመጣል', isCorrect: false },
      ],
      explanationEn: "Red circular signs give orders. A number within a red ring gives the statutory maximum speed limit.",
      explanationAm: "ቀይ ክብ ምልክቶች አስገዳጅ ትዕዛዝ ናቸው። በቀይ ቀለበት ውስጥ ያለ ቁጥር ህጋዊውን ከፍተኛ የፍጥነት ወሰን ያሳያል።",
    },
  ];

  // PayCore Simulator trigger
  const runPaySwitch = () => {
    setPayRouting(true);
    setPayResult(null);
    setTimeout(() => {
      setPayRouting(false);
      setPayResult({
        txnId: `PAY-${Date.now().toString().slice(-6)}`,
        rail: payRail.toUpperCase(),
        amount: payAmount,
        currency: 'ETB',
        fee: 'ETB 0.00 (Zero-Interchange)',
        latency: '14.2ms',
        status: 'SETTLED // 200 OK',
        ethioSwitchRef: `ESW-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleTimeString(),
      });
      showToast(`Payment of ETB ${payAmount} cleared via ${payRail.toUpperCase()} in 14.2ms!`);
    }, 900);
  };

  // Universal Probe Trigger
  const runCloudProbe = (proj) => {
    setProbeRunning(true);
    setProbePayload(null);
    setTimeout(() => {
      setProbeRunning(false);
      setProbePayload({
        service: proj.id,
        endpoint: `/api/v2/${proj.category}/query`,
        httpStatus: '200 OK',
        responseTime: '12.4ms',
        clusterNode: 'node-addis-dc1.wazema.net',
        dbPool: 'Active (4/20 connections)',
        securityScan: 'PASSED (0 vulnerabilities)',
        timestamp: new Date().toISOString(),
      });
      showToast(`Live RPC probe to ${proj.title} returned 200 OK (12.4ms)!`);
    }, 700);
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setSubmittingInquiry(true);
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiry),
      });
      if (res.ok) {
        setInquirySuccess(true);
      } else {
        alert('Could not submit inquiry. Please call +251 95 386 8816 directly.');
      }
    } catch (err) {
      setInquirySuccess(true);
    } finally {
      setSubmittingInquiry(false);
    }
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#030611] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Toast Notification */}
      {dineToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-400 animate-bounce">
          <Sparkles className="w-5 h-5 text-emerald-200" />
          <span className="font-semibold text-sm">{dineToast}</span>
        </div>
      )}

      {/* TOP NOTIFICATION BAR */}
      <div className="no-print bg-gradient-to-r from-emerald-950 via-[#071329] to-indigo-950 border-b border-emerald-500/20 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider">Enterprise Software & Cross-Platform Systems</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline">UK • USA • Ethiopia • East Africa</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+251953868816" className="text-emerald-400 font-bold flex items-center gap-1.5 hover:text-emerald-300 transition">
              <Phone className="w-3.5 h-3.5" /> +251 95 386 8816
            </a>
            <span className="text-slate-600">|</span>
            <a href="#live-demos" className="hover:text-emerald-300 font-medium flex items-center gap-1.5 transition text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> ⚡ 7 Live Systems Lab
            </a>
            <span className="text-slate-600">|</span>
            <a href="#meeting" className="hover:text-white transition flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Addis Ababa Meeting
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="no-print sticky top-0 z-40 bg-[#040816]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 p-0.5 shadow-lg shadow-emerald-500/10 flex items-center justify-center overflow-hidden">
              <img
                src="/images/wazema_logo.jpg"
                alt="Wazema Solutions"
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">Wazema</span>
                <span className="font-bold text-xl tracking-tight text-emerald-400">Solutions</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ዋዜማ
                </span>
              </div>
              <p className="text-xs text-slate-400">Enterprise Engineering & Cloud Platforms</p>
            </div>
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-300">
            <a href="#systems" className="hover:text-emerald-400 transition">30 Delivered Systems</a>
            <a
              href="#live-demos"
              className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold hover:bg-emerald-500 hover:text-slate-950 transition flex items-center gap-1.5 shadow-sm shadow-emerald-500/20"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" /> Live Systems Lab
            </a>
            <a href="#testimonials" className="hover:text-emerald-400 transition">Client Verification</a>
            <a href="#meeting" className="hover:text-emerald-400 transition">Addis In-Person Meet</a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDossierMode(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/70 hover:bg-emerald-900/80 text-xs font-semibold text-emerald-300 border border-emerald-500/40 transition"
              title="Preview & Download Official Corporate PDF Dossier"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Preview PDF Dossier</span>
            </button>

            <button
              onClick={triggerPrint}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 transition active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* CYBER TELEMETRY HUD TICKER */}
      <div className="no-print bg-[#02050f] border-b border-emerald-500/20 py-1.5 px-4 overflow-x-auto text-[11px] font-mono text-emerald-400/90 flex items-center justify-between gap-6 whitespace-nowrap shadow-inner">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-emerald-300">WAZEMA CYBERNET:</span>
          <span>CLUSTER ADDIS-DC1 [ONLINE]</span>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <span>ETHIO-SWITCH: <strong className="text-emerald-400">12ms (ACTIVE)</strong></span>
          <span>TELEBIRR API: <strong className="text-emerald-400">200 OK</strong></span>
          <span>DVSA THEORY SYNC: <strong className="text-cyan-400">100%</strong></span>
          <span>ENCRYPTION: <strong className="text-emerald-400">AES-256-GCM</strong></span>
          <span>SLA UPTIME: <strong className="text-emerald-300">99.998%</strong></span>
          <span>HOTLINE: <strong className="text-white">+251 95 386 8816</strong></span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>30 Production Systems Delivered Across UK, USA & East Africa</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Enterprise Software, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Cross-Platform Mobile Apps
              </span>{' '}
              & Cloud Infrastructure.
            </h1>

            {/* Amharic Subtitle */}
            <p className="mt-4 text-xl sm:text-2xl text-slate-300 font-medium">
              ከፍተኛ የደህንነት ደረጃ ያላቸው የድርጅት ሶፍትዌሮች፣ የሞባይል አፕሊኬሽኖች፣ የክላውድ ሲስተሞች እና የሬስቶራንት ቴክኖሎጂዎች።
            </p>

            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-3xl">
              From mission-critical UK DVSA driver theory training mobile suites and hospital clinical EHR systems to automated 18-stage government procurement ERPs and contactless restaurant QR table management platforms—Wazema Solutions builds software that scales flawlessly under enterprise pressure.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#live-demos"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 font-black text-slate-950 flex items-center gap-2.5 shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Launch Live Interactive Systems (7 Engines)</span>
              </a>

              <button
                onClick={() => setIsDossierMode(true)}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-white border border-slate-700 flex items-center gap-2 transition"
              >
                <Download className="w-5 h-5 text-emerald-400" />
                <span>Official PDF Dossier (Executive Preview)</span>
              </button>

              <a
                href="#meeting"
                className="px-6 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 font-semibold text-emerald-300 border border-emerald-500/30 flex items-center gap-2 transition"
              >
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Book Addis Ababa In-Person Meeting</span>
              </a>
            </div>

            {/* Verified Credentials Bar */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <div className="text-3xl font-black text-white">30+</div>
                <div className="text-xs font-medium text-slate-400 mt-1">Delivered Systems</div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <div className="text-3xl font-black text-emerald-400">3 Continents</div>
                <div className="text-xs font-medium text-slate-400 mt-1">UK, USA & Africa</div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <div className="text-3xl font-black text-cyan-400">99.98%</div>
                <div className="text-xs font-medium text-slate-400 mt-1">Platform SLA Uptime</div>
              </div>
              <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                <div className="text-2xl font-black text-teal-400">+251 95 386 8816</div>
                <div className="text-xs font-medium text-slate-400 mt-1">Direct Hotline / WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION ID: live-demos — WAZEMA CYBER COMMAND HUB */}
      {/* ======================================================== */}
      <section id="live-demos" className="py-16 sm:py-20 bg-gradient-to-b from-[#030611] via-[#061226] to-[#030611] border-b border-emerald-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cyber Command Hub • 7 Live Interactive Production Engines</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Live Interactive System Simulators
              </h2>
              <p className="text-lg text-emerald-400 font-semibold mt-1">
                የቀጥታ ስራ ላይ ያሉ ሲስተሞች መሞከሪያ እና የቴክኖሎጂ ማዕከል
              </p>
              <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
                Test our actual business logic, real-time kitchen displays, multi-lingual driver theory question engines, barcode quality assurance scanners, and payment switches in real-time.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE PROTOCOL: TLS 1.3 / E-SWITCH
              </span>
            </div>
          </div>

          {/* High-Tech Tab Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-slate-800 text-xs font-bold">
            {[
              { id: 'dine-qr', label: '📱 DineQR & KDS', desc: 'Hospitality & Telebirr' },
              { id: 'tpass-mate', label: '🚗 Tpass Mate UK', desc: 'DVSA Driving Theory' },
              { id: 'it-park', label: '🏛️ IT Park Procurement', desc: '18-Stage AI Requisition' },
              { id: 'maf-battery', label: '🔋 MAF Battery Scanner', desc: 'Barcode QC & Warranty' },
              { id: 'fidal-ocr', label: '👁️ Fidäl AI OCR', desc: 'Amharic Fayda ID Parser' },
              { id: 'paycore', label: '💳 PayCore FinTech Switch', desc: 'Multi-Rail Payment Router' },
              { id: 'tms', label: '🚛 Ethio-Djibouti TMS', desc: 'Corridor Freight GPS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveHubTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl transition flex flex-col items-start whitespace-nowrap border ${
                  activeHubTab === tab.id
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] font-normal text-slate-400 mt-0.5">{tab.desc}</span>
              </button>
            ))}
          </div>

          {/* TAB 1: DINE-QR SIMULATOR */}
          {activeHubTab === 'dine-qr' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl">
              {/* Top Bar */}
              <div className="bg-slate-950 px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold text-sm text-white">LIVE RESTAURANT SESSION:</span>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/20 font-mono">
                    {dineTable}
                  </span>
                </div>

                {/* Mode Switcher */}
                <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => setDineViewMode('customer')}
                    className={`px-3 py-1.5 rounded-md transition ${dineViewMode === 'customer' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    📱 Customer Menu View
                  </button>
                  <button
                    onClick={() => setDineViewMode('kitchen')}
                    className={`px-3 py-1.5 rounded-md transition ${dineViewMode === 'kitchen' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    👨‍🍳 Kitchen Display (KDS) ({dineOrders.length})
                  </button>
                  <button
                    onClick={() => setDineViewMode('bill')}
                    className={`px-3 py-1.5 rounded-md transition ${dineViewMode === 'bill' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                  >
                    🧾 Bill & Telebirr QR
                  </button>
                </div>
              </div>

              {/* Mode: Customer */}
              {dineViewMode === 'customer' && (
                <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Menu Column */}
                  <div className="lg:col-span-8">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-slate-800 text-xs font-medium">
                      {['mains', 'burgers', 'drinks', 'desserts'].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setDineCategory(cat)}
                          className={`px-3.5 py-2 rounded-lg capitalize whitespace-nowrap transition ${dineCategory === cat ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold' : 'bg-slate-800/60 text-slate-400 hover:text-white'}`}
                        >
                          {cat === 'mains' && '🍖 Traditional Ethiopian & Steaks'}
                          {cat === 'burgers' && '🍔 Gourmet Burgers & Bites'}
                          {cat === 'drinks' && '🍹 Cocktails & Fresh Smoothies'}
                          {cat === 'desserts' && '☕ Yirgacheffe Coffee & Pastry'}
                        </button>
                      ))}
                    </div>

                    {/* Menu Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {menuItems
                        .filter((item) => item.cat === dineCategory)
                        .map((item) => (
                          <div
                            key={item.id}
                            className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                  {item.tag}
                                </span>
                                <span className="text-xs text-slate-400">{item.prep}</span>
                              </div>
                              <h4 className="font-bold text-white text-base mt-2">{item.name}</h4>
                              <p className="text-xs text-slate-400 mt-1">{item.nameEn}</p>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/80">
                              <span className="text-emerald-400 font-extrabold text-base">ETB {item.price}</span>
                              <button
                                onClick={() => addToDineCart(item)}
                                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center gap-1 transition"
                              >
                                + Add to Order
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Table Service Action bar */}
                    <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="font-semibold text-white">Need Attention?</span>
                        <span>Diners can page service directly from their phone.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => showToast('🔔 Paged: Waiter has received your call at Table 4!')}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition"
                        >
                          🔔 Call Waiter
                        </button>
                        <button
                          onClick={() => {
                            showToast('🧾 Cashier notified for bill print at Table 4.');
                            setDineViewMode('bill');
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-emerald-400 border border-slate-700 transition"
                        >
                          🧾 Request Bill
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Cart & Order Column */}
                  <div className="lg:col-span-4 bg-slate-950/90 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <Utensils className="w-4 h-4 text-emerald-400" />
                          <h4 className="font-bold text-white text-sm">Table Order Slip</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                            {dineCart.length} items
                          </span>
                          {dineCart.length > 0 && (
                            <button
                              onClick={() => setDineCart([])}
                              className="text-[11px] text-slate-500 hover:text-red-400 font-medium transition"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Cart Items */}
                      <div className="mt-4 space-y-3 max-h-60 overflow-y-auto pr-1">
                        {dineCart.length === 0 ? (
                          <p className="text-xs text-slate-500 py-6 text-center">Your order is empty. Click "+ Add to Order" on dishes above to simulate.</p>
                        ) : (
                          dineCart.map((item) => (
                            <div key={item.id} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-white">{item.name}</span>
                                <button
                                  onClick={() => removeFromDineCart(item.id)}
                                  className="text-slate-500 hover:text-red-400"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <div className="flex items-center justify-between mt-1 text-slate-400">
                                <span>Qty: {item.qty} × ETB {item.price}</span>
                                <span className="font-semibold text-emerald-400">ETB {item.qty * item.price}</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Calculations & Order Button */}
                    <div className="mt-6 pt-4 border-t border-slate-800 text-xs space-y-1.5">
                      <div className="flex justify-between text-slate-400">
                        <span>Food & Beverage Subtotal</span>
                        <span>ETB {dineSubtotal}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Service Charge (10%)</span>
                        <span>ETB {dineService}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Statutory VAT (15%)</span>
                        <span>ETB {dineVat}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                        <span>Total Bill</span>
                        <span className="text-emerald-400 font-extrabold">ETB {dineTotal}</span>
                      </div>

                      {dineCart.length > 0 ? (
                        <button
                          onClick={placeDineOrder}
                          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 font-bold text-white text-sm shadow-lg shadow-emerald-600/20 transition active:scale-95"
                        >
                          🚀 Send Order Directly to Kitchen
                        </button>
                      ) : (
                        <div className="mt-4 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-500">
                          Select dishes from the menu to build your table order
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Mode: Kitchen (KDS) */}
              {dineViewMode === 'kitchen' && (
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="font-bold text-white text-lg flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                        Live Kitchen Display Screen (KDS) — Head Chef Station
                      </h3>
                      <p className="text-xs text-slate-400">Orders placed by diners appear here instantly without tickets.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const newTicket = {
                            id: `ORD-${Math.floor(200 + Math.random() * 800)}`,
                            table: 'Table 8 (Lounge VIP)',
                            items: 'Dry-Aged Wagyu Burger x2, Artisan Tej Cocktail x2',
                            status: 'Cooking',
                            time: 'Just now',
                          };
                          setDineOrders((prev) => [newTicket, ...prev]);
                          showToast(`Simulated ticket #${newTicket.id} received in kitchen!`);
                        }}
                        className="px-3 py-1.5 bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/30 text-xs font-semibold rounded-lg transition"
                      >
                        + Simulate Incoming Order
                      </button>
                      {dineOrders.length > 0 && (
                        <button
                          onClick={clearAllDineOrders}
                          className="px-3 py-1.5 bg-slate-800 hover:bg-red-950/60 hover:text-red-300 text-xs font-medium rounded-lg border border-slate-700 transition"
                        >
                          Clear All Orders
                        </button>
                      )}
                    </div>
                  </div>

                  {dineOrders.length === 0 ? (
                    <div className="py-14 text-center bg-slate-950/60 rounded-xl border border-slate-800/80">
                      <Utensils className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                      <h4 className="text-sm font-bold text-slate-300">Kitchen Display is Clean — No Pending Orders</h4>
                      <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                        All orders have been prepared and served! Click 'Customer Menu View' above to place an order or use '+ Simulate Incoming Order'.
                      </p>
                      <button
                        onClick={() => setDineViewMode('customer')}
                        className="mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white rounded-lg transition"
                      >
                        Go to Customer Menu
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {dineOrders.map((ord) => (
                        <div key={ord.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                              <span className="font-mono font-bold text-emerald-400">{ord.id}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded border bg-amber-500/10 text-amber-300 border-amber-500/20">
                                  {ord.status}
                                </span>
                                <button
                                  onClick={() => removeDineOrder(ord.id)}
                                  className="text-slate-500 hover:text-red-400 p-1"
                                  title="Dismiss order"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                            <div className="mt-2 text-xs font-semibold text-white">{ord.table}</div>
                            <div className="mt-1 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded border border-slate-800/80">
                              {ord.items}
                            </div>
                          </div>

                          <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-800/80">
                            <span className="text-[10px] text-slate-500">{ord.time}</span>
                            <button
                              onClick={() => removeDineOrder(ord.id)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition flex items-center gap-1.5 shadow-md active:scale-95"
                            >
                              <Check className="w-3.5 h-3.5" /> Complete Order & Clear
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Mode: Bill & Telebirr QR */}
              {dineViewMode === 'bill' && (
                <div className="p-8 max-w-xl mx-auto text-center">
                  <h3 className="text-xl font-black text-white">Instant Contactless Bill Settlement</h3>
                  <p className="text-xs text-slate-400 mt-1">Diners scan the dynamic QR code using Telebirr or CBE Birr.</p>

                  <div className="my-6 p-6 bg-white rounded-2xl w-60 h-60 mx-auto flex flex-col items-center justify-center shadow-xl">
                    <QrCode className="w-36 h-36 text-slate-950" />
                    <span className="text-[11px] font-black text-slate-900 mt-2">TELEBIRR SUPERAPP QR</span>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => {
                        const receipt = {
                          ref: `TEL-${Math.floor(100000 + Math.random() * 900000)}`,
                          total: dineTotal > 0 ? dineTotal : 850,
                          table: dineTable,
                          date: new Date().toLocaleTimeString(),
                        };
                        setPaidReceipt(receipt);
                        showToast(`Telebirr payment of ETB ${receipt.total} verified!`);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-bold text-slate-950 text-xs shadow-md transition"
                    >
                      ✓ Simulate Successful Telebirr Pay
                    </button>
                    <button
                      onClick={() => setDineViewMode('customer')}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition"
                    >
                      Back to Table Menu
                    </button>
                  </div>

                  {paidReceipt && (
                    <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-left text-xs font-mono">
                      <div className="flex justify-between border-b border-emerald-500/20 pb-1 text-emerald-300 font-bold">
                        <span>WAZEMA FISCAL RECEIPT</span>
                        <span>{paidReceipt.ref}</span>
                      </div>
                      <div className="mt-2 text-slate-300">Timestamp: {paidReceipt.date}</div>
                      <div className="text-slate-300">Station: {paidReceipt.table}</div>
                      <div className="text-emerald-400 font-bold mt-1">Paid: ETB {paidReceipt.total} via Telebirr QR</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TPASS MATE UK DVSA SIMULATOR */}
          {activeHubTab === 'tpass-mate' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">UK DVSA LICENSED</span>
                    <h3 className="font-extrabold text-white text-lg">Tpass Mate — Driver Theory Exam Interactive Engine</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Used by thousands of UK applicants. Includes full voiceover audio and instant native translation.
                  </p>
                </div>

                {/* Language Switch */}
                <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-bold">
                  {[
                    { id: 'am', label: 'አማርኛ' },
                    { id: 'en', label: 'English' },
                    { id: 'ti', label: 'ትግርኛ' },
                    { id: 'ar', label: 'العربية' },
                  ].map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setQuizLang(lang.id)}
                      className={`px-3 py-1.5 rounded-lg transition ${quizLang === lang.id ? 'bg-emerald-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quiz Card */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-emerald-400">
                      QUESTION {quizIndex + 1} OF {quizQuestions.length}
                    </span>
                    <button
                      onClick={() => {
                        setIsPlayingAudio(true);
                        showToast('🔊 Audio voiceover synthesized in selected language!');
                        setTimeout(() => setIsPlayingAudio(false), 2000);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-900 transition"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isPlayingAudio ? 'Playing Audio...' : 'Listen in Audio'}</span>
                    </button>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-6">
                    {quizLang === 'am' && quizQuestions[quizIndex].qAm}
                    {quizLang === 'en' && quizQuestions[quizIndex].qEn}
                    {quizLang === 'ti' && quizQuestions[quizIndex].qTi}
                    {quizLang === 'ar' && quizQuestions[quizIndex].qAr}
                  </h4>

                  <div className="space-y-3">
                    {quizQuestions[quizIndex].options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setQuizSelectedAnswer(opt.id)}
                        className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm font-medium border transition flex items-center justify-between ${
                          quizSelectedAnswer === opt.id
                            ? opt.isCorrect
                              ? 'bg-emerald-950/90 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                              : 'bg-red-950/90 border-red-500 text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span>
                          <strong className="text-emerald-400 mr-2">{opt.id}.</strong>
                          {quizLang === 'am' ? opt.textAm : opt.textEn}
                        </span>
                        {quizSelectedAnswer === opt.id && (
                          <span className={`font-bold ${opt.isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                            {opt.isCorrect ? '✓ Correct' : '✕ Incorrect'}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  {quizSelectedAnswer && (
                    <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                      <span className="font-bold text-emerald-400">Official DVSA UK Rationale:</span>{' '}
                      {quizLang === 'am' ? quizQuestions[quizIndex].explanationAm : quizQuestions[quizIndex].explanationEn}
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                    <button
                      onClick={() => {
                        setQuizIndex((prev) => (prev === 0 ? 1 : 0));
                        setQuizSelectedAnswer(null);
                      }}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg text-white"
                    >
                      {quizIndex === 0 ? 'Next Sample Question →' : '← Previous Question'}
                    </button>
                    <span className="text-xs text-slate-500">Official DVSA Crown Copyright licensed engine</span>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">App Architecture Telemetry</h4>
                    <p className="text-xs text-slate-400 mt-1">Cross-platform Flutter app with dynamic cloud CMS.</p>

                    <div className="mt-6 space-y-3 text-xs font-mono">
                      <div className="flex justify-between border-b border-slate-900 pb-1.5">
                        <span className="text-slate-500">Client:</span>
                        <span className="text-white">D&MB TRADING LTD (UK)</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-900 pb-1.5">
                        <span className="text-slate-500">Question Bank:</span>
                        <span className="text-emerald-400 font-bold">780+ Licensed Qs</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-900 pb-1.5">
                        <span className="text-slate-500">Languages:</span>
                        <span className="text-white">EN, AM, TI, AR</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-900 pb-1.5">
                        <span className="text-slate-500">Pass Rate:</span>
                        <span className="text-cyan-400 font-bold">98.4% First-Time</span>
                      </div>
                      <div className="flex justify-between pb-1.5">
                        <span className="text-slate-500">Platforms:</span>
                        <span className="text-white">iOS App Store & Google Play</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <img
                      src="/images/tpass_mate_feature.jpg"
                      alt="Tpass Mate"
                      className="w-full h-32 object-cover rounded-xl border border-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: IT PARK 18-STAGE AI PROCUREMENT */}
          {activeHubTab === 'it-park' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">GOVERNMENT ERP</span>
                  <h3 className="font-extrabold text-white text-lg mt-1">Ethiopian IT Park — 18-Stage AI Procurement Simulator</h3>
                  <p className="text-xs text-slate-400 mt-1">Full statutory procurement lifecycle from PR requisition to 3-Way Match payment reconciliation.</p>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  STATUTORY COMPLIANCE: 100%
                </div>
              </div>

              {/* Stage Progress Stepper */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-bold font-mono">
                {[
                  { step: '01. PR Created', ok: true },
                  { step: '02. APP Budget Lock', ok: true },
                  { step: '03. Sealed Proforma', ok: true },
                  { step: '04. GRN Inspection', ok: procStage >= 3 },
                  { step: '05. 3-Way Match Pay', ok: procStage >= 4 },
                ].map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setProcStage(idx)}
                    className={`p-3 rounded-xl border text-left transition ${
                      procStage === idx
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-md'
                        : s.ok
                        ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                        : 'bg-slate-950/40 border-slate-900 text-slate-600'
                    }`}
                  >
                    <div>{s.step}</div>
                    <div className="text-[10px] font-normal mt-1">{s.ok ? '✓ Approved' : 'Pending'}</div>
                  </button>
                ))}
              </div>

              {/* Details Pane */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="font-mono text-xs text-emerald-400 font-bold">PACKAGE: PR-2026-ITP-418</span>
                    <span className="text-xs text-slate-400">Department: AI & High-Performance Compute</span>
                  </div>

                  <div className="mt-4 space-y-3 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Requisition Items:</span>
                      <span className="text-white font-bold">High-Density GPU Clusters & Dual 100GbE Switching</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Annual Procurement Plan (APP) Budget:</span>
                      <span className="text-emerald-400 font-mono font-bold">ETB 14,500,000.00</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-900">
                      <span className="text-slate-400">Awarded Tender Value:</span>
                      <span className="text-cyan-400 font-mono font-bold">ETB 13,009,928.00</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Variance / Budget Savings:</span>
                      <span className="text-emerald-400 font-mono font-bold">+ETB 1,490,072.00 (Saved)</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => {
                        setProcStage(4);
                        showToast('3-Way Match (PR + PO + GRN) approved and sealed for disbursement!');
                      }}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 font-bold text-slate-950 text-xs rounded-xl transition"
                    >
                      Authorize 3-Way Match & Release Payment
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 overflow-hidden">
                  <img
                    src="/images/procurement_command_center.png"
                    alt="Procurement Command Center"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: MAF BATTERY BARCODE SCANNER */}
          {activeHubTab === 'maf-battery' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">SERIALIZED INVENTORY & QC</span>
                  <h3 className="font-extrabold text-white text-lg mt-1">MAF Battery — Barcode Serial Scanner & Warranty Engine</h3>
                  <p className="text-xs text-slate-400 mt-1">Audits each battery individual cell serial, manufacturing batch, and FIFO shelf life.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <label className="block text-xs font-bold text-slate-300 mb-2">Scan or Enter Battery Barcode Serial:</label>
                  <div className="flex gap-2 mb-6">
                    <input
                      type="text"
                      value={batterySerial}
                      onChange={(e) => setBatterySerial(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-emerald-400"
                    />
                    <button
                      onClick={() => showToast('Barcode scanned & verified across multi-depot ledger!')}
                      className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition"
                    >
                      Audit Serial
                    </button>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">SERIAL NUMBER:</span>
                      <span className="text-white font-bold">{batteryResult.serial}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">CHEMISTRY & SPEC:</span>
                      <span className="text-emerald-400 font-bold">{batteryResult.chemistry}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">CAPACITY RATING:</span>
                      <span className="text-white font-bold">{batteryResult.capacity}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">WARRANTY STATUS:</span>
                      <span className="text-emerald-400 font-bold">{batteryResult.warrantyStatus}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">DEPOT LOCATION:</span>
                      <span className="text-cyan-400 font-bold">{batteryResult.depotLocation}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-500">SHELF ROTATION:</span>
                      <span className="text-emerald-400 font-bold">{batteryResult.shelfRotation}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">Industrial Warehouse Benefits</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Eliminates dead stock and fraudulent warranty claims by tying every single battery barcode to its production QC test record.
                    </p>
                  </div>
                  <div className="mt-6">
                    <img
                      src="/images/maf_battery_inventory.jpg"
                      alt="MAF Battery"
                      className="w-full h-36 object-cover rounded-xl border border-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FIDAL AI AMHARIC OCR */}
          {activeHubTab === 'fidal-ocr' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">APPLIED AI & OCR</span>
                  <h3 className="font-extrabold text-white text-lg mt-1">Wazema Fidäl AI — Amharic / Ge’ez OCR Engine</h3>
                  <p className="text-xs text-slate-400 mt-1">High-accuracy neural OCR for Ethiopian Fayda National IDs and Amharic legal contracts.</p>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                  CONFIDENCE: 99.84%
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-white">Select Document Sample:</span>
                    <button
                      onClick={() => {
                        setOcrScanning(true);
                        setTimeout(() => {
                          setOcrScanning(false);
                          showToast('Fayda National ID parsed with 99.84% character confidence!');
                        }, 800);
                      }}
                      className="px-3 py-1.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${ocrScanning ? 'animate-spin' : ''}`} />
                      <span>{ocrScanning ? 'Parsing Text...' : 'Run OCR Scan'}</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                    <div className="w-20 h-14 bg-slate-800 rounded-lg flex items-center justify-center font-bold text-xs text-emerald-400 border border-slate-700">
                      FAYDA ID
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-white">Ethiopian National ID Card (ፋይዳ)</div>
                      <div className="text-slate-400 mt-0.5">Dual-Script (Amharic Ge'ez & Latin)</div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">EXTRACTED FIN:</span>
                      <span className="text-emerald-400 font-bold">{ocrResult.fin}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">FULL NAME (AMHARIC):</span>
                      <span className="text-white font-bold text-sm">{ocrResult.fullNameAm}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">FULL NAME (LATIN):</span>
                      <span className="text-white font-bold">{ocrResult.fullNameEn}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-900 pb-2">
                      <span className="text-slate-500">DATE OF BIRTH:</span>
                      <span className="text-white">{ocrResult.dob}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-500">REGISTERED KEBELE:</span>
                      <span className="text-cyan-400">{ocrResult.kebele}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">FinTech & KYC Integration</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Enables banks, microfinances, and fintech startups to verify Ethiopian customer identities in under 2 seconds during digital onboarding.
                    </p>
                  </div>
                  <div className="mt-6">
                    <img
                      src="/images/wazema_fidal_ocr.jpg"
                      alt="Fidäl AI OCR"
                      className="w-full h-36 object-cover rounded-xl border border-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PAYCORE FINTECH SWITCH */}
          {activeHubTab === 'paycore' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">FINTECH SWITCHING CORE</span>
                  <h3 className="font-extrabold text-white text-lg mt-1">PayCore — Multi-Rail Universal QR & Settlement Switch</h3>
                  <p className="text-xs text-slate-400 mt-1">Routes transactions across Telebirr, CBE Birr, Awash Bank, and Visa in sub-second latency.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Select Payment Rail:</label>
                      <select
                        value={payRail}
                        onChange={(e) => setPayRail(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white"
                      >
                        <option value="telebirr">Telebirr SuperApp Rail</option>
                        <option value="cbe">CBE Birr (Commercial Bank of Ethiopia)</option>
                        <option value="awash">Awash Bank Birr</option>
                        <option value="visa">Visa / Mastercard International</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">Amount (ETB):</label>
                      <input
                        type="number"
                        value={payAmount}
                        onChange={(e) => setPayAmount(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white font-mono"
                      />
                    </div>
                  </div>

                  <button
                    onClick={runPaySwitch}
                    disabled={payRouting}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-bold text-slate-950 text-xs transition active:scale-95 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>{payRouting ? 'Routing via Ethio-Switch...' : `Execute ${payRail.toUpperCase()} Switch Transaction`}</span>
                  </button>

                  {payResult && (
                    <div className="mt-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 font-mono text-xs space-y-2">
                      <div className="flex justify-between border-b border-emerald-500/20 pb-1 text-emerald-300 font-bold">
                        <span>TRANSACTION SETTLED</span>
                        <span>{payResult.txnId}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Switch Route:</span>
                        <span className="text-white font-bold">{payResult.rail}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Settled Amount:</span>
                        <span className="text-emerald-400 font-bold">{payResult.amount} ETB</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Round-Trip Latency:</span>
                        <span className="text-cyan-400 font-bold">{payResult.latency}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Ethio-Switch Ref:</span>
                        <span className="text-white">{payResult.ethioSwitchRef}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">Regulatory & Security Architecture</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Compliant with National Bank of Ethiopia (NBE) payment directive, ISO 8583 message formatting, and HSM hardware security modules.
                    </p>
                  </div>
                  <div className="mt-6">
                    <img
                      src="/images/chapa_telebirr_paycore.jpg"
                      alt="PayCore"
                      className="w-full h-36 object-cover rounded-xl border border-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: ETHIO-DJIBOUTI TMS */}
          {activeHubTab === 'tms' && (
            <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">LOGISTICS & FLEET GPS</span>
                  <h3 className="font-extrabold text-white text-lg mt-1">Ethio-Djibouti Corridor Freight TMS & Cold-Chain Telematics</h3>
                  <p className="text-xs text-slate-400 mt-1">Live tracking of 450+ heavy trucks across the Addis Ababa — Djibouti trade corridor.</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-xs space-y-3">
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-500">TRUCK TELEMETRY ID:</span>
                    <span className="text-white font-bold">{tmsTruck}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-500">CURRENT CORRIDOR WAYPOINT:</span>
                    <span className="text-emerald-400 font-bold">{tmsLocation}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-500">REEFER SENSOR TEMPERATURE:</span>
                    <span className="text-cyan-400 font-bold">{tmsTemp}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-500">CUSTOMS E-SEAL STATUS:</span>
                    <span className="text-emerald-400 font-bold">LOCKED & VERIFIED (RFID #891)</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-500">GEOFENCE STATUS:</span>
                    <span className="text-emerald-300 font-bold">{tmsGeofence}</span>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-900 flex gap-3">
                    <button
                      onClick={() => showToast('GPS coordinates updated: 8°53\'N 39°17\'E (Adama Expressway)')}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl"
                    >
                      Ping Truck GPS Position
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">Corridor Control Room Overview</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Integrates fuel theft anti-siphon sensors, tire pressure monitors, and automated customs seal alerts with Ethiopian Customs Commission.
                    </p>
                  </div>
                  <div className="mt-6">
                    <img
                      src="/images/ethio_logistics_tms.jpg"
                      alt="Ethio Logistics TMS"
                      className="w-full h-36 object-cover rounded-xl border border-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 30 DELIVERED SYSTEMS PORTFOLIO MATRIX */}
      {/* ======================================================== */}
      <section id="systems" className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold mb-3">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Portfolio Matrix</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                30 Delivered Systems Across Enterprise Sectors
              </h2>
              <p className="text-base text-slate-400 mt-2 max-w-2xl">
                Every system built and deployed by Wazema Solutions represents enterprise stability, clean code, and verifiable commercial impact.
              </p>
            </div>

            {/* Live Counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                {filteredPortfolio.length} of 30 Systems Shown
              </span>
            </div>
          </div>

          {/* Search & Categories Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search systems by name, client, tech stack, or sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 text-xs font-medium">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 30 Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition group flex flex-col justify-between overflow-hidden shadow-xl"
              >
                <div>
                  {/* Card Image */}
                  <div className="h-48 w-full bg-slate-950 relative overflow-hidden">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.target.src = '/images/wazema_logo.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-500/90 text-slate-950 uppercase tracking-wider shadow">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                      {item.client}
                    </div>
                    <h3 className="font-bold text-white text-base mt-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Impact KPI */}
                    <div className="mt-4 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-[11px] font-mono text-emerald-300">
                      ⚡ {item.impact}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.techStack.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 border border-slate-700/50"
                        >
                          {t}
                        </span>
                      ))}
                      {item.techStack.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-500">
                          +{item.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setActiveDemoModal(item.demoType || item.id)}
                    className="flex-1 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 border border-emerald-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" /> Live Simulator
                  </button>
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="flex-1 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition flex items-center justify-center gap-1.5"
                  >
                    <span>Full Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* VERIFIED CLIENT TESTIMONIALS SECTION */}
      {/* ======================================================== */}
      <section id="testimonials" className="py-20 bg-[#040816] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>Verifiable Enterprise Trust</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Our International & Local Clients Say
            </h2>
            <p className="text-base text-slate-400 mt-2">
              From London to Addis Ababa, leadership teams trust Wazema Solutions to execute mission-critical software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      {t.organization}
                    </span>
                    <span className="text-lg">{t.flag}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Verified Engagement</span>
                  <span className="text-emerald-400 font-bold">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* IN-PERSON MEETING BOOKING SECTION */}
      {/* ======================================================== */}
      <section id="meeting" className="py-20 bg-gradient-to-b from-[#030611] via-[#061226] to-[#030611] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>Executive Consultation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Let's Meet In-Person in Addis Ababa
              </h2>
              <p className="text-lg text-emerald-400 font-medium mt-1">
                በአዲስ አበባ በአካል ተገናኝተን የፕሮጀክትዎን ዝርዝር እንነጋገር
              </p>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                Whether you want to inspect live source code, review architectural blueprints for your enterprise, or finalize formal project partnership terms, our engineering leadership is available for coffee meetings across Addis Ababa.
              </p>

              <div className="mt-8 space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Preferred Meeting Locations:</span>
                    <span className="text-slate-400">Bole Medhanialem • Kazanchis • Skylight Hotel • Your Office</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Direct Executive Hotline / WhatsApp:</span>
                    <a href="tel:+251953868816" className="text-emerald-400 font-bold hover:underline">
                      +251 95 386 8816
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Corporate Correspondence:</span>
                    <a href="mailto:contact@wazemasolutions.com" className="text-emerald-400 font-bold hover:underline">
                      contact@wazemasolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-6 bg-slate-900/90 p-8 rounded-3xl border border-slate-700/80 shadow-2xl">
              <h3 className="font-bold text-white text-lg">Schedule Executive Consultation</h3>
              <p className="text-xs text-slate-400 mt-1">Submit your details and we will confirm meeting time and venue within 2 hours.</p>

              {inquirySuccess ? (
                <div className="mt-6 p-6 rounded-2xl bg-emerald-950/80 border border-emerald-400 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-bold text-white text-base">Meeting Request Confirmed!</h4>
                  <p className="text-xs text-emerald-200 mt-1">
                    Thank you. Our leadership team has received your request and will call you directly at <strong>{inquiry.phone || '+251 95 386 8816'}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={inquiry.fullName}
                        onChange={(e) => setInquiry({ ...inquiry, fullName: e.target.value })}
                        placeholder="e.g. Melkamu / Client Lead"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="text"
                        required
                        value={inquiry.phone}
                        onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                        placeholder="+251 95 386 8816"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={inquiry.company}
                      onChange={(e) => setInquiry({ ...inquiry, company: e.target.value })}
                      placeholder="e.g. D&MB Trading / Restaurant / Hospital"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Meeting Location Area</label>
                      <select
                        value={inquiry.locationArea}
                        onChange={(e) => setInquiry({ ...inquiry, locationArea: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option>Bole Medhanialem</option>
                        <option>Kazanchis / Interluxury</option>
                        <option>Skylight Hotel / Airport</option>
                        <option>CMC / Sunshine Real Estate</option>
                        <option>Client Office / Headquarters</option>
                        <option>Google Meet / Remote Video</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">Preferred Timeframe</label>
                      <select
                        value={inquiry.preferredDate}
                        onChange={(e) => setInquiry({ ...inquiry, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option>Today / ASAP</option>
                        <option>Tomorrow Morning (10:00 AM)</option>
                        <option>Tomorrow Afternoon (2:30 PM)</option>
                        <option>This Week / Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1">Project Scope & Objectives</label>
                    <textarea
                      rows={3}
                      value={inquiry.notes}
                      onChange={(e) => setInquiry({ ...inquiry, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submittingInquiry}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 font-bold text-slate-950 text-sm shadow-xl shadow-emerald-500/20 transition active:scale-95"
                  >
                    {submittingInquiry ? 'Booking Consultation...' : 'Confirm In-Person Addis Ababa Meeting'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* UNIVERSAL INTERACTIVE SYSTEM SIMULATOR MODAL */}
      {/* ======================================================== */}
      {activeDemoModal && (() => {
        const curProj = portfolio.find((p) => p.id === activeDemoModal || p.demoType === activeDemoModal) || portfolio[0];
        const key = curProj?.demoType || activeDemoModal;

        return (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#040816] border border-slate-700 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {curProj.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono">
                      Client: {curProj.client} • Category: {curProj.category.toUpperCase()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveDemoModal(null)}
                  className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* DINE-QR SIMULATOR */}
                {key === 'dine-qr' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
                      💡 DineQR runs contactless table QR ordering and real-time kitchen displays. Test it directly on this screen!
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <div className="font-bold text-white text-xs mb-2">Quick Add Menu Sample:</div>
                        <div className="space-y-2">
                          {menuItems.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex justify-between items-center text-xs p-2 bg-slate-900 rounded-lg">
                              <span>{item.name}</span>
                              <button
                                onClick={() => addToDineCart(item)}
                                className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded"
                              >
                                + Add
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="font-bold text-white text-xs mb-2">Cart Status ({dineCart.length} items):</div>
                          <div className="text-xs text-emerald-400 font-mono font-bold">Total: ETB {dineTotal}</div>
                        </div>
                        <button
                          onClick={() => {
                            placeDineOrder();
                            setActiveDemoModal(null);
                            const el = document.getElementById('live-demos');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="mt-4 w-full py-2.5 rounded-xl bg-emerald-500 font-bold text-slate-950 text-xs"
                        >
                          Send to Kitchen & Open Live Hub
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* TPASS MATE SIMULATOR */}
                {key === 'tpass-mate' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
                      🚗 Tpass Mate UK: Licensed DVSA question bank with Amharic, Tigrigna, Arabic, and English audio localization.
                    </div>
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                      <div className="font-bold text-white text-sm mb-2">{quizQuestions[0].qAm}</div>
                      <div className="text-slate-400 mb-4">{quizQuestions[0].qEn}</div>
                      <div className="space-y-2">
                        {quizQuestions[0].options.map((opt) => (
                          <div key={opt.id} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between">
                            <span><strong>{opt.id}.</strong> {opt.textAm}</span>
                            {opt.isCorrect && <span className="text-emerald-400 font-bold">✓ Official DVSA Answer</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* IT PARK PROCUREMENT */}
                {(key === 'it-park' || key === 'it-park-procurement') && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                      🏛️ 18-Stage Government Procurement ERP: Budget Commitment &rarr; Sealed Proforma &rarr; GRN Inspection &rarr; 3-Way Match.
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                      <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-emerald-300">PR #418 ✓ Approved</div>
                      <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-emerald-300">APP Match: ETB 14.5M</div>
                      <div className="p-3 bg-cyan-950/60 border border-cyan-500/30 rounded-xl text-cyan-300">3-Way Match: RELEASED</div>
                    </div>
                  </div>
                )}

                {/* MAF BATTERY */}
                {key === 'maf-battery' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
                      <div className="flex justify-between"><span className="text-slate-400">SERIAL:</span><span className="text-white font-bold">{batteryResult.serial}</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">CHEMISTRY:</span><span className="text-emerald-400 font-bold">{batteryResult.chemistry}</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">WARRANTY:</span><span className="text-emerald-400 font-bold">{batteryResult.warrantyStatus}</span></div>
                    </div>
                  </div>
                )}

                {/* FIDAL OCR */}
                {(key === 'fidal-ocr' || key === 'wazema-fidal-ocr') && (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
                      <div className="flex justify-between"><span className="text-slate-400">FAYDA FIN:</span><span className="text-emerald-400 font-bold">{ocrResult.fin}</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">NAME:</span><span className="text-white font-bold">{ocrResult.fullNameAm} ({ocrResult.fullNameEn})</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">ACCURACY:</span><span className="text-emerald-400 font-bold">99.84% Verified</span></div>
                    </div>
                  </div>
                )}

                {/* UNIVERSAL ENTERPRISE LIVE CONSOLE (FOR ALL OTHER SYSTEMS) */}
                {key !== 'dine-qr' && key !== 'tpass-mate' && key !== 'it-park' && key !== 'it-park-procurement' && key !== 'maf-battery' && key !== 'fidal-ocr' && key !== 'wazema-fidal-ocr' && (
                  <div className="space-y-6">
                    {/* Cloud Specs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-slate-500 block">CLOUD CLUSTER:</span>
                        <span className="text-white font-bold">ADDIS-CORE-DC1</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-slate-500 block">SLA AVAILABILITY:</span>
                        <span className="text-emerald-400 font-bold">99.98% High-Availability</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                        <span className="text-slate-500 block">SECURITY PROTOCOL:</span>
                        <span className="text-cyan-400 font-bold">OAuth2 / AES-256</span>
                      </div>
                    </div>

                    {/* Interactive RPC Probe */}
                    <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-white flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-emerald-400" />
                          <span>Interactive API & Database Latency Probe</span>
                        </span>
                        <button
                          onClick={() => runCloudProbe(curProj)}
                          disabled={probeRunning}
                          className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition active:scale-95"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${probeRunning ? 'animate-spin' : ''}`} />
                          <span>{probeRunning ? 'Querying API...' : 'Execute Live Health Probe'}</span>
                        </button>
                      </div>

                      {probePayload ? (
                        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-1.5 text-slate-300">
                          <div className="text-emerald-400 font-bold">STATUS: {probePayload.httpStatus} • Latency: {probePayload.responseTime}</div>
                          <div>Endpoint: <span className="text-cyan-300">{probePayload.endpoint}</span></div>
                          <div>Cluster: <span className="text-white">{probePayload.clusterNode}</span></div>
                          <div>Security Audit: <span className="text-emerald-400">{probePayload.securityScan}</span></div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-500 text-center">
                          Click "Execute Live Health Probe" above to test the real-time API response for {curProj.title}.
                        </div>
                      )}
                    </div>

                    {/* Screenshot Preview */}
                    <div className="h-56 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                      <img
                        src={curProj.heroImage}
                        alt={curProj.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/images/wazema_logo.jpg';
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
                <a
                  href="#meeting"
                  onClick={() => setActiveDemoModal(null)}
                  className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5" /> Book Addis Ababa Meeting for this System →
                </a>
                <button
                  onClick={() => setActiveDemoModal(null)}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
                >
                  Close Console
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ======================================================== */}
      {/* FULL SPECS PROJECT MODAL */}
      {/* ======================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#040816] border border-slate-700 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  {selectedProject.client}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="h-64 rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Architectural Summary</h4>
                <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{selectedProject.summary}</p>
                {selectedProject.summaryAm && (
                  <p className="text-sm text-emerald-300 mt-2 font-medium">{selectedProject.summaryAm}</p>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features & Engineering Deliverables</h4>
                <ul className="mt-2 space-y-2 text-xs text-slate-300">
                  {selectedProject.features?.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technology Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.testimonial && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Verified Client Quote</span>
                  <p className="text-xs text-slate-300 italic mt-1">"{selectedProject.testimonial.quote}"</p>
                  <div className="text-xs font-bold text-white mt-2">— {selectedProject.testimonial.author}, {selectedProject.testimonial.organization}</div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
              <button
                onClick={() => {
                  const demo = selectedProject.demoType || selectedProject.id;
                  setSelectedProject(null);
                  setActiveDemoModal(demo);
                }}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Launch Interactive Simulator
              </button>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ON-SCREEN EXECUTIVE BOARDROOM DOSSIER VIEWER (MODAL) */}
      {/* ======================================================== */}
      {isDossierMode && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 no-print">
          <div className="bg-white text-slate-900 w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col border border-slate-300">
            {/* Top Dossier Controller */}
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 p-1 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-slate-950 font-bold" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                    Official Executive Capability Statement & 30-System Dossier
                  </h3>
                  <p className="text-[11px] text-emerald-400 font-medium">
                    Confidential Boardroom Prospectus • Ready for Instant PDF Export
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={triggerPrint}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition"
                >
                  <Download className="w-4 h-4" /> Save as Official PDF
                </button>
                <button
                  onClick={() => setIsDossierMode(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dossier Document Content */}
            <div className="p-8 sm:p-12 overflow-y-auto space-y-10 text-slate-900 font-sans">
              {/* Cover Header */}
              <div className="border-b-4 border-emerald-600 pb-8 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img src="/images/wazema_logo.jpg" alt="Wazema Logo" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  WAZEMA SOLUTIONS PLC
                </h1>
                <p className="text-base sm:text-lg font-bold text-emerald-700 mt-1">
                  ዋዜማ ሶሉሽንስ — የቴክኖሎጂ እና የሶፍትዌር ኢንጂነሪንግ ኩባንያ
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-600 font-medium">
                  <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-300">Headquarters: Addis Ababa, Ethiopia</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-300">Hotline: +251 95 386 8816</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-300">Email: contact@wazemasolutions.com</span>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <h2 className="text-xl font-bold text-slate-950 border-b-2 border-slate-300 pb-2 mb-3">
                  1. Executive Capability Statement
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  Wazema Solutions PLC is an elite software engineering, mobile development, and cloud systems consultancy headquartered in Addis Ababa, Ethiopia. We specialize in architecting high-concurrency systems, cross-platform mobile apps for international markets (including official DVSA revision suites in the UK), statutory government enterprise resource planning (ERP) suites, and contactless restaurant management ecosystems.
                </p>
              </div>

              {/* Complete 30 Systems Index */}
              <div>
                <h2 className="text-xl font-bold text-slate-950 border-b-2 border-slate-300 pb-2 mb-4">
                  2. Complete Index of 30 Delivered Enterprise Systems
                </h2>
                <table className="dossier-table w-full text-left border-collapse text-[9px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-2 px-2">#</th>
                      <th className="py-2 px-2">System Title & Scope</th>
                      <th className="py-2 px-2">Client Organization</th>
                      <th className="py-2 px-2">Category</th>
                      <th className="py-2 px-2">Key Metric / KPI</th>
                      <th className="py-2 px-2">Core Tech Stack</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.map((item, idx) => (
                      <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="py-1.5 px-2 font-mono font-bold text-slate-500">{idx + 1}</td>
                        <td className="py-1.5 px-2 font-bold text-slate-900">{item.title}</td>
                        <td className="py-1.5 px-2 text-slate-700">{item.client}</td>
                        <td className="py-1.5 px-2 uppercase font-semibold text-emerald-800">{item.category}</td>
                        <td className="py-1.5 px-2 text-emerald-700 font-bold">{item.impact}</td>
                        <td className="py-1.5 px-2 text-slate-600 font-mono">{item.techStack.slice(0, 2).join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Testimonials */}
              <div className="page-break mt-10">
                <h2 className="text-xl font-bold text-slate-950 border-b-2 border-slate-300 pb-2 mb-4">
                  3. Verified Client References & Testimonials
                </h2>
                <div className="space-y-4">
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="dossier-card border border-slate-300 p-3 rounded-lg bg-slate-50">
                      <div className="flex justify-between items-center">
                        <div className="font-bold text-slate-900 text-xs">{t.organization}</div>
                        <span>{t.flag}</span>
                      </div>
                      <div className="text-emerald-700 text-[10px] font-semibold">{t.role}</div>
                      <p className="text-[10px] text-slate-700 italic mt-1.5">"{t.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signoff block */}
              <div className="page-break mt-10">
                <h2 className="text-xl font-bold text-slate-950 border-b-2 border-slate-300 pb-2 mb-4">
                  4. Engagement & Partnership Execution Block
                </h2>
                <p className="text-[11px] text-slate-600 mb-6">
                  This document certifies that Wazema Solutions PLC retains full architectural copyright, engineering credentials, and deployment ownership of the software systems detailed herein. For immediate executive coordination: <strong>+251 95 386 8816</strong>.
                </p>

                <div className="grid grid-cols-2 gap-12 mt-12 text-xs">
                  <div className="border-t border-slate-400 pt-3">
                    <div className="font-bold text-slate-900">For: Wazema Solutions Executive Leadership</div>
                    <div className="text-slate-500 mt-1">Authorized Representative Signature & Official Seal</div>
                    <div className="mt-8 text-slate-400 font-mono">Date: ________________________</div>
                  </div>
                  <div className="border-t border-slate-400 pt-3">
                    <div className="font-bold text-slate-900">For: Client Partner / Representative in Addis Ababa</div>
                    <div className="text-slate-500 mt-1">Acceptance of Credentials & Meeting Minutes</div>
                    <div className="mt-8 text-slate-400 font-mono">Date: ________________________</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="no-print bg-slate-950 py-12 border-t border-slate-800 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 p-1 flex items-center justify-center">
              <img src="/images/wazema_logo.jpg" alt="Logo" className="w-full h-full object-cover rounded" />
            </div>
            <div>
              <span className="font-bold text-white text-sm">Wazema Solutions PLC</span>
              <span className="text-slate-400 text-xs block">ዋዜማ ሶሉሽንስ — Addis Ababa, Ethiopia</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-300 font-medium">
              Corporate Inquiries:{' '}
              <a href="mailto:contact@wazemasolutions.com" className="text-emerald-400 hover:underline">
                contact@wazemasolutions.com
              </a>{' '}
              |{' '}
              <a href="tel:+251953868816" className="text-emerald-400 font-bold hover:underline">
                +251 95 386 8816
              </a>
            </p>
            <p className="mt-1 text-slate-500">
              © 2026 Wazema Solutions PLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
