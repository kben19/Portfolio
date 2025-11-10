'use client';
import { useMemo, useState } from 'react';
import {
    Users,
    Globe,
    Globe2,
    Monitor,
    Smartphone,
    TabletSmartphone,
    ExternalLink,
} from 'lucide-react';
import {
    SiGooglechrome,
    SiMozilla,
    SiSafari,
    SiOpera,
    SiBrave,
    SiVivaldi,
    SiAndroid,
    SiLinux,
    SiIos,
    SiApple,
    SiGoogle,
    SiFacebook,
    SiGithub,
    SiInstagram,
    SiGmail,
    SiVercel,
} from 'react-icons/si';
import { FaEdge, FaWindows } from "react-icons/fa";
import { BiLogoBing } from "react-icons/bi";


const browserIconMap: Record<string, React.ReactNode> = {
    chrome: <SiGooglechrome className="h-4 w-4" />,
    firefox: <SiMozilla className="h-4 w-4" />,
    "microsoft edge": <FaEdge className="h-4 w-4" />,
    safari: <SiSafari className="h-4 w-4" />,
    opera: <SiOpera className="h-4 w-4" />,
    brave: <SiBrave className="h-4 w-4" />,
    vivaldi: <SiVivaldi className="h-4 w-4" />,
};

const osIconMap: Record<string, React.ReactNode> = {
    windows: <FaWindows className="h-4 w-4" />,
    macos: <SiApple className="h-4 w-4" />,
    linux: <SiLinux className="h-4 w-4" />,
    android: <SiAndroid className="h-4 w-4" />,
    ios: <SiIos className="h-4 w-4" />,
};

const referrerIconMap: Record<string, React.ReactNode> = {
    "google.com": <SiGoogle className="h-4 w-4" />,
    "bing.com": <BiLogoBing className="h-4 w-4" />,
    "facebook.com": <SiFacebook className="h-4 w-4" />,
    "github.com": <SiGithub className="h-4 w-4" />,
    "l.instagram.com": <SiInstagram className="h-4 w-4" />,
    "mail.google.com": <SiGmail className="h-4 w-4" />,
    "vercel.com": <SiVercel className="h-4 w-4" />,
}

type CountryRow = { code: string; name: string; visitors: number };
type LabeledRow = { name: string; visitors: number }; // for devices/browsers/os

export type MiniDashboardTabsProps = {
    visitors: MetricCard[];
    countries: CountryRow[];
    devices: LabeledRow[];  // e.g., [{name:'Desktop', visitors: 75}, {name:'Mobile', visitors: 25}]
    browsers: LabeledRow[]; // e.g., [{name:'Chrome', visitors: 60}, ...]
    os: LabeledRow[];       // e.g., [{name:'Windows', visitors:56}, ...]
    referrers: LabeledRow[];
    title?: string;
    topN?: number;          // how many to show before "View all" UX (we keep it simple here)
};

type MetricCardProps = {
    label: string;
    value: number | string;
    delta?: string;           // e.g. "+284%"
    deltaTone?: "good" | "bad" | "neutral";
    helpText?: string;        // optional small caption
};

type MetricCard = {
    label: string;
    value: number | string;
    delta?: string;           // e.g. "+284%"
    deltaTone?: "good" | "bad" | "neutral";
}

type Props = {
    visitors: MetricCard[];
    countries: CountryRow[];
    devices: LabeledRow[];  // e.g., [{name:'Desktop', visitors: 75}, {name:'Mobile', visitors: 25}]
    browsers: LabeledRow[]; // e.g., [{name:'Chrome', visitors: 60}, ...]
    os: LabeledRow[];       // e.g., [{name:'Windows', visitors:56}, ...]
    title?: string;
    topN?: number;
}

/* ---------- helpers ---------- */

function sum(rows: { visitors: number }[]) {
    return rows.reduce((a, b) => a + (b.visitors || 0), 0);
}

function pct(value: number, total: number) {
    if (!total) return 0;
    return Math.round((value / total) * 100);
}

// ISO country code ("US") -> emoji flag
function flagEmoji(code: string) {
    if (!code) return '🏳️';
    const cc = code.trim().toUpperCase();
    if (cc.length !== 2) return '🏳️';
    const A = 0x1f1e6; // regional indicator A
    const base = 'A'.charCodeAt(0);
    return String.fromCodePoint(A + (cc.charCodeAt(0) - base), A + (cc.charCodeAt(1) - base));
}

