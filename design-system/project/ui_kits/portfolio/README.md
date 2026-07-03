# Portfolio — UI Kit

Interactive click-through recreation of **kelvinbenzali.com**'s two content pages, built from this design system's own components (`Header`, `TextType`, `SocialLinks`, `WorkCard`, `DashboardPanel`, `ProjectTimelineCard`).

Open `index.html`. Click either Work-grid card (Tokopedia / ByteDance) to jump to the Project timeline; click "← Back home" or a header nav link to return.

## Files
- `index.html` — mounts the app, loads the design-system bundle + both screens
- `data.js` — sample content mirroring the real hero copy, dashboard numbers, and all three project timeline entries from `app/project/page.tsx`
- `HomeScreen.jsx` — hero, About + live-analytics panel, Work grid, **Lumin Novel freelance showcase**, Contact, footer colophon
- `LuminNovelSection.jsx` — auto-cycling, browser-framed recreation of the freelance project [luminnovel.com](https://luminnovel.com) (Catalog → Product → Cart), on a cream accent surface; covers cropped from the real site into `assets/luminnovel/`
- `ProjectScreen.jsx` — year rail + vertical project timeline

## What's faithfully recreated
- Hero typewriter effect, layout, and photo frame
- About section's dark navy panel + `DashboardPanel` analytics widget (sample numbers — production pulls real Supabase data)
- Two-tint full-bleed Work grid with hover reveal-bars
- Slate Contact panel + full-bleed photo
- Vertical project timeline with year rail, frosted cards, tech pills, image grids
- Footer colophon copy, verbatim

## Intentionally out of scope
`/login` and `/private` — bare, unstyled Supabase-auth utility pages in the source with no branding to recreate.
