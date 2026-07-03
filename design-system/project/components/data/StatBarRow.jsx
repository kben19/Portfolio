import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * StatBarRow — one row of a ranked bar list (countries / devices / browsers /
 * OS / referrers tabs inside DashboardPanel). Icon + label, a track bar, and
 * a right-aligned percentage.
 */
export function StatBarRow({ icon, iconSet = "lucide", label, percent }) {
  return (
    <div style={{ borderRadius: "var(--radius-lg)", background: "rgb(255 255 255 / 0.05)", padding: "0.5rem 0.75rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr 1fr", alignItems: "center", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
          {icon && <Icon name={icon} set={iconSet} size={16} className="ds-statbar-icon" />}
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "var(--text-sm)", color: "rgb(255 255 255 / 0.9)" }}>
            {label}
          </span>
        </div>
        <div style={{ height: 8, borderRadius: "var(--radius-full)", background: "rgb(255 255 255 / 0.1)", overflow: "hidden" }}>
          <div style={{ height: 8, borderRadius: "var(--radius-full)", background: "rgb(255 255 255 / 0.7)", width: `${Math.min(100, Math.max(0, percent))}%` }} />
        </div>
        <div style={{ textAlign: "right", fontSize: "var(--text-sm)", color: "rgb(255 255 255 / 0.8)", fontVariantNumeric: "tabular-nums" }}>
          {percent}%
        </div>
      </div>
      <style>{`.ds-statbar-icon { color: rgb(255 255 255 / 0.8); }`}</style>
    </div>
  );
}
