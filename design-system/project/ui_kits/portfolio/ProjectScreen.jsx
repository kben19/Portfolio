function ProjectScreen({ onNavigate }) {
  const { Header, ProjectTimelineCard } = window.KelvinBenzaliPortfolioDesignSystem_72cc70;
  const { projects } = window.PORTFOLIO_DATA;

  const RAIL_WIDTH = 64;
  const DOT_SIZE = 10;
  const ROW_GAP = 40; // must match the flex column gap below (2.5rem)
  const LABEL_SLOT = 22;
  const LABEL_GAP = 6;
  const dotCenterY = LABEL_SLOT + LABEL_GAP + DOT_SIZE / 2;

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--bg-page)", color: "var(--text-primary)", minHeight: "100%" }}>
      <Header
        links={[
          { href: "#", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#work", label: "Work" },
          { href: "#project", label: "Project" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "1rem var(--container-px) 6rem", boxSizing: "border-box" }}>
        <header style={{ marginBottom: "3.5rem" }}>
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

        <div style={{ display: "flex", flexDirection: "column", gap: `${ROW_GAP}px` }}>
          {projects.map((p, i) => {
            const showYear = i === 0 || projects[i - 1].year !== p.year;
            const isLast = i === projects.length - 1;
            return (
              <div key={p.id} style={{ display: "grid", gridTemplateColumns: `${RAIL_WIDTH}px 1fr`, gap: "1.5rem" }}>
                <div style={{ position: "relative" }}>
                  {!isLast && (
                    <span
                      style={{
                        position: "absolute",
                        top: dotCenterY,
                        left: RAIL_WIDTH / 2 - 0.5,
                        width: 1,
                        height: `calc(100% - ${dotCenterY}px + ${ROW_GAP}px)`,
                        background: "var(--border-soft)",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ height: LABEL_SLOT, display: "flex", alignItems: "center" }}>
                      {showYear && (
                        <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--weight-semibold)", color: "var(--slate-700)" }}>
                          {p.year}
                        </span>
                      )}
                    </div>
                    <span style={{ marginTop: LABEL_GAP, width: DOT_SIZE, height: DOT_SIZE, borderRadius: "50%", background: "var(--slate-700)" }} />
                  </div>
                </div>

                <ProjectTimelineCard project={p} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

window.ProjectScreen = ProjectScreen;
