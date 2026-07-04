'use client';

// LuminNovel — freelance-project showcase for luminnovel.com. Renders an
// auto-cycling, hover-pausable recreation of the storefront (Home / Detail /
// Series) framed in a browser window, next to the case-study copy. The cream
// storefront chrome is a deliberate one-off accent surface (see DESIGN.md
// §3.1) — the portfolio-side accents (eyebrow, heading dot, link, active dot)
// stay emerald.

import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";

type StockStatus = "In Stock" | "Preorder";
type PillKey = "Doujinshi" | "Light Novel";

interface LNProduct {
  img: string;
  title: string;
  tag: PillKey;
  stock: StockStatus;
  price: string;
  sold: string;
}

interface LNSeriesItem {
  img: string;
  title: string;
  badge: PillKey;
  volumes: string;
}

// Format/status accent colors sampled from the live storefront's design tokens
// (luminnovel_shop/frontend/app/globals.css) — not the portfolio's own palette.
const PILL_STYLES: Record<PillKey, string> = {
  Doujinshi: "bg-[#fbcfe8] text-[#9d174d]",
  "Light Novel": "bg-[#d3ece2] text-[#0e7a5a]",
};

const STOCK_STYLES: Record<StockStatus, { dot: string; text: string }> = {
  "In Stock": { dot: "bg-[#16a34a]", text: "text-[#16a34a]" },
  Preorder: { dot: "bg-[#d97706]", text: "text-[#d97706]" },
};

const LN_PRODUCTS: LNProduct[] = [
  { img: "/luminnovel/cover-sana.png", title: "#SANAtion Doujinshi — Hiten", tag: "Doujinshi", stock: "In Stock", price: "Rp 160.000", sold: "1 sold" },
  { img: "/luminnovel/cover-5cm.png", title: "5 Centimeters per Second: one more side", tag: "Light Novel", stock: "Preorder", price: "Rp 280.000", sold: "8 sold" },
  { img: "/luminnovel/cover-browsing.png", title: "5TH BROWSING — Kantoku Illustration Book", tag: "Doujinshi", stock: "In Stock", price: "Rp 200.000", sold: "1 sold" },
  { img: "/luminnovel/cover-7thloop3.png", title: "7th Time Loop — Light Novel Vol. 3", tag: "Light Novel", stock: "Preorder", price: "Rp 310.000", sold: "12 sold" },
  { img: "/luminnovel/cover-7thloop6.png", title: "7th Time Loop — Light Novel Vol. 6", tag: "Light Novel", stock: "In Stock", price: "Rp 300.000", sold: "8 sold" },
];

const LN_SERIES: LNSeriesItem[] = [
  { img: "/luminnovel/cover-7thloop6.png", title: "7th Time Loop", badge: "Light Novel", volumes: "6 volumes" },
  { img: "/luminnovel/cover-5cm.png", title: "5 Centimeters per Second", badge: "Light Novel", volumes: "1 volume" },
  { img: "/luminnovel/cover-sana.png", title: "#SANAtion — Hiten", badge: "Doujinshi", volumes: "1 volume" },
  { img: "/luminnovel/cover-browsing.png", title: "5th Browsing — Kantoku", badge: "Doujinshi", volumes: "1 volume" },
  { img: "/luminnovel/cover-eightysix.webp", title: "86—EIGHTY-SIX", badge: "Light Novel", volumes: "9 volumes" },
];

const TECH_CHIPS = ["Next.js", "Go", "PostgreSQL", "Vercel", "Claude Code"];

