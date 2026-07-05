import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";
import { MetricCard } from "./MetricCard.jsx";
import { StatBarRow } from "./StatBarRow.jsx";
import { TrafficLineChart } from "./TrafficLineChart.jsx";
import { DonutChart } from "./DonutChart.jsx";

const TABS = [
  { id: "visitors", label: "Visitors", icon: "users" },
  { id: "countries", label: "Countries", icon: "globe-2" },
  { id: "devices", label: "Devices", icon: "monitor" },
  { id: "browsers", label: "Browsers", icon: "globe" },
  { id: "referrers", label: "Referrers", icon: "external-link" },
];

const DONUT_TABS = ["devices", "browsers"];
const DONUT_PALETTE = ["var(--accent)", "var(--sky-500)", "var(--slate-400)", "var(--rose-400)"];
const BAR_COLOR = { countries: "var(--accent)", referrers: "var(--sky-500)" };

/**
 * DashboardPanel — premium-navy "Showcase Dashboard" widget on the About
 * section. Full-text tabs (always visible, not icon-only) switch between a
 * Visitors view (two metric tiles + a shared traffic line chart) and ranked
 * breakdowns: Countries/Referrers as bar lists, Devices/Browsers as donuts.
 */
export function DashboardPanel({
  title = "Dashboard Showcase",
  subheader = "Live Traffic Showcase (Click to Explore)",
  credit,
  visitors = [],
  series,
  rows = {},
  topN = 6,
}) {
  const [tab, setTab] = useState("visitors");

  return (
    <div style={{ borderRadius: "var(--radius-2xl)", border: "1px solid var(--navy-panel-border)", background: "var(--navy-panel)", padding: "1.5rem", fontFamily: "var(--font-sans)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1.25rem" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ margin: "0 0 0.375rem", fontSize: "var(--text-xl)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-tight)", color: "white", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {title}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="ds-live-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 0 3px rgb(16 185 129 / 0.2)", flexShrink: 0 }} />
            <span style={{ fontSize: "var(--text-sm)", color: "rgb(255 255 255 / 0.55)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{subheader}</span>
          </div>
        </div>
        {credit && <div style={{ flexShrink: 0, whiteSpace: "nowrap" }}>{credit}</div>}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.25rem", borderBottom: "1px solid var(--navy-panel-border)" }}>
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "none",
                borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
                background: "none",
                padding: "0 0 0.75rem",
                cursor: "pointer",
                fontSize: "var(--text-sm)",
                fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
                color: active ? "white" : "rgb(255 255 255 / 0.45)",
                transition: "color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)",
              }}
            >
              <Icon name={t.icon} size={16} />
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === "visitors" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {visitors.map((card, i) => <MetricCard key={i} {...card} helpText="Last 31 days" />)}
          </div>
          {series && (
            <TrafficLineChart
              dates={series.dates}
              series={[
                { label: "Visitors", color: "var(--accent)", values: series.visitors },
                { label: "Page Views", color: "var(--sky-500)", values: series.pageViews },
              ]}
            />
          )}
        </div>
      )}

      {tab !== "visitors" && DONUT_TABS.includes(tab) && (
        <DonutChart
          data={(rows[tab] || []).slice(0, topN).map((r, i) => ({ ...r, color: DONUT_PALETTE[i % DONUT_PALETTE.length] }))}
        />
      )}

      {tab !== "visitors" && !DONUT_TABS.includes(tab) && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {(rows[tab] || []).slice(0, topN).map((r, i) => (
            <StatBarRow key={i} icon={r.icon} iconSet={r.iconSet} label={r.label} percent={r.percent} color={BAR_COLOR[tab] || "var(--accent)"} />
          ))}
          <span style={{ fontSize: "var(--text-xs)", color: "rgb(255 255 255 / 0.4)", paddingLeft: "0.5rem", paddingTop: "0.25rem" }}>Last 31 days</span>
        </div>
      )}

      <style>{`
        @keyframes ds-live-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        .ds-live-dot { animation: ds-live-pulse 2s var(--ease-out) infinite; }
      `}</style>
    </div>
  );
}
