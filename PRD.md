# PRD: Auto Detailing Premium Website

## 📋 Základní informace

| Položka | Detail |
|---------|--------|
| **Název projektu** | Auto Detailing Premium Web |
| **Verze** | 1.0 |
| **Datum** | Leden 2026 |
| **Autor** | Praut s.r.o. |
| **Status** | Draft |

---

## 🎯 Vize produktu

Vytvořit ultra-moderní, vizuálně působivý web pro profesionální detailingovou společnost, který kombinuje prémiový design s bezproblémovou uživatelskou zkušeností. Web bude sloužit jako primární nástroj pro akvizici zákazníků a správu objednávek.

### Hodnota pro zákazníka
- Jednoduchý a intuitivní proces objednávky
- Přehled služeb s transparentními cenami
- Důvěryhodná prezentace portfolia
- Rychlá komunikace

### Hodnota pro firmu
- Automatizovaný příjem objednávek
- Snížení administrativní zátěže
- Profesionální image značky
- Data-driven rozhodování

---

## 👥 Cílové skupiny

### Primární
- **Majitelé prémiových vozidel** (35-55 let, vyšší příjmy)
- **Automobiloví nadšenci** (25-45 let, péče o auto je hobby)
- **Firemní flotily** (fleet manažeři, firmy s reprezentativními vozy)

### Sekundární
- Autosalony a prodejci ojetých vozů
- Leasingové společnosti
- Svatební a eventové agentury

---

## 🏗️ Struktura webu

```
/                       → Landing page (Hero, Služby, Galerie, CTA)
/sluzby                 → Detailní přehled služeb
/sluzby/[slug]          → Detail konkrétní služby
/objednavka             → Objednávkový formulář
/galerie                → Portfolio realizací
/cenik                  → Ceník služeb
/o-nas                  → O společnosti
/kontakt                → Kontaktní informace
/blog                   → Články a tipy
/blog/[slug]            → Detail článku
/admin                  → Admin dashboard (chráněno)
/admin/objednavky       → Správa objednávek
/admin/kalendar         → Kalendář rezervací
/admin/galerie          → Správa galerie
/admin/cenik            → Správa ceníku
/admin/nastaveni        → Nastavení webu
```

---

## 📄 Detailní specifikace stránek

### 1. Landing Page (/)

#### Hero sekce
- **Full-screen video/animace** na pozadí (detailing v akci)
- Hlavní headline s typografickou animací
- Sekundární text s USP
- CTA tlačítko "Objednat" (prominent, animované)
- Scroll indikátor

#### Sekce "Proč my"
- 4 key benefits s ikonami (micro-animace on hover)
- Čísla/statistiky (animovaný counter)
  - X+ spokojených zákazníků
  - X let zkušeností
  - X+ realizací měsíčně

#### Služby preview
- 3-4 hlavní služby jako karty
- Hover efekt s quick info
- Link na detail

#### Galerie preview
- Masonry/bento grid layout
- Before/After slider (2-3 ukázky)
- Lightbox funkce
- Link na plnou galerii

#### Testimonials
- Carousel s recenzemi
- Avatar, jméno, auto (typ)
- Rating (hvězdy)
- Google Reviews integrace

#### CTA sekce
- Výrazný banner
- "Rezervujte si termín ještě dnes"
- Kontaktní formulář nebo link na objednávku

#### Footer
- Logo
- Navigace
- Kontaktní údaje
- Sociální sítě
- Copyright

---

### 2. Služby (/sluzby)

#### Layout
- Hero s názvem sekce
- Filtr služeb (kategorie)
- Grid služeb

#### Kategorie služeb
1. **Exteriér**
   - Ruční mytí
   - Dekontaminace laku
   - Leštění (1-step, 2-step, 3-step)
   - Keramická ochrana
   - PPF (ochranná fólie)
   - Renovace světlometů

2. **Interiér**
   - Kompletní čištění interiéru
   - Hloubkové čištění sedaček
   - Čištění kůže + ošetření
   - Odstranění zápachu (ozonizace)
   - Dezinfekce

