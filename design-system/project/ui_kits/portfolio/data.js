// Sample data for the Home + Project screens — mirrors the shape/content of
// the real app/page.tsx and app/project/page.tsx (kben19/Portfolio).

// Deterministic pseudo-random 31-day traffic wave for the DashboardPanel's
// Traffic Trends chart — sample data only (production pulls real Supabase numbers).
function generateTrafficSeries(len, base, amp, seed) {
  const out = [];
  let s = seed;
  for (let i = 0; i < len; i++) {
    s = (s * 9301 + 49297) % 233280;
    const rnd = s / 233280;
    const wave = Math.sin(i / 3.2) * amp * 0.6 + Math.sin(i / 7) * amp * 0.4;
    out.push(Math.max(1, Math.round(base + wave + (rnd - 0.5) * amp * 0.3)));
  }
  return out;
}
const TRAFFIC_DATES = Array.from({ length: 31 }, (_, i) => {
  const d = new Date(2025, 11, 1 + i);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
});

window.PORTFOLIO_DATA = {
  heroTyping: [
    "Building one of biggest Indonesia e-commerce industry for over 7 years.\n\nSpecializing in scalable microservices serving millions of users.",
  ],
  socials: [
    { icon: "github", url: "https://github.com/kben19", label: "GitHub" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/kelvin-benzali/", label: "LinkedIn" },
    { icon: "medium", url: "https://medium.com/@kevinesia", label: "Medium" },
  ],
  contactSocials: [
    { icon: "linkedin", url: "https://www.linkedin.com/in/kelvin-benzali/", label: "LinkedIn" },
    { icon: "x", url: "https://x.com/benzali", label: "X" },
    { icon: "instagram", url: "https://www.instagram.com/kelvinbenzali/", label: "Instagram" },
  ],
  dashboard: {
    visitors: [
      { label: "Visitors", value: 1284, delta: "+22%", deltaTone: "good" },
      { label: "Page Views", value: 3902, delta: "+9%", deltaTone: "good" },
    ],
    series: {
      dates: TRAFFIC_DATES,
      visitors: generateTrafficSeries(31, 40, 20, 7),
      pageViews: generateTrafficSeries(31, 95, 45, 13),
    },
    rows: {
      countries: [
        { icon: null, label: "🇮🇩 Indonesia", percent: 54 },
        { icon: null, label: "🇺🇸 United States", percent: 18 },
        { icon: null, label: "🇸🇬 Singapore", percent: 11 },
        { icon: null, label: "🇳🇱 Netherlands", percent: 6 },
      ],
      devices: [
        { icon: "monitor", label: "Desktop", percent: 68 },
        { icon: "smartphone", label: "Mobile", percent: 29 },
        { icon: "tablet-smartphone", label: "Tablet", percent: 3 },
      ],
      browsers: [
        { icon: "googlechrome", iconSet: "brand", label: "Chrome", percent: 71 },
        { icon: "safari", iconSet: "brand", label: "Safari", percent: 18 },
        { icon: "mozillafirefox", iconSet: "brand", label: "Firefox", percent: 7 },
      ],
      referrers: [
        { icon: "github", iconSet: "brand", label: "github.com", percent: 44 },
        { icon: "linkedin", iconSet: "brand", label: "linkedin.com", percent: 31 },
        { icon: "google", iconSet: "brand", label: "google.com", percent: 25 },
      ],
    },
  },
  projects: [
    {
      id: "2025-toko-migration",
      year: 2025,
      month: "March",
      title: "Cloud Migration — Migration Tokopedia Digital Core Service",
      role: "Senior Software Engineer — Tokopedia Digital",
      subtitle: "Led the migration project of the digital core service to ByteDance cloud platform.",
      impact: "Successful migration service reduce ~20% infrastructure cost, increasing stability while maintaining SLOs",
      bullets: [
        "Standardized new design docs, runbooks, updated SOP/playbooks in terms of development, scaling operations and monitoring.",
        "Optimizing and refactor the migrated services to improve performance and stability within the new cloud environment.",
      ],
      tech: ["Go", "Docker", "Kubernetes", "gRPC", "Postgresql", "mysql", "Redis", "NSQ", "Nginx", "GCP", "AWS"],
      links: [{ label: "Tokopedia Digital App", href: "https://www.tokopedia.com/top-up-tagihan" }],
      images: [{ src: "../../assets/photos/migration.gif", alt: "Cloud Server Migration" }],
    },
    {
      id: "2024-toko-sandbox",
      year: 2024,
      month: "December",
      title: "Toko Sandbox — CI/CD-Gated Test Environment (Shift-Left)",
      role: "Senior Software Engineer — Tokopedia Travel",
      subtitle: "Proposed and led the design of a self-service sandbox simulator which established a reliable testing environment.",
      impact: "Cut integration/regression test time by ~40–50% and increased test coverage ~30%, boosting release confidence.",
      bullets: [
        "Integrated with CI/CD pipelines to enable automated integration and regression testing.",
        "Promotes a test driven development culture by providing a self-service testing environment.",
      ],
      tech: ["Go", "Docker", "Kubernetes", "REST API", "Postgresql", "Redis", "CICD"],
      links: [],
      images: [
        { src: "../../assets/illustrations/sandbox-illustration.svg", alt: "Sandbox Simulator Illustration" },
        { src: "../../assets/photos/tokopedia-flight.png", alt: "Tokopedia Flight Page" },
      ],
    },
    {
      id: "2019-sobat-dashboard",
      year: 2019,
      month: "August",
      title: "Mitra App & Sobat Dashboard",
      role: "Software Engineer — Tokopedia Mitra",
      subtitle: "Development of Mitra App and Sobat Dashboard from the ground up.",
      impact: "Promotes business growth year on year on Mitra App and its enterprise tools of Sobat Dashboard.",
      bullets: [
        "Delivers Mitra App to address the problems of b2b market demands on Indonesia's independent sellers.",
        "Delivers Sobat Dashboard as an enterprise tools for analyzing Mitra business growth.",
      ],
      tech: ["Go", "Docker", "GCP", "Postgres", "Redis", "NSQ", "Svelte"],
      links: [],
      images: [{ src: "../../assets/photos/mitra-page.jpeg", alt: "Mitra Tokopedia App" }],
    },
  ],
};
