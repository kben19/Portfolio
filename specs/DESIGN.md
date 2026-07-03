# DESIGN.md — Kelvin Benzali Portfolio

Design and front-end architecture specification for **kelvinbenzali.com**, the personal
portfolio of Kelvin Benzali (Senior Software Engineer, Tokopedia / ByteDance).

This document describes the site **as built** in this repository, and cross-references
[`./design-system`](design-system/) — the Claude Design handover — as the canonical design
intent. Where the shipped code drifts from that intent, it is flagged with **⚠ Drift**.

> `./design-system` is a **handover artifact, not shipped code.** Its tokens and UI kit are
> the source of truth for *intent*; the Tailwind classes in `components/` are the *implementation*.

---

## 1. Product overview

A one-person personal brand with a deliberately small surface:

| Route | Type | Purpose |
| --- | --- | --- |
| `/` | Public, async RSC | Hero → About (+ live analytics) → Work → Contact → Footer |
| `/project` | Public, async RSC | Vertical timeline of major projects (2019–2025) |
| `/login` | Client | Supabase email/password + Google/GitHub OAuth — **bare, unbranded** |
| `/private` | RSC (guarded) | Authenticated landing; redirects to `/login` if signed out |
| `/auth/callback`, `/auth/signout`, `/api/session` | Route handlers | OAuth exchange, signout, session-cookie priming |

