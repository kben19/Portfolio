Ranked bar-list row on a dark surface — small leading icon, truncating label, a translucent-white progress track, right-aligned percentage.

```jsx
<StatBarRow icon="monitor" label="Desktop" percent={72} />
<StatBarRow icon={null} label="🇮🇩 Indonesia" percent={54} />
```

Notable: the Countries tab uses an emoji flag instead of an icon glyph (pass `icon={null}` and prepend the flag to `label`) — the only place emoji appears anywhere in the product. Always rendered in a vertical stack, top ~6 rows only ("Last 31 days" caption below the list).
