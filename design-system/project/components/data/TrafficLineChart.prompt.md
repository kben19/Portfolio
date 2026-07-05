Dual-line traffic chart with a soft gradient fill under each line, faint gridlines, and a hover crosshair + tooltip snapping to the nearest day. No title bar — the legend (color dot + series name) sits in a compact footer row below the plot, opposite the caption, to keep the card short. Lives on the Visitors tab of `DashboardPanel`, one shared chart replacing the old per-metric-card sparkline.

```jsx
<TrafficLineChart
  caption="Last 31 days"
  dates={["Dec 1", "Dec 2", "…"]}
  series={[
    { label: "Visitors", color: "var(--accent)", values: [40, 44, 38, "…"] },
    { label: "Page Views", color: "var(--sky-500)", values: [95, 101, 88, "…"] },
  ]}
/>
```

Notable: give each series a distinct color from the two-hue chart palette (`var(--accent)` emerald for Visitors, `var(--sky-500)` for Page Views) — don't add a third hue, it's a two-series chart by design. Renders on `--navy-panel-soft`, same surface as `MetricCard` and `StatBarRow`.