// Browser chrome bar — traffic-light dots + the "luminnovel.com" pill.
function LNChrome() {
  return (
    <div className="flex items-center gap-2.5 border-b border-[#e0d9cf] bg-[#f4f0e8] px-3.5 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-[11px] w-[11px] rounded-full bg-[#f87171]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#fbbf24]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#34d399]" />
      </div>
      <div className="flex flex-1 justify-center">
        <div className="flex min-w-[150px] items-center justify-center gap-1.5 rounded-full border border-[#e0d9cf] bg-white px-3 py-1 text-[11px] text-[#71717a] sm:min-w-[200px] sm:px-3.5 sm:text-xs">
          <span className="h-[7px] w-[7px] rounded-full bg-[#16a34a]" />
          luminnovel.com
        </div>
      </div>
      <div className="hidden w-[46px] sm:block" />
    </div>
  );
}

// Storefront header — real logo mark + wordmark + nav + search pill. The real
// site's header is a sticky global nav present on every page, so all three
// screens show it; `compact` only trims padding/search width for screens that
// need more vertical room (Detail, Series).
function LNStoreHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-3.5 border-b border-[#e0d9cf] ${compact ? "px-4 py-2.5" : "px-4 py-3"}`}>
      <div className="flex items-center gap-2">
        <Image src="/luminnovel/Logo.png" alt="Lumin Novel" width={26} height={26} className="h-[26px] w-[26px] rounded-md" />
        <span className="text-sm font-bold">
          <span className="text-[#b8312f]">L</span>
          <span className="text-[#151e27]">umin</span>{" "}
          <span className="text-[#b8312f]">N</span>
          <span className="text-[#151e27]">ovel</span>
        </span>
      </div>
      <div className="hidden gap-3.5 text-xs text-[#71717a] sm:flex">
        <span>Manga</span>
        <span>Light Novels</span>
        <span>Doujinshi</span>
        <span>Series</span>
      </div>
      <div className="flex-1" />
      <div
        className={`rounded-full border border-[#e0d9cf] bg-white px-3 py-1 text-[11px] text-[#a1a1aa] ${
          compact ? "w-[96px] sm:w-[120px]" : "w-[120px] sm:w-[180px]"
        }`}
      >
        Search titles…
      </div>
    </div>
  );
}

