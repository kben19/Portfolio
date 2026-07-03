import React from "react";

const TONE = {
  good: { bg: "var(--tone-good-bg)", fg: "var(--tone-good-fg)" },
  bad: { bg: "var(--tone-bad-bg)", fg: "var(--tone-bad-fg)" },
  neutral: { bg: "var(--tone-neutral-bg)", fg: "var(--tone-neutral-fg)" },
};

/**
 * MetricCard — white stat tile (visitors / page views) used inside the
 * dark MiniDashboard panel on the About section.
 */
export function MetricCard({ label, value, delta, deltaTone = "good", helpText }) {
  const tone = TONE[deltaTone] || TONE.good;
  return (
    <div style={{ borderRadius: "var(--radius-xl)", border: "1px solid var(--border-on-dark)", background: "white", boxShadow: "var(--shadow-sm)" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", padding: "1rem", fontFamily: "var(--font-sans)" }}>
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--text-muted)" }}>{label}</span>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <span style={{ fontSize: "var(--text-3xl)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-tight)", color: "var(--text-primary)" }}>
            {value}
          </span>
          {delta && (
            <span style={{ marginLeft: "0.5rem", borderRadius: "var(--radius-md)", padding: "0.25rem 0.5rem", fontSize: "var(--text-xs)", fontWeight: "var(--weight-medium)", background: tone.bg, color: tone.fg }}>
              {delta}
            </span>
          )}
        </div>
        {helpText && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>{helpText}</span>}
      </div>
    </div>
  );
}
