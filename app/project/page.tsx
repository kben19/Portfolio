import Image from "next/image";
import Header from "../../components/Header";
import { insertEvent } from "../../utils/lib/event";
import { Calendar, GitBranch, ArrowRight, ExternalLink, Server, Workflow, ShieldCheck } from "lucide-react";

type Project = {
    id: string;
    year: number;
    month: string;
    title: string;
    role?: string;
    subtitle?: string;
    impact?: string;
    bullets?: string[];
    tech?: string[];
    links?: { label: string; href: string }[];
    images?: { src: string; alt: string }[];
};

const projects: Project[] = [
    {
        id: "2024-toko-sandbox",
        year: 2024,
        month: "December",
        title: "Toko Sandbox — CI/CD‑Gated Test Environment (Shift‑Left)",
        role: "Senior Software Engineer — Tokopedia",
        subtitle:
        "Proposed and led the design of a self‑service sandbox to validate integrations early.",
        impact:
        "Cut integration/regression test time by ~40–50% and increased coverage ~30%, boosting release confidence.",
        bullets: [
            "Provisioned ephemeral envs per PR using templates; automated seeding & contract tests.",
            "Standardized runbooks and blameless post‑mortems to drive learning culture.",
        ],
        tech: ["Go", "Docker", "Kubernetes", "Argo Workflows", "OpenAPI", "GitHub Actions", "Postman"],
        links: [
            { label: "Design Doc (internal)", href: "#" },
        ],
        images: [
            { src: "/images/projects/2024-sandbox-ephemeral.png", alt: "Ephemeral environment preview" },
            { src: "/images/projects/2024-ci-gates.png", alt: "CI gates illustration" },
        ],
    },
    {
        id: "2020-observability",
        year: 2020,
        month: "October",
        title: "Reliability & Observability Program",
        role: "Software Engineer — Tokopedia",
        subtitle:
        "Introduced standardized alerting, tracing, dashboards, and SLOs across core services.",
        impact:
        "Mean time to recover (MTTR) reduced by ~25% and noisy alerts dropped ~35% after hygiene.",
        bullets: [
            "Authored runbooks; implemented alert dedup & routing; taught on‑call best practices.",
            "Adopted trace sampling and RED/USE dashboards for service health visibility.",
        ],
        tech: ["Prometheus", "Grafana", "Loki", "Tempo", "Jaeger", "SLO tooling"],
        images: [
            { src: "/images/projects/2020-observability-dash.png", alt: "Unified observability dashboard" },
        ],
    },
    {
        id: "2019-cicd",
        year: 2019,
        month: "June",
        title: "CI/CD Pipeline Modernization",
        role: "Software Engineer — Tokopedia",
        subtitle:
        "Refactored pipelines with faster caching, parallelism, and policy checks.",
        impact:
        "PR‑to‑prod lead time improved by ~30%; flaky steps reduced; reproducible builds ensured.",
        bullets: [
            "Introduced standardized pipeline templates and artifact provenance.",
            "Added preview deployments and rollout visibility per service.",
        ],
        tech: ["GitHub Actions", "ArgoCD", "Container Registry", "OPA"],
    },
];

// Group by year (descending)
const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a)