// Screen 1 — storefront home: header + a 5-cover catalog grid.
function LNHome() {
  return (
    <div className="flex h-full flex-col bg-[#faf7f2]">
      <LNStoreHeader />
      <div className="flex items-center justify-between px-4 pb-1.5 pt-3 sm:px-4">
        <span className="text-base font-bold text-[#18181b] sm:text-[17px]">Catalog</span>
        <div className="hidden gap-2 sm:flex">
          <span className="rounded-md border border-[#e0d9cf] bg-white px-2 py-1 text-[10px] text-[#71717a]">All Formats ▾</span>
          <span className="rounded-md border border-[#e0d9cf] bg-white px-2 py-1 text-[10px] text-[#71717a]">Title A–Z ▾</span>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2.5 overflow-hidden px-4 pb-3 pt-1 sm:grid-cols-5 sm:gap-3 sm:pb-4">
        {LN_PRODUCTS.map((p) => (
          <div key={p.title} className="group flex min-w-0 flex-col gap-1">
            <div className="relative aspect-[0.71] overflow-hidden rounded-md bg-white shadow-[0_4px_10px_rgba(28,25,23,0.14)] transition-shadow duration-300 group-hover:shadow-[0_10px_20px_rgba(28,25,23,0.22)]">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 20vw, 140px"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${PILL_STYLES[p.tag]}`}>{p.tag}</span>
              <span className={`flex items-center gap-1 text-[8px] ${STOCK_STYLES[p.stock].text}`}>
                <span className={`h-[5px] w-[5px] rounded-full ${STOCK_STYLES[p.stock].dot}`} />
                <span className="hidden sm:inline">{p.stock}</span>
              </span>
            </div>
            <span className="line-clamp-2 text-[10px] leading-tight text-[#18181b]">{p.title}</span>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#18181b]">{p.price}</span>
              <span className="text-[8px] text-[#71717a]">{p.sold}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Screen 2 — product detail: large cover, breadcrumb, price, qty stepper.
function LNDetail() {
  const p = LN_PRODUCTS[3];
  return (
    <div className="flex h-full flex-col bg-[#faf7f2]">
      <LNStoreHeader compact />
      <div className="grid flex-1 grid-cols-1 items-center gap-5 overflow-hidden px-5 py-4 sm:grid-cols-[auto_1fr] sm:gap-6 sm:px-6">
        <div className="relative mx-auto aspect-[0.71] w-24 shrink-0 overflow-hidden rounded-lg shadow-[0_10px_26px_rgba(28,25,23,0.22)] sm:mx-0 sm:w-[170px]">
          <Image src={p.img} alt={p.title} fill sizes="170px" className="object-cover" />
        </div>
        <div className="flex min-w-0 flex-col gap-2 sm:gap-2.5">
          <span className="text-[10px] text-[#71717a]">Light Novels › 7th Time Loop</span>
          <span className="text-base font-bold leading-tight text-[#18181b] sm:text-xl">
            7th Time Loop: The Villainess Enjoys a Carefree Life — Vol. 3
          </span>
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${PILL_STYLES[p.tag]}`}>{p.tag}</span>
            <span className={`flex items-center gap-1 text-[10px] ${STOCK_STYLES[p.stock].text}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${STOCK_STYLES[p.stock].dot}`} />
              {p.stock}
            </span>
          </div>
          <span className="text-xl font-extrabold text-[#18181b] sm:text-2xl">{p.price}</span>
          <div className="mt-1 flex items-center gap-2.5">
            <div className="flex items-center overflow-hidden rounded-lg border border-[#e0d9cf] bg-white">
              <span className="px-2.5 py-1.5 text-[#71717a]">–</span>
              <span className="border-x border-[#e0d9cf] px-3 py-1.5 text-[13px] font-semibold text-[#18181b]">1</span>
              <span className="px-2.5 py-1.5 text-[#71717a]">+</span>
            </div>
            <span className="rounded-lg bg-[#18181b] px-5 py-2 text-[13px] font-semibold text-white">Add to Cart</span>
          </div>
          <span className="mt-0.5 hidden text-[10px] text-[#71717a] sm:block">
            12 sold · Ships from Jakarta · Preorder closes in 6 days
          </span>
        </div>
      </div>
    </div>
  );
}

// Screen 3 — series index: header + "N series available" + a gallery-wall
// grid of image/text bands (mirrors the real site's SeriesBand: a left-
// cropped cover fading via gradient scrim into a right-hand text panel).
function LNSeries() {
  return (
    <div className="flex h-full flex-col bg-[#faf7f2]">
      <LNStoreHeader compact />
      <div className="flex items-center justify-between px-4 pb-1.5 pt-3 sm:px-4">
        <span className="text-base font-bold text-[#18181b] sm:text-[17px]">Series</span>
        <span className="text-[10px] text-[#71717a] sm:text-xs">189 series available</span>
      </div>
      <div className="grid flex-1 grid-cols-2 overflow-hidden border-t border-[#e0d9cf]">
        {LN_SERIES.map((s, i) => {
          const cols = 2;
          const totalRows = Math.ceil(LN_SERIES.length / cols);
          const row = Math.floor(i / cols);
          const isLastInRow = i % cols === cols - 1 || i === LN_SERIES.length - 1;
          const borderClass = `${isLastInRow ? "" : "border-r"} ${row < totalRows - 1 ? "border-b" : ""} border-[#e0d9cf]`;
          return (
          <div key={s.title} className={`group relative h-[74px] overflow-hidden sm:h-[92px] ${borderClass}`}>
            <div className="absolute inset-y-0 left-0 w-[55%]">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 30vw, 160px"
                className="object-cover object-[center_28%] brightness-90 saturate-[.9] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-105 group-hover:saturate-110"
              />
            </div>
            {/* Scrim fades the cover into the cream page background so the text panel stays legible. */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(95deg, transparent 0%, transparent 22%, #faf7f2 54%, #faf7f2 100%)",
              }}
            />
            <div className="absolute inset-y-0 right-0 flex w-[58%] flex-col justify-center gap-1 py-1.5 pl-1 pr-2.5">
              <span className={`w-fit rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${PILL_STYLES[s.badge]}`}>{s.badge}</span>
              <span className="line-clamp-2 text-[10px] font-bold leading-tight text-[#18181b] sm:text-[11px]">{s.title}</span>
              <span className="text-[9px] text-[#71717a]">{s.volumes}</span>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

interface LNScreen {
  key: string;
  label: string;
  render: () => ReactElement;
}

const SCREENS: LNScreen[] = [
  { key: "home", label: "Home", render: LNHome },
  { key: "detail", label: "Detail", render: LNDetail },
  { key: "series", label: "Series", render: LNSeries },
];

const AUTO_ADVANCE_MS = 4000;

export default function LuminNovel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setActive((a) => (a + 1) % SCREENS.length), AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [active, paused]);

  return (
    <section id="freelance" aria-label="Freelance project: Lumin Novel" className="w-full border-y border-[#e0d9cf] bg-[#faf7f2]">
      <div className="container-max grid items-center gap-10 py-20 md:grid-cols-[5fr_6fr] md:gap-14 md:py-32">
        {/* Left: copy */}
        <div className="flex flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Freelance · E-commerce
          </span>
          <h2 className="text-5xl font-extrabold tracking-tight text-[#18181b] md:text-6xl">
            Lumin Novel<span className="text-emerald-500">.</span>
          </h2>
          <p className="max-w-[30rem] text-lg leading-relaxed text-[#44403c]">
            I designed and shipped <strong>luminnovel.com</strong> end to end as an independent
            freelance production build. It is an online store for light novels and manga books. Owned the full
            lifecycle, starting from design with a <strong>Next.js</strong> as front end, a{" "}
            <strong>Go</strong> backend over <strong>PostgreSQL</strong>, testing, and deployment on{" "}
            <strong>Vercel</strong> and using <strong>Claude Code</strong> to scaffold and accelerate the
            development cycle, turning a blank repo into a live storefront.
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH_CHIPS.map((c) => (
              <span key={c} className="rounded-full border border-[#e0d9cf] bg-white px-3 py-1.5 text-xs font-medium text-[#57534e]">
                {c}
              </span>
            ))}
          </div>
          <a
            href="https://luminnovel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 self-start text-base font-semibold text-[#18181b] underline decoration-emerald-500 underline-offset-[5px]"
          >
            Visit luminnovel.com →
          </a>
        </div>

        {/* Right: browser-framed auto-cycling storefront */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="overflow-hidden rounded-2xl border border-[#e0d9cf] bg-white shadow-[0_24px_60px_rgba(28,25,23,0.22)]"
        >
          <LNChrome />
          <div className="relative h-[300px] sm:h-[340px] md:h-[380px]">
            {SCREENS.map((s, i) => (
              <div
                key={s.key}
                aria-hidden={i !== active}
                className={`absolute inset-0 transition duration-500 ease-out ${
                  i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <s.render />
              </div>
            ))}
          </div>
          {/* Screen switcher */}
          <div className="flex items-center justify-center gap-4 border-t border-[#e0d9cf] bg-[#f4f0e8] px-2.5 py-2.5">
            {SCREENS.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.label} screen`}
                className={`flex items-center gap-1.5 text-[11px] transition ${
                  i === active ? "font-bold text-[#18181b]" : "font-medium text-[#71717a]"
                }`}
              >
                <span
                  className={`h-[7px] w-[7px] rounded-full transition-colors duration-300 ${
                    i === active ? "bg-emerald-500" : "bg-[#d6cdbd]"
                  }`}
                />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
