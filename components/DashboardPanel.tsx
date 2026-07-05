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
    SiLinkedin,
    SiThreads,
    SiDuckduckgo,
} from 'react-icons/si';
import { FaEdge, FaWindows } from "react-icons/fa";
import { BiLogoBing } from "react-icons/bi";
import MetricCard, { MetricCardData } from './MetricCard';
import StatBarRow from './StatBarRow';
import DonutChart from './DonutChart';
import TrafficLineChart from './TrafficLineChart';

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

// A handful of subdomains deserve a different icon than their parent brand
// (Gmail vs. plain Google) — checked before the brand-keyword match below.
const referrerOverrides: Record<string, React.ReactNode> = {
    "mail.google.com": <SiGmail className="h-4 w-4" />,
};

// Brand keyword list, checked as a substring against the normalized referrer
// domain — this is what actually resolves most rows, since real traffic shows
// up under all sorts of subdomains (accounts.google.com, l.instagram.com,
// l.threads.com) and even non-http schemes (android-app://com.linkedin.android/)
// that a plain exact-match table can't anticipate.
const referrerBrands: { key: string; icon: React.ReactNode; name: string }[] = [
    { key: 'google', icon: <SiGoogle className="h-4 w-4" />, name: 'Google' },
    { key: 'bing', icon: <BiLogoBing className="h-4 w-4" />, name: 'Bing' },
    { key: 'facebook', icon: <SiFacebook className="h-4 w-4" />, name: 'Facebook' },
    { key: 'github', icon: <SiGithub className="h-4 w-4" />, name: 'GitHub' },
    { key: 'instagram', icon: <SiInstagram className="h-4 w-4" />, name: 'Instagram' },
    { key: 'vercel', icon: <SiVercel className="h-4 w-4" />, name: 'Vercel' },
    { key: 'linkedin', icon: <SiLinkedin className="h-4 w-4" />, name: 'LinkedIn' },
    { key: 'threads', icon: <SiThreads className="h-4 w-4" />, name: 'Threads' },
    { key: 'duckduckgo', icon: <SiDuckduckgo className="h-4 w-4" />, name: 'DuckDuckGo' },
];

function findReferrerBrand(domain: string) {
    return referrerBrands.find((b) => domain.includes(b.key));
}

export type CountryRow = { code: string; name: string; visitors: number; pageViews: number; uniqueVisitors: number };
// for devices/browsers/referrers (no breakdown) and os (pageViews/uniqueVisitors → hover tooltip)
export type LabeledRow = { name: string; visitors: number; pageViews?: number; uniqueVisitors?: number };

export type TrafficSeries = { dates: string[]; visitors: number[]; pageViews: number[] };

export type DashboardPanelProps = {
    visitors: MetricCardData[];
    series?: TrafficSeries;
    countries: CountryRow[];
    devices: LabeledRow[];  // e.g., [{name:'Desktop', visitors: 75}, {name:'Mobile', visitors: 25}]
    browsers: LabeledRow[]; // e.g., [{name:'Chrome', visitors: 60}, ...]
    os: LabeledRow[];       // e.g., [{name:'Windows', visitors:56}, ...]
    referrers: LabeledRow[];
    title?: string;
    subheader?: string;
    credit?: React.ReactNode;
    topN?: number;          // how many rows to show per tab before truncating
};

type TabId = 'visitors' | 'countries' | 'devices' | 'browsers' | 'os' | 'referrers';

/* ---------- categorical palette shared with the donut/bar tabs ---------- */
const EMERALD = '#10b981'; // emerald-500 — the site's real accent
const SKY = '#0ea5e9';     // sky-500
const SLATE = '#94a3b8';   // slate-400
const ROSE = '#fb7185';    // rose-400

const DONUT_PALETTE = [EMERALD, SKY, SLATE, ROSE];
// Full-bleed bar fill gradient per bar-list tab (emerald→cyan hero look for
// countries, cooler variants for the secondary tabs so each stays distinct).
const BAR_GRADIENT: Record<string, { from: string; to: string }> = {
    countries: { from: '#059669', to: '#22d3ee' }, // emerald-600 → cyan-400
    referrers: { from: '#0284c7', to: '#38bdf8' }, // sky-600 → sky-400
    os: { from: '#475569', to: '#94a3b8' },        // slate-600 → slate-400
};
const DONUT_TABS: TabId[] = ['devices', 'browsers'];

