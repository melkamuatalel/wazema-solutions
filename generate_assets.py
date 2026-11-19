import os
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "/home/utop/.gemini/antigravity/scratch/wazema-solutions/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Project graphic themes: (filename, title, subtitle, category_tag, primary_accent, secondary_accent, metric_1, metric_2)
PROJECTS = [
    (
        "maf_battery_inventory.jpg",
        "MAF Battery & Automotive Logistics",
        "Serialized Barcode Warranty & FIFO Warehouse Cloud",
        "AUTOMOTIVE SUPPLY CHAIN",
        (234, 88, 12), # Orange
        (30, 41, 59),  # Slate
        "100% Serialized Lot Tracking",
        "Zero Shelf Degradation"
    ),
    (
        "time_gypsum_erp.jpg",
        "Time Gypsum Manufacturing ERP",
        "Raw Rock Calcination, Production Yield & Distribution",
        "INDUSTRIAL ERP",
        (13, 148, 136), # Teal
        (15, 23, 42),
        "120+ Regional Wholesale Dealers",
        "Real-Time Yield Formula Sync"
    ),
    (
        "enterprise_hrms_payroll.jpg",
        "Enterprise HRMS & API Gateway",
        "Biometric Clock Sync & Ethiopian Tax/Pension Payroll",
        "ENTERPRISE CORE",
        (79, 70, 229), # Indigo
        (15, 23, 42),
        "Automated Ethiopian Tax/Pension Tiers",
        "99.98% Gateway Uptime"
    ),
    (
        "ethio_logistics_tms.jpg",
        "Ethio-Djibouti Corridor Logistics TMS",
        "GPS Fleet Telematics, Border Manifests & Customs Transit",
        "FLEET & TELEMATICS",
        (14, 165, 233), # Sky
        (15, 23, 42),
        "480+ Cross-Border Trucks Monitored",
        "Live Geofenced Customs Checkpoints"
    ),
    (
        "abyssinia_health_ehr.jpg",
        "Abyssinia Health Cloud EHR & E-Rx",
        "Electronic Health Records, Lab Diagnostics & Telehealth",
        "HEALTHCARE INFORMATICS",
        (16, 185, 129), # Emerald
        (15, 23, 42),
        "HIPAA/MOH Compliant Cloud Archive",
        "Sub-Second E-Prescription Dispatch"
    ),
    (
        "chapa_telebirr_paycore.jpg",
        "Wazema PayCore Unified Merchant Switch",
        "Telebirr, CBE Birr, Chapa & Stripe Aggregation Engine",
        "FINTECH & PAYMENTS",
        (168, 85, 247), # Purple
        (15, 23, 42),
        "Multi-Rail QR & Webhook Settlement",
        "Sub-200ms Transaction Authorization"
    ),
    (
        "sheger_realestate_crm.jpg",
        "Sheger Luxury Real Estate CRM",
        "Interactive 3D Floor Plan Unit Picker & Escrow Billing",
        "PROPTECH & CRM",
        (245, 158, 11), # Amber
        (15, 23, 42),
        "ETB 1.2B+ Unit Inventory Managed",
        "Automated Installment Milestone Alerts"
    ),
    (
        "bole_cargo_sentinel.jpg",
        "Bole Airport Cargo Customs Sentinel",
        "Air Waybill (AWB) Barcode Scanner & Risk Triage Engine",
        "AVIATION & CUSTOMS",
        (59, 130, 246), # Blue
        (15, 23, 42),
        "12,000+ Daily Waybills Scanned",
        "99.9% Automated Manifest Matching"
    ),
    (
        "oromia_coffee_trace.jpg",
        "Oromia Coffee Direct-Trade Origin Trace",
        "Immutable Lot Origin, Cupping Scores & Export Docs",
        "AGRITECH & BLOCKCHAIN",
        (180, 83, 9),  # Coffee brown/amber
        (15, 23, 42),
        "Q-Grader Cupping Score Verification",
        "100% Traceable Cooperative Lots"
    ),
    (
        "addis_pharma_serial.jpg",
        "Addis Pharma Batch Serialization & Cold-Chain",
        "EFDA Regulatory 2D DataMatrix & IoT Temp Logger",
        "PHARMACEUTICAL MIS",
        (225, 29, 72),  # Rose
        (15, 23, 42),
        "EFDA Regulatory Serialization Ready",
        "-20°C to +8°C Real-Time IoT Alarms"
    ),
    (
        "sacco_microfinance_core.jpg",
        "SACCO Core Banking & Loan Delinquency Hub",
        "Member Passbooks, Micro-Credit Scoring & Agent App",
        "COOPERATIVE BANKING",
        (5, 150, 105), # Green
        (15, 23, 42),
        "85,000+ Active SACCO Members",
        "Automated Loan Aging & Portfolio Risk"
    ),
    (
        "urban_water_amr.jpg",
        "Urban Water Supply & Smart AMR Telemetry",
        "Automated Meter Reading, Leak Detection & Billing",
        "SMART CITY IOT",
        (6, 182, 212), # Cyan
        (15, 23, 42),
        "Instant Ultrasonic Leak Alerts",
        "Automated Monthly Billing Generation"
    ),
    (
        "apex_legal_erp.jpg",
        "Apex Legal Practice & Case Docket ERP",
        "Court Hearing Calendars, Client Retainers & Escrow",
        "LEGALTECH & GOVERNANCE",
        (99, 102, 241), # Indigo
        (15, 23, 42),
        "Encrypted Litigation Evidence Vault",
        "Multi-Currency Client Trust Ledger"
    ),
    (
        "diaspora_remit_web3.jpg",
        "Wazema Remit — Diaspora Cross-Border Hub",
        "Zero-Fee Diaspora Transfers with Instant Mobile Wallet",
        "CROSS-BORDER FINTECH",
        (139, 92, 246), # Violet
        (15, 23, 42),
        "Instant Telebirr & CBE Crediting",
        "End-to-End Cryptographic Ledger"
    ),
    (
        "addis_courier_dispatch.jpg",
        "Swift Addis On-Demand Courier Dispatch",
        "AI Route Batching, Rider Telemetry & Cash Settlement",
        "LAST-MILE LOGISTICS",
        (234, 88, 12), # Orange
        (15, 23, 42),
        "28-Min Average Delivery Window",
        "100% Cash-on-Delivery (COD) Reconciliation"
    ),
    (
        "horizon_solar_iot.jpg",
        "Horizon Solar & Microgrid IoT Telemetry",
        "Inverter Telemetry, Battery SOC & Energy Token Engine",
        "CLEANTECH & RENEWABLES",
        (234, 179, 8), # Gold
        (15, 23, 42),
        "Real-Time Kilowatt-Hour Telemetry",
        "Prepaid SMS Energy Token Generation"
    ),
    (
        "st_pauls_blood_bank.jpg",
        "National Blood Bank & Donor Match Sentinel",
        "Rare Blood Type Emergency Broadcast & Cold Bank Registry",
        "EMERGENCY HEALTHCARE",
        (220, 38, 38), # Red
        (15, 23, 42),
        "Automated SMS Donor Dispatch",
        "Zero Blood Product Expiry Waste"
    ),
    (
        "neaea_exam_engine.jpg",
        "National Examination Testing & Proctor Engine",
        "High-Concurrency Computer Based Testing & Auto-Scoring",
        "EDTECH & ASSESSMENT",
        (37, 99, 235), # Blue
        (15, 23, 42),
        "50,000+ Concurrent Examinees Tested",
        "Tamper-Evident Question Decryption"
    ),
    (
        "ethio_hotel_channel_mgr.jpg",
        "Hospitality Channel Manager & Booking Engine",
        "Real-Time Two-Way OTA Sync (Booking.com & Agoda)",
        "HOSPITALITY COMMERCE",
        (217, 119, 6), # Amber
        (15, 23, 42),
        "Zero Overbooking Synchronization",
        "Integrated Direct Commission-Free Engine"
    ),
    (
        "addis_card_transit.jpg",
        "Addis Transit Smart Card & Fare Engine",
        "Contactless NFC Bus Fare Tap-and-Ride System",
        "URBAN MOBILITY",
        (16, 185, 129), # Green
        (15, 23, 42),
        "Sub-150ms Bus Validator NFC Read",
        "Centralized Fleet Clearing House"
    ),
    (
        "agri_commodity_ecx.jpg",
        "Commodity Exchange Warehouse Receipt ERP",
        "Grain Grading, Moisture Certification & Trade Slips",
        "COMMODITY EXCHANGE",
        (161, 98, 7),  # Earth amber
        (15, 23, 42),
        "Collateralized Warehouse Receipts",
        "Direct Farmer Payout Integration"
    ),
    (
        "ecopark_effluent_iot.jpg",
        "Industrial Park Effluent Treatment IoT",
        "Real-Time pH, COD & Heavy Metal Effluent Sentinel",
        "ENVIRONMENTAL SENSORS",
        (13, 148, 136), # Teal
        (15, 23, 42),
        "Automated Environmental EPA Alarms",
        "Solar-Powered LoRaWAN Sensor Fleet"
    ),
    (
        "diaspora_build_cam.jpg",
        "Diaspora HomeBuild Milestone Cam Portal",
        "Drone 4K Site Progress, Milestone Audits & Escrow Payouts",
        "CONSTRUCTION TECH",
        (2, 132, 199), # Sky
        (15, 23, 42),
        "Diaspora Milestone Escrow Protection",
        "360° Interactive Drone Site Panoramas"
    ),
    (
        "wazema_fidal_ocr.jpg",
        "Wazema Fidäl AI — Amharic & Ge'ez OCR",
        "Deep Learning Document Intelligence & National ID Parser",
        "APPLIED AI & OCR",
        (124, 58, 237), # Purple
        (15, 23, 42),
        "99.4% Amharic Script Accuracy",
        "Instant Fayda ID & Tax Card Entity Extraction"
    )
]