3. **Kompletní balíčky**
   - Basic Care
   - Premium Care
   - Ultimate Care
   - Show Car Preparation

4. **Speciální služby**
   - Detailing motorového prostoru
   - Příprava na prodej
   - Korekce laku po nehodě
   - Sezónní ošetření

#### Detail služby (/sluzby/[slug])
- Hero image
- Název a popis
- Co zahrnuje (checklist)
- Délka trvání
- Cenové rozmezí
- Galerie realizací této služby
- FAQ
- CTA na objednávku

---

### 3. Objednávkový formulář (/objednavka)

#### Multi-step formulář

**Krok 1: Typ vozidla**
- Kategorie: Osobní / SUV / Dodávka / Motorka / Jiné
- Značka (select s vyhledáváním)
- Model
- Rok výroby
- Barva laku
- Aktuální stav (škála 1-5)

**Krok 2: Výběr služeb**
- Checkbox/card výběr služeb
- Zobrazení ceny při výběru
- Doporučené kombinace
- Automatický výpočet slevy při balíčku

**Krok 3: Termín**
- Kalendář s dostupnými termíny
- Time sloty
- Možnost "Co nejdříve"
- Odhadovaná doba realizace

**Krok 4: Kontaktní údaje**
- Jméno a příjmení
- Email
- Telefon
- Preferovaný způsob komunikace
- Poznámka

**Krok 5: Shrnutí a odeslání**
- Přehled objednávky
- Odhadovaná cena
- Podmínky služby (checkbox)
- GDPR souhlas
- Odeslání

#### Po odeslání
- Potvrzovací stránka
- Email s potvrzením
- Možnost přidat do kalendáře

---

### 4. Admin Panel (/admin)

#### Autentizace
- Login stránka (/admin/login)
- Email + heslo
- "Zapamatovat si mě"
- Zapomenuté heslo
- 2FA (volitelně)

#### Dashboard (/admin)
- Přehled nových objednávek
- Dnešní/týdenní kalendář
- Statistiky (obrat, počet objednávek)
- Quick actions
- Notifikace

#### Správa objednávek (/admin/objednavky)
- Tabulka objednávek
- Filtry: Status, datum, služba
- Vyhledávání
- Detail objednávky (modal/stránka)
- Změna statusu: Nová → Potvrzená → V realizaci → Dokončená → Fakturovaná
- Poznámky k objednávce
- Export do CSV/Excel

#### Kalendář (/admin/kalendar)
- Týdenní/měsíční zobrazení
- Drag & drop přesouvání
- Kapacita dne
- Barevné odlišení dle statusu

#### Správa galerie (/admin/galerie)
- Upload fotek (drag & drop)
- Hromadný upload
- Metadata: služba, auto, datum
- Before/After párování
- Viditelnost (draft/published)

#### Správa ceníku (/admin/cenik)
- CRUD služeb
- Kategorizace
- Cenové varianty dle typu vozidla
- Slevy a akce

#### Zákazníci (/admin/zakaznici)
- Seznam zákazníků
- Historie objednávek zákazníka
- Kontaktní údaje
- Poznámky

#### Nastavení (/admin/nastaveni)
- Profil firmy
- Provozní doba
- Kapacita
- Email šablony
- Integrace (Google Calendar, účetnictví)

---

## 🎨 Design Requirements

### Vizuální identita

#### Barevná paleta
```
Primary:      #0A0A0A (Deep Black)
Secondary:    #1A1A2E (Dark Blue-Black)
Accent:       #E63946 (Racing Red) nebo #FFD700 (Gold)
Surface:      #16213E (Dark Navy)
Text:         #FFFFFF (White)
Text Muted:   #8892B0 (Slate)
Success:      #00F5D4 (Neon Mint)
```

#### Typografie
- Headlines: **Space Grotesk** nebo **Clash Display** (bold, modern)
- Body: **Inter** nebo **DM Sans** (clean, readable)
- Accent: **JetBrains Mono** (pro čísla, tech feel)

