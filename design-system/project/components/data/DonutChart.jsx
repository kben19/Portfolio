import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";

const SIZE = 144;
const STROKE = 20;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

/**
 * DonutChart — hollow ring breakdown with a legend, used for the Devices
 * and Browsers tabs of `DashboardPanel` (Countries/Referrers use
 * `StatBarRow` bar lists instead — the two chart types are deliberately
 * different so each tab's shape is recognizable at a glance).
 */
export function DonutChart({ data = [] }) {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  let cumulative = 0;
  const top = hoverIdx != null ? data[hoverIdx] : data[0];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", borderRadius: "var(--radius-xl)", border: "1px solid var(--navy-panel-border)", background: "var(--navy-panel-soft)", padding: "1.25rem", fontFamily: "var(--font-sans)" }}>
      <div style={{ position: "relative", width: SIZE, height: SIZE, flexShrink: 0 }}>
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ width: "100%", height: "100%", transform: "rotate(-90deg)", overflow: "visible" }}>
          <circle cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none" stroke="rgb(255 255 255 / 0.06)" strokeWidth={STROKE} />
          {data.map((d, i) => {
            const len = Math.max(0, (d.percent / 100) * CIRC - 2);
            const dashoffset = -((cumulative / 100) * CIRC);
            cumulative += d.percent;
            const isHover = hoverIdx === i;
            const isDim = hoverIdx != null && !isHover;
            return (
              <circle
                key={i}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                fill="none"
                stroke={d.color}
                strokeWidth={isHover ? STROKE + 5 : STROKE}
                strokeDasharray={`${len} ${CIRC - len}`}
                strokeDashoffset={dashoffset}
                strokeLinecap="round"
                opacity={isDim ? 0.35 : 1}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                style={{ cursor: "pointer", transition: "stroke-width var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out)" }}
              />
            );
          })}
        </svg>
        {top && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", pointerEvents: "none" }}>
            <span style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--weight-bold)", color: "white", lineHeight: 1 }}>{top.percent}%</span>
            <span style={{ fontSize: "var(--text-xs)", color: "rgb(255 255 255 / 0.5)", marginTop: 2 }}>{top.label}</span>
          </div>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1, minWidth: 140 }}>
        {data.map((d, i) => {
          const isHover = hoverIdx === i;
          const isDim = hoverIdx != null && !isHover;
          return (
            <div
              key={i}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer",
                borderRadius: "var(--radius-md)",
                padding: "0.25rem 0.375rem",
                marginInline: "-0.375rem",
                background: isHover ? "rgb(255 255 255 / 0.08)" : "transparent",
                opacity: isDim ? 0.5 : 1,
                transition: "background var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out)",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: d.color, flexShrink: 0 }} />
              {d.icon && <Icon name={d.icon} set={d.iconSet} size={14} style={{ color: "rgb(255 255 255 / 0.7)" }} />}
              <span style={{ flex: 1, fontSize: "var(--text-sm)", color: isHover ? "white" : "rgb(255 255 255 / 0.85)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontWeight: isHover ? "var(--weight-semibold)" : "var(--weight-regular)" }}>{d.label}</span>
              <span style={{ fontSize: "var(--text-sm)", color: isHover ? "white" : "rgb(255 255 255 / 0.6)", fontVariantNumeric: "tabular-nums" }}>{d.percent}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
