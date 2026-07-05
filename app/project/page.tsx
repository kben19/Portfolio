import Link from "next/link";
import Header from "../../components/Header";
import ProjectTimelineCard, { Project } from "../../components/ProjectTimelineCard";
import { insertEvent } from "../../utils/lib/event";

const projects: Project[] = [
    {
        id: "2025-toko-migration",
        year: 2025,
        month: "March",
        title: "Cloud Migration — Migration Tokopedia Digital Core Service",
        role: "Senior Software Engineer — Tokopedia Digital",
        subtitle:
            "Directed the full-lifecycle migration of the digital core service to ByteDance Cloud, and rebuilt its distributed tracing and alerting pipeline.",
        status: { label: "Successful Migration With 99% Availability" },
        metrics: [
            { value: "50%+", label: "MTTR Reduction" },
            { value: "80%", label: "Fewer False-Positive Alerts" },
            { value: "~20%", label: "Infrastructure Cost Reduction" },
        ],
        bullets: [
            "Rebuilt the distributed tracing and alerting pipeline, eliminating alert fatigue and freeing up engineering time for product development.",
            "Directed the full-lifecycle migration of business-critical Go microservices and deep data dependencies from GCP to ByteDance Cloud on Kubernetes without impacting active SLOs.",
            "Raised automated test coverage by 30% and introduced a blameless post-mortem process, reducing repeat incidents.",
        ],
        techGroups: [
            { category: "Languages & Protocols", items: ["Go", "gRPC"] },
            { category: "Infrastructure & Cloud", items: ["Docker", "Kubernetes", "Nginx", "GCP", "AWS"] },
            { category: "Database & Messaging", items: ["Postgresql", "mysql", "Redis", "NSQ"] },
        ],
        links: [
            { label: "Tokopedia Digital App", href: "https://www.tokopedia.com/top-up-tagihan"}
        ],
        images: [
            { src: "/projects/cloud_migration.png", alt: "Cloud Server Migration", width: 1024, height: 547 },
        ],
    },
    {
        id: "2024-toko-sandbox",
        year: 2024,
        month: "December",
        title: "Toko Sandbox — CI/CD‑Gated Test Environment (Shift‑Left)",
        role: "Senior Software Engineer — Tokopedia Travel",
        subtitle:
        "Proposed and led the design of a self‑service sandbox simulator which established a reliable testing environment.",
        status: { label: "Improved Test Coverage And Automated Testing" },
        metrics: [
            { value: "~40–50%", label: "Faster Integration/Regression Testing" },
            { value: "~30%", label: "Increased Test Coverage" },
        ],
        bullets: [
            "Initiated and delivered a self-service sandbox to simulate multi-service dependencies at scale.",
            "Integrated with CI/CD pipelines to enable automated integration and regression testing, improving release confidence across services.",
        ],
        techGroups: [
            { category: "Languages & Protocols", items: ["Go", "REST API"] },
            { category: "Infrastructure & Cloud", items: ["Docker", "Kubernetes", "CICD"] },
            { category: "Database & Messaging", items: ["Postgresql", "Redis"] },
        ],
        links: [],
        images: [
            { src: "/projects/enterprise_sanbox_tools.png", alt: "Sandbox Simulator Illustration", width: 1408, height: 768 },
            { src: "/projects/tokopedia-flight.png", alt: "Tokopedia Flight Page", width: 700, height: 621},
        ],
    },
    {
        id: "2019-sobat-dashboard",
        year: 2019,
        month: "August",
        title: "Mitra App & Sobat Dashboard",
        role: "Software Engineer — Tokopedia Mitra",
        subtitle:
        "Built and scaled Mitra App and Sobat Dashboard, Tokopedia's merchant onboarding and analytics platform for independent sellers, from the ground up.",
        metrics: [
            { value: "90%", label: "Faster Merchant Onboarding" },
            { value: "99%", label: "Uptime During Flash Sales" },
            { value: "2x", label: "Deployment Frequency" },
        ],
        bullets: [
            "Built an automated merchant onboarding pipeline, cutting manual onboarding time by 90% and supporting 100+ new merchants onboarded per month.",
            "Sustained 99% uptime across high-availability microservice clusters during flash-sale traffic spikes, using Redis-based caching and a queue system to absorb high traffic load.",
            "Led the refactor of legacy monolithic services into domain-driven microservices, reducing incident count by more than half while doubling deployment frequency.",
        ],
        techGroups: [
            { category: "Languages & Protocols", items: ["Go", "Svelte"] },
            { category: "Infrastructure & Cloud", items: ["Docker", "GCP"] },
            { category: "Database & Messaging", items: ["Postgres", "Redis", "NSQ"] },
        ],
        images: [
            { src: "/projects/mitra-page.jpeg", alt: "Mitra Tokopedia App", width: 539, height: 806 },
        ],
    },
];