**Voice:** first person, understated, competence-first. Kelvin states what he *did* and what it
*achieved* — backed by specific numbers ("~20% infrastructure cost", "40–50% faster regression
tests"), never superlatives. Sentence case everywhere; the only all-caps is the 12px
`uppercase tracking-wider` date chip on timeline cards. No decorative emoji (country-flag emoji in
the analytics Countries tab are functional, derived from ISO codes). The footer is an
engineer-to-engineer colophon crediting the actual build tools.

---

## 2. Tech stack & architecture

### 2.1 Stack

- **Next.js 14.2 App Router** — React Server Components by default.
- **TypeScript 5.5**, `strict: true`, `moduleResolution: "bundler"`, path style is relative imports (no `@/` alias configured).
- **Tailwind CSS 3.4** — utility-first; content globs cover `app/` and `components/`.
- **Plus Jakarta Sans** via `next/font/google` (weights 400/500/600/700), exposed as `--font-jakarta`.
- **Supabase** (`@supabase/ssr`) — traffic analytics + auth.
- **GSAP** — used in exactly one place (the hero typewriter cursor blink / timing in `TextType`).
- **Vercel Analytics + Speed Insights** mounted in the root layout.

### 2.2 Rendering model

Server-first. The two content pages are `async` server components that `await insertEvent(path)`
(fire-and-forget analytics) and, for the home page, `await` Supabase RPCs for the About dashboard.

`'use client'` is used only where the browser is genuinely required:

| Client component | Why it's a client |
| --- | --- |
| `components/MiniDashboard.tsx` | Tab state (`useState`), `useMemo` totals |
| `components/TextType.tsx` | GSAP, `useEffect`, `IntersectionObserver` |
| `components/InitSession.tsx` | `useEffect` fetch to prime the session cookie |
| `app/login/page.tsx` | Form state + Supabase browser client |

**Rule:** keep client components leaf-level and small. Data fetching stays in server components;
pass plain serializable props down to client leaves (see `AboutSection` → `MiniDashboardTabs`).

### 2.3 Data & analytics flow

```
request → middleware.ts (sets httpOnly `sid` cookie, injects x-session-id header)
        → RSC page renders → insertEvent(path)
             → reads headers (country, UA, referrer, IP), hashes IP (sha256),
               detects OS/browser, filters bots + non-navigations + localhost,
               inserts a row into Supabase `traffic_events`
        → AboutSection runs 9 Supabase RPCs in Promise.all
             (page views, unique visitors, by country/device/browser/os/referrer)
        → MiniDashboardTabs renders metric cards + ranked bar lists
```

- `utils/supabase/` provides three client factories: `server.ts` (RSC, cookie-read-only),
  `client.ts` (browser), `route.ts` (route handlers).
- `utils/lib/` holds pure helpers: `event.ts` (insert), `req.ts` (header readers), `country.ts`
  (ISO→name via `Intl.DisplayNames`), `user-agent.ts` (OS/browser detection), `encode.ts`
  (sha256), `date.ts`, `icon.tsx` (`getTechIcon` tech→glyph map).
- **Analytics is skipped on localhost / non-production** — the dashboard renders empty locally by design.

### 2.4 Auth

Supabase auth with email/password + Google/GitHub OAuth. `/private` is a server-guarded page
(`supabase.auth.getUser()` → `redirect('/login')`). These utility pages use bare unstyled form
elements and are **intentionally excluded from the design system** — they carry no branding.

---

## 3. Visual design system

Palette is **stock Tailwind** (gray / slate / emerald / sky / rose) leaned on hard via
scale/weight contrast rather than a bespoke palette. Full token definitions live in
[`design-system/project/tokens/`](design-system/project/tokens/).

### 3.1 Color

| Role | Value | Usage in code |
| --- | --- | --- |
| **Accent (the real one)** | emerald `#10b981` / `#34d399` | employer highlight in hero, social-link + footer hover, project "Impact" line, "good" delta chip |
| Page base | white `#ffffff` | body background |
| Text primary / secondary / muted / faint | gray `900 / 700 / 500 / 400` | body copy hierarchy |
| Dark panel | slate-800 `#1e293b` | Contact left panel |
| Deep navy (bespoke, one-off) | `#0f1b2a` | About/dashboard section background only |
| Footer bar | gray-50 with top border | footer |
| Work card tint A | emerald-100 `#d1fae5` | Tokopedia card |
| Work card tint B | sky-100 `#e0f2fe` | ByteDance card |
| Rose | `#fb7185` (rose-400) | bolded impact words inside the About paragraph only |
| Bad delta | rose-100 / rose-700 | negative metric chip |

**⚠ Drift — the accent color.** `tailwind.config.js` declares `brand: { DEFAULT: "#0ea5e9", dark: "#0284c7" }`
(sky-blue) and `globals.css` sets `--bg` / `--fg` custom vars — **none are actually used by any
component.** Emerald is the true accent. Do not treat `brand` as the accent; prefer emerald utilities.

**⚠ Drift — blue on the project page.** `app/project/page.tsx` uses `blue-500` / `blue-600`
(timeline node hover) and `blue-100` (tech badge background), which are **not** part of the emerald
system documented in the handover. Treat these as inconsistencies to reconcile toward emerald/slate,
not as an intended secondary accent.

### 3.2 Typography

- **One typeface**, Plus Jakarta Sans. No serif, no mono anywhere.
- Weights: 400/500/600/700, plus `font-extrabold` (800) on the billboard section dividers.
- Scale is used for **contrast, not subtlety**:
  - Hero `h1` → `text-4xl … lg:text-7xl` (72px).
  - Section billboard dividers ("Work.", "Say hi.") → fluid `text-[14vw] sm:text-[12vw] md:text-[10vw]` (150px+).
  - About `h2` → up to `lg:text-6xl`.
  - Body → `text-base`; About paragraph steps to `lg:text-xl`.
  - Micro-labels / badges → `text-xs` (12px).
- `tracking-tight` (−0.02em) on every large heading. `leading-tight` on the hero, `leading-relaxed` on prose.

### 3.3 Spacing & layout

- Section rhythm: `py-20` → `md:py-32` (5–8rem). Airy, made to be read, not scanned.
- **Fluid container** `.container-max` (in `globals.css`): `clamp(72rem, 86vw, 110rem)` with `px-6` —
  widens on large monitors up to ~1760px rather than snapping at a fixed breakpoint.
- **Full-bleed breakouts:** the Work grid and Contact section deliberately span edge-to-edge; everything else respects `.container-max`.
- The `/project` page uses its own narrower `max-w-6xl` main with a sticky year rail.

### 3.4 Radii, borders, shadows

- **Two radii cover everything:** `rounded-2xl` (16px, cards/photos/buttons) and `rounded-full` (pills, dots, bar tracks). No 4–8px radii.
- **Borders are hairline, structural, never a colored accent** — `border` (gray-200) on hero photo + Button; translucent `border-slate-500/15` on frosted timeline cards.
- **Shadows are sparse** — `hover:shadow` on Button; the timeline card is the one "designed" shadow (`shadow-lg` + black-tinted `--tw-shadow-color` + `backdrop-blur` frosted glass). No neumorphism, no colored glows (except the tiny white text-shadow on the WorkCard reveal bar).

### 3.5 Motion & interaction

- **Subtle, purposeful, never ambient.** Hero typewriter (`TextType`, GSAP-timed). Everything else uses `transition duration-300` position/scale deltas — no bounce, spring, or elastic easing.
- **Three consistent hover patterns:**
  1. Color shift toward emerald (`text-gray-400 → text-emerald-400`).
  2. Scale-up (social icons ~1.1×, WorkCard icon/logo 1.15×).
  3. Reveal (WorkCard "View Project" bar slides up from `translate-y-full`).
- **Press/active states are not styled** in source — keep them minimal if added.
- **Two card languages:** light WorkCard panels have *no* border/shadow (color block only); dark timeline/dashboard cards use translucent fills + hairline slate border (+ blur on timeline). Never a white card with a colored left border — that motif does not exist here.
- **Blur/transparency used exactly twice:** the frosted timeline card, and the dashboard's `bg-white/5–/15` panels on the dark About section. Not a generic "trendy glass" effect.

### 3.6 Backgrounds & imagery

- Flat color fields — **no gradients, no textures/patterns.**
- Two full-bleed photographs (hero desk photo untouched; Contact portrait boosted `brightness-110 contrast-110 saturate-110`). One inline SVG illustration (sandbox diagram). Warm, natural, no filters/B&W/grain.
- Employer logos (Tokopedia, ByteDance) are content assets in the Work section, not brand marks.

### 3.7 Iconography

- **UI glyphs → Lucide** (`lucide-react`), consistently `h-4 w-4` (16px) or `h-3 w-3` in tech pills, tinted via `currentColor`.
- **Brand/wordmark glyphs → Simple Icons** (`react-icons/si`, plus a few `/fa`, `/bi`) — GitHub, LinkedIn, Medium, X, Instagram, Supabase, and the browser/OS/referrer marks in the dashboard.
- `utils/lib/icon.tsx` maps tech-stack strings → glyphs (`getTechIcon`); `MiniDashboard.tsx` holds the browser/OS/referrer icon maps.
- **No icon font, no PNG icon sprites, no hand-drawn icons.** Functional country-flag emoji only.

### 3.8 Brand mark

**There is no logo.** Identity is the "Kelvin Benzali" wordmark in the hero. The only graphic
identifier is the favicon: a "KB" monogram (white on black→navy diagonal gradient). Use it as a
tab icon only — never promote it to an in-page logo lockup.

---

## 4. Component inventory

Real components live in `components/*.tsx` (flat, not foldered). The design-system handover
decomposes these into a foldered primitive library (`core/`, `navigation/`, `cards/`, `data/`) —
that structure is **reference**, the flat files are what ships.

| Component | Kind | Notes |
| --- | --- | --- |
| `Header.tsx` | Server | Right-aligned nav links, no logo, **not sticky** (scrolls away). Props: `links[]`. |
| `SocialLink.tsx` (`SocialLinks`) | Server | Gray→emerald icon row, scale-110 hover, opens in new tab. |
| `WorkCard.tsx` | Server | Full-bleed tinted panel, centered logo/icon, hover reveal-bar linking to the project. Props: `href, title, titleLogo, subtitle, bgClass, icon, spriteSrc`. |
| `About.tsx` (`AboutSection`) | **Async server** | Deep-navy section; fetches 9 Supabase RPCs; renders prose + `MiniDashboardTabs`. |
| `MiniDashboard.tsx` (`MiniDashboardTabs`) | **Client** | Tabbed analytics widget (Visitors/Countries/Devices/Browsers/OS/Referrers) with `MetricCard` + `BarRow` sub-components. |
| `Contact.tsx` (`ContactSection`) | Server | "Say hi." billboard, slate-800 panel with mailto + socials, boosted portrait. |
| `TextType.tsx` | **Client** | Reusable GSAP typewriter; hero uses `loop={false}`. |
| `Button.tsx` | Server | The one button treatment: `rounded-2xl border px-4 py-2 hover:shadow`. Currently unused on the public pages. |
| `InitSession.tsx` | **Client** | Fires a `/api/session` fetch on mount to prime the session cookie. |

`app/project/page.tsx` additionally defines local `BranchCard` / `YearHeader` components inline
(frosted timeline cards + date chip) — the handover models these as a standalone `ProjectTimelineCard`.

---

## 5. Assets

- `public/` — shipped assets: hero/contact photos, employer logos, project media (`public/projects/`), favicons, `manifest.json`.
- `design-system/project/assets/` — the handover's copy of the same photography/illustrations plus the KB monogram and unused LuminNovel cover art (not in the product).

---

## 6. Handover → code mapping (quick reference)

| Handover artifact | Maps to |
| --- | --- |
| `tokens/colors.css` | `tailwind.config.js` + inline Tailwind color utilities |
| `tokens/typography.css` | `next/font/google` Plus Jakarta Sans + `text-*` utilities |
| `tokens/spacing.css` | Tailwind spacing utilities + `.container-max` in `globals.css` |
| `components/core/*`, `cards/*`, `data/*` | flat `components/*.tsx` (decomposed for reference) |
| `ui_kits/portfolio/*` | static recreation of `/` and `/project` — not imported |
| `guidelines/*.card.html` | specimen cards documenting the rules in §3 |

### Known drift to reconcile
1. `brand` sky-blue color + `--bg`/`--fg` CSS vars are declared but **never used**; emerald is the accent.
2. `app/project/page.tsx` uses `blue-*` (nodes, tech badges) instead of the emerald/slate system.
3. Components are flat in code vs foldered in the handover — cosmetic, not a bug.

When in doubt on visual questions, follow the handover tokens/guidelines and steer new code
**toward** emerald/slate consistency, not toward the existing blue drift.
