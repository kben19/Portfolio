Row of brand-icon links (GitHub, LinkedIn, Medium, X, Instagram, Supabase…), gray at rest, emerald + 1.1x scale on hover.

```jsx
<SocialLinks links={[
  { icon: "github", url: "https://github.com/…", label: "GitHub" },
  { icon: "linkedin", url: "https://linkedin.com/in/…", label: "LinkedIn" },
]} />
```

Notable: this exact treatment (`text-gray-400 hover:text-emerald-400 hover:scale-110`) repeats in the hero, the footer, and the Contact panel — always the same three-or-so links, never more than ~4.