// Per-row timeline rail geometry — keep in sync with the connector math below.
// The year sits beside the dot (not stacked above it) so the connector line
// runs straight down the dot's own axis without a label ever crossing it.
const RAIL_WIDTH = 80;
const DOT_SIZE = 10;
const LINE_WIDTH = 2;
const ROW_GAP = 40; // must match the flex column gap (gap-10 = 2.5rem)
const LABEL_ROW_HEIGHT = 28; // dot + year are vertically centered within this
const DOT_CENTER_Y = LABEL_ROW_HEIGHT / 2;

export default async function ProjectPage() {
    await insertEvent('/project')
    return (
        <div className="min-h-screen bg-[#f3f3f3]">
            <Header links={[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/#work", label: "Work" },
                { href: "/#freelance", label: "Project" },
                { href: "/#contact", label: "Contact" },
            ]} sticky/>
            <main className="container-max py-12">
                <header className="mb-14">
                    <Link
                        href="/"
                        className="text-base font-medium text-gray-600 transition duration-300 hover:text-emerald-600"
                    >
                        ← Back home
                    </Link>
                    <div className="mt-3 text-center">
                        <h1 className="text-4xl font-bold tracking-tight">Tokopedia Projects</h1>
                        <p className="mx-auto mt-2 max-w-xl text-gray-500">
                            A focused timeline of major initiatives I led or contributed to between 2019 and 2025.
                        </p>
                    </div>
                </header>

                <div className="flex flex-col gap-10">
                    {projects.map((p, i) => {
                        const showYear = i === 0 || projects[i - 1].year !== p.year;
                        const isLast = i === projects.length - 1;
                        return (
                            <div key={p.id} className="grid grid-cols-1 gap-3 sm:grid-cols-[80px_1fr] sm:gap-6">
                                {/* Rail column — hidden on mobile, the card's own date chip already shows the year, and the fixed 80px column left too little room for the card content. */}
                                <div className="relative hidden sm:block">
                                    {!isLast && (
                                        <span
                                            aria-hidden="true"
                                            className="absolute z-0 bg-slate-400"
                                            style={{
                                                top: DOT_CENTER_Y,
                                                left: RAIL_WIDTH - DOT_SIZE / 2 - LINE_WIDTH / 2,
                                                width: LINE_WIDTH,
                                                // No "- DOT_CENTER_Y" here: the bottom edge must land at
                                                // 100% + ROW_GAP so it reaches the NEXT row's dot exactly
                                                // (which sits DOT_CENTER_Y px into that row) — subtracting
                                                // it back out just short-changes the line by that amount.
                                                height: `calc(100% + ${ROW_GAP}px)`,
                                            }}
                                        />
                                    )}
                                    <div
                                        className="relative z-10 flex items-center justify-end gap-2"
                                        style={{ height: LABEL_ROW_HEIGHT }}
                                    >
                                        {showYear && (
                                            <span className="text-lg font-semibold text-slate-700">
                                                {p.year}
                                            </span>
                                        )}
                                        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-slate-700" />
                                    </div>
                                </div>

                                <ProjectTimelineCard project={p} />
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
