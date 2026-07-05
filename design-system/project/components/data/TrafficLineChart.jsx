import React, { useRef, useState } from "react";

const W = 600;
const H = 220;
const PAD_L = 26;
const PAD_T = 12;
const PAD_B = 24;

function smoothPath(points) {
  if (!points.length) return "";
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    const mx = (x0 + x1) / 2;
    d += ` C ${mx.toFixed(2)} ${y0.toFixed(2)}, ${mx.toFixed(2)} ${y1.toFixed(2)}, ${x1.toFixed(2)} ${y1.toFixed(2)}`;
  }
  return d;
}

/**
 * TrafficLineChart — dual-line traffic trend chart (Visitors vs Page Views)
 * with a soft gradient fill, gridlines, and a hover crosshair + tooltip.
 * Used on the Visitors tab of `DashboardPanel`, replacing the old per-metric
 * sparkline with one shared, larger chart.
 */
export function TrafficLineChart({ caption = "Last 31 days", dates = [], series = [] }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const wrapRef = useRef(null);
  const n = dates.length;

  const allValues = series.flatMap((s) => s.values || []);
  const rawMax = Math.max(1, ...allValues);
  const niceMax = Math.max(10, Math.ceil(rawMax / 10) * 10);
  const ticks = [0, 1, 2, 3, 4].map((i) => Math.round((niceMax * i) / 4));

  const plotW = W - PAD_L;
  const plotH = H - PAD_T - PAD_B;
  const xFor = (i) => PAD_L + (n > 1 ? (i / (n - 1)) * plotW : plotW / 2);
  const yFor = (v) => PAD_T + plotH - (v / niceMax) * plotH;

  const seriesPoints = series.map((s) => (s.values || []).map((v, i) => [xFor(i), yFor(v)]));

  const labelStep = Math.max(1, Math.round(n / 6));
  const xLabels = dates.map((d, i) => ({ d, i })).filter(({ i }) => i % labelStep === 0 || i === n - 1);

  function handleMove(e) {
    if (!wrapRef.current || n === 0) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setHoverIdx(Math.round(frac * (n - 1)));
  }

  const hoverFrac = hoverIdx == null ? null : n > 1 ? hoverIdx / (n - 1) : 0.5;

  return (
    <div style={{ borderRadius: "var(--radius-xl)", border: "1px solid var(--navy-panel-border)", background: "var(--navy-panel-soft)", padding: "1rem 1.25rem", fontFamily: "var(--font-sans)", flex: 1, minWidth: 0 }}>
      <div ref={wrapRef} onMouseMove={handleMove} onMouseLeave={() => setHoverIdx(null)} style={{ position: "relative" }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}>
          <defs>
            {series.map((s, si) => (
              <linearGradient key={si} id={`ds-lc-grad-${si}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.color} stopOpacity="0.28" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {ticks.map((t, i) => (
            <g key={i}>
              <line x1={PAD_L} y1={yFor(t)} x2={W} y2={yFor(t)} stroke="rgb(255 255 255 / 0.06)" strokeWidth="1" />
              <text x={PAD_L - 8} y={yFor(t) + 3} textAnchor="end" fontSize="9" fill="rgb(255 255 255 / 0.4)">{t}</text>
            </g>
          ))}

          {seriesPoints.map((pts, si) => {
            if (!pts.length) return null;
            const linePath = smoothPath(pts);
            const base = (PAD_T + plotH).toFixed(2);
            const areaPath = `${linePath} L ${pts[pts.length - 1][0].toFixed(2)} ${base} L ${pts[0][0].toFixed(2)} ${base} Z`;
            return (
              <g key={si}>
                <path d={areaPath} fill={`url(#ds-lc-grad-${si})`} stroke="none" />
                <path d={linePath} fill="none" stroke={series[si].color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            );
          })}

          {hoverIdx != null && (
            <line x1={xFor(hoverIdx)} y1={PAD_T} x2={xFor(hoverIdx)} y2={PAD_T + plotH} stroke="rgb(255 255 255 / 0.25)" strokeWidth="1" />
          )}
          {hoverIdx != null && seriesPoints.map((pts, si) => pts[hoverIdx] && (
            <circle key={si} cx={pts[hoverIdx][0]} cy={pts[hoverIdx][1]} r="4" fill={series[si].color} stroke="var(--navy-panel-soft)" strokeWidth="2" />
          ))}

          {xLabels.map(({ d, i }) => (
            <text key={i} x={xFor(i)} y={H - 4} textAnchor="middle" fontSize="9" fill="rgb(255 255 255 / 0.4)">{d}</text>
          ))}
        </svg>

        {hoverIdx != null && (
          <div
            style={{
              position: "absolute",
              top: 6,
              left: `${Math.min(75, Math.max(0, hoverFrac * 100))}%`,
              transform: hoverFrac > 0.7 ? "translateX(-100%)" : "translateX(8px)",
              background: "rgb(6 12 22 / 0.95)",
              border: "1px solid rgb(255 255 255 / 0.1)",
              borderRadius: "var(--radius-md)",
              padding: "0.5rem 0.625rem",
              fontSize: "var(--text-xs)",
              color: "white",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              boxShadow: "var(--shadow-card-lg)",
            }}
          >
            <div style={{ color: "rgb(255 255 255 / 0.5)", marginBottom: 4 }}>{dates[hoverIdx]}</div>
            {series.map((s) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, display: "inline-block" }} />
                {s.label}: <strong>{s.values[hoverIdx]}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", paddingTop: "0.625rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          {series.map((s) => (
            <span key={s.label} style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "var(--text-xs)", color: "rgb(255 255 255 / 0.6)" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.color, display: "inline-block" }} />
              {s.label}
            </span>
          ))}
        </div>
        <span style={{ fontSize: "var(--text-xs)", color: "rgb(255 255 255 / 0.4)" }}>{caption}</span>
      </div>
    </div>
  );
}
