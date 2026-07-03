# Kelvin Benzali — Portfolio Design System

Design system for **kelvinbenzali.com**, the personal portfolio site of Kelvin Benzali, a Senior Software Engineer at Tokopedia (ByteDance). This is a **Portfolio** company context — a single-person personal brand, not a multi-product company. There is one product surface: the portfolio website itself.

## Sources

This design system was built by reading the actual production source code, not screenshots:

- **GitHub repo:** [kben19/Portfolio](https://github.com/kben19/Portfolio) — Next.js 14 (App Router) + Tailwind CSS 3 + TypeScript site. Explore `app/` for pages, `components/` for the section components, `tailwind.config.js` for theme extensions.
- Live site referenced in the repo's own README: `www.kelvinbenzali.com`

If you have access to the repo, go read it directly for anything this system doesn't cover — in particular `components/About.tsx` and `components/MiniDashboard.tsx` pull live analytics from Supabase, which this static design system only mocks with sample numbers.

## What this covers

The site has exactly two content pages (`/` and `/project`) plus auth-only utility pages (`/login`, `/private`) that are functional, not branded — they use bare unstyled form elements and are intentionally excluded from the UI kit.

## Components

Grouped by directory under `components/`:

**Core** (`components/core/`)
- **Icon** — CDN glyph (lucide or brand) as a tintable `currentColor` mask
- **Button** — the app's one button treatment (rounded, bordered, quiet)
- **SocialLinks** — gray→emerald brand icon row
- **TextType** — typewriter effect used under the hero heading
- **TechBadge** — tech-stack pill with an auto-matched icon

**Navigation** (`components/navigation/`)
- **Header** — right-aligned nav links, no logo mark

**Cards** (`components/cards/`)
- **WorkCard** — full-bleed tinted panel with hover reveal-bar (the "Work" grid)
- **ProjectTimelineCard** — frosted project card for the `/project` vertical timeline

**Data** (`components/data/`)
- **MetricCard** — white stat tile with a delta chip
- **StatBarRow** — ranked bar-list row (countries/devices/browsers/referrers)
- **DashboardPanel** — dark glass analytics widget composing the two above

### Intentional additions
The source app has no formal component library — these are the real section components from `components/*.tsx`, decomposed into reusable primitives (e.g. `MiniDashboard.tsx` → `MetricCard` + `StatBarRow` + `DashboardPanel`). One addition beyond direct decomposition:
- **Icon** — the source imports pre-built icon components from `lucide-react` and `react-icons/si`. Since this design system can't take npm dependencies, `Icon` reproduces the same open-source glyphs from their CDN SVG output (recolored via CSS mask instead of the `currentColor` prop). Same glyphs, same visual result, zero npm.

Not ported: `InitSession.tsx` (analytics wiring, no visual output), `About.tsx` / `Contact.tsx` (full page sections — composed from primitives in the UI kit instead of treated as reusable primitives).

## UI Kit

`ui_kits/portfolio/` — an interactive recreation of the homepage and the `/project` timeline page, click-through between them via the header nav. See `ui_kits/portfolio/README.md`.

## Index

- `styles.css` — root stylesheet, imports every token file below
- `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css` — design tokens
- `components/` — reusable primitives (see above)
- `ui_kits/portfolio/` — full homepage + project-timeline recreation
- `guidelines/` — foundation specimen cards (Design System tab)
- `assets/brand/` — the KB monogram mark + favicons
- `assets/photos/` — hero/contact photography and project imagery
- `assets/illustrations/` — the two SVG illustrations used in the product
- `SKILL.md` — portable skill definition for use in Claude Code

---

## Content fundamentals

**Voice:** first person, understated, competence-first. Kelvin describes what he *did* and what it *achieved* — not aspirational brand language. The hero literally reads "Senior Software Engineer | Tokopedia" then his name, then a matter-of-fact scale claim: <em>"Building one of biggest Indonesia e-commerce industry for over 7 years. Specializing in scalable microservices serving millions of users."</em>

**Casing:** sentence case everywhere. No all-caps headings except tiny uppercase micro-labels (the year/month chip on timeline cards uses `uppercase tracking-wider` at 12px — the *only* all-caps text in the whole product).

**Pronouns:** "I" throughout About/Contact ("I love solving complex problems…", "I'm determined to be part of the movement…"). The site never addresses the reader as "you" — it's a CV in prose, not a pitch.

**Punctuation & tone markers:** confident but modest. Achievements are backed by specific numbers ("~20% infrastructure cost", "40–50% faster regression tests", "~30% increased coverage") rather than superlatives like "amazing" or "revolutionary". Section headers double as design flourishes: "Work." and "Say hi." — short, lowercase-after-period, almost curt, set at a huge fluid size (10–14vw) as full-bleed typographic dividers.

**Bold-as-emphasis:** inline `<strong>`/`<b>` calls out role titles and impact nouns ("**Senior Software Engineer**", "**meaningful impact**", "**enabler**", "**digital innovation**") — never whole sentences.

**Emoji:** none, except functional country-flag emoji in the analytics dashboard's Countries tab (🇮🇩, 🇺🇸 — rendered from ISO codes, not typed by hand). No decorative emoji anywhere else.

**Footer copy is a colophon**, not marketing filler: it names the actual tools used to build the site (Figma, IntelliJ IDEA, Next.js, Tailwind CSS, Vercel, Supabase, Plus Jakarta Sans) as a small credit line — a very engineer-to-engineer touch.

---

## Visual foundations

**Color:** a white base with one real accent — **emerald** (`#10b981` / `#34d399`) — used for the current-employer highlight in the hero, hover states on social links and footer credit words, and the "impact" line on each project card. **Slate** is the only dark surface color (Contact panel `#1e293b`, footer bar `#0f172a`). The About/dashboard section uses one bespoke deep navy (`#0f1b2a`) found nowhere else. Two pastel tints — emerald-100 and sky-100 — exist solely as the two Work-grid panel backgrounds, each project gets its own tint so the two cards never look identical. Rose (`#fb7185`) appears exactly once, on bolded words inside the About paragraph. `tailwind.config.js` declares a `brand` sky-blue color that is **never actually used** in any component — don't treat it as the real accent; emerald is.

**Type:** a single typeface, Plus Jakarta Sans, weights 400/500/600/700(/800 for the boldest headings), loaded once via `next/font/google`. There is no serif or mono anywhere in the product. Scale is used for contrast, not subtlety — hero name jumps straight to 72px (`text-7xl`) at desktop, and the "Work."/"Say hi." dividers are fluid `14vw`→`10vw` billboard type, easily 150px+. Tight letter-spacing (`tracking-tight`) on every large heading.

**Spacing:** generous, airy. Sections breathe at `py-20` to `py-32` (5–8rem). The page container is not a fixed breakpoint — it's `clamp(72rem, 86vw, 110rem)`, fluidly widening on large monitors up to ~1760px. No dense, compact UI anywhere; this is a portfolio meant to be read, not a dashboard meant to be scanned.

**Backgrounds:** flat color fields, no gradients, no repeating patterns or textures. Two full-bleed real photographs (hero desk photo, Contact studio portrait) are the only imagery-as-background usage. One SVG illustration (sandbox diagram) is used inline, not as a background. No hand-drawn illustration style — everything is photographic or iconographic.

**Animation:** subtle and purposeful, never decorative-only. A typewriter effect on the hero subhead (GSAP-timed in source). Hover states use `transition duration-300` — brief position deltas (icon scale to 1.15×, text nudges down 6px, reveal-bar slides up from `translateY(100%)`) — no bounce, no spring, no elastic easing. No looping/ambient animation on static content.

**Hover states:** three consistent patterns — (1) color shift toward emerald (`text-gray-400 → text-emerald-400`, credit words in footer), (2) scale-up (social icons 1.1×, WorkCard icon/logo 1.15×), (3) reveal (WorkCard's "View Project" bar slides from hidden to visible). No darkening/lightening-only hovers.

**Press/active states:** not explicitly styled anywhere in source — buttons rely on the browser default plus the same hover shadow; there is no distinct `:active` treatment (no shrink, no color punch). Keep press states minimal if you add them.

**Borders:** hairline, low-contrast — plain `border` (gray-200) on the hero photo frame and Button; `border-slate-500/15` (a translucent slate, not a flat gray) on the frosted timeline cards. Borders are structural, never a colored accent border.

**Shadows:** used sparingly. `hover:shadow` (soft, default Tailwind) on Button only. The timeline card uses a custom heavier `shadow-lg` with a black-tinted shadow color plus `backdrop-blur` for a frosted-glass look — the single most "designed" shadow moment in the product. No neumorphism, no colored glows except the tiny white text-shadow on the WorkCard reveal-bar hover.

**Corner radii:** two sizes cover everything — `rounded-2xl` (16px, ~1rem) for cards/photos/buttons, and `rounded-full` for pills, dots, and the analytics bar tracks. Nothing uses a small 4–8px radius.

**Layout rules:** the header nav is not fixed/sticky — it scrolls away with the page. The one sticky element in the whole product is the year rail on `/project` (`sticky top-24`, desktop only). The homepage Work grid and Contact section are deliberately full-bleed (edge-to-edge, breaking out of the article's max-width container) while everything else respects `container-max`.

**Transparency & blur:** used exactly twice — the timeline card's `backdrop-blur` + translucent slate background (frosted-glass effect), and the dashboard's `bg-white/5`–`/15` translucent panel/tab surfaces on the dark About section. Never used as a generic "trendy" glass effect elsewhere.

**Imagery color vibe:** warm, natural office photography — no filters, no black & white, no heavy grain. The Contact photo is deliberately boosted (`brightness-110 contrast-110 saturate-110`) for a slightly punchier portrait; the hero photo is untouched.

**Cards:** two distinct card languages by context — light-mode WorkCard panels have *no* border or shadow at all (color block only, shape comes from the panel edge); dark-mode timeline/dashboard cards use soft translucent fills, a hairline slate border, and (timeline only) a blurred shadow. Never a plain white card with a colored left border — that motif does not appear in this brand.

---

## Iconography

Two open-source icon sets, both loaded via CDN in this design system (no SVGs hand-drawn, no icon font):

- **UI glyphs → [Lucide](https://lucide.dev)** (`lucide-react` in source). Used for interface chrome: calendar, git-branch, external-link, users, monitor, smartphone, tablet, globe, shield-check, server, database, cloud, workflow, etc. Consistently `h-4 w-4` (16px) or smaller (12px in tech pills).
- **Brand/wordmark glyphs → [Simple Icons](https://simpleicons.org)** (`react-icons/si` in source). Used only for outbound brand links: GitHub, LinkedIn, Medium, X, Instagram, Supabase, plus a longer tail inside the analytics dashboard (browser/OS/referrer icons — Chrome, Firefox, Safari, Windows, macOS, Google, Vercel, etc).
- **Emoji:** functional only — ISO country-code → flag emoji in the dashboard's Countries tab. No decorative emoji.
- **No custom icon font, no PNG icon sprites.** Everything is vector, tinted with `currentColor` so icons inherit their surrounding text color and respond to hover states identically to text.

This design system's `Icon` component (`components/core/Icon.jsx`) wraps both sets uniformly: `<Icon name="external-link" />` (lucide, default) or `<Icon name="github" set="brand" />` (Simple Icons), rendered as a CSS-masked `currentColor` glyph instead of react-icons' inline SVG — same look, no npm dependency required.

---

## Brand mark

**There is no logo.** This is a personal name-based brand — identity comes from the "Kelvin Benzali" wordmark set in the hero heading, not a mark. The one graphic identifier that exists is the browser favicon: a small "KB" monogram, white letters on a black→navy diagonal gradient, copied verbatim into `assets/brand/monogram-kb.svg` (plus PNG fallbacks at 192/512px). Use it only as a favicon/tab-icon treatment — it has never been used as an in-page logo anywhere in the product, so don't promote it to a hero logo lockup.

---

## Caveats & open questions

- **Font substitution: none needed.** Plus Jakarta Sans is already a Google Font — `tokens/typography.css` loads it directly from Google Fonts' CDN (`@import`), matching `next/font/google` exactly. No substitution was required.
- **Third-party employer logos** (Tokopedia, ByteDance) were copied into `assets/photos/` only because they appear as real content inside the actual product's Work section — they are not part of this design system's own brand and should not be reused outside of recreating that specific section.
- **The analytics dashboard (`DashboardPanel`) is fed real Supabase data** in production (page views, visitor geography, device/browser breakdowns). This design system only ships the static visual shell — sample numbers are illustrative, not real traffic.
- **`/login` and `/private`** are functional Supabase-auth pages using bare unstyled form elements in the source — they were intentionally left out of the UI kit as they carry no branding to recreate.

**Ask:** if you can share updated project photography, a higher-res hero shot, or confirm whether kelvinbenzali.com has evolved since this repo snapshot, I can tighten this system further. Also flag if you'd like the login/private utility screens roughed in despite their bare styling, or if new work entries (beyond Tokopedia/ByteDance) should be added to the timeline components.
