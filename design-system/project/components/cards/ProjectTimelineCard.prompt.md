One entry in the vertical project timeline on `/project` (called "BranchCard" in source) — flat, hairline-bordered panel with a date chip, role, blurb, an optional confirmed-outcome status badge, up to three big stat callouts (or a plain impact line when there are none), bullets, category-grouped tech pills, an image panel, and outbound links. Two-column (content + image) whenever images exist; single column otherwise, and it collapses to one column under ~860px regardless.

```jsx
<ProjectTimelineCard project={{
  title: "Cloud Migration — Digital Core Service",
  role: "Senior Software Engineer — Tokopedia Digital",
  year: 2025, month: "March",
  subtitle: "Led the migration project to ByteDance cloud platform.",
  status: { label: "Successful Migration" },
  metrics: [
    { value: "20%", label: "Infrastructure Cost Reduction" },
    { value: "SLOs", label: "Stability & SLOs Maintained" },
  ],
  bullets: ["Standardized runbooks and SOPs.", "Refactored services for the new environment."],
  techGroups: [
    { category: "Infrastructure & Cloud", items: ["GCP", "AWS", "Docker", "Kubernetes"] },
    { category: "Database", items: ["PostgreSQL", "MySQL"] },
  ],
}} />
```

Notable: sits in a vertical list threaded by a rail line + year dots (see the Home/Project UI kit for the full rail — the rail lives in the screen, not this card). Not every field is required — role/subtitle/status/metrics/impact/bullets/techGroups/images/links all render conditionally, so a minimal card is just a title + year. `status` is for a genuinely confirmed outcome only — don't add one to every card just for symmetry. `metrics` and `impact` are mutually exclusive in rendering; prefer `metrics` when there's a real number to show.
