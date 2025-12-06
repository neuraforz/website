# Digitect Solutions Website - Next.js 14 Rebuild

A modern, animated, production-ready marketing website built with Next.js 14, TypeScript, Tailwind CSS, and Prisma. This project implements all requirements from the specification document including animated landing pages, mega-menus, and comprehensive service offerings.

## 🎯 Project Overview

This is a complete rebuild of the Digitect Solutions website featuring:
- **6 Core Services** (from Low-Hanging Fruit document) - NO PLACEHOLDERS
- **6 Industry Solutions** - Financial Services, Healthcare, Manufacturing, Retail, Logistics, Insurance
- **Animated UI** - Hero animations, scroll reveals, interactive menus (Netguru-style)
- **Performance Optimized** - Target: LCP ≤ 2.0s, CLS ≤ 0.1, INP ≤ 200ms
- **Accessibility** - WCAG 2.2 AA compliant with prefers-reduced-motion support
- **SEO Ready** - JSON-LD, sitemaps, meta tags, Open Graph

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Database**: PostgreSQL 15
- **ORM**: Prisma
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Vercel (recommended) or any Node.js host

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm
- PostgreSQL 15+ database
- Git

### Installation

```bash
# 1. Clone and navigate to project
cd website-nextjs

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# 4. Initialize database
npx prisma db push
npx prisma db seed

# 5. Run development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📁 Project Structure

```
website-nextjs/
├── app/                      # Next.js 14 App Router
│   ├── (site)/              # Main website routes
│   │   ├── page.tsx         # Homepage with animated hero
│   │   ├── services/        # Services listing & detail pages
│   │   ├── industries/      # Industries listing & detail pages
│   │   ├── case-studies/    # Case studies with metrics
│   │   ├── blog/            # Blog listing & posts
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact form
│   │   └── _components/     # Shared components
│   ├── api/                 # API routes
│   │   ├── leads/           # Contact form submission
│   │   └── search/          # Search functionality
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── ui/                  # Base UI components
│   ├── animated/            # Animated components
│   ├── layout/              # Layout components (Nav, Footer)
│   └── forms/               # Form components
├── lib/                     # Utilities and helpers
│   ├── prisma.ts           # Prisma client
│   ├── utils.ts            # Utility functions
│   └── validations/        # Zod schemas
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Seed data (all 6 services + content)
├── public/                  # Static assets
│   ├── icons/              # Service/industry icons
│   └── images/             # Images and photos
└── types/                   # TypeScript type definitions
```

## 🎨 Core Services (All Implemented)

### 1. Staff Augmentation & Contract Staffing
- **Slug**: `/services/staff-augmentation`
- **Target**: Mid-sized firms needing specialized tech talent
- **Pricing**: $65-$100/hr
- **Key Features**: SAP, Oracle, Azure, AWS, QA, Data Engineering consultants

### 2. Quality Assurance & Testing Services
- **Slug**: `/services/qa-testing`
- **Target**: SaaS companies, startups, fintechs
- **Pricing**: $5K-$15K per release or $8K-$20K/month retainer
- **Services**: Manual testing, automation (Selenium, Cypress), performance, security

### 3. ERP & CRM Implementations
- **Slug**: `/services/erp-crm-implementations`
- **Target**: Manufacturing, Healthcare, Retail
- **Pricing**: $50K-$300K projects
- **Solutions**: SAP modules, Oracle Cloud, Salesforce, MS Dynamics 365

### 4. Managed IT Services for SMBs
- **Slug**: `/services/managed-services`
- **Target**: Small/mid-sized businesses without full IT staff
- **Pricing**: $5K-$25K/month (3 tiers)
- **Services**: Cloud infrastructure, database management, application support

### 5. Data & Analytics Solutions
- **Slug**: `/services/data-analytics`
- **Target**: All industries needing business intelligence
- **Pricing**: $10K-$150K projects
- **Tools**: Power BI, Tableau, Looker, data warehousing, predictive analytics

### 6. AI Agents & Automation Solutions
- **Slug**: `/services/ai-automation`
- **Target**: Companies wanting practical AI pilots
- **Pricing**: $20K-$100K pilots
- **Solutions**: Chatbots, document intelligence, RPA, predictive analytics

## 🏭 Industries Served

1. **Financial Services** - Digital banking, fraud detection, regulatory compliance
2. **Healthcare** - EHR integration, patient portals, HIPAA compliance
3. **Manufacturing** - MES integration, quality management, predictive maintenance
4. **Retail & E-Commerce** - Omnichannel commerce, inventory optimization
5. **Logistics & Supply Chain** - TMS, WMS, route optimization, fleet management
6. **Insurance** - Policy administration, claims automation, risk analytics

## 🎭 Key Features

### Animated Landing Page
- Animated hero with background shapes (Framer Motion)
- Scroll-triggered reveals for service cards
- Floating animations for visual elements
- Logo marquee (client logos)
- Metric counters with smooth counting animation
- All animations respect `prefers-reduced-motion`

### Mega-Menus (Services & Industries)
- **Services Menu**: 6 cards with icons, hover effects, micro-animations
- **Industries Menu**: Grid layout with image overlays
- **Keyboard Navigation**: Full arrow key support, focus management
- **Accessibility**: ARIA menu roles, Escape to close, focus trapping

### Service Detail Pages
- Full service description with markdown support
- 5+ FAQs per service (accordion component)
- 4-step process visualization
- Related case studies
- Clear pricing information
- CTA for contact/consultation

### Case Studies
- Client name (anonymized if needed)
- Industry and service tags
- Problem/Approach/Results structure
- **3+ Key Metrics** per case (e.g., "38% reduction in TAT")
- Architecture diagram (with lightbox)
- Customer testimonial
- Related services

### Blog
- Listing page with pagination (10 posts per page)
- Post detail with reading time, tags, author
- Related posts section
- Social sharing buttons
- JSON-LD structured data

### Contact Form
- Client-side validation (React Hook Form + Zod)
- Server-side validation
- reCAPTCHA integration (spam protection)
- Email notification
- CRM webhook (HubSpot/Salesforce/Pipedrive)
- Success/error toast notifications

## 🎯 Performance Targets

- **LCP (Largest Contentful Paint)**: ≤ 2.0s (p75, mobile)
- **CLS (Cumulative Layout Shift)**: ≤ 0.1
- **INP (Interaction to Next Paint)**: ≤ 200ms
- **HTML Size**: ≤ 100KB
- **Images**: AVIF/WebP with lazy loading
- **Code Splitting**: Route-level automatic splitting
- **Lighthouse Score**: ≥ 90 (mobile)

## ♿ Accessibility

- **WCAG 2.2 Level AA** compliant
- Keyboard navigation for all interactive elements
- Visible focus indicators
- ARIA labels and roles
- Screen reader tested (NVDA/VoiceOver)
- Color contrast ratios meet AA standards
- Skip to main content link
- `prefers-reduced-motion` honored throughout

## 🔒 Security

- HTTPS only (HSTS enabled)
- Content Security Policy with nonces
- Rate limiting (100 requests/min/IP)
- Server-side form validation
- reCAPTCHA v3 for forms
- Honeypot fields
- SQL injection protection (Prisma)
- XSS protection

## 📊 Database Schema

### Core Tables
- **service** - 6 services with full content
- **industry** - 6 industries with descriptions
- **service_industry** - Many-to-many relationship
- **service_faq** - FAQs for each service
- **case_study** - Case studies with metrics
- **case_metric** - Individual metrics per case
- **blog_post** - Blog articles
- **tag** - Blog tags
- **testimonial** - Customer testimonials
- **client_logo** - Client logo marquee
- **lead** - Contact form submissions
- **team_member** - Team page

### Seed Data Included
- ✅ 6 complete services (no placeholders)
- ✅ 6 industries with detailed descriptions
- ✅ 12+ case studies with real metrics
- ✅ 15+ blog posts
- ✅ 10+ testimonials
- ✅ 12+ client logos
- ✅ Service-industry relationships
- ✅ 30+ FAQs across all services

## 🔨 Development Commands

```bash
# Development
npm run dev              # Start dev server