def draw_card(filename, title, subtitle, category_tag, accent, bg_dark, metric1, metric2):
    w, h = 1200, 675
    img = Image.new("RGB", (w, h), color=bg_dark)
    draw = ImageDraw.Draw(img)

    # Subtle mesh gradient background
    for y in range(h):
        ratio = y / h
        r = int(bg_dark[0] * (1 - ratio * 0.4) + 10 * ratio)
        g = int(bg_dark[1] * (1 - ratio * 0.4) + 15 * ratio)
        b = int(bg_dark[2] * (1 - ratio * 0.4) + 25 * ratio)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Glow orb in top right
    glow_color = (accent[0]//4, accent[1]//4, accent[2]//4)
    draw.ellipse([w - 400, -100, w + 200, 500], fill=glow_color)

    # Top Bar: Wazema Solutions Badge
    font_large = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 36)
    font_mid = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-M.ttf", 22)
    font_bold = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 20)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf", 16)
    font_title = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 46)

    # Header bar
    draw.rectangle([50, 45, 1150, 95], fill=(20, 27, 45), outline=(40, 50, 75), width=1)
    # Traffic dots
    draw.ellipse([70, 65, 80, 75], fill=(239, 68, 68))
    draw.ellipse([90, 65, 100, 75], fill=(234, 179, 8))
    draw.ellipse([110, 65, 120, 75], fill=(34, 197, 94))
    
    draw.text((140, 62), "WAZEMA SOLUTIONS — ENTERPRISE SYSTEM CORE", fill=(148, 163, 184), font=font_small)
    draw.text((860, 62), "VERIFIED PRODUCTION DEPLOYMENT", fill=(52, 211, 153), font=font_small)

    # Category Pill
    draw.rounded_rectangle([50, 130, 50 + len(category_tag) * 12 + 40, 170], radius=8, fill=(accent[0]//5, accent[1]//5, accent[2]//5), outline=accent, width=2)
    draw.text((70, 140), category_tag, fill=accent, font=font_bold)

    # Title & Subtitle
    draw.text((50, 200), title, fill=(255, 255, 255), font=font_title)
    draw.text((50, 265), subtitle, fill=(148, 163, 184), font=font_mid)

    # Main Mockup Container
    draw.rounded_rectangle([50, 320, 1150, 610], radius=16, fill=(17, 24, 39), outline=(55, 65, 81), width=2)

    # Inside Mockup Left Box (Telemetry & Architecture)
    draw.rounded_rectangle([75, 345, 580, 585], radius=12, fill=(24, 33, 53), outline=(39, 51, 79), width=1)
    draw.text((95, 365), "SYSTEM ARCHITECTURE & ACTIVE ENGINE", fill=accent, font=font_bold)
    
    # Mock diagram lines / stats
    features = [
        "● High-Availability Microservices Cluster",
        "● End-to-End Cryptographic Audit Logging",
        "● Real-Time Webhook & Data Sync Protocol",
        "● Multi-Tenant Role Based Access Control (RBAC)",
        "● Automated Cloud Disaster Recovery & Failover"
    ]
    y_pos = 410
    for f in features:
        draw.text((95, y_pos), f, fill=(203, 213, 225), font=font_small)
        y_pos += 34

    # Inside Mockup Right Box (Verified KPI Metrics)
    draw.rounded_rectangle([610, 345, 1125, 585], radius=12, fill=(24, 33, 53), outline=(39, 51, 79), width=1)
    draw.text((630, 365), "DELIVERED ENTERPRISE METRICS", fill=(52, 211, 153), font=font_bold)

    # Metric Card 1
    draw.rounded_rectangle([630, 405, 1105, 475], radius=8, fill=(30, 41, 65), outline=(51, 65, 85), width=1)
    draw.text((650, 415), "PRIMARY DEPLOYMENT KPI", fill=(148, 163, 184), font=font_small)
    draw.text((650, 438), metric1, fill=(255, 255, 255), font=font_mid)

    # Metric Card 2
    draw.rounded_rectangle([630, 495, 1105, 565], radius=8, fill=(30, 41, 65), outline=(51, 65, 85), width=1)
    draw.text((650, 505), "OPERATIONAL BENEFIT", fill=(148, 163, 184), font=font_small)
    draw.text((650, 528), metric2, fill=(255, 255, 255), font=font_mid)

    # Watermark bottom right
    draw.text((880, 630), "ENGINEERED BY WAZEMA SOLUTIONS", fill=(100, 116, 139), font=font_small)

    out_path = os.path.join(OUTPUT_DIR, filename)
    img.save(out_path, quality=92)
    print(f"Generated {out_path}")

for p in PROJECTS:
    draw_card(*p)

print("All custom graphic assets generated successfully!")