#### Design principy
1. **Dark mode first** - tmavé téma jako default
2. **Glassmorphism** - průhledné karty s blur efektem
3. **Micro-interactions** - jemné animace při interakci
4. **3D elementy** - subtle 3D efekty, paralax
5. **Vysoký kontrast** - prémiový feel
6. **Generous whitespace** - vzdušný layout

### Animace a efekty
- Smooth scroll
- Parallax na hero sekci
- Reveal animace při scrollu (GSAP/Framer Motion)
- Cursor effects (custom kurzor)
- Hover states na všech interaktivních elementech
- Loading states a skeleton screens
- Page transitions

### Responzivita
- Mobile-first approach
- Breakpoints: 375px, 768px, 1024px, 1440px, 1920px
- Touch-friendly na mobile
- Optimalizace pro tablety

---

## ⚙️ Technické požadavky

### Frontend stack
```
Framework:      Next.js 14+ (App Router)
Styling:        Tailwind CSS + Shadcn/ui
Animace:        Framer Motion + GSAP
State:          Zustand nebo TanStack Query
Formuláře:      React Hook Form + Zod
Kalendář:       react-big-calendar nebo custom
```

### Doporučený package.json
```json
{
  "name": "detailing-web",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "db:migrate": "prisma migrate deploy",
    "db:seed": "prisma db seed",
    "db:studio": "prisma studio",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@prisma/client": "^5.10.0",
    "next-auth": "^4.24.0",
    "tailwindcss": "^3.4.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.50.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "zustand": "^4.5.0",
    "resend": "^3.2.0",
    "date-fns": "^3.3.0",
    "lucide-react": "^0.340.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-select": "^2.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "prisma": "^5.10.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.1.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### Backend stack
```
Runtime:        Node.js / Edge Runtime
Database:       PostgreSQL (Vercel Postgres doporučeno)
Auth:           NextAuth.js
Storage:        Vercel Blob
Email:          Resend
```

### Prisma Schema (prisma/schema.prisma)
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String
  role          Role      @default(ADMIN)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum Role {
  ADMIN
  MANAGER
}

model Service {
  id          String      @id @default(cuid())
  slug        String      @unique
  name        String
  description String?     @db.Text
  shortDesc   String?
  category    Category
  priceFrom   Int
  priceTo     Int?
  duration    Int         // minuty
  includes    String[]
  image       String?
  order       Int         @default(0)
  active      Boolean     @default(true)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  orders      OrderService[]
  gallery     GalleryItem[]
}

enum Category {
  EXTERIOR
  INTERIOR
  PACKAGE
  SPECIAL
}

model Order {
  id              String        @id @default(cuid())
  orderNumber     String        @unique
  status          OrderStatus   @default(NEW)
  
  // Vozidlo
  vehicleType     VehicleType
  vehicleBrand    String
  vehicleModel    String
  vehicleYear     Int?
  vehicleColor    String?
  vehicleCondition Int?         // 1-5
  
  // Kontakt
  customerName    String
  customerEmail   String
  customerPhone   String
  preferredContact ContactType  @default(EMAIL)
  note            String?       @db.Text
  
  // Termín
  preferredDate   DateTime?
  preferredTime   String?
  scheduledAt     DateTime?
  completedAt     DateTime?
  
  // Cena
  estimatedPrice  Int?
  finalPrice      Int?
  
  // Meta
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
  
  services        OrderService[]
  customer        Customer?     @relation(fields: [customerId], references: [id])
  customerId      String?
}

model OrderService {
  id        String   @id @default(cuid())
  order     Order    @relation(fields: [orderId], references: [id], onDelete: Cascade)
  orderId   String
  service   Service  @relation(fields: [serviceId], references: [id])
  serviceId String
  price     Int
}

enum OrderStatus {
  NEW
  CONFIRMED
  IN_PROGRESS
  COMPLETED
  INVOICED
  CANCELLED
}

enum VehicleType {
  CAR
  SUV
  VAN
  MOTORCYCLE
  OTHER
}

enum ContactType {
  EMAIL
  PHONE
  WHATSAPP
}

model Customer {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  phone     String?
  note      String?  @db.Text
  orders    Order[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model GalleryItem {
  id          String   @id @default(cuid())
  title       String?
  description String?
  imageBefore String?
  imageAfter  String?
  image       String?  // pro single image
  service     Service? @relation(fields: [serviceId], references: [id])
  serviceId   String?
  vehicleInfo String?
  published   Boolean  @default(false)
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Testimonial {
  id        String   @id @default(cuid())
  name      String
  vehicle   String?
  rating    Int      @default(5)
  text      String   @db.Text
  avatar    String?
  published Boolean  @default(true)
  order     Int      @default(0)
  createdAt DateTime @default(now())
}

model Settings {
  id            String   @id @default("main")
  companyName   String   @default("Auto Detailing")
  email         String?
  phone         String?
  address       String?
  openingHours  Json?
  dailyCapacity Int      @default(3)
  updatedAt     DateTime @updatedAt
}
```

