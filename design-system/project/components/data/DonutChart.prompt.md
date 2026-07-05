Hollow ring (donut) chart with a legend — center shows the top segment's percent + label. Used for the Devices and Browsers tabs of `DashboardPanel`.

```jsx
<DonutChart
  data={[
    { label: "Desktop", percent: 68, color: "var(--accent)", icon: "monitor" },
    { label: "Mobile", percent: 29, color: "var(--sky-500)", icon: "smartphone" },
    { label: "Tablet", percent: 3, color: "var(--slate-400)", icon: "tablet-smartphone" },
  ]}
/>
```

Notable: pass 2-4 segments already sorted largest-first (the first becomes the center readout) and pre-assign each a color from the shared categorical palette (`var(--accent)`, `var(--sky-500)`, `var(--slate-400)`, `var(--rose-400)`) — the component doesn't invent colors. Countries/Referrers stay bar lists (`StatBarRow`); reserve the donut shape for Devices/Browsers so the two chart types stay visually distinct per tab.
