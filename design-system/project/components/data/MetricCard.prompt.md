White stat tile — label, big number, colored delta chip, optional caption. Sits on a dark surface (the About section's `MiniDashboard` panel).

```jsx
<MetricCard label="Visitors" value={1284} delta="+12%" deltaTone="good" helpText="Last 31 days" />
```

Notable: `deltaTone` drives the chip color only (emerald/rose/slate-tinted) — the big number itself never changes color. Always paired inside the dark `DashboardPanel`, never on a white background directly.