### Hosting & infrastruktura (Vercel-Ready)
```
Hosting:        Vercel (Pro plan doporučen pro produkci)
CDN:            Vercel Edge Network (automaticky)
Monitoring:     Vercel Analytics + Vercel Speed Insights
CI/CD:          Vercel Git Integration (auto-deploy)
Preview:        Automatické preview deployments pro každý PR
```

#### Vercel Deployment Setup

**Struktura projektu pro Vercel:**
```
/
├── app/                    # Next.js App Router
│   ├── (public)/          # Veřejné stránky
│   │   ├── page.tsx       # Landing page
│   │   ├── sluzby/
│   │   ├── objednavka/
│   │   ├── galerie/
│   │   └── kontakt/
│   ├── (admin)/           # Admin sekce
│   │   └── admin/
│   │       ├── page.tsx   # Dashboard
│   │       ├── objednavky/
│   │       ├── kalendar/
│   │       └── nastaveni/
│   ├── api/               # API Routes
│   │   ├── objednavky/
│   │   ├── auth/
│   │   └── upload/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                # Shadcn components
│   ├── forms/
│   ├── admin/
│   └── shared/
├── lib/
│   ├── db.ts              # Database client
│   ├── auth.ts            # Auth config
│   └── utils.ts
├── public/
│   ├── images/
│   └── fonts/
├── prisma/
│   └── schema.prisma      # Database schema
├── .env.example           # Environment template
├── .env.local             # Local env (gitignored)
├── next.config.js
├── tailwind.config.ts
├── vercel.json            # Vercel config
└── package.json
```

**vercel.json konfigurace:**
```json
{
  "framework": "nextjs",
  "regions": ["fra1"],
  "crons": [
    {
      "path": "/api/cron/reminders",
      "schedule": "0 8 * * *"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

**Environment Variables (Vercel Dashboard):**
```env
# Database (Vercel Postgres nebo Neon)
DATABASE_URL=
DIRECT_URL=

# Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Email (Resend)
RESEND_API_KEY=

# Storage (Vercel Blob nebo Cloudflare R2)
BLOB_READ_WRITE_TOKEN=

# Analytics
NEXT_PUBLIC_GA_ID=

