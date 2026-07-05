// components/StatBarRow.tsx
// Full-bleed gradient bar row for the Countries / OS / Referrers tabs of
// DashboardPanel. The gradient fill spans the row and its width encodes the
// percent, so the bar reads as a real chart rather than a track + pinned
// number. Countries get a circular flag + ISO code; OS/Referrers get their
// glyph. Countries also expose a hover tooltip (unique visitors / page views),
// revealed with a pure CSS group-hover — no client JS, so this stays a server
// component.

import Image from "next/image";

export type StatBarRowProps = {
    percent: number;              // real share, shown as the "NN%" label
    label: React.ReactNode;       // country / OS / referrer name
    gradientFrom: string;         // bar fill start color, e.g. "#059669"
    gradientTo: string;           // bar fill end color (leading edge glow)
    code?: string;                // ISO-2 country code → circular flag + code badge
    icon?: React.ReactNode;       // OS / referrer glyph (used when `code` is absent)
    tooltip?: React.ReactNode;    // optional hover card (countries only)
};

export default function StatBarRow({ percent, label, gradientFrom, gradientTo, code, icon, tooltip }: StatBarRowProps) {
    const clamped = Math.min(100, Math.max(0, percent));
    // Floor the visual width so the flag/label always sits on colored fill even
    // for tiny shares — the true value stays in the "NN%" label.
    const fillWidth = Math.max(clamped, 16);

    return (
        <div className="group relative transition-[z-index] hover:z-30">
            <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#1c2f4d]">
                {/* Gradient bar fill — width encodes the share */}
                <div
                    className="absolute inset-y-0 left-0 transition-[filter] duration-300 group-hover:brightness-110"
                    style={{
                        width: `${fillWidth}%`,
                        background: `linear-gradient(90deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                        boxShadow: `0 0 16px -2px ${gradientTo}`,
                    }}
                />

                {/* Content sits above the fill */}
                <div className="relative flex items-center gap-2.5 px-2.5 py-2 [text-shadow:0_1px_2px_rgb(0_0_0_/_0.35)]">
                    {code ? (
                        <span className="flex shrink-0 items-center gap-1.5">
                            <span className="relative h-6 w-6 overflow-hidden rounded-full ring-1 ring-white/30">
                                <Image
                                    src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
                                    alt={code}
                                    fill
                                    sizes="24px"
                                    className="object-cover"
                                />
                            </span>
                            <span className="text-xs font-bold uppercase text-white">{code}</span>
                        </span>
                    ) : icon ? (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-white">{icon}</span>
                    ) : null}

                    <span className="truncate text-sm font-medium text-white">{label}</span>
                    <span className="shrink-0 text-xs font-semibold text-white/90 [font-variant-numeric:tabular-nums]">
                        {percent}%
                    </span>
                </div>
            </div>

            {tooltip && (
                <div className="pointer-events-none absolute left-1/2 top-full z-30 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-[rgb(6_12_22_/_0.96)] px-3 py-2 text-xs opacity-0 shadow-[0_10px_30px_rgb(0_0_0_/_0.4)] transition-opacity duration-200 group-hover:opacity-100">
                    {tooltip}
                </div>
            )}
        </div>
    );
}
