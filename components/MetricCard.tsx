// components/MetricCard.tsx
// Dark navy stat tile (visitors / page views) used inside DashboardPanel's
// Visitors tab. Sits on --navy-panel-soft (#1c2f4d), one step lighter than
// the panel it's inside so it still reads as a distinct tile.

export type MetricCardTone = "good" | "bad" | "neutral";

export type MetricCardData = {
    label: string;
    value: number | string;
    delta?: string;          // e.g. "+18%"
    deltaTone?: MetricCardTone;
};

type Props = MetricCardData & {
    helpText?: string;       // optional small caption, e.g. "Last 31 days"
};

const TONE_TEXT: Record<MetricCardTone, string> = {
    good: "text-emerald-400",
    bad: "text-rose-400",
    neutral: "text-slate-300",
};

export default function MetricCard({ label, value, delta, deltaTone = "good", helpText }: Props) {
    return (
        <div className="rounded-xl border border-white/[0.08] bg-[#1c2f4d]">
            <div className="flex flex-col gap-2 p-4">
                <span className="text-m font-medium text-white/60">{label}</span>
                <span className="text-2xl font-bold tracking-tight text-white">{value}</span>
                {(delta || helpText) && (
                    <span className="text-xs mt-1">
                        {delta && <span className={`font-semibold ${TONE_TEXT[deltaTone]}`}>{delta}</span>}
                        {delta && helpText ? " " : null}
                        {helpText && <span className="text-white/45">{helpText}</span>}
                    </span>
                )}
            </div>
        </div>
    );
}