# Optional
GOOGLE_MAPS_API_KEY=
TWILIO_SID=
TWILIO_AUTH_TOKEN=
```

**One-Click Deploy Button (pro README):**
```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_REPO&env=DATABASE_URL,NEXTAUTH_SECRET,RESEND_API_KEY)
```

**Doporučené Vercel integrace:**
- **Vercel Postgres** - managed PostgreSQL database
- **Vercel Blob** - file storage pro galerii
- **Vercel KV** - Redis pro session cache
- **Vercel Analytics** - web analytics
- **Vercel Speed Insights** - Core Web Vitals monitoring

### Integrace
- **Google Calendar API** - sync termínů
- **Google Maps API** - mapa na kontaktní stránce
- **Google Reviews API** - automatický import recenzí
- **Meta Pixel + Google Analytics** - tracking
- **Fakturoid/iDoklad API** - fakturace (volitelně)
- **Twilio/MessageBird** - SMS notifikace (volitelně)

### SEO požadavky
- Server-side rendering
- Structured data (LocalBusiness, Service, Review)
- Automatické sitemap.xml
- robots.txt
- OpenGraph + Twitter Cards
- Core Web Vitals optimalizace

### Performance cíle
- Lighthouse score: 90+
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Bundle size: < 200KB (initial load)

### Bezpečnost
- HTTPS only
- CSP headers
- Rate limiting na formuláře
- Input sanitization
- CSRF protection
- Secure authentication

---

## 📱 Funkční požadavky

### Must Have (MVP)
- [ ] Responzivní landing page
- [ ] Stránka služeb s detaily
- [ ] Multi-step objednávkový formulář
- [ ] Email notifikace (zákazník + admin)
- [ ] Admin login
- [ ] Dashboard s přehledem objednávek
- [ ] Správa objednávek (CRUD, status)
- [ ] Základní galerie
- [ ] Kontaktní stránka
- [ ] SEO optimalizace

### Should Have
- [ ] Kalendář rezervací (admin)
- [ ] Before/After slider v galerii
- [ ] Ceník s dynamickým výpočtem
- [ ] Blog sekce
- [ ] Google Reviews integrace
- [ ] SMS notifikace
- [ ] Export objednávek

### Could Have
- [ ] Zákaznický portál (historie objednávek)
- [ ] Věrnostní program
- [ ] Gift vouchers
- [ ] Live chat
- [ ] Multi-language support
- [ ] Dark/Light mode toggle
- [ ] PWA

### Won't Have (v1.0)
- Online platby
- Mobilní aplikace
- AI chatbot
- Inventory management

---

## 📊 Metriky úspěchu

### Business KPIs
| Metrika | Cíl (3 měsíce) |
|---------|----------------|
| Konverzní poměr webu | > 3% |
| Počet objednávek přes web | 50+ měsíčně |
| Bounce rate | < 40% |
| Průměrná doba na webu | > 2:30 min |

### Technické KPIs
| Metrika | Cíl |
|---------|-----|
| Lighthouse Performance | > 90 |
| Uptime | 99.9% |
| Průměrná doba načtení | < 2s |
| Error rate | < 0.1% |

---

## 🗓️ Časový plán

### Fáze 1: Discovery & Design (2 týdny)
- Finalizace požadavků
- Wireframes
- UI/UX design
- Design system

### Fáze 2: Development - MVP (4 týdny)
- Setup projektu
- Landing page
- Služby + detail
- Objednávkový formulář
- Admin panel (základní)
- Email integrace

### Fáze 3: Polish & Testing (2 týdny)
- Animace a micro-interactions
- SEO optimalizace
- Performance tuning
- Testing (unit, e2e)
- Bug fixing

### Fáze 4: Launch (1 týden)
- Produkční deployment
- DNS setup
- Analytics setup
- Soft launch
- Monitoring

**Celková doba: 9 týdnů**

---

## 🚀 Vercel Deployment Checklist

### Pre-deployment
- [ ] Všechny environment variables nastaveny ve Vercel Dashboard
- [ ] Database schema migrován (`npx prisma migrate deploy`)
- [ ] Seed data pro demo (`npx prisma db seed`)
- [ ] Build úspěšně projde lokálně (`npm run build`)
- [ ] Lighthouse audit > 90

### Deployment steps
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Link project
vercel link

# 4. Deploy preview
vercel

# 5. Deploy production
vercel --prod
```

### Post-deployment
- [ ] Ověřit všechny stránky fungují
- [ ] Test objednávkového formuláře
- [ ] Test admin loginu
- [ ] Ověřit email notifikace
- [ ] Zkontrolovat analytics tracking
- [ ] Test na mobilních zařízeních

