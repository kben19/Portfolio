Dark navy stat tile — label, big white number, colored delta text inline with a muted caption (no chip/pill). Sits on `--navy-panel-soft`, one step lighter than the `DashboardPanel` card it's inside.

```jsx
<MetricCard label="Visitors" value={1284} delta="+12%" deltaTone="good" helpText="Last 31 days" />
```

Notable: `deltaTone` drives the delta text color only (emerald/rose/slate) — the big number is always white. `delta` and `helpText` render on one line, e.g. "+12% Last 31 days". Always paired inside the dark `DashboardPanel`, never on a white background.
