Premium-navy "Showcase Dashboard" widget — full-text tabs (icon + label, always visible, not hover-reveal) switching between a Visitors view (two metric tiles + a shared traffic line chart) and ranked breakdowns.

```jsx
<DashboardPanel
  title="Dashboard Showcase"
  subheader="Live Traffic Showcase (Click to Explore)"
  credit={<span style={{ color: "rgb(255 255 255 / 0.4)", fontSize: 12 }}>Powered by Supabase</span>}
  visitors={[{ label: "Visitors", value: 812, delta: "+18%", deltaTone: "good" }]}
  series={{ dates: ["Dec 1", "…"], visitors: [40, "…"], pageViews: [95, "…"] }}
  rows={{
    devices: [{ icon: "monitor", label: "Desktop", percent: 68 }, { icon: "smartphone", label: "Mobile", percent: 32 }],
    countries: [{ icon: null, label: "🇮🇩 Indonesia", percent: 54 }],
  }}
/>
```

Notable: `credit` sits top-right, level with the title, so a "powered by" attribution doesn't need its own row below the card. Composes `MetricCard` + `TrafficLineChart` (Visitors tab), `StatBarRow` (Countries/Referrers tabs), `DonutChart` (Devices/Browsers tabs), `Icon`. Sits directly on `var(--navy-panel)`, a shade lighter than the About section's `--navy-about` behind it, so the card reads as a distinct floating surface rather than a flat continuation of the section background. Source (`components/MiniDashboard.tsx`) pulls live Supabase analytics for a real personal-site visitor dashboard shown as a portfolio flourish — in the design system, feed it whatever sample numbers make sense.