/* ---------- helpers ---------- */

function sum(rows: { visitors: number }[]) {
    return rows.reduce((a, b) => a + (b.visitors || 0), 0);
}

function pct(value: number, total: number) {
    if (!total) return 0;
    return Math.round((value / total) * 100);
}

// Hover-card content for bar rows that have a per-row visitor/page-view
// breakdown (Countries, OS). Returns undefined when the breakdown is
// missing, so callers can pass it straight through as `tooltip`.
function trafficTooltip(name: string, uniqueVisitors?: number, pageViews?: number) {
    if (uniqueVisitors == null || pageViews == null) return undefined;
    return (
        <>
            <div className="mb-1 font-semibold text-white">{name}</div>
            <div className="text-white/70">
                <span className="font-semibold text-white">{uniqueVisitors.toLocaleString()}</span> Unique Visitors
            </div>
            <div className="text-white/70">
                <span className="font-semibold text-white">{pageViews.toLocaleString()}</span> Page Views
            </div>
        </>
    );
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
    const domain = fetchDomain(name.trim().toLowerCase());
    if (referrerOverrides[domain]) return referrerOverrides[domain];
    const brand = findReferrerBrand(domain);
    if (brand) return brand.icon;
    const displayLetter = domain[0]?.toUpperCase() ?? '?';
    return <span className="text-xs">{displayLetter}</span>;
}

// android-app:// / ios-app:// referrers resolve to a reverse-DNS package name
// (e.g. "com.linkedin.android") after fetchDomain strips the scheme — show a
// friendly brand name instead of that raw identifier when we can match one.
function prettyReferrerLabel(rawName: string, domain: string) {
    if (/^[a-z][a-z0-9.+-]*-app:\/\//i.test(rawName.trim())) {
        const brand = findReferrerBrand(domain);
        if (brand) return `${brand.name} App`;
    }
    return domain;
}

