import React, { useState, useEffect } from 'react';
import {
  Utensils,
  QrCode,
  ChefHat,
  Receipt,
  TrendingUp,
  Clock,
  Users,
  CheckCircle,
  AlertTriangle,
  Bell,
  CreditCard,
  Smartphone,
  Coffee,
  Flame,
  Wine,
  Sparkles,
  Layers,
  ShieldCheck,
  RefreshCw,
  Printer,
  Eye,
  Check,
  Plus,
  Minus,
  Trash2,
  DollarSign,
  Activity,
  X,
  ExternalLink,
  ChevronRight,
  Maximize2
} from 'lucide-react';

// --- SEED DATA: 12 RESTAURANT TABLES ACROSS 3 ZONES ---
const INITIAL_TABLES = [
  // Zone 1: VIP Terrace (ቦሌ እይታ)
  { id: 'T1', number: 1, zone: 'VIP Terrace', label: 'Table 1 • Terrace VIP', seats: 4, status: 'available', bill: 0, waiter: 'Daniel M.', time: '0m', orders: [] },
  { id: 'T2', number: 2, zone: 'VIP Terrace', label: 'Table 2 • Terrace VIP', seats: 2, status: 'occupied', bill: 1420, waiter: 'Daniel M.', time: '28m', orders: ['Artisan Tej Cocktail x2', 'Wazema Royal Wagyu Burger x1'] },
  { id: 'T3', number: 3, zone: 'VIP Terrace', label: 'Table 3 • Terrace VIP', seats: 6, status: 'reserved', bill: 0, waiter: 'Daniel M.', time: 'Res 7:30 PM', orders: [] },
  { id: 'T4', number: 4, zone: 'VIP Terrace', label: 'Table 4 • Terrace VIP', seats: 4, status: 'occupied', bill: 3850, waiter: 'Sara K.', time: '42m', orders: ['ልዩ ሸክላ ጥብስ (Special Shekla Tibs) x2', 'የዋዜማ ልዩ ክትፎ x1', 'Habesha Cold Draft x3'] },

  // Zone 2: Main Dining Hall (ዋና አዳራሽ)
  { id: 'T5', number: 5, zone: 'Main Dining Hall', label: 'Table 5 • Center Hall', seats: 4, status: 'available', bill: 0, waiter: 'Sara K.', time: '0m', orders: [] },
  { id: 'T6', number: 6, zone: 'Main Dining Hall', label: 'Table 6 • Family Booth', seats: 8, status: 'occupied', bill: 8640, waiter: 'Yohannes T.', time: '55m', orders: ['የሀገር ቤት ዶሮ ወጥ x2', 'ልዩ ሸክላ ጥብስ x3', 'Bole Prime Ribeye x2'] },
  { id: 'T7', number: 7, zone: 'Main Dining Hall', label: 'Table 7 • Center Hall', seats: 4, status: 'available', bill: 0, waiter: 'Yohannes T.', time: '0m', orders: [] },
  { id: 'T8', number: 8, zone: 'Main Dining Hall', label: 'Table 8 • Window Nook', seats: 2, status: 'occupied', bill: 980, waiter: 'Sara K.', time: '18m', orders: ['ክሪስፒ ቺከን በርገር x2', 'Avocado Layers Juice x2'] },

  // Zone 3: Garden & Lounge (የጓሮ ላውንጅ)
  { id: 'T9', number: 9, zone: 'Garden Lounge', label: 'Table 9 • Gazebo Garden', seats: 4, status: 'occupied', bill: 2750, waiter: 'Daniel M.', time: '36m', orders: ['የበግ ጥብስ ፍርፍር x2', 'Tej Cocktail x3'] },
  { id: 'T10', number: 10, zone: 'Garden Lounge', label: 'Table 10 • Gazebo Garden', seats: 6, status: 'available', bill: 0, waiter: 'Daniel M.', time: '0m', orders: [] },
  { id: 'T11', number: 11, zone: 'Garden Lounge', label: 'Table 11 • Lounge High-Top', seats: 2, status: 'occupied', bill: 1650, waiter: 'Yohannes T.', time: '24m', orders: ['Habesha Cold Draft x4', 'Crispy Wings x1'] },
  { id: 'T12', number: 12, zone: 'Garden Lounge', label: 'Table 12 • Pergola', seats: 4, status: 'available', bill: 0, waiter: 'Yohannes T.', time: '0m', orders: [] }
];

