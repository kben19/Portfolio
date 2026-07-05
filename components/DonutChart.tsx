'use client';

// components/DonutChart.tsx
// Hollow ring breakdown with a legend, used for the Devices and Browsers tabs
// of DashboardPanel (Countries/Referrers/OS use StatBarRow bar lists instead —
// the two chart types are deliberately different so each tab's shape reads at
// a glance). Hover is synced between the arc and its legend row, which needs
// shared state, hence 'use client'.

import { useState } from "react";

export type DonutSegment = {
    label: string;
    percent: number;      // 0-100, drawn clockwise from the top in array order
    color: string;        // CSS color for the ring segment + legend dot
    icon?: React.ReactNode;
};

type Props = {
    data: DonutSegment[];
};

const SIZE = 174;
const STROKE = 30;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

export default function DonutChart({ data }: Props) {
    const [hoverIdx, setHoverIdx] = useState<number | null>(null);
    let cumulative = 0;
    const top = hoverIdx != null ? data[hoverIdx] : data[0];

    return (
        <div className="flex flex-wrap items-center justify-center gap-5 rounded-xl border border-white/[0.08] bg-[#1c2f4d] p-4">
            <div className="relative shrink-0" style={{ width: SIZE, height: SIZE }}>
                <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full -rotate-90 overflow-visible">
                    <circle cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none" stroke="rgb(255 255 255 / 0.06)" strokeWidth={STROKE} />
                    {data.map((d, i) => {
                        const len = Math.max(0, (d.percent / 100) * CIRC - 2);
                        const dashoffset = -((cumulative / 100) * CIRC);
                        cumulative += d.percent;
                        const isHover = hoverIdx === i;
                        const isDim = hoverIdx != null && !isHover;
                        return (
                            <circle
                                key={i}
                                cx={SIZE / 2}
                                cy={SIZE / 2}
                                r={R}
                                fill="none"
                                stroke={d.color}
                                strokeWidth={isHover ? STROKE + 5 : STROKE}
                                strokeDasharray={`${len} ${CIRC - len}`}
                                strokeDashoffset={dashoffset}
                                strokeLinecap="round"
                                opacity={isDim ? 0.35 : 1}
                                onMouseEnter={() => setHoverIdx(i)}
                                onMouseLeave={() => setHoverIdx(null)}
                                className="cursor-pointer transition-[stroke-width,opacity] duration-300"
                            />
                        );
                    })}
                </svg>
                {top && (
                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-2xl font-bold leading-none text-white">{top.percent}%</span>
                        <span className="mt-0.5 text-xs text-white/50">{top.label}</span>
                    </div>
                )}
            </div>
            <div className="flex w-fit min-w-[120px] max-w-[200px] flex-col gap-2">
                {data.map((d, i) => {
                    const isHover = hoverIdx === i;
                    const isDim = hoverIdx != null && !isHover;
                    return (
                        <div
                            key={i}
                            onMouseEnter={() => setHoverIdx(i)}
                            onMouseLeave={() => setHoverIdx(null)}
                            className={`-mx-1.5 flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 transition duration-300 ${
                                isHover ? "bg-white/[0.08]" : "bg-transparent"
                            } ${isDim ? "opacity-50" : "opacity-100"}`}
                        >
                            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: d.color }} />
                            {d.icon && <span className="shrink-0 text-white/70">{d.icon}</span>}
                            <span
                                className={`truncate text-sm transition duration-300 ${
                                    isHover ? "font-semibold text-white" : "font-normal text-white/85"
                                }`}
                            >
                                {d.label}
                            </span>
                            <span
                                className={`shrink-0 text-sm [font-variant-numeric:tabular-nums] transition duration-300 ${
                                    isHover ? "text-white" : "text-white/60"
                                }`}
                            >
                                {d.percent}%
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
