Dark glass "Showcase Dashboard" widget — icon-only tabs that reveal their label on hover/active, switching between a Visitors metric-card view and ranked bar lists (Countries/Devices/Browsers/Referrers).

```jsx
<DashboardPanel
  visitors={[{ label: "Visitors", value: 812, delta: "+18%", deltaTone: "good" }]}
  rows={{
    devices: [{ icon: "monitor", label: "Desktop", percent: 68 }, { icon: "smartphone", label: "Mobile", percent: 32 }],
    countries: [{ icon: null, label: "🇮🇩 Indonesia", percent: 54 }],
  }}
/>
```

Notable: composes `MetricCard` + `StatBarRow` + `Icon`. Source (`components/MiniDashboard.tsx`) pulls live Supabase analytics for a real personal-site visitor dashboard shown as a portfolio flourish — in the design system, feed it whatever sample numbers make sense.