// --- SEED DATA: RESTAURANT BILINGUAL MENU CATALOG ---
const MENU_ITEMS = [
  // Traditional
  {
    id: 'm1',
    category: 'traditional',
    nameAm: 'ልዩ ሸክላ ጥብስ (Special Shekla Tibs)',
    nameEn: 'Sizzling Claypot Prime Beef Tibs',
    price: 650,
    desc: 'Tender prime beef cubes sautéed with Ethiopian spiced butter (Niter Qibe), fresh rosemary, garlic, and sliced green chili in an authentic charcoal-fired clay pot.',
    tag: 'Chef Signature',
    prepTime: '12-15 min',
    image: '/images/gourmet_shekla_tibs.jpg',
    fallbackImg: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { beef: 400, qibe: 45, rosemary: 15 }
  },
  {
    id: 'm2',
    category: 'traditional',
    nameAm: 'የዋዜማ ልዩ ክትፎ (Wazema House Special Kitfo)',
    nameEn: 'Gourmet Lean Beef Tartare (Leb-Leb / Tirtir)',
    price: 720,
    desc: 'Finely minced lean topside beef kneaded with warm spiced herbal butter and fiery mitmita, served with seasoned cottage cheese (Ayib), collard greens (Gomen), and Gurage Kocho.',
    tag: 'Best Seller',
    prepTime: '10 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { beef: 450, qibe: 60, mitmita: 20 }
  },
  {
    id: 'm3',
    category: 'traditional',
    nameAm: 'የበግ ጥብስ ፍርፍር (Spicy Lamb Tibs Firfir)',
    nameEn: 'Slow-Braised Lamb & Spicy Injera Stew',
    price: 520,
    desc: 'Tender diced lamb braised in a velvety caramelized shallot berbere sauce, tossed with hand-torn injera.',
    tag: 'Popular Lunch',
    prepTime: '10 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { lamb: 350, berbere: 40, injera: 2 }
  },
  {
    id: 'm4',
    category: 'traditional',
    nameAm: 'ልዩ የጾም በያይነቱ (Royal Fasting Beyaynetu)',
    nameEn: 'Grand Vegan Platter (8 Slow-Simmered Curries)',
    price: 450,
    desc: 'Clay-pot Shiro, Misir Wot, Kik Alicha, Gomen, Fosolia, Beetroot Salad, Timatim Fitfit, and Flaxseed puree over fresh Teff Injera.',
    tag: '100% Vegan',
    prepTime: '8 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { legumes: 300, veggies: 250, injera: 2 }
  },

  // Grills & Modern Mains
  {
    id: 'm5',
    category: 'grills',
    nameAm: 'ዋዜማ ሮያል ዋግዩ በርገር (Wazema Royal Wagyu Burger)',
    nameEn: 'Double-Smashed 220g Wagyu Patty Burger',
    price: 580,
    desc: 'Two 110g prime patties, smoked Gouda cheese, caramelized red onion jam, truffle aioli on a toasted artisanal brioche bun with hand-cut rosemary spiced fries.',
    tag: 'Top Rated',
    prepTime: '14 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { wagyu: 220, bun: 1, cheese: 40 }
  },
  {
    id: 'm6',
    category: 'grills',
    nameAm: 'የቦሌ ፕራይም ሪብአይ ስቴክ (Bole Prime Ribeye Steak 350g)',
    nameEn: 'Aged Ribeye with Garlic Herb Butter',
    price: 980,
    desc: 'Charcoal-grilled aged ribeye basted with compound garlic herb butter, served with truffle mashed potatoes and blistered asparagus.',
    tag: 'Executive Cut',
    prepTime: '18 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { steak: 350, butter: 30, potato: 200 }
  },
  {
    id: 'm7',
    category: 'grills',
    nameAm: 'ክሪስፒ ባተርሚልክ ቺከን (Crispy Buttermilk Chicken)',
    nameEn: 'Double-Dipped Fried Chicken Thigh',
    price: 420,
    desc: '24-hour marinated buttermilk fried chicken thigh, sweet honey sriracha glaze, dill pickles, and house slaw in brioche.',
    tag: 'Crunchy Favorite',
    prepTime: '12 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { chicken: 250, bun: 1, slaw: 80 }
  },

  // Beverages & Craft Cocktails
  {
    id: 'm8',
    category: 'drinks',
    nameAm: 'የማር ጠጅ አርቲሳን ኮክቴል (Artisan Pure Honey Tej Cocktail)',
    nameEn: 'Highland Fermented Honey Wine & Passion Fruit',
    price: 350,
    desc: 'House-fermented 100% pure honey Tej shaken with fresh passion fruit reduction, lime, and crushed mint over crystal clear ice.',
    tag: 'Signature Drink',
    prepTime: '4 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { tej: 180, passionFruit: 50 }
  },
  {
    id: 'm9',
    category: 'drinks',
    nameAm: 'ሐበሻ ኮልድ ድራፍት ቢራ (Habesha Cold Draft 500ml)',
    nameEn: 'Fresh Sub-Zero Cold Draft Pint',
    price: 120,
    desc: 'Frosty chilled mug poured directly from our temperature-controlled keg draft lines at 1.5°C.',
    tag: 'Ice Cold',
    prepTime: '2 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { draftKeg: 500 }
  },
  {
    id: 'm10',
    category: 'drinks',
    nameAm: 'ስፔሻል አቮካዶ እና ፓፓያ ሌየርስ (Avocado & Mango Layers)',
    nameEn: 'Fresh Layered Tropical Smoothie',
    price: 180,
    desc: 'Freshly harvested Shewa avocado puree, sweet papaya, and mango layers with fresh lime and Vimto drizzle.',
    tag: 'Fresh Pressed',
    prepTime: '5 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { avocado: 200, mango: 150 }
  },
  {
    id: 'm11',
    category: 'drinks',
    nameAm: 'ይርጋጨፌ ቶሞካ ስታይል ቡና (Yirgacheffe Pour-Over Coffee)',
    nameEn: 'Single-Origin Highland Hand-Drip Espresso',
    price: 80,
    desc: 'Sun-dried Grade 1 Yirgacheffe beans freshly roasted and brewed in traditional Jebena style or Italian espresso press.',
    tag: 'Single Origin',
    prepTime: '5 min',
    image: '/images/wazema_dine_qr.jpg',
    recipeDeduction: { coffeeBeans: 22 }
  }
];

// --- SEED KITCHEN DISPLAY TICKETS ---
const INITIAL_KITCHEN_TICKETS = [
  {
    id: 'TICK-301',
    tableId: 'T4',
    tableName: 'Table 4 (VIP Terrace)',
    waiter: 'Sara K.',
    timeElapsedSeconds: 340, // ~5 min
    status: 'cooking',
    items: [
      { name: 'ልዩ ሸክላ ጥብስ (Special Shekla Tibs)', qty: 2, note: 'ልዩ ጥብስ • Medium-Well • Extra Awaze & Rosemary' },
      { name: 'የዋዜማ ልዩ ክትፎ', qty: 1, note: 'ክትፎ • ለብ-ለብ (Warm) • አጃክስ አይብ' }
    ]
  },
  {
    id: 'TICK-302',
    tableId: 'T6',
    tableName: 'Table 6 (Family Booth)',
    waiter: 'Yohannes T.',
    timeElapsedSeconds: 780, // ~13 min (urgent)
    status: 'urgent',
    items: [
      { name: 'የቦሌ ሪብአይ ስቴክ (Ribeye 350g)', qty: 2, note: 'Medium-Rare • Garlic herb butter & Truffle mash' },
      { name: 'የሀገር ቤት ዶሮ ወጥ', qty: 2, note: 'ልዩ ዶሮ ወጥ ከ2 እንቁላል ጋር' }
    ]
  },
  {
    id: 'TICK-303',
    tableId: 'T2',
    tableName: 'Table 2 (VIP Terrace)',
    waiter: 'Daniel M.',
    timeElapsedSeconds: 110, // ~2 min
    status: 'new',
    items: [
      { name: 'ዋዜማ ሮያል ዋግዩ በርገር', qty: 1, note: 'No Pickles • Extra Smoked Gouda' },
      { name: 'የማር ጠጅ አርቲሳን ኮክቴል', qty: 2, note: 'Bar Station • Extra Mint' }
    ]
  }
];

