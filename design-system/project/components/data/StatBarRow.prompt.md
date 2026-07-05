Ranked bar-list row on `--navy-panel-soft` — small leading icon, truncating label, a colored progress track, right-aligned percentage. Used for the Countries and Referrers tabs of `DashboardPanel` (Devices/Browsers use `DonutChart` instead).

```jsx
<StatBarRow icon="monitor" label="Desktop" percent={72} color="var(--accent)" />
<StatBarRow icon={null} label="🇮🇩 Indonesia" percent={54} color="var(--accent)" />
```

Notable: `color` (default `var(--accent)`, emerald) tints the fill only — pass a different accent per tab (e.g. `var(--sky-500)` for Referrers) so the two bar-chart tabs read as distinct datasets. The Countries tab uses an emoji flag instead of an icon glyph (pass `icon={null}` and prepend the flag to `label`) — the only place emoji appears anywhere in the product. Always rendered in a vertical stack, top ~6 rows only ("Last 31 days" caption below the list).
