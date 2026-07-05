import React from "react";

const TONE_TEXT = {
  good: "var(--emerald-400)",
  bad: "var(--rose-400)",
  neutral: "var(--slate-300)",
};

/**
 * MetricCard — dark navy stat tile (visitors / page views) used inside the
 * DashboardPanel on the About section. Sits on `--navy-panel-soft`, one
 * step lighter than the panel it's inside so it still reads as a tile.
 */
export function MetricCard({ label, value, delta, deltaTone = "good", helpText }) {
  const deltaColor = TONE_TEXT[deltaTone] || TONE_TEXT.good;
  return (
    <div style={{ borderRadius: "var(--radius-xl)", border: "1px solid var(--navy-panel-border)", background: "var(--navy-panel-soft)", flex: 1 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1.25rem", fontFamily: "var(--font-sans)" }}>
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "rgb(255 255 255 / 0.6)" }}>{label}</span>
        <span style={{ fontSize: "var(--text-3xl)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-tight)", color: "white" }}>
          {value}
        </span>
        {(delta || helpText) && (
          <span style={{ fontSize: "var(--text-sm)" }}>
            {delta && <span style={{ color: deltaColor, fontWeight: "var(--weight-semibold)" }}>{delta}</span>}
            {delta && helpText ? " " : null}
            {helpText && <span style={{ color: "rgb(255 255 255 / 0.45)" }}>{helpText}</span>}
          </span>
        )}
      </div>
    </div>
  );
}
