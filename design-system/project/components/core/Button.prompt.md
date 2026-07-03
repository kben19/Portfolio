The portfolio's only button treatment — a quiet, rounded, bordered button with a soft shadow on hover. There is no filled/primary variant in the source app.

```jsx
<Button onClick={() => alert("hi")}>Sign in</Button>
<Button disabled>Signing in…</Button>
```

Notable: source app (`components/Button.tsx`) only ever renders this one style — `rounded-2xl border px-4 py-2 transition hover:shadow`. Don't invent filled/ghost/danger variants; the brand doesn't use them.
