// components/MiniDashboard.tsx

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

interface MiniDashboardProps {
    cards: MetricCard[];
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

export default function MiniDashboard({cards}: MiniDashboardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
            <p className="mb-3 text-sm font-medium text-white/80">Showcase Dashboard (WIP)</p>

            {/* Vertical stack for narrow column */}
            <div className="flex flex-col gap-3">
                {cards.map((card, index) => (
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
    );
}