---

## 🎬 Demo Setup (Quick Start)

### Pro rychlou ukázku klientovi:

**1. Clone & Install**
```bash
git clone https://github.com/YOUR_REPO/detailing-web.git
cd detailing-web
npm install
```

**2. Setup Database (Vercel Postgres)**
```bash
# Propojit s Vercel projektem
vercel link
vercel env pull .env.local

# Migrovat databázi
npx prisma migrate deploy
npx prisma db seed
```

**3. Deploy na Vercel**
```bash
vercel --prod
```

**4. Demo přístupy**
```
Web:    https://your-project.vercel.app
Admin:  https://your-project.vercel.app/admin

Demo účet:
Email:    demo@detailing.cz
Heslo:    Demo123!
```

### Demo data obsahují:
- 5 ukázkových služeb s popisy a cenami
- 10 ukázkových objednávek v různých stavech
- 15 fotek do galerie (before/after)
- 3 testimonials
- Kompletní ceník

### Customizace pro klienta:
1. Změnit logo a brand colors v `tailwind.config.ts`
2. Upravit texty v `lib/content.ts`
3. Nahrát vlastní fotky do `/public/images`
4. Aktualizovat kontaktní údaje v `lib/config.ts`

---

## 💰 Rozpočet (odhad)

### Jednorázové náklady
| Položka | Cena |
|---------|------|
| UI/UX Design | 40 000 - 80 000 Kč |
| Frontend vývoj | 80 000 - 150 000 Kč |
| Backend vývoj | 50 000 - 100 000 Kč |
| Testování & QA | 15 000 - 30 000 Kč |
| **Celkem** | **185 000 - 360 000 Kč** |

### Měsíční provozní náklady (Vercel)

**Demo/Development (Free tier):**
| Položka | Cena/měsíc |
|---------|------------|
| Vercel Hobby | 0 Kč |
| Vercel Postgres (512 MB) | 0 Kč |
| Vercel Blob (1 GB) | 0 Kč |
| **Celkem** | **0 Kč** |

*Free tier limity: 100 GB bandwidth, 10s function execution, 1 concurrent build*

**Produkce (Pro plan):**
| Položka | Cena/měsíc |
|---------|------------|
| Vercel Pro | ~500 Kč ($20) |
| Vercel Postgres (8 GB) | ~600 Kč ($25) |
| Vercel Blob (100 GB) | ~500 Kč ($20) |
| Resend (email) | 0 Kč (free tier 3000/měsíc) |
| Doména | ~100 Kč |
| **Celkem** | **~1 700 Kč** |

### Vercel Pro výhody pro produkci:
- ✅ Preview deployments pro každý PR
- ✅ Automatické HTTPS
- ✅ Edge Functions
- ✅ Analytics included
- ✅ 1TB bandwidth
- ✅ 24/7 support
- ✅ Password protection pro preview

---

## ⚠️ Rizika a mitigace

| Riziko | Pravděpodobnost | Dopad | Mitigace |
|--------|-----------------|-------|----------|
| Zpoždění vývoje | Střední | Vysoký | Agile přístup, MVP first |
| Nízká konverze | Střední | Vysoký | A/B testování, UX optimalizace |
| Performance problémy | Nízká | Střední | Early performance testing |
| Bezpečnostní incident | Nízká | Vysoký | Security audit, best practices |

---

## 📎 Přílohy

### A. Wireframes
*[Link na Figma/sketch soubory]*

### B. Konkurenční analýza
*[Analýza 3-5 konkurenčních webů]*

### C. User flows
*[Diagramy uživatelských cest]*

### D. API dokumentace
*[Swagger/OpenAPI specifikace]*

---

## ✅ Sign-off

| Role | Jméno | Datum | Podpis |
|------|-------|-------|--------|
| Product Owner | | | |
| Tech Lead | | | |
| Designer | | | |
| Stakeholder | | | |

---

*Dokument vytvořen: Leden 2026*  
*Poslední aktualizace: [datum]*
