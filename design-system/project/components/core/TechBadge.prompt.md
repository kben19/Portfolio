Small rounded pill for listing a technology on a project card, with a best-effort matched icon.

```jsx
<TechBadge label="Kubernetes" />
<TechBadge label="Go" />
```

Notable: source (`utils/lib/icon.tsx`) maps ~25 keywords (docker, k8s, postgres, redis, aws, gcp, go…) to icons by substring match; unmatched labels render as plain text, no icon. Always used in a `flex-wrap` row, never alone.
