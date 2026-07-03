Full-bleed color-tinted panel for the "Work" grid — logo/icon centered, subtitle below, and a slate reveal-bar that slides up from the bottom on hover.

```jsx
<WorkCard
  title="Tokopedia"
  bgColor="var(--bg-card-mint)"
  logo={<img src="tokopedia-logo.png" height={40} />}
  iconSrc="tokopedia-mascot.png"
  subtitle={<>As a <strong>Senior Software Engineer</strong>, I worked with Tokopedia's Digital team…</>}
  href="/project#tokopedia"
/>
```

Notable: always used two-up in a `grid md:grid-cols-2` with no gap (panels touch edge-to-edge). Each card gets its own tint (`--bg-card-mint`, `--bg-card-sky`) — never the same color twice in a row. The reveal bar is `slate-900 @ 85% opacity`, never a brand color.