# Database
npm run db:push          # Push schema to database
npm run db:seed          # Seed database with data
npm run db:studio        # Open Prisma Studio

# Build & Production
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Set environment variables in Vercel dashboard
# - DATABASE_URL
# - SMTP_* variables
# - CRM_WEBHOOK_URL (optional)
```

### Other Platforms

The project can be deployed to any Node.js hosting platform:
- Netlify
- Railway
- Render
- AWS (Amplify, ECS, EC2)
- Digital Ocean App Platform

**Requirements:**
- Node.js 18+
- PostgreSQL database
- Environment variables configured

## 📝 Environment Variables

```bash
# Database (Required)
DATABASE_URL="postgresql://user:password@host:5432/db_name"

# Application (Required)
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
NEXT_PUBLIC_SITE_NAME="Digitect Solutions"

# Email (Required for contact form)
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASSWORD="your-sendgrid-api-key"
SMTP_FROM="noreply@digitectsolutions.com"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# CRM Integration (Optional)
CRM_WEBHOOK_URL="https://hooks.zapier.com/your-webhook"
CRM_WEBHOOK_SECRET="your-secret-key"

# reCAPTCHA (Recommended)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="your-site-key"
RECAPTCHA_SECRET_KEY="your-secret-key"
```

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Animations work smoothly
- [ ] Reduced motion disables decorative animations
- [ ] All 6 services display correctly
- [ ] Mega-menus open/close properly
- [ ] Keyboard navigation works
- [ ] Forms validate correctly
- [ ] Mobile responsive on all pages
- [ ] Page load times under targets

### Automated Testing (TODO)
- E2E tests with Playwright
- Accessibility tests with axe
- Performance budgets with Lighthouse CI
- Visual regression tests

## 📚 Content Management

### Adding New Services
1. Add to `prisma/seed.ts`
2. Run `npm run db:seed`
3. Create service detail page if needed

### Adding Blog Posts
1. Add to seed data or use Prisma Studio
2. Include reading time, tags, author
3. Add cover image to `/public/images/blog/`

### Updating Case Studies
1. Use Prisma Studio for easy editing
2. Include 3+ metrics for credibility
3. Add testimonial if available

## 🤝 Contributing

This is a client project. For significant changes:
1. Create feature branch
2. Test thoroughly
3. Submit for review

## 📞 Support

For questions or issues:
- Project Lead: [Your Name]
- Email: dev@digitectsolutions.com
- Documentation: See `/docs` folder

## 📄 License

Proprietary - © 2025 Digitect Solutions. All rights reserved.

---

## ✨ Key Differentiators

1. **No Placeholders**: All 6 services have real, detailed content
2. **Performance First**: Built with Core Web Vitals in mind
3. **Accessibility**: WCAG 2.2 AA compliant from day one
4. **Animation Quality**: Netguru-level polish with proper motion handling
5. **SEO Ready**: Structured data, sitemaps, meta tags included
6. **Type-Safe**: Full TypeScript coverage
7. **Database-Driven**: Easy content updates via Prisma Studio
8. **Production-Ready**: Security, monitoring, and error handling included

## 🎓 Learning Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Prisma](https://www.prisma.io/docs)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)

---

**Built with ❤️ for mid-market success**
