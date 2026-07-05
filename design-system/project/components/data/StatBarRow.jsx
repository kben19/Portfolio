import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * StatBarRow — one row of a ranked bar list (countries / devices / browsers /
 * OS / referrers tabs inside DashboardPanel). Icon + label, a track bar, and
 * a right-aligned percentage.
 */
export function StatBarRow({ icon, iconSet = "lucide", label, percent, color = "var(--accent)" }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${hover ? "rgb(255 255 255 / 0.18)" : "var(--navy-panel-border)"}`,
        background: hover ? "rgb(255 255 255 / 0.06)" : "var(--navy-panel-soft)",
        padding: "0.625rem 0.875rem",
        transform: hover ? "translateX(3px)" : "translateX(0)",
        transition: "background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "5fr 4fr 1fr", alignItems: "center", gap: "0.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
          {icon && <Icon name={icon} set={iconSet} size={16} className="ds-statbar-icon" />}
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "var(--text-sm)", color: hover ? "white" : "rgb(255 255 255 / 0.9)", transition: "color var(--duration-fast) var(--ease-out)" }}>
            {label}
          </span>
        </div>
        <div style={{ height: 8, borderRadius: "var(--radius-full)", background: "rgb(255 255 255 / 0.08)", overflow: "hidden" }}>
          <div
            style={{
              height: 8,
              borderRadius: "var(--radius-full)",
              background: color,
              width: `${Math.min(100, Math.max(0, percent))}%`,
              filter: hover ? "brightness(1.25)" : "brightness(1)",
              boxShadow: hover ? `0 0 10px ${color}` : "none",
              transition: "filter var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
            }}
          />
        </div>
        <div style={{ textAlign: "right", fontSize: "var(--text-sm)", color: hover ? "white" : "rgb(255 255 255 / 0.8)", fontVariantNumeric: "tabular-nums", transition: "color var(--duration-fast) var(--ease-out)" }}>
          {percent}%
        </div>
      </div>
      <style>{`.ds-statbar-icon { color: rgb(255 255 255 / 0.8); }`}</style>
    </div>
  );
}
