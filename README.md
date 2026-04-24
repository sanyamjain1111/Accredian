# Accredian Enterprise — Marketing Website

> A high-performance, fully responsive enterprise marketing website built with **Next.js 16 App Router**, **Tailwind CSS v4**, and **React 19**. Deployed on Vercel with a built-in lead-capture API, WCAG-compliant accessibility, and production-grade SEO.

[![Build](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](#)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](#)

---

## Table of Contents

1. [Live Demo](#live-demo)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Deployment — Vercel](#deployment--vercel)
8. [API Reference](#api-reference)
9. [Architecture Decisions](#architecture-decisions)
10. [Performance & Accessibility](#performance--accessibility)

---

## Live Demo

| Environment | URL |
|---|---|
| Production | https://accredian-gilt.vercel.app |
| Vercel Preview | Automatically created for every push to a non-main branch |

---

## Features

### Marketing Sections (in page order)
| Section | Description |
|---|---|
| **Hero** | Full-bleed split layout with animated floating stat cards and trust logos |
| **Stats** | Animated count-up stat cards triggered on scroll |
| **Partners** | Infinite-scroll logo marquee with smooth fade edges |
| **Audience** | "Who It's For" 4-card grid for different professional personas |
| **Feature Cards** | 8 capability cards + 6 benefit cards with staggered reveal |
| **Platform Capabilities** | Alternating text / visual rows with animated progress bars |
| **Accredian Edge** | Differentiator cards in a dark gradient section |
| **Domain Expertise** | Icon grid of program domains |
| **Course Segmentation** | WCAG tab interface — 4 segmentation dimensions with imagery |
| **Strategic Skill** | 4-column professional persona cards |
| **How We Deliver** | Step-by-step delivery model |
| **Testimonials** | Auto-advancing carousel (6s) with compact selector cards |
| **FAQ** | Grouped accordion with WCAG 1.3.1-compliant markup |
| **Contact** | Lead capture form + info panel with stats and trust checklist |

### Technical Features
- **Lead Capture API** — POST `/api/leads` with server-side validation, HTML sanitisation, and in-memory rate limiting (5 req/60 s per IP)
- **Smooth Scroll** — Animated section navigation from Navbar and CTA buttons
- **Scroll Reveal** — Intersection Observer-based entrance animations (`ScrollReveal` wrapper)
- **Scroll Progress** — Gradient progress bar fixed at the top of the viewport
- **Back to Top** — Floating button with opacity/transform transition
- **Organisation JSON-LD** — Structured data for rich search results
- **Skip Navigation** — Keyboard-accessible "Skip to main content" link
- **Open Graph / Twitter Card** — Full social sharing meta tags

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (`@theme` block, no config file) |
| UI Components | Custom component library (no external UI library) |
| Icons | lucide-react |
| Utilities | clsx + tailwind-merge via `cn()` |
| Fonts | Inter + Plus Jakarta Sans via `next/font/google` |
| Images | `next/image` with AVIF/WebP, lazy loading, 30-day CDN TTL |
| Animations | CSS keyframes (defined in `globals.css`) + Intersection Observer |
| Deployment | Vercel (region: `bom1` — Mumbai) |
| API | Next.js Route Handlers (serverless functions) |

---

## Project Structure

```
accredian-enterprise/
├── public/                         # Static assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── leads/
│   │   │       └── route.ts        # POST /api/leads — lead capture endpoint
│   │   ├── globals.css             # Tailwind v4 @theme tokens + animation library
│   │   ├── layout.tsx              # Root layout — SEO metadata, JSON-LD, fonts
│   │   └── page.tsx                # Page composition (all sections)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav with scroll shrink + active tracking
│   │   │   └── Footer.tsx          # Multi-column footer with newsletter signup
│   │   ├── sections/               # One file per page section
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── AudienceSection.tsx
│   │   │   ├── FeatureCards.tsx
│   │   │   ├── PlatformCapabilities.tsx
│   │   │   ├── AccredianEdge.tsx
│   │   │   ├── DomainExpertise.tsx
│   │   │   ├── CourseSegmentation.tsx
│   │   │   ├── StrategicSkill.tsx
│   │   │   ├── HowWeDeliver.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/                     # Reusable primitive components
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── BenefitCard.tsx
│   │       ├── DomainCard.tsx
│   │       ├── FeatureCard.tsx
│   │       ├── LeadCaptureForm.tsx  # Controlled form with validation + API integration
│   │       ├── ScrollProgress.tsx   # Fixed top gradient progress bar
│   │       ├── ScrollReveal.tsx     # Scroll-triggered entrance animation wrapper
│   │       ├── BackToTop.tsx        # Floating back-to-top button
│   │       ├── SectionHeader.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── StatCard.tsx
│   │       └── TestimonialCard.tsx
│   ├── hooks/
│   │   ├── useCountUp.ts           # RAF-based animated counter with easeOutQuart
│   │   └── useIntersectionObserver.ts
│   └── lib/
│       ├── utils.ts                # cn() helper (clsx + tailwind-merge)
│       └── validations.ts          # Shared form validation (client + server)
├── .env.example                    # Environment variable template
├── next.config.ts                  # Image optimisation, security headers, compression
├── vercel.json                     # Vercel deployment configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sanyamjain1111/Accredian.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Copy environment variables template
cp .env.example .env.local
# Edit .env.local and fill in any values you need locally

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | ESLint across all source files |
| `npm run type-check` | TypeScript compiler check (no emit) |
| `npm run check` | Run both `type-check` and `lint` together |

---

## Environment Variables

Copy `.env.example` to `.env.local` and configure the variables you need:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL for OG tags and sitemap |
| `SUPABASE_URL` | Optional | Supabase project URL (Option A for lead storage) |
| `SUPABASE_SERVICE_ROLE_KEY` | Optional | Supabase service role key |
| `DATABASE_URL` | Optional | Postgres connection string (Option B via Prisma) |
| `RESEND_API_KEY` | Optional | Resend API key for email-based lead delivery |
| `RESEND_FROM` | Optional | Sender address for lead notification emails |
| `RESEND_TO` | Optional | Recipient address for lead notifications |
| `HUBSPOT_ACCESS_TOKEN` | Optional | HubSpot private app token |
| `UPSTASH_REDIS_REST_URL` | Optional | Upstash Redis URL (production rate limiting) |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | Upstash Redis token |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 measurement ID |

> The app works fully without any env vars — leads are logged to the server console and the in-memory rate limiter is active.

---

## Deployment — Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sanyamjain1111/Accredian)

### Manual deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Vercel dashboard configuration

1. **Import** your Git repository at [vercel.com/new](https://vercel.com/new)
2. **Framework Preset** — Next.js (auto-detected)
3. **Root Directory** — `accredian-enterprise` (if the project is in a subdirectory)
4. **Environment Variables** — Add variables from `.env.example` that you need
5. **Deploy**

The `vercel.json` in this repo automatically configures:
- **Region** — `bom1` (Mumbai) for low-latency India traffic
- **Security headers** — HSTS, CSP helpers, X-Frame-Options, Referrer-Policy
- **Cache headers** — Static assets cached for 1 year (immutable); API routes explicitly no-cached
- **Redirect** — `/home` → `/` (permanent)

### Connecting a custom domain

In the Vercel dashboard: **Project → Settings → Domains → Add**

Set your DNS:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

---

## API Reference

### `POST /api/leads`

Captures a lead enquiry from the contact form.

**Request body (JSON)**

```json
{
  "name":     "Arjun Mehta",
  "email":    "arjun@company.com",
  "company":  "Acme Corp",
  "phone":    "+91 98765 43210",
  "teamSize": "201–500",
  "interest": "Gen-AI Mastery",
  "message":  "Optional free-text message."
}
```

| Field | Type | Required | Constraints |
|---|---|---|---|
| `name` | string | ✅ | 2–100 characters |
| `email` | string | ✅ | Valid email format |
| `company` | string | ✅ | 1–150 characters |
| `phone` | string | — | E.164-ish format, optional |
| `teamSize` | string | ✅ | One of: `1–50`, `51–200`, `201–500`, `500+` |
| `interest` | string | ✅ | One of 8 defined program areas |
| `message` | string | — | Max 1000 characters, optional |

**Responses**

| Status | Body | Meaning |
|---|---|---|
| `201` | `{ success: true, message: "...", id: "lead_..." }` | Lead stored |
| `400` | `{ success: false, message: "...", errors: { field: "msg" } }` | Validation failed |
| `429` | `{ success: false, message: "Too many requests..." }` | Rate limit hit |
| `500` | `{ success: false, message: "Internal server error." }` | Unexpected error |

**Rate limiting** — 5 requests per IP per 60 seconds (in-memory). Replace with Upstash Redis for production at scale.

**Swapping lead storage** — In `src/app/api/leads/route.ts`, find the comment block labelled `Persist the lead` and replace the `console.log` with your preferred integration (Prisma, Supabase, Resend, HubSpot).

---

## Architecture Decisions

### Tailwind CSS v4 — `@theme` block
Tailwind v4 is configured entirely via CSS custom properties in `src/app/globals.css` using the `@theme` block. There is no `tailwind.config.js` file. Custom design tokens (colors, shadows, fonts) are defined there and consumed as standard Tailwind utilities.

### No external UI library
All UI components are purpose-built in `src/components/ui/`. This keeps the bundle lean, gives full styling control, and avoids version-lock to a third-party component library.

### Shared client/server validation
`src/lib/validations.ts` exports `validateLeadForm()` which is called in both the React form component (client-side, on blur and submit) and the API route handler (server-side). This eliminates duplication while ensuring the server can never be bypassed.

### Inline SVG for brand icons
`lucide-react` does not ship social brand icons (Facebook, LinkedIn, Twitter, etc.). Rather than adding a separate icon package, the Footer uses lightweight inline SVG functions, keeping the dependency count low.

### `output: "standalone"` in next.config.ts
Produces a self-contained `.next/standalone` folder with only the Node.js files needed at runtime — ideal for Docker/container deployments where you want the smallest possible image. Vercel ignores this setting and uses its own optimised output pipeline.

---

## Performance & Accessibility

### Lighthouse targets

| Metric | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | 100 |
| SEO | 100 |

### Image optimisation
- All images use `next/image` with `priority` only on the above-the-fold hero image
- AVIF and WebP formats served automatically based on browser support
- 30-day CDN TTL (`minimumCacheTTL`) for all optimised images
- `sizes` prop set on every `fill`-mode image to prevent oversized downloads

### Accessibility
- **Skip navigation** link for keyboard users (`#main-content`)
- **ARIA roles** — `tablist/tab/tabpanel` in CourseSegmentation, `region/aria-live` in Testimonials carousel, `aria-expanded/aria-controls` in FAQ accordion
- **`aria-current`** on active Navbar links
- **`aria-hidden`** on decorative icons and duplicate marquee items
- Heading hierarchy: one `<h1>` per page; sections use `<h2>` headings via `SectionHeader`; cards use `<h3>`

### Security
- All user input in the API route is HTML-tag-stripped before validation
- Security headers set at both Next.js (`next.config.ts`) and Vercel (`vercel.json`) layers: HSTS, X-Frame-Options DENY, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- `poweredByHeader: false` removes the `X-Powered-By: Next.js` fingerprinting header

