// components/ProjectTimelineCard.tsx
import { CheckCircle, ExternalLink, ImageIcon } from "lucide-react";
import ProjectImageGallery from "./ProjectImageGallery";

export type Project = {
    id: string;
    year: number;
    month: string;
    title: string;
    role?: string;
    subtitle?: string;
    status?: { label: string };
    metrics?: { value: string; label: string }[];
    impact?: string;
    bullets?: string[];
    techGroups?: { category: string; items: string[] }[];
    tech?: string[];
    links?: { label: string; href: string }[];
    images?: { src: string; alt: string; width: number; height: number }[];
    // Reserves the two-column image slot with a "coming soon" placeholder
    // when images aren't ready yet but the layout should already account for them.
    imagePlaceholder?: boolean;
};

interface Props {
    project: Project;
}

export default function ProjectTimelineCard({ project }: Props) {
    const {
        title,
        role,
        year,
        month,
        subtitle,
        status,
        metrics = [],
        impact,
        bullets = [],
        techGroups = [],
        tech = [],
        images = [],
        links = [],
        imagePlaceholder = false,
    } = project;

    const hasImages = images.length > 0;
    const showImagePanel = hasImages || imagePlaceholder;
    const showMetrics = metrics.length > 0;

    return (
        <article className="rounded-2xl border border-slate-500/[0.15] bg-white p-7 px-8">
            <div
                className={
                    showImagePanel
                        ? "grid items-start gap-10 min-[860px]:grid-cols-[minmax(0,1.4fr)_minmax(240px,1fr)]"
                        : ""
                }
            >
                {/* Content column */}
                <div className="min-w-0">
                    <header className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                        <span className="whitespace-nowrap rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs uppercase tracking-wide text-gray-700">
                            {year} {month}
                        </span>
                    </header>

                    {role && <p className="mt-1.5 text-sm text-gray-500">{role}</p>}

                    {subtitle && <p className="mt-3 leading-relaxed text-slate-800">{subtitle}</p>}

                    {status && (
                        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-xs font-medium text-emerald-700">
                            <CheckCircle size={13} className="text-emerald-500" />
                            {status.label}
                        </span>
                    )}

                    {showMetrics ? (
                        <div className="mt-6 flex flex-col overflow-hidden rounded-xl border border-gray-200 sm:flex-row">
                            {metrics.slice(0, 3).map((m, i) => (
                                <div
                                    key={m.label}
                                    className={`flex-1 px-6 py-5 ${
                                        i === 0 ? "" : "border-t border-gray-200 sm:border-l sm:border-t-0"
                                    }`}
                                >
                                    <div className="text-3xl font-bold tracking-tight text-emerald-500">
                                        {m.value}
                                    </div>
                                    <div className="mt-1 text-sm text-gray-500">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    ) : impact ? (
                        <p className="mt-4 text-emerald-700">
                            <strong>Impact:</strong> {impact}
                        </p>
                    ) : null}

                    {bullets.length > 0 && (
                        <ul className="mt-5 flex list-disc flex-col gap-1.5 pl-5 text-slate-800">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    )}

                    {techGroups.length > 0 ? (
                        <div className="mt-6 flex flex-col gap-2.5">
                            {techGroups.map((g) => (
                                <div key={g.category} className="flex flex-wrap items-center gap-2">
                                    <span className="shrink-0 text-sm font-medium text-emerald-700">
                                        {g.category}:
                                    </span>
                                    {g.items.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : tech.length > 0 ? (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-700"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    {links.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-5">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-gray-900 underline underline-offset-[3px]"
                                >
                                    <ExternalLink size={14} />
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* Image panel — click any image to open it full-size */}
                {hasImages ? (
                    <ProjectImageGallery images={images} />
                ) : imagePlaceholder ? (
                    <div className="flex min-h-[220px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400">
                        <ImageIcon className="h-8 w-8" />
                        <span className="text-sm font-medium">Image coming soon</span>
                    </div>
                ) : null}
            </div>
        </article>
    );
}
