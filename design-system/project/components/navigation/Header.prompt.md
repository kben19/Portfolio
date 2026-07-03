Minimal top nav — right-aligned text links, underline on hover/focus, no logo mark or hamburger menu at any width.

```jsx
<Header links={[
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]} />
```

Notable: the real site has no mobile nav treatment — it's the same right-aligned three-link row at every viewport. Keep it to 2–4 links.
