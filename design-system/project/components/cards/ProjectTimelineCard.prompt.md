One entry in the vertical project timeline on `/project` (called "BranchCard" in source) — frosted glass card with year/month chip, role, blurb, impact line, bullets, tech pills, an image grid, and outbound links.

```jsx
<ProjectTimelineCard project={{
  title: "Cloud Migration — Digital Core Service",
  role: "Senior Software Engineer — Tokopedia Digital",
  year: 2025, month: "March",
  subtitle: "Led the migration project to ByteDance cloud platform.",
  impact: "Reduced ~20% infrastructure cost while maintaining SLOs.",
  bullets: ["Standardized runbooks and SOPs.", "Refactored services for the new environment."],
  tech: ["Go", "Docker", "Kubernetes", "Postgresql", "GCP"],
}} />
```

Notable: sits in a vertical list threaded by a rail line + year dots (see the Home/Project UI kit for the full rail). Not every field is required — role/subtitle/impact/bullets/tech/images/links all render conditionally, so a minimal card is just a title + year.