export default function DineQREnterpriseSuite() {
  // Main Suite Navigation Mode
  const [activeModule, setActiveModule] = useState('floor-plan'); // 'floor-plan' | 'mobile-qr' | 'kds' | 'cashier' | 'analytics' | 'stand-qr'

  // Selected Table Context
  const [tables, setTables] = useState(INITIAL_TABLES);
  const [selectedTable, setSelectedTable] = useState(INITIAL_TABLES[3]); // Table 4 as default

  // Mobile Guest Ordering Simulator State
  const [guestCategory, setGuestCategory] = useState('traditional');
  const [cart, setCart] = useState([
    { ...MENU_ITEMS[0], qty: 2, note: 'Medium-Well • Extra Awaze' },
    { ...MENU_ITEMS[1], qty: 1, note: 'ለብ-ለብ (Warm)' }
  ]);
  const [waiterPagingToast, setWaiterPagingToast] = useState(null);

  // Kitchen Tickets State with Active Timer
  const [tickets, setTickets] = useState(INITIAL_KITCHEN_TICKETS);
  const [kdsFilter, setKdsFilter] = useState('all'); // 'all' | 'cooking' | 'urgent' | 'ready'

  // Cashier & Fiscal Receipt State
  const [splitCount, setSplitCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('telebirr'); // 'telebirr' | 'cbe' | 'cash'
  const [receiptPrinted, setReceiptPrinted] = useState(false);

  // Live Inventory Tracker State
  const [inventory, setInventory] = useState({
    primeBeef: { name: 'Prime Beef (የበሬ ስጋ)', total: 30, remaining: 18.4, unit: 'kg', lowThreshold: 5 },
    spicedQibe: { name: 'Spiced Butter / Qibe (ቅቤ)', total: 10, remaining: 4.2, unit: 'kg', lowThreshold: 2 },
    draftBeer: { name: 'Habesha Draft (ድራፍት)', total: 6, remaining: 3, unit: 'Barrels', lowThreshold: 1 },
    injera: { name: 'Teff Injera (እንጀራ)', total: 200, remaining: 65, unit: 'Pieces', lowThreshold: 30 },
    coffeeBeans: { name: 'Yirgacheffe Coffee (ቡና)', total: 15, remaining: 7.5, unit: 'kg', lowThreshold: 3 }
  });

  // Gross Daily Revenue Tracker
  const [dailyGrossSales, setDailyGrossSales] = useState(148650);

  // Auto-increment ticket timers every second for ultra realism
  useEffect(() => {
    const timer = setInterval(() => {
      setTickets((prevTickets) =>
        prevTickets.map((t) => ({
          ...t,
          timeElapsedSeconds: t.timeElapsedSeconds + 1,
          status: t.timeElapsedSeconds + 1 > 720 ? 'urgent' : t.status === 'new' && t.timeElapsedSeconds + 1 > 180 ? 'cooking' : t.status
        }))
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format seconds to mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
  };

  // Cart Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const serviceCharge = Math.round(subtotal * 0.1); // 10%
  const vat = Math.round(subtotal * 0.15); // 15%
  const total = subtotal + serviceCharge + vat;

  // Add Item to Mobile Cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1, note: 'Standard prep' }];
    });
  };

  // Remove Item from Mobile Cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Submit Order directly to Kitchen (Simulates live WebSocket broadcast)
  const submitOrderToKitchen = () => {
    if (cart.length === 0) return;

    const newTicketId = `TICK-${Math.floor(300 + Math.random() * 600)}`;
    const newTicket = {
      id: newTicketId,
      tableId: selectedTable.id,
      tableName: selectedTable.label,
      waiter: selectedTable.waiter,
      timeElapsedSeconds: 0,
      status: 'new',
      items: cart.map((c) => ({
        name: c.nameAm,
        qty: c.qty,
        note: c.note || 'Direct QR Order'
      }))
    };

    // Add to kitchen tickets
    setTickets((prev) => [newTicket, ...prev]);

    // Update table status to occupied and increase bill
    setTables((prev) =>
      prev.map((t) =>
        t.id === selectedTable.id
          ? {
              ...t,
              status: 'occupied',
              bill: t.bill + total,
              orders: [...t.orders, ...cart.map((c) => `${c.nameAm} x${c.qty}`)]
            }
          : t
      )
    );

    // Deduct stock in real-time
    setInventory((prev) => ({
      ...prev,
      primeBeef: { ...prev.primeBeef, remaining: Math.max(0.5, +(prev.primeBeef.remaining - 0.8).toFixed(1)) },
      spicedQibe: { ...prev.spicedQibe, remaining: Math.max(0.2, +(prev.spicedQibe.remaining - 0.1).toFixed(1)) },
      injera: { ...prev.injera, remaining: Math.max(5, prev.injera.remaining - 3) }
    }));

    // Update daily gross revenue
    setDailyGrossSales((prev) => prev + total);

    // Toast notification
    setWaiterPagingToast(`🚀 Order #${newTicketId} dispatched instantly to Head Chef KDS!`);
    setTimeout(() => setWaiterPagingToast(null), 4000);
  };

  // Page waiter toast
  const triggerWaiterPage = (type) => {
    setWaiterPagingToast(`🔔 Paged: Waiter ${selectedTable.waiter} notified (${type}) at ${selectedTable.label}!`);
    setTimeout(() => setWaiterPagingToast(null), 3500);
  };

  // KDS Status Transition
  const updateTicketStatus = (ticketId, nextStatus) => {
    if (nextStatus === 'served') {
      setTickets((prev) => prev.filter((t) => t.id !== ticketId));
      setWaiterPagingToast(`✅ Ticket #${ticketId} completed and plated!`);
      setTimeout(() => setWaiterPagingToast(null), 2500);
    } else {
      setTickets((prev) =>
        prev.map((t) => (t.id === ticketId ? { ...t, status: nextStatus } : t))
      );
    }
  };

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl border border-emerald-500/30 overflow-hidden shadow-2xl relative font-sans">
      {/* GLOBAL TOAST ALERT */}
      {waiterPagingToast && (
        <div className="absolute top-4 right-4 z-50 bg-emerald-500 text-slate-950 font-black px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce border-2 border-white">
          <Bell className="w-5 h-5 text-slate-950 animate-spin" />
          <span className="text-xs sm:text-sm">{waiterPagingToast}</span>
        </div>
      )}

      {/* TOP HEADER: BRANDING & ENTERPRISE BADGE */}
      <div className="bg-gradient-to-r from-slate-950 via-emerald-950/60 to-slate-950 px-6 py-5 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-2 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/20">
              <Utensils className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Wazema DineQR™ Enterprise Suite
                </h2>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-widest font-bold">
                  v3.8 Live Multi-Station Sync
                </span>
              </div>
              <p className="text-xs text-emerald-400 font-medium mt-0.5">
                ዋዜማ ዳይንኪውአር — የጠረጴዛ QR ትዕዛዝ፣ የኩሽና ማብሰያ ስክሪን (KDS) እና የሬስቶራንት ማኔጅመንት ፕላትፎርም
              </p>
            </div>
          </div>
        </div>

        {/* Top Quick Status Pill */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-2 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono text-slate-300">STATION SYNC:</span>
              <span className="text-xs font-bold text-emerald-400 font-mono">12 ACTIVE TABLES</span>
            </div>
            <div className="h-4 w-px bg-slate-700" />
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block font-mono">TODAY SALES</span>
              <span className="text-xs font-extrabold text-white font-mono">ETB {dailyGrossSales.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 6-MODULE INTERACTIVE TAB SELECTOR */}
      <div className="bg-slate-900/90 px-4 sm:px-6 border-b border-slate-800 flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none">
        {[
          { id: 'floor-plan', label: '1. 🗺️ Floor Plan & Tables', count: `${tables.filter((t) => t.status === 'occupied').length}/12 Active`, desc: 'የጠረጴዛዎች አቀማመጥ' },
          { id: 'mobile-qr', label: '2. 📱 Guest Mobile QR Menu', count: `${cart.length} items`, desc: 'የደንበኛ ስልክ ሜኑ' },
          { id: 'kds', label: '3. 👨‍🍳 Head Chef KDS Screen', count: `${tickets.length} Tickets`, desc: 'የኩሽና ማብሰያ ስክሪን' },
          { id: 'cashier', label: '4. 🧾 Cashier & Telebirr Slip', count: 'ETB Slip', desc: 'የካሳ እና ቴሌብር ደረሰኝ' },
          { id: 'analytics', label: '5. 📊 Owner Dashboard & Stock', count: 'Live P&L', desc: 'የገቢ እና የስጋ ክምችት' },
          { id: 'stand-qr', label: '6. 🏷️ Acrylic Table QR Stand', count: 'Ready-to-Print', desc: 'የጠረጴዛ QR ስታንድ' }
        ].map((mod) => (
          <button
            key={mod.id}
            onClick={() => setActiveModule(mod.id)}
            className={`px-4 py-2 rounded-xl text-left whitespace-nowrap transition border flex flex-col justify-between ${
              activeModule === mod.id
                ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs">{mod.label}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-emerald-400 font-bold">
                {mod.count}
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-medium">{mod.desc}</span>
          </button>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* MODULE 1: INTERACTIVE FLOOR PLAN & TABLE MAP                              */}
      {/* ========================================================================= */}
      {activeModule === 'floor-plan' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  🗺️
                </span>
                Interactive Restaurant Floor Plan & Real-Time Table Sessions
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Select any table below to inspect its live guest orders, bill balance, assigned waiter, or load its session directly into the Diner and Cashier terminals.
              </p>
            </div>

            {/* Status Legend */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Available ({tables.filter((t) => t.status === 'available').length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-slate-300">Occupied ({tables.filter((t) => t.status === 'occupied').length})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-slate-300">Reserved ({tables.filter((t) => t.status === 'reserved').length})</span>
              </div>
            </div>
          </div>

          {/* Zones Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 12 Tables Grid */}
            <div className="lg:col-span-8 space-y-6">
              {['VIP Terrace', 'Main Dining Hall', 'Garden Lounge'].map((zoneName) => (
                <div key={zoneName} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <span className="font-extrabold text-white tracking-wide flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      ZONE: {zoneName.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {zoneName === 'VIP Terrace' && 'ቦሌ እይታ ቪአይፒ ቴራስ'}
                      {zoneName === 'Main Dining Hall' && 'ዋና አዳራሽ'}
                      {zoneName === 'Garden Lounge' && 'የጓሮ ላውንጅ'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {tables
                      .filter((t) => t.zone === zoneName)
                      .map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTable(t)}
                          className={`p-3.5 rounded-xl border text-left transition relative flex flex-col justify-between ${
                            selectedTable.id === t.id
                              ? 'bg-emerald-950/80 border-emerald-400 shadow-xl shadow-emerald-500/20 scale-[1.02]'
                              : t.status === 'occupied'
                              ? 'bg-slate-950/80 border-amber-500/40 hover:border-amber-400'
                              : t.status === 'reserved'
                              ? 'bg-slate-950/80 border-blue-500/40 hover:border-blue-400'
                              : 'bg-slate-950/60 border-slate-800 hover:border-emerald-500/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono font-black text-sm text-white">Table {t.number}</span>
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${
                                t.status === 'occupied'
                                  ? 'bg-amber-400 animate-ping'
                                  : t.status === 'reserved'
                                  ? 'bg-blue-400'
                                  : 'bg-emerald-400'
                              }`}
                            />
                          </div>

                          <div className="my-2">
                            <span className="text-[10px] text-slate-400 block">{t.seats} Seats • {t.waiter}</span>
                            {t.status === 'occupied' ? (
                              <span className="text-xs font-extrabold text-emerald-400 font-mono block mt-1">
                                ETB {t.bill.toLocaleString()}
                              </span>
                            ) : (
                              <span className="text-[11px] font-medium text-slate-500 block mt-1 capitalize">
                                {t.status}
                              </span>
                            )}
                          </div>

                          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                            <span>{t.time}</span>
                            {selectedTable.id === t.id && (
                              <span className="text-emerald-400 font-bold">ACTIVE ✓</span>
                            )}
                          </div>
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Table Inspector Sidebar */}
            <div className="lg:col-span-4 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                      TABLE INSPECTION CONSOLE
                    </span>
                    <h4 className="font-black text-white text-base">{selectedTable.label}</h4>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                      selectedTable.status === 'occupied'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : selectedTable.status === 'reserved'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    }`}
                  >
                    {selectedTable.status}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400">Assigned Waiter:</span>
                    <span className="font-bold text-white">{selectedTable.waiter}</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400">Seating Capacity:</span>
                    <span className="font-bold text-white">{selectedTable.seats} Diners</span>
                  </div>
                  <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400">Session Elapsed:</span>
                    <span className="font-mono text-emerald-400 font-bold">{selectedTable.time}</span>
                  </div>

                  {/* Active Orders List */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80 mb-2">
                      <span className="text-slate-400 font-semibold text-[11px]">Active Table Orders:</span>
                      <span className="text-emerald-400 font-bold font-mono">
                        ETB {selectedTable.bill.toLocaleString()}
                      </span>
                    </div>
                    {selectedTable.orders && selectedTable.orders.length > 0 ? (
                      <ul className="space-y-1 text-[11px] text-slate-300">
                        {selectedTable.orders.map((ord, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-emerald-500">•</span>
                            <span>{ord}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-slate-500 text-[11px] italic">No active orders. Diners can scan QR to start ordering.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Action Navigation Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveModule('mobile-qr')}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Open Guest Mobile Menu for {selectedTable.label}</span>
                </button>
                <button
                  onClick={() => setActiveModule('cashier')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition"
                >
                  <Receipt className="w-4 h-4" />
                  <span>Settle Bill & Print Telebirr Slip</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 2: GUEST MOBILE QR EXPERIENCE (SMARTPHONE SIMULATOR)              */}
      {/* ========================================================================= */}
      {activeModule === 'mobile-qr' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  📱
                </span>
                Guest QR Digital Menu & Live Ordering Terminal
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                This is the exact high-speed web application that loads on a customer's phone when they point their camera at the acrylic table QR code. No app install required!
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-emerald-950 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-500/40">
                CURRENT TABLE: {selectedTable.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Food Menu Catalog Column (Left) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs font-bold">
                {[
                  { id: 'traditional', label: '🍖 Traditional Ethiopian (ባህላዊ)', icon: Flame },
                  { id: 'grills', label: '🍔 Grills, Steaks & Burgers', icon: Utensils },
                  { id: 'drinks', label: '🍹 Tej, Cocktails & Draft', icon: Wine }
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setGuestCategory(c.id)}
                      className={`px-3.5 py-2 rounded-xl flex items-center gap-2 transition whitespace-nowrap ${
                        guestCategory === c.id
                          ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{c.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Menu Items Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MENU_ITEMS.filter((m) => m.category === guestCategory).map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-emerald-500/40 p-4 transition flex flex-col justify-between shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                          {item.tag}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3 text-slate-400" /> {item.prepTime}
                        </span>
                      </div>

                      <h4 className="font-extrabold text-white text-sm sm:text-base mt-1">{item.nameAm}</h4>
                      <p className="text-xs text-slate-300 font-medium">{item.nameEn}</p>
                      <p className="text-[11px] text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="text-emerald-400 font-extrabold text-base font-mono">
                        ETB {item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add to Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* In-Dining Service Pager Buttons */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="font-bold text-white block">Need Instant Attention from Staff?</span>
                  <span className="text-slate-400">One tap notifies your assigned server on their wrist terminal or mobile.</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => triggerWaiterPage('Water & Napkins Requested')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-semibold border border-slate-700 transition"
                  >
                    💧 Request Water
                  </button>
                  <button
                    onClick={() => triggerWaiterPage('Waiter Paged to Table')}
                    className="px-3 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-xs text-emerald-300 font-bold border border-emerald-500/40 transition"
                  >
                    🔔 Call Waiter
                  </button>
                  <button
                    onClick={() => {
                      triggerWaiterPage('Bill Requested');
                      setActiveModule('cashier');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-amber-300 font-semibold border border-slate-700 transition"
                  >
                    🧾 Request Bill
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Guest Mobile Slip & Cart (Right Column) */}
            <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-700 p-5 flex flex-col justify-between shadow-2xl">
              <div>
                {/* Mobile Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xs">Live Order Cart</h4>
                      <span className="text-[10px] text-emerald-400 font-mono">{selectedTable.label}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {cart.length} Dishes
                  </span>
                </div>

                {/* Cart Items List */}
                <div className="mt-4 space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-500">
                      Your table cart is empty. Click "+ Add to Order" on the left to add items.
                    </div>
                  ) : (
                    cart.map((c) => (
                      <div key={c.id} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                        <div className="flex items-center justify-between font-bold text-white">
                          <span>{c.nameAm}</span>
                          <button
                            onClick={() => removeFromCart(c.id)}
                            className="text-slate-500 hover:text-red-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[10px] text-emerald-400 italic mt-0.5">{c.note}</div>
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/80 text-slate-400">
                          <span>Qty: {c.qty} × ETB {c.price}</span>
                          <span className="font-mono font-bold text-white">ETB {c.qty * c.price}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Bill Summary & Send Order Button */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white">ETB {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Service Charge (10%):</span>
                  <span className="font-mono text-white">ETB {serviceCharge.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Statutory VAT (15%):</span>
                  <span className="font-mono text-white">ETB {vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-slate-800">
                  <span>Grand Total:</span>
                  <span className="text-emerald-400 font-mono font-black text-base">ETB {total.toLocaleString()}</span>
                </div>

                <button
                  onClick={submitOrderToKitchen}
                  disabled={cart.length === 0}
                  className={`w-full mt-4 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-xl transition active:scale-95 ${
                    cart.length > 0
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/20 cursor-pointer'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>🚀 Send Order Directly to Kitchen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 3: HEAD CHEF KITCHEN DISPLAY SCREEN (KDS)                         */}
      {/* ========================================================================= */}
      {activeModule === 'kds' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  👨‍🍳
                </span>
                Commercial Head Chef Station (Kitchen Display System - KDS)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Mounted on commercial stainless-steel touch monitors in the kitchen. Tickets appear in real-time as diners tap 'Order' at their tables with live color-coded preparation timers.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const id = `TICK-${Math.floor(350 + Math.random() * 500)}`;
                  setTickets((prev) => [
                    {
                      id,
                      tableId: 'T9',
                      tableName: 'Table 9 (Gazebo Garden)',
                      waiter: 'Daniel M.',
                      timeElapsedSeconds: 5,
                      status: 'new',
                      items: [
                        { name: 'ልዩ ሸክላ ጥብስ (Shekla Tibs)', qty: 2, note: 'ልዩ ጥብስ • Medium • Extra butter' },
                        { name: 'የማር ጠጅ አርቲሳን ኮክቴል', qty: 2, note: 'Bar Station' }
                      ]
                    },
                    ...prev
                  ]);
                  setWaiterPagingToast(`🔔 New Order #${id} arrived in Kitchen!`);
                  setTimeout(() => setWaiterPagingToast(null), 3000);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition"
              >
                <Plus className="w-4 h-4" /> Simulate Incoming Ticket
              </button>
            </div>
          </div>

          {/* KDS Active Tickets Grid */}
          <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-64 h-36 rounded-xl overflow-hidden border border-slate-700 shrink-0 relative">
              <img
                src="/images/commercial_kds_kitchen.jpg"
                alt="Head Chef KDS Pass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-2.5">
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded">
                  HEAD CHEF PASS CAM
                </span>
              </div>
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <span className="font-bold text-white text-sm block">Commercial Kitchen Audio & Visual Dispatch:</span>
              <p className="text-slate-400 leading-relaxed">
                Tickets route directly to designated prep stations (Hot Line, Cold Pantry, Bar). Real-time elapsed timers alert line cooks before tickets hit 12 minutes, maintaining 100% table synchronization.
              </p>
              <div className="flex items-center gap-4 pt-1 font-mono text-[11px] text-emerald-400">
                <span>• Average Prep: 9.4 mins</span>
                <span>• Expedite SLA: 98.7%</span>
                <span>• Ticket Auditing: Enabled</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tickets.map((t) => (
              <div
                key={t.id}
                className={`rounded-2xl border p-5 flex flex-col justify-between shadow-2xl relative transition ${
                  t.status === 'urgent'
                    ? 'bg-red-950/40 border-red-500 shadow-red-500/10'
                    : t.status === 'cooking'
                    ? 'bg-amber-950/30 border-amber-500/50'
                    : 'bg-slate-900 border-slate-700'
                }`}
              >
                <div>
                  {/* Ticket Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <span className="font-mono font-black text-emerald-400 text-base">{t.id}</span>
                      <h4 className="font-bold text-white text-xs">{t.tableName}</h4>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                          t.status === 'urgent'
                            ? 'bg-red-500 text-white border-red-400 animate-pulse'
                            : t.status === 'cooking'
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        }`}
                      >
                        ⏱️ {formatTime(t.timeElapsedSeconds)}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-1">Server: {t.waiter}</span>
                    </div>
                  </div>

                  {/* Ticket Items */}
                  <div className="py-4 space-y-3">
                    {t.items.map((it, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                        <div className="flex items-center justify-between text-xs font-bold text-white">
                          <span>{it.name}</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                            Qty: {it.qty}
                          </span>
                        </div>
                        {it.note && (
                          <p className="text-[10px] text-amber-400 mt-1 font-mono italic">
                            ⚠️ {it.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ticket Status Bumping Buttons */}
                <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                  {t.status === 'new' && (
                    <button
                      onClick={() => updateTicketStatus(t.id, 'cooking')}
                      className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition"
                    >
                      👨‍🍳 Mark Cooking / In-Prep
                    </button>
                  )}
                  {t.status === 'cooking' && (
                    <button
                      onClick={() => updateTicketStatus(t.id, 'ready')}
                      className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition"
                    >
                      🔔 Mark Ready for Server Pickup
                    </button>
                  )}
                  {(t.status === 'ready' || t.status === 'urgent') && (
                    <button
                      onClick={() => updateTicketStatus(t.id, 'served')}
                      className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 transition"
                    >
                      <CheckCircle className="w-4 h-4" /> Bump Ticket (Order Served)
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 4: CASHIER POS & FISCAL RECEIPT SLIP GENERATOR                     */}
      {/* ========================================================================= */}
      {activeModule === 'cashier' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  🧾
                </span>
                Cashier Settlement, Telebirr QR & Fiscal Thermal Receipt Slip
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Integrated with Ethiopian Ministry of Revenues fiscal machine protocols, Telebirr Merchant QR, and CBE Birr instant ledger settlement.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                ACTIVE SETTLEMENT: {selectedTable.label}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Payment Controls (Left 6 Columns) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Payment Method Selector */}
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="font-bold text-white text-sm">Select Digital Settlement Rail:</h4>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'telebirr', name: 'Telebirr QR', fee: '0% fee', color: 'border-blue-500' },
                    { id: 'cbe', name: 'CBE Birr', fee: 'Direct API', color: 'border-purple-500' },
                    { id: 'cash', name: 'Cash / POS Card', fee: 'Till Drawer', color: 'border-emerald-500' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`p-3 rounded-xl border text-center transition ${
                        paymentMethod === m.id
                          ? 'bg-emerald-500/20 border-emerald-400 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="font-bold text-xs block">{m.name}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">{m.fee}</span>
                    </button>
                  ))}
                </div>

                {/* Split Bill Option */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">Split Bill Between Diners:</span>
                    <span className="text-slate-400">Equal split calculation per guest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSplitCount(num)}
                        className={`w-8 h-8 rounded-lg font-mono font-bold transition ${
                          splitCount === num
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {num}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic QR Display for Diners */}
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
                <div className="inline-block p-4 rounded-2xl bg-white shadow-2xl">
                  {/* Simulated QR Pattern */}
                  <div className="w-44 h-44 bg-slate-950 p-2 rounded-xl flex flex-col items-center justify-center text-emerald-400 font-mono text-[9px] relative overflow-hidden">
                    <QrCode className="w-36 h-36 text-white" />
                    <div className="absolute inset-0 bg-emerald-500/10 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-white text-sm">
                    {paymentMethod === 'telebirr' && 'Scan with Telebirr SuperApp'}
                    {paymentMethod === 'cbe' && 'Scan with CBE Birr Mobile'}
                    {paymentMethod === 'cash' && 'Cashier Tender Slip'}
                  </h5>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    MERCHANT ID: ET-WZ-99420 • REF: #{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                  <p className="text-emerald-400 font-black text-lg font-mono mt-2">
                    ETB {Math.round(total / splitCount).toLocaleString()} {splitCount > 1 && `(per guest)`}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setReceiptPrinted(true);
                    setDailyGrossSales((prev) => prev + total);
                    setTables((prev) =>
                      prev.map((t) => (t.id === selectedTable.id ? { ...t, status: 'available', bill: 0, orders: [] } : t))
                    );
                    setWaiterPagingToast(`🧾 Payment Verified & Fiscal Receipt Printed for ${selectedTable.label}!`);
                    setTimeout(() => setWaiterPagingToast(null), 3500);
                  }}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 mx-auto shadow-lg transition active:scale-95"
                >
                  <Printer className="w-4 h-4" /> Verify Payment & Print Fiscal Receipt
                </button>
              </div>
            </div>

            {/* Authentic Ethiopian Thermal Receipt Render (Right 6 Columns) */}
            <div className="lg:col-span-6 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex justify-center">
              <div className="w-full max-w-sm bg-white text-slate-950 p-6 rounded-lg shadow-2xl font-mono text-[11px] leading-tight border border-slate-300">
                {/* Receipt Header */}
                <div className="text-center pb-3 border-b border-dashed border-slate-400 space-y-1">
                  <div className="font-black text-sm uppercase">THE GRAND LOUNGE & RESTAURANT</div>
                  <div className="text-[10px] text-slate-700">BOLE MEDHANIALEM, ADDIS ABABA</div>
                  <div className="text-[10px] font-bold">TIN: 0048192837 • VAT REG: 991204</div>
                  <div className="text-[9px] text-slate-500">FISCAL MACHINE: ERCA-REG-2026-ET</div>
                </div>

                {/* Session Info */}
                <div className="py-2.5 border-b border-dashed border-slate-400 flex justify-between text-[10px]">
                  <div>
                    <div>TABLE: {selectedTable.label}</div>
                    <div>SERVER: {selectedTable.waiter}</div>
                  </div>
                  <div className="text-right">
                    <div>DATE: 20-NOV-2026</div>
                    <div>TIME: 14:32:08</div>
                  </div>
                </div>

                {/* Items List */}
                <div className="py-3 border-b border-dashed border-slate-400 space-y-1.5">
                  <div className="flex justify-between font-bold text-[10px] text-slate-700 pb-1">
                    <span>ITEM</span>
                    <span>TOTAL</span>
                  </div>
                  {cart.map((c, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span>{c.qty}x {c.nameAm.slice(0, 20)}</span>
                      <span className="font-bold">ETB {(c.qty * c.price).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                {/* Calculation Totals */}
                <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1 text-[10px]">
                  <div className="flex justify-between text-slate-600">
                    <span>SUBTOTAL (EXCL. TAX):</span>
                    <span>ETB {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>SERVICE CHARGE (10%):</span>
                    <span>ETB {serviceCharge.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>STATUTORY VAT (15%):</span>
                    <span>ETB {vat.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-black text-xs pt-1 border-t border-slate-300">
                    <span>GRAND TOTAL:</span>
                    <span>ETB {total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Payment Breakdown */}
                <div className="py-2 text-[10px] text-slate-700 space-y-0.5">
                  <div className="flex justify-between">
                    <span>PAYMENT METHOD:</span>
                    <span className="font-bold uppercase">{paymentMethod}</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-800">
                    <span>SETTLEMENT STATUS:</span>
                    <span>PAID & RECONCILED ✓</span>
                  </div>
                </div>

                {/* Thermal Bottom Note */}
                <div className="text-center pt-3 border-t border-dashed border-slate-400 text-[9px] text-slate-600 space-y-1">
                  <div>*** አመሰግናለሁ! THANK YOU FOR DINING! ***</div>
                  <div className="font-mono text-[8px] text-slate-400">
                    POWERED BY WAZEMA DINEQR™ FISCAL SWITCH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 5: OWNER EXECUTIVE ANALYTICS & RECIPE DEPLETION                    */}
      {/* ========================================================================= */}
      {activeModule === 'analytics' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  📊
                </span>
                Owner Executive Analytics & Automated Recipe Stock Depletion
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Real-time operational dashboard for restaurant general managers. Track live gross sales, table turnover velocities, and ingredient-level stock depletion in sub-gram precision.
              </p>
            </div>

            <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-500/30">
              LIVE TELEMETRY: 99.98% UPTIME
            </span>
          </div>

          {/* 4 KPI Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">TODAY'S GROSS SALES</span>
              <span className="text-2xl font-black text-emerald-400 font-mono mt-1 block">
                ETB {dailyGrossSales.toLocaleString()}
              </span>
              <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> +24% vs. Last Thursday
              </span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">TABLE OCCUPANCY RATE</span>
              <span className="text-2xl font-black text-white font-mono mt-1 block">
                {tables.filter((t) => t.status === 'occupied').length} / 12 Tables
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                67% Active Dining Capacity
              </span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">AVG TABLE TURNOVER</span>
              <span className="text-2xl font-black text-teal-300 font-mono mt-1 block">
                42 Minutes
              </span>
              <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-1">
                <CheckCircle className="w-3 h-3" /> 18m faster via QR ordering
              </span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">FOOD INGREDIENT VARIANCE</span>
              <span className="text-2xl font-black text-emerald-400 font-mono mt-1 block">
                &lt; 0.8%
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Sub-gram Recipe Depletion Active
              </span>
            </div>
          </div>

          {/* Sub-Gram Recipe Inventory Depletion Tracker */}
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h4 className="font-bold text-white text-base">
                  Real-Time Raw Ingredient Stock & Theft Control
                </h4>
                <p className="text-xs text-slate-400">
                  Every dish sold automatically decrements raw meat, spiced butter (qibe), and beverages without manual cashier counting.
                </p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-emerald-400 font-bold">
                AUTO-RECONCILED
              </span>
            </div>

            <div className="space-y-4">
              {Object.entries(inventory).map(([key, item]) => {
                const percent = Math.round((item.remaining / item.total) * 100);
                const isLow = item.remaining <= item.lowThreshold;
                return (
                  <div key={key} className="space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{item.name}</span>
                        {isLow && (
                          <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[10px] font-bold border border-red-500/40">
                            LOW STOCK ALERT
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-slate-300">
                        <strong className="text-emerald-400">{item.remaining} {item.unit}</strong> left of {item.total} {item.unit} ({percent}%)
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isLow ? 'bg-red-500' : percent < 50 ? 'bg-amber-400' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODULE 6: ACRYLIC TABLE QR STAND GENERATOR (READY-TO-PRINT)               */}
      {/* ========================================================================= */}
      {activeModule === 'stand-qr' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  🏷️
                </span>
                Custom Acrylic Table QR Stand Mockup & Printing Generator
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Visual demonstration of how physical QR acrylic stands look when placed on restaurant tables. Diners scan with any standard smartphone camera or Telebirr SuperApp.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition"
              >
                <Printer className="w-4 h-4" /> Print Acrylic Stand Template
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* 3D Acrylic Stand Preview Card & Real Photo */}
            <div className="space-y-4">
              <div className="h-48 rounded-2xl overflow-hidden border border-slate-700 shadow-xl relative">
                <img
                  src="/images/dineqr_acrylic_stand.jpg"
                  alt="Real Acrylic Stand on Restaurant Table"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-slate-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                    REAL VENUE DEPLOYMENT: BOLE MODERN LOUNGE
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-3xl border border-slate-800 flex justify-center shadow-2xl">
                <div className="w-72 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border-4 border-emerald-500/40 p-5 text-center text-white shadow-2xl shadow-emerald-500/10 relative">
                {/* Acrylic Reflection Flare */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-tr-2xl pointer-events-none" />

                {/* Restaurant Brand Top */}
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3 border border-emerald-500/40">
                  <Utensils className="w-6 h-6" />
                </div>
                <h4 className="font-black text-white text-base tracking-tight uppercase">THE GRAND RESTAURANT</h4>
                <p className="text-[10px] text-slate-400 font-mono">Bole, Addis Ababa • Smart Table</p>

                {/* Table Number Pill */}
                <div className="my-4 py-1.5 px-4 rounded-full bg-emerald-500 text-slate-950 font-black text-sm tracking-wider inline-block font-mono">
                  TABLE NUMBER 4
                </div>

                {/* High Res QR Box */}
                <div className="bg-white p-3 rounded-xl shadow-lg inline-block my-2">
                  <div className="w-40 h-40 bg-slate-950 rounded-lg p-2 flex items-center justify-center text-white">
                    <QrCode className="w-36 h-36 text-white" />
                  </div>
                </div>

                {/* Multi-language Instructions */}
                <div className="mt-3 text-xs font-bold text-emerald-400">
                  ስካን አድርገው በቀጥታ ይዘዙ!
                </div>
                <p className="text-[10px] text-slate-300 mt-0.5">
                  Scan to View Menu, Order & Pay via Telebirr / CBE Birr
                </p>

                {/* Payment Logos Pill */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-center gap-3 text-[10px] font-mono text-slate-400">
                  <span className="text-blue-400 font-bold">telebirr</span>
                  <span>•</span>
                  <span className="text-purple-400 font-bold">CBE Birr</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-bold">Cards</span>
                </div>
              </div>
            </div>
          </div>

            {/* Stand Specifications & Sales Points for Ato Tamrat */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Why Ethiopian Restaurant Owners Love DineQR Stands:
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Zero Waiter Miscommunication:</strong> Diners pick their own meat temperature (ለብ-ለብ / ጥብስ) and spice level, eliminating wrong food returns to the kitchen.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>35% Faster Table Turnover:</strong> Diners don't wave their hands for 15 minutes waiting for a paper menu; they sit down, scan, and order in 60 seconds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Weather & Grease Proof:</strong> Laser-etched high-clarity acrylic stands resist water, soup spills, and heat.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Free Menu Updates:</strong> Change food prices or mark dishes as "Sold Out" instantly from the admin phone without reprinting menus!</span>
                  </li>
                </ul>
              </div>

              {/* Consultation / Call to Action */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/40 text-xs text-slate-300 flex items-center justify-between gap-4">
                <div>
                  <span className="font-extrabold text-white text-sm block">Ready to deploy DineQR in your venue?</span>
                  <span className="text-emerald-400 mt-0.5 block">Wazema engineers provide full hardware setup & staff training.</span>
                </div>
                <a
                  href="#meeting"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs whitespace-nowrap shadow-lg transition"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
