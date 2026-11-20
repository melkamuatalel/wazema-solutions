import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { WAZEMA_PORTFOLIO, CLIENT_TESTIMONIALS } from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const INQUIRIES_PATH = path.join(__dirname, 'inquiries.json');

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(cors());
app.use(express.json());

// Public static files
app.use('/images', express.static(path.join(ROOT_DIR, 'public', 'images')));

function getInquiries() {
  if (!fs.existsSync(INQUIRIES_PATH)) {
    const seed = [
      {
        id: 'WZ-INQ-101',
        createdAt: '2026-11-19T10:00:00.000Z',
        fullName: 'Client Partner Representative',
        phone: '+251 95 386 8816',
        email: 'partner@example.com',
        meetingType: 'In-Person (Addis Ababa)',
        locationArea: 'Bole Medhanialem',
        projectScope: 'Custom ERP & Mobile System Integration',
        notes: 'Requesting in-person meeting in Addis Ababa to review demo and sign project agreement.',
        status: 'pending_meeting',
      },
    ];
    fs.writeFileSync(INQUIRIES_PATH, JSON.stringify(seed, null, 2));
    return seed;
  }
  return JSON.parse(fs.readFileSync(INQUIRIES_PATH, 'utf8'));
}

function saveInquiries(items) {
  fs.writeFileSync(INQUIRIES_PATH, JSON.stringify(items, null, 2));
}

// APIs
app.get('/api/portfolio', (_req, res) => {
  res.json({
    company: {
      name: 'Wazema Solutions',
      nameAm: 'ዋዜማ ሶሉሽንስ',
      tagline: 'Enterprise Software, Cross-Platform Mobile Apps & Cloud Systems',
      taglineAm: 'የኮርፖሬት ሶፍትዌር፣ የሞባይል አፕሊኬሽኖች እና የክላውድ ሲስተሞች',
      headquarters: 'Addis Ababa, Ethiopia',
      phone: '+251 95 386 8816',
      email: 'wazemasolutions@gmail.com',
      logo: '/images/wazema_logo.jpg',
      stats: {
        projectsCount: WAZEMA_PORTFOLIO.length,
        continentsCount: 3,
        uptimeSla: '99.98%',
        satisfactionRate: '100%',
      },
    },
    projects: WAZEMA_PORTFOLIO,
    testimonials: CLIENT_TESTIMONIALS,
  });
});

app.post('/api/inquiries', (req, res) => {
  const { fullName, phone, email, meetingType, locationArea, projectScope, notes } =
    req.body || {};

  if (!fullName || !phone) {
    return res.status(400).json({ error: 'Please provide your full name and phone number.' });
  }

  const items = getInquiries();
  const newInquiry = {
    id: `WZ-INQ-${Date.now().toString().slice(-4)}`,
    createdAt: new Date().toISOString(),
    fullName: fullName.trim(),
    phone: phone.trim(),
    email: email?.trim() || '',
    meetingType: meetingType || 'In-Person (Addis Ababa)',
    locationArea: locationArea || 'Addis Ababa (Bole / Kazanchis / CMC)',
    projectScope: projectScope || 'Custom Software Development',
    notes: notes || '',
    status: 'new_request',
  };

  items.unshift(newInquiry);
  saveInquiries(items);

  res.status(201).json({
    success: true,
    inquiry: newInquiry,
    message: 'Your meeting request has been submitted directly to Wazema Solutions executive leadership.',
  });
});

// Production built frontend serving
const DIST_DIR = path.join(ROOT_DIR, 'dist');
if (process.env.NODE_ENV === 'production' && fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Wazema Solutions Corporate Platform running on http://localhost:${PORT}`);
});
