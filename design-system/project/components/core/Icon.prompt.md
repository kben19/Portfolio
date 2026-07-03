Renders a UI or brand glyph from a CDN icon set, tinted with `currentColor` so it behaves like an icon font under hover/press color changes.

```jsx
<Icon name="external-link" set="lucide" size={16} />
<Icon name="github" set="brand" size={22} className="text-gray-400 hover:text-emerald-400" />
```

Notable:
- `set="lucide"` mirrors the app's real icon set (`lucide-react`) — used for all functional UI glyphs (Calendar, GitBranch, ExternalLink, Users, Monitor, Smartphone…).
- `set="brand"` mirrors the app's real brand glyphs (`react-icons/si`, Simple Icons) — used for GitHub/LinkedIn/Medium/X/Instagram/Supabase links.
- Intentional addition: the source app imports pre-built React icon components from npm; since this design system can't take npm dependencies, `Icon` reproduces the same open-source glyphs via their CDN SVG output, recolored with a CSS mask instead of the `currentColor` SVG prop trick react-icons uses internally. Visually identical result.
