'use client';

// components/TrafficLineChart.tsx
// Dual-line traffic trend chart (Visitors vs Page Views) with a soft gradient
// fill, gridlines, and a hover crosshair + tooltip snapping to the nearest
// day. Lives on the Visitors tab of DashboardPanel. Mouse tracking needs
// client state, hence 'use client'.

import { useRef, useState } from "react";

export type TrafficLineSeries = {
    label: string;
    color: string;      // CSS color for the line, its area fill, and legend dot
    values: number[];
};

type Props = {
    caption?: string;    // footer caption next to the legend, e.g. "Last 31 days"
    dates: string[];     // x-axis labels, one per data point
    series: TrafficLineSeries[];
};

const W = 320;
const H = 160;
const PAD_L = 22;
const PAD_T = 10;
const PAD_B = 18;

function smoothPath(points: Array<[number, number]>) {
    if (!points.length) return "";
    let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
    for (let i = 0; i < points.length - 1; i++) {
        const [x0, y0] = points[i];
        const [x1, y1] = points[i + 1];
        const mx = (x0 + x1) / 2;
        d += ` C ${mx.toFixed(2)} ${y0.toFixed(2)}, ${mx.toFixed(2)} ${y1.toFixed(2)}, ${x1.toFixed(2)} ${y1.toFixed(2)}`;
    }
    return d;
}

export default function TrafficLineChart({ caption = "Last 31 days", dates, series }: Props) {
    const [hoverIdx, setHoverIdx] = useState<number | null>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const n = dates.length;

    const allValues = series.flatMap((s) => s.values || []);
    const rawMax = Math.max(1, ...allValues);
    const niceMax = Math.max(10, Math.ceil(rawMax / 10) * 10);
    const ticks = [0, 1, 2, 3, 4].map((i) => Math.round((niceMax * i) / 4));

    const plotW = W - PAD_L;
    const plotH = H - PAD_T - PAD_B;
    const xFor = (i: number) => PAD_L + (n > 1 ? (i / (n - 1)) * plotW : plotW / 2);
    const yFor = (v: number) => PAD_T + plotH - (v / niceMax) * plotH;

    const seriesPoints: Array<Array<[number, number]>> = series.map((s) =>
        (s.values || []).map((v, i): [number, number] => [xFor(i), yFor(v)])
    );

    const labelStep = Math.max(1, Math.round(n / 4));
    const xLabels = dates.map((d, i) => ({ d, i })).filter(({ i }) => i % labelStep === 0 || i === n - 1);

    function handleMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!wrapRef.current || n === 0) return;
        const rect = wrapRef.current.getBoundingClientRect();
        const frac = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        setHoverIdx(Math.round(frac * (n - 1)));
    }

    const hoverFrac = hoverIdx == null ? null : n > 1 ? hoverIdx / (n - 1) : 0.5;

    return (
        <div className="min-w-0 flex-1 rounded-xl border border-white/[0.08] bg-[#1c2f4d] px-4 py-3">
            <div ref={wrapRef} onMouseMove={handleMove} onMouseLeave={() => setHoverIdx(null)} className="relative">
                <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full overflow-visible">
                    <defs>
                        {series.map((s, si) => (
                            <linearGradient key={si} id={`dashboard-lc-grad-${si}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={s.color} stopOpacity="0.28" />
                                <stop offset="100%" stopColor={s.color} stopOpacity="0" />
                            </linearGradient>
                        ))}
                    </defs>

                    {ticks.map((t, i) => (
                        <g key={i}>
                            <line x1={PAD_L} y1={yFor(t)} x2={W} y2={yFor(t)} stroke="rgb(255 255 255 / 0.06)" strokeWidth="1" />
                            <text x={PAD_L - 8} y={yFor(t) + 3} textAnchor="end" fontSize="9" fill="rgb(255 255 255 / 0.4)">
                                {t}
                            </text>
                        </g>
                    ))}

                    {seriesPoints.map((pts, si) => {
                        if (!pts.length) return null;
                        const linePath = smoothPath(pts);
                        const base = (PAD_T + plotH).toFixed(2);
                        const areaPath = `${linePath} L ${pts[pts.length - 1][0].toFixed(2)} ${base} L ${pts[0][0].toFixed(2)} ${base} Z`;
                        return (
                            <g key={si}>
                                <path d={areaPath} fill={`url(#dashboard-lc-grad-${si})`} stroke="none" />
                                <path d={linePath} fill="none" stroke={series[si].color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        );
                    })}

                    {hoverIdx != null && (
                        <line x1={xFor(hoverIdx)} y1={PAD_T} x2={xFor(hoverIdx)} y2={PAD_T + plotH} stroke="rgb(255 255 255 / 0.25)" strokeWidth="1" />
                    )}
                    {hoverIdx != null &&
                        seriesPoints.map(
                            (pts, si) =>
                                pts[hoverIdx] && (
                                    <circle
                                        key={si}
                                        cx={pts[hoverIdx][0]}
                                        cy={pts[hoverIdx][1]}
                                        r="4"
                                        fill={series[si].color}
                                        stroke="#1c2f4d"
                                        strokeWidth="2"
                                    />
                                )
                        )}

                    {xLabels.map(({ d, i }) => (
                        <text key={i} x={xFor(i)} y={H - 4} textAnchor="middle" fontSize="9" fill="rgb(255 255 255 / 0.4)">
                            {d}
                        </text>
                    ))}
                </svg>

                {hoverIdx != null && (
                    <div
                        className="pointer-events-none absolute top-1.5 whitespace-nowrap rounded-md border border-white/10 bg-[rgb(6_12_22_/_0.95)] px-2.5 py-2 text-xs text-white shadow-[0_10px_30px_rgb(0_0_0_/_0.25)]"
                        style={{
                            left: `${Math.min(75, Math.max(0, (hoverFrac ?? 0) * 100))}%`,
                            transform: (hoverFrac ?? 0) > 0.7 ? "translateX(-100%)" : "translateX(8px)",
                        }}
                    >
                        <div className="mb-1 text-white/50">{dates[hoverIdx]}</div>
                        {series.map((s) => (
                            <div key={s.label} className="flex items-center gap-1.5">
                                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                                {s.label}: <strong>{s.values[hoverIdx]}</strong>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <div className="flex gap-4">
                    {series.map((s) => (
                        <span key={s.label} className="flex items-center gap-1.5 text-xs text-white/60">
                            <span className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: s.color }} />
                            {s.label}
                        </span>
                    ))}
                </div>
                <span className="text-xs text-white/40">{caption}</span>
            </div>
        </div>
    );
}