function fetchDomain(url: string) {
    // Strip any URI scheme, not just http(s) — real referrers include
    // non-http schemes like "android-app://com.linkedin.android/".
    url = url.replace(/^[a-z][a-z0-9.+-]*:\/\//i, '');
    url = url.replace(/^www\./, '');
    url = url.split('/')[0];
    url = url.split('?')[0];
    return url;
}

/* ---------- main component ---------- */
export default function DashboardPanel({
    visitors,
    series,
    countries,
    devices,
    browsers,
    os,
    referrers,
    title = 'Dashboard Showcase',
    subheader = 'Live traffic showcase — click to explore',
    credit,
    topN = 6,
}: DashboardPanelProps) {
    const countryTotal = useMemo(() => sum(countries), [countries]);
    const deviceTotal = useMemo(() => sum(devices), [devices]);
    const browserTotal = useMemo(() => sum(browsers), [browsers]);
    const osTotal = useMemo(() => sum(os), [os]);
    const referrerTotal = useMemo(() => sum(referrers), [referrers]);
    const [tab, setTab] = useState<TabId>('visitors');

    const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
        { id: 'visitors', label: 'Visitors', icon: <Users className="h-4 w-4" /> },
        { id: 'countries', label: 'Countries', icon: <Globe2 className="h-4 w-4" /> },
        { id: 'devices', label: 'Devices', icon: <Monitor className="h-4 w-4" /> },
        { id: 'browsers', label: 'Browsers', icon: <Globe className="h-4 w-4" /> },
        { id: 'os', label: 'OS', icon: <TabletSmartphone className="h-4 w-4" /> },
        { id: 'referrers', label: 'Referrers', icon: <ExternalLink className="h-4 w-4" /> },
    ];

    // Bar-list rows (Countries / OS / Referrers). Countries and OS carry a
    // hover tooltip (unique visitors / page views per row); Referrers don't
    // (that data isn't broken out per referrer).
    type BarRowData = {
        code?: string;
        icon?: React.ReactNode;
        label: React.ReactNode;
        percent: number;
        tooltip?: React.ReactNode;
    };
    const barRows: Record<string, BarRowData[]> = {
        countries: countries.slice(0, topN).map((c) => ({
            code: c.code !== 'XX' ? c.code : undefined,
            icon: c.code === 'XX' ? <Globe2 className="h-4 w-4" /> : undefined,
            label: c.name,
            percent: pct(c.visitors, countryTotal),
            tooltip: trafficTooltip(c.name, c.uniqueVisitors, c.pageViews),
        })),
        os: os.slice(0, topN).map((o) => ({
            icon: osIcon(o.name),
            label: o.name,
            percent: pct(o.visitors, osTotal),
            tooltip: trafficTooltip(o.name, o.uniqueVisitors, o.pageViews),
        })),
        referrers: referrers.slice(0, topN).map((r) => ({
            icon: referrerIcon(r.name),
            label: prettyReferrerLabel(r.name, fetchDomain(r.name.toLowerCase())),
            percent: pct(r.visitors, referrerTotal),
        })),
    };

    // Donut segments (Devices / Browsers) — colored by rotating palette index.
    const donutRows: Record<string, { label: string; percent: number; color: string; icon?: React.ReactNode }[]> = {
        devices: devices.slice(0, topN).map((d, i) => ({
            icon: deviceIcon(d.name),
            label: d.name,
            percent: pct(d.visitors, deviceTotal),
            color: DONUT_PALETTE[i % DONUT_PALETTE.length],
        })),
        browsers: browsers.slice(0, topN).map((b, i) => ({
            icon: browserBadge(b.name),
            label: b.name,
            percent: pct(b.visitors, browserTotal),
            color: DONUT_PALETTE[i % DONUT_PALETTE.length],
        })),
    };

    return (
        <div className="rounded-2xl border border-white/[0.08] bg-[#16263f] p-5">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                    <p className="mb-1.5 truncate text-xl font-bold tracking-tight text-white">{title}</p>
                    <div className="flex items-center gap-2">
                        <span className="inline-block h-[7px] w-[7px] shrink-0 animate-live-pulse rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgb(16_185_129_/_0.2)]" />
                        <span className="truncate text-sm text-white/55">{subheader}</span>
                    </div>
                </div>
                {credit && <div className="shrink-0 whitespace-nowrap">{credit}</div>}
            </div>

            {/* Tabs — full icon+label, always visible, flex-wrap for the narrow column */}
            <div className="mb-4 flex flex-wrap gap-4 border-b border-white/[0.08]">
                {tabs.map((t) => {
                    const active = tab === t.id;
                    return (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => setTab(t.id)}
                            className={`flex items-center gap-2 border-b-2 pb-2.5 text-sm transition duration-300 ${
                                active
                                    ? 'border-emerald-500 font-semibold text-white'
                                    : 'border-transparent font-medium text-white/45'
                            }`}
                        >
                            {t.icon}
                            {t.label}
                        </button>
                    );
                })}
            </div>

            {/* Panels */}
            {tab === 'visitors' && (
                // Metric tiles form a fixed-width left column, chart fills the rest —
                // flex-wrap (no breakpoints) drops the chart below the tiles on its
                // own if the column gets too narrow to fit both side by side.
                <div className="flex flex-wrap items-stretch gap-3">
                    <div className="flex w-40 shrink-0 flex-col gap-3">
                        {visitors.map((card, i) => (
                            <MetricCard
                                key={i}
                                label={card.label}
                                value={card.value}
                                delta={card.delta}
                                deltaTone={card.deltaTone}
                                helpText="Last 31 days"
                            />
                        ))}
                    </div>
                    {series && (
                        <div className="min-w-[180px] flex-1">
                            <TrafficLineChart
                                dates={series.dates}
                                series={[
                                    { label: 'Visitors', color: EMERALD, values: series.visitors },
                                    { label: 'Page Views', color: SKY, values: series.pageViews },
                                ]}
                            />
                        </div>
                    )}
                </div>
            )}

            {tab !== 'visitors' && DONUT_TABS.includes(tab) && <DonutChart data={donutRows[tab]} />}

            {tab !== 'visitors' && !DONUT_TABS.includes(tab) && (
                <div className="flex flex-col gap-2">
                    {barRows[tab].map((r, i) => (
                        <StatBarRow
                            key={i}
                            code={r.code}
                            icon={r.icon}
                            label={r.label}
                            percent={r.percent}
                            gradientFrom={BAR_GRADIENT[tab].from}
                            gradientTo={BAR_GRADIENT[tab].to}
                            tooltip={r.tooltip}
                        />
                    ))}
                    <span className="pl-2 pt-1 text-xs text-white/40">Last 31 days</span>
                </div>
            )}
        </div>
    );
}