// Device tiny icon (Lucide)
function deviceIcon(name: string) {
    const n = name.toLowerCase();
    if (n.includes('desktop')) return <Monitor className="h-4 w-4" />;
    if (n.includes('tablet')) return <TabletSmartphone className="h-4 w-4" />;
    if (n.includes('mobile') || n.includes('phone')) return <Smartphone className="h-4 w-4" />;
    return <Monitor className="h-4 w-4" />;
}

function browserBadge(name: string) {
    const key = name.toLowerCase();
    return browserIconMap[key] ?? <span className="text-xs">{name[0]}</span>;
}

function osIcon(name: string) {
    const key = name.toLowerCase();
    return osIconMap[key] ?? <span className="text-xs">{name[0]}</span>;
}

function referrerIcon(name: string) {
    if (!name) return <span className="text-xs">?</span>;

    // --- Normalize the referrer ---
    let key = name.trim().toLowerCase();

    key = fetchDomain(key);

    const Icon = referrerIconMap[key];
    if (Icon) return Icon;

    // --- Fallback: first letter of domain, capitalized ---
    const displayLetter = key[0]?.toUpperCase() ?? '?';
    return <span className="text-xs">{displayLetter}</span>;
}

function fetchDomain(url: string) {
    // Remove URL prefixes
    url = url.replace(/^https?:\/\//, ''); // remove http:// or https://
    url = url.replace(/^www\./, '');       // remove www.
    url = url.split('/')[0];               // remove path part after domain

    // remove trailing slashes or query params
    url = url.replace(/\/.*$/, '');
    url = url.split('?')[0];

    return url
}

/* ---------- small bar list row ---------- */
function BarRow({
                    left,
                    rightPct,
                    icon,
                }: {
    left: React.ReactNode;
    rightPct: number;
    icon?: React.ReactNode;
}) {
    return (
        <div className="rounded-lg bg-white/5 px-3 py-2">
            {/* auto (label) | 1fr (bar) | 3.5rem (percent) */}
            <div className="grid items-center gap-3
            grid-cols-[5fr_4fr_1fr]">
                <div className="flex items-center gap-2 min-w-0">
                    {icon && <span className="shrink-0 text-white/80">{icon}</span>}
                    <span className="truncate text-sm text-white/90">{left}</span>
                </div>

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                        className="h-2 rounded-full bg-white/70"
                        style={{ width: `${Math.min(100, Math.max(0, rightPct))}%` }}
                    />
                </div>

                {/* fixed width, right aligned, tabular digits for even width */}
                <div className="text-right text-sm text-white/80 [font-variant-numeric:tabular-nums]">
                    {rightPct}%
                </div>
            </div>
        </div>
    );
}

/* ---------- tab header button ---------- */
function TabButtonIconOnly({
                               active,
                               index,
                               hoveredIndex,
                               setHoveredIndex,
                               onClick,
                               icon,
                               label,
                           }: {
    active: boolean
    index: number
    hoveredIndex: number | null
    setHoveredIndex: (i: number | null) => void
    onClick: () => void
    icon: React.ReactNode
    label: string
}) {
    const showLabel = hoveredIndex === index || (active)

    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative flex items-center rounded-xl px-2 py-2 transition
        ${active ? 'bg-white/15 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
        >
            <span className="h-4 w-4">{icon}</span>

            {/* Label that only renders when active (no hover) or hovered tab */}
            <span
                className={`whitespace-nowrap text-xs transition-all duration-150 pl-1
          ${showLabel ? 'ml-1 opacity-100 max-w-[120px]' : 'opacity-0 max-w-0 overflow-hidden -ml-1'}`}
            >
        {label}
      </span>
        </button>
    )
}

/* ---------- main component ---------- */
export default function MiniDashboardTabs({
      visitors,
      countries,
      devices,
      browsers,
      os,
      referrers,
      title = 'Showcase Dashboard',
      topN = 6,
    }: MiniDashboardTabsProps) {

    const countryTotal = useMemo(() => sum(countries), [countries]);
    const deviceTotal = useMemo(() => sum(devices), [devices]);
    const browserTotal = useMemo(() => sum(browsers), [browsers]);
    const osTotal = useMemo(() => sum(os), [os]);
    const referrerTotal = useMemo(() => sum(referrers), [referrers]);
    const [tab, setTab] = useState<'visitors' | 'countries' | 'devices' | 'browsers' | 'os' | 'referrers'>('visitors')
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const tabs: { key: Props['title']; id: typeof tab; label: string; icon: React.ReactNode }[] = [
        { id: 'visitors', label: 'Visitors', icon: <Users className="h-4 w-4" /> },
        { id: 'countries', label: 'Countries', icon: <Globe2 className="h-4 w-4" /> },
        { id: 'devices', label: 'Devices', icon: <Monitor className="h-4 w-4" /> },
        { id: 'browsers', label: 'Browsers', icon: <Globe className="h-4 w-4" /> },
        { id: 'os', label: 'OS', icon: <TabletSmartphone className="h-4 w-4" /> },
        { id: 'referrers', label: 'Referrers', icon: <ExternalLink className="h-4 w-4" /> },
    ] as any

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
            <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-white/80">{title}</p>
            </div>

            {/* Tabs */}
            <div className="mb-4 flex flex-wrap gap-2">
                {tabs.map((t, i) => (
                    <TabButtonIconOnly
                        key={t.id}
                        index={i}
                        active={tab === t.id}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        onClick={() => setTab(t.id)}
                        icon={t.icon}
                        label={t.label}
                    />
                ))}
            </div>

            {/* Panels */}
            <div className="flex flex-col gap-3">
                {tab === 'visitors' && (
                    <div className="rounded-xl bg-white/5 p-3">
                        {/* Vertical stack for narrow column */}
                        <div className="flex flex-col gap-3">
                            {visitors.map((card, index) => (
                                <MetricCard
                                    key={index}
                                    label={card.label}
                                    value={card.value}
                                    delta={card.delta}
                                    deltaTone={card.deltaTone}
                                    helpText="Last 7 days"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {tab === 'countries' && (
                    <div className="flex flex-col gap-2">
                        {countries.slice(0, topN).map((c) => (
                            <BarRow
                                key={c.code}
                                icon={<span className="text-base">{flagEmoji(c.code)}</span>}
                                left={<span>{c.name}</span>}
                                rightPct={pct(c.visitors, countryTotal)}
                            />
                        ))}
                        <span className="text-xs text-slate-400 pl-2 pt-1">Last 31 days</span>
                    </div>
                )}

                {tab === 'devices' && (
                    <div className="flex flex-col gap-2">
                        {devices.slice(0, topN).map((d) => (
                            <BarRow
                                key={d.name}
                                icon={deviceIcon(d.name)}
                                left={<span>{d.name}</span>}
                                rightPct={pct(d.visitors, deviceTotal)}
                            />
                        ))}
                        <span className="text-xs text-slate-400 pl-2 pt-1">Last 31 days</span>
                    </div>
                )}

                {tab === 'browsers' && (
                    <div className="flex flex-col gap-2">
                        {browsers.slice(0, topN).map((b) => (
                            <BarRow
                                key={b.name}
                                icon={browserBadge(b.name)}
                                left={<span>{b.name}</span>}
                                rightPct={pct(b.visitors, browserTotal)}
                            />
                        ))}
                        <span className="text-xs text-slate-400 pl-2 pt-1">Last 31 days</span>
                    </div>
                )}

                {tab === 'os' && (
                    <div className="flex flex-col gap-2">
                        {os.slice(0, topN).map((o) => (
                            <BarRow
                                key={o.name}
                                icon={osIcon(o.name)}
                                left={<span>{o.name}</span>}
                                rightPct={pct(o.visitors, osTotal)}
                            />
                        ))}
                        <span className="text-xs text-slate-400 pl-2 pt-1">Last 31 days</span>
                    </div>
                )}

                {tab === 'referrers' && (
                    <div className="flex flex-col gap-2">
                        {referrers.slice(0, topN).map((o) => (
                            <BarRow
                                key={fetchDomain(o.name)}
                                icon={referrerIcon(o.name)}
                                left={<span>{fetchDomain(o.name)}</span>}
                                rightPct={pct(o.visitors, referrerTotal)}
                            />
                        ))}
                        <span className="text-xs text-slate-400 pl-2 pt-1">Last 31 days</span>
                    </div>
                )}
            </div>
        </div>
    );
}

function MetricCard({ label, value, delta, deltaTone = "good", helpText }: MetricCardProps) {
    const tone = {
        good:  "bg-emerald-100 text-emerald-700",
        bad:   "bg-rose-100 text-rose-700",
        neutral: "bg-slate-100 text-slate-700",
    }[deltaTone];

    return (
        <div className="rounded-xl border border-white/10 bg-white text-slate-900 shadow-sm">
            <div className="flex flex-col gap-1 p-4">
                <span className="text-sm font-medium text-slate-500">{label}</span>
                <div className="flex items-end justify-between">
                    <span className="text-3xl font-semibold tracking-tight">{value}</span>
                    {delta && (
                        <span className={`ml-2 rounded-md px-2 py-1 text-xs font-medium ${tone}`}>
              {delta}
            </span>
                    )}
                </div>
                {helpText && <span className="text-xs text-slate-400">{helpText}</span>}
            </div>
        </div>
    );
}
