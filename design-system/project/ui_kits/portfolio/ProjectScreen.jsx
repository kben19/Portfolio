function ProjectScreen({ onNavigate }) {
  const { Header, ProjectTimelineCard, Icon } = window.KelvinBenzaliPortfolioDesignSystem_72cc70;
  const { projects } = window.PORTFOLIO_DATA;
  const years = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a);

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--bg-page)", color: "var(--text-primary)", minHeight: "100%" }}>
      <Header
        links={[
          { href: "#", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#work", label: "Work" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <main style={{ maxWidth: 1152, margin: "0 auto", padding: "1rem 1.5rem 4rem", boxSizing: "border-box" }}>
        <header style={{ marginBottom: "2.5rem" }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
            style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", textDecoration: "none" }}
          >
            ← Back home
          </a>
          <h1 style={{ margin: "0.75rem 0 0", fontSize: "var(--text-4xl)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-tight)" }}>
            Tokopedia Projects
          </h1>
          <p style={{ marginTop: "0.5rem", maxWidth: 640, color: "var(--text-muted)" }}>
            A focused timeline of major initiatives I led or contributed to between 2019 and 2025.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "1.5rem" }}>
          {/* Year rail */}
          <div style={{ position: "sticky", top: 24, alignSelf: "start", display: "flex", flexDirection: "column", gap: "3rem", paddingTop: "0.5rem" }}>
            {years.map((y) => (
              <div key={y} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--slate-700)" }} />
                <span style={{ fontSize: "var(--text-lg)", fontWeight: "var(--weight-semibold)", color: "var(--slate-700)" }}>{y}</span>
              </div>
            ))}
          </div>

          {/* Timeline cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {projects.map((p) => (
              <ProjectTimelineCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

window.ProjectScreen = ProjectScreen;