export default async function ProjectPage() {
    await insertEvent('/project')
    const grouped = years.map((year) => ({
        year,
        items: projects.filter((p) => p.year === year),
    }));
    return (
        <>
            <Header links={[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About" },
                { href: "/#work", label: "Work" },
                { href: "/#contact", label: "Contact" },
            ]}/>
            <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Tokopedia Projects</h1>
                    <p className="mt-2 text-muted-foreground max-w-2xl">
                        A focused timeline of major initiatives I led or contributed to between 2019 and 2025.
                    </p>
                </header>

                <section className="relative">
                    {/* Left Rail */}
                    <aside
                        aria-label="Timeline years"
                        className="hidden md:block sticky top-24 h-[70vh] pr-8 float-left"
                    >
                        <div className="relative h-full flex flex-col items-start py-6">
                            {/* Main vertical branch */}
                            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-slate-500/40" />

                            <ol className="relative z-10 flex flex-col justify-between h-full pl-2">
                                {years.map((y, i) => (
                                    <li key={y} className="relative group flex items-center">
                                        {/* The year node */}
                                        <a
                                            href={`#year-${y}`}
                                            className="flex items-center gap-3 focus:outline-none"
                                        >
                                            <span className="relative block h-4 w-4 rounded-full bg-slate-700
                                              group-hover:bg-blue-500 transition-colors duration-300
                                              shadow ring-2 ring-white/30" />
                                            <span className="text-lg font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                                              {y}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </aside>

                    {/* Branch List */}
                    <div className="md:ml-24">
                        {grouped.map(({ year, items }) => (
                            <div key={year} id={`year-${year}`} className="scroll-mt-28">
                                {items.map((proj, idx) => (
                                    <div key={proj.id}  className="ml-6 mt-6 space-y-8">
                                        <BranchCard key={proj.id} project={proj} index={idx} />
                                    </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

function YearHeader({ year, month }: { year: number, month: string }) {
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10"/>
                <div className="flex items-center gap-2 text-sm text-gray-900 uppercase tracking-wider bg-white/10">
                    <Calendar className="h-4 w-4"/>
                    <span>{year}</span>
                    <span>{month}</span>
                </div>
            </div>
            <div className="h-px flex-1 bg-white/10"/>
        </>
    )
}

function BranchCard({ project, index }: { project: Project; index: number }) {
    return (
        <article
            className="relative rounded-2xl border border-slate-500/15 bg-slate-100/60 dark:bg-slate-900/30 p-5 sm:p-6 shadow-lg backdrop-blur [--tw-shadow-color:rgba(0,0,0,0.25)]"
            aria-labelledby={`${project.id}-title`}
        >
            {/* connector from rail to card on md+ */}
            <div className="hidden md:block absolute -left-6 top-6 w-6">
                <div className="relative h-0.5 bg-gray/30 mt-3">
                    <span className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-gray-500 ring-2 ring-neutral-800/40" />
                </div>
            </div>

            <header className="flex flex-auto items-start justify-between">
                <h3 id={`${project.id}-title`} className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                    <GitBranch className="h-5 w-5" />
                    {project.title}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full border border-gray-900/15 bg-white/5 px-3 py-1 text-xs text-gray-800">
                    <YearHeader year={project.year} month={project.month} />
                </span>
            </header>

            {project.role && (
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{project.role}</p>
            )}

            {project.subtitle && (
                <p className="mt-3 text-slate-800 dark:text-slate-200">{project.subtitle}</p>
            )}

            {project.impact && (
                <p className="mt-2 text-emerald-500/90">
                    <strong>Impact:</strong> {project.impact}
                </p>
            )}

            {(project.bullets?.length || 0) > 0 && (
                <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-800 dark:text-slate-200">
                    {project.bullets!.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            )}

            {(project.tech?.length || 0) > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.tech!.map((t) => (
                        <span
                            key={t}
                            className="inline-flex items-center gap-1 rounded-full border border-gray-500/10 bg-blue-100/60 dark:bg-slate-900/30 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-300"
                        >
                            {(t.toLowerCase().includes("cicd") || t.toLowerCase().includes("argo")) && <Workflow className="h-3.5 w-3.5" />}
                            {(t.toLowerCase().includes("kubernetes") || t.toLowerCase().includes("k8")) && <Server className="h-3.5 w-3.5" />}
                            {(t.toLowerCase().includes("slo") || t.toLowerCase().includes("opa") || t.toLowerCase().includes("security")) && <ShieldCheck className="h-3.5 w-3.5" />}
                            {t}
                        </span>
                    ))}
                </div>
            )}

            {(project.images?.length || 0) > 0 && (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.images!.map((img, i) => (
                        <figure key={i} className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
                            {/* Replace width/height with your real image sizes if available */}
                            <Image src={img.src} alt={img.alt} width={800} height={500} className="h-full w-full object-cover" />
                            <figcaption className="sr-only">{img.alt}</figcaption>
                        </figure>
                    ))}
                </div>
            )}

            {(project.links?.length || 0) > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                    {project.links!.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            target={l.href.startsWith("#") ? "_self" : "_blank"}
                            rel={l.href.startsWith("#") ? undefined : "noreferrer noopener"}
                            className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition"
                        >
                            <ExternalLink className="h-4 w-4" /> {l.label}
                        </a>
                    ))}
                </div>
            )}
        </article>
    );
}
