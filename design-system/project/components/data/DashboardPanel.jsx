import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";
import { MetricCard } from "./MetricCard.jsx";
import { StatBarRow } from "./StatBarRow.jsx";

const TABS = [
  { id: "visitors", label: "Visitors", icon: "users" },
  { id: "countries", label: "Countries", icon: "globe-2" },
  { id: "devices", label: "Devices", icon: "monitor" },
  { id: "browsers", label: "Browsers", icon: "globe" },
  { id: "referrers", label: "Referrers", icon: "external-link" },
];

/**
 * DashboardPanel — dark glass panel with icon-only (label-on-hover) tabs.
 * A tiny self-service analytics widget shown on the About section as a
 * "proof of work" flourish, not a real product surface.
 */
export function DashboardPanel({ title = "Showcase Dashboard", visitors = [], rows = {}, topN = 6 }) {
  const [tab, setTab] = useState("visitors");
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ borderRadius: "var(--radius-2xl)", border: "1px solid var(--border-on-dark)", background: "rgb(255 255 255 / 0.05)", padding: "1.25rem", fontFamily: "var(--font-sans)" }}>
      <p style={{ margin: "0 0 0.75rem", fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "rgb(255 255 255 / 0.8)" }}>{title}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        {TABS.map((t, i) => {
          const active = tab === t.id;
          const showLabel = active || hovered === i;
          return (
            <button
              key={t.id}
              type="button"
              aria-label={t.label}
              onClick={() => setTab(t.id)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "var(--radius-xl)",
                border: "none",
                padding: "0.5rem",
                cursor: "pointer",
                background: active ? "rgb(255 255 255 / 0.15)" : "rgb(255 255 255 / 0.05)",
                color: active ? "white" : "rgb(255 255 255 / 0.7)",
                transition: "background var(--duration-base) var(--ease-out)",
              }}
            >
              <Icon name={t.icon} size={16} />
              <span style={{ whiteSpace: "nowrap", fontSize: "var(--text-xs)", marginLeft: showLabel ? 6 : 0, maxWidth: showLabel ? 120 : 0, overflow: "hidden", transition: "all 150ms" }}>
                {t.label}
              </span>
            </button>
          );
        })}
      </div>

      {tab === "visitors" && (
        <div style={{ borderRadius: "var(--radius-xl)", background: "rgb(255 255 255 / 0.05)", padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {visitors.map((card, i) => <MetricCard key={i} {...card} helpText="Last 31 days" />)}
        </div>
      )}

      {tab !== "visitors" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {(rows[tab] || []).slice(0, topN).map((r, i) => (
            <StatBarRow key={i} icon={r.icon} iconSet={r.iconSet} label={r.label} percent={r.percent} />
          ))}
          <span style={{ fontSize: "var(--text-xs)", color: "var(--slate-500)", paddingLeft: "0.5rem", paddingTop: "0.25rem" }}>Last 31 days</span>
        </div>
      )}
    </div>
  );
}
