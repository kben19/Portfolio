function HomeScreen({ onNavigate }) {
  const { Header, TextType, SocialLinks, WorkCard, DashboardPanel } = window.KelvinBenzaliPortfolioDesignSystem_72cc70;
  const { heroTyping, socials, contactSocials, dashboard } = window.PORTFOLIO_DATA;

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--bg-page)", color: "var(--text-primary)" }}>
      <Header
        links={[
          { href: "#about", label: "About" },
          { href: "#work", label: "Work" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      {/* Hero */}
      <section
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "1.5rem 1.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ margin: 0, fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)", color: "var(--text-secondary)" }}>
            Senior Software Engineer | <span style={{ color: "var(--accent)" }}>Tokopedia</span>
          </p>
          <h1 style={{ margin: 0, fontSize: "var(--text-7xl)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-tight)", lineHeight: "var(--leading-tight)" }}>
            Kelvin Benzali
          </h1>
          <div style={{ color: "var(--text-secondary)", fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", minHeight: 100 }}>
            <TextType text={heroTyping} typingSpeed={16} showCursor loop={false} />
          </div>
          <SocialLinks links={socials} />
        </div>
        <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-2xl)", border: "1px solid var(--border-default)", overflow: "hidden" }}>
          <img src="../../assets/photos/me-hero.jpeg" alt="Kelvin Benzali at his desk" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ background: "var(--bg-navy-panel)", color: "white" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "3rem 1.5rem", display: "grid", gridTemplateColumns: "7fr 3fr", gap: "2rem", boxSizing: "border-box" }}>
          <div>
            <h2 style={{ margin: "0 0 1.5rem", fontSize: "var(--text-6xl)", fontWeight: "var(--weight-bold)", letterSpacing: "var(--tracking-tight)" }}>About Me:</h2>
            <p style={{ maxWidth: 640, fontSize: "var(--text-xl)", lineHeight: "var(--leading-relaxed)", color: "rgb(255 255 255 / 0.9)" }}>
              For me, creating an app is not just solving a problem. It is about the continuity and a{" "}
              <b style={{ color: "var(--rose-400)" }}>meaningful impact</b> that we can bring to others. Technology is
              constantly evolving, unlocking new possibilities that once seemed out of reach. What was once a barrier
              has now become an <b style={{ color: "var(--rose-400)" }}>enabler</b>. As engineers, we have the
              capabilities to shape this transformation and I'm determined to be part of the movement driving the
              next era of <b style={{ color: "var(--rose-400)" }}>digital innovation</b>.
            </p>
          </div>
          <div>
            <DashboardPanel visitors={dashboard.visitors} rows={dashboard.rows} />
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", paddingTop: "1rem", paddingLeft: "0.5rem" }}>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-faint)" }}>Powered by Supabase</p>
              <SocialLinks links={[{ icon: "supabase", url: "https://supabase.com", label: "Supabase" }]} />
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" style={{ padding: "5rem 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 1.5rem", boxSizing: "border-box" }}>
          <h2 style={{ margin: 0, position: "relative", top: 12, fontWeight: "var(--weight-extrabold)", letterSpacing: "var(--tracking-tight)", fontSize: "10vw" }}>
            Work<span>.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <WorkCard
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate("project"); }}
            title="Tokopedia"
            bgColor="var(--bg-card-mint)"
            height={360}
            logo={<span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 28, color: "#03AC0E" }}>tokopedia</span>}
            iconSrc="../../assets/photos/tokopedia-mascot.png"
            subtitle={<>As a <strong>Senior Software Engineer</strong>, I worked with Tokopedia's <strong>Digital</strong> Team to deliver impactful digital products that drive business growth.</>}
          />
          <WorkCard
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate("project"); }}
            title="ByteDance"
            bgColor="var(--bg-card-sky)"
            height={360}
            logo={<img src="../../assets/photos/bytedance-logo.png" alt="ByteDance" style={{ height: 32, objectFit: "contain" }} />}
            subtitle={<>Early on at <strong>ByteDance</strong>, I led the migration of Tokopedia's core services to the ByteDance Cloud platform, strengthening reliability and scalability.</>}
          />
        </div>
      </section>

      {/* Freelance — Lumin Novel */}
      <LuminNovelSection />

      {/* Contact */}
      <section id="contact" style={{ position: "relative", padding: "5rem 0" }}>
        <h2 style={{ position: "relative", top: 4, left: 24, margin: 0, fontWeight: "var(--weight-extrabold)", letterSpacing: "var(--tracking-tight)", fontSize: "10vw", pointerEvents: "none", userSelect: "none" }}>
          Say hi.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "stretch" }}>
          <div style={{ background: "var(--bg-dark-panel)", color: "var(--text-on-dark)", padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5rem", boxSizing: "border-box" }}>
            <a href="mailto:kevinesia@gmail.com" style={{ color: "inherit", textDecoration: "none", fontSize: "var(--text-5xl)", fontWeight: "var(--weight-extrabold)", letterSpacing: "var(--tracking-tight)", wordBreak: "break-word" }}>
              kevinesia@gmail.com
            </a>
            <div style={{ height: 1, width: 48, background: "rgb(203 213 225 / 0.4)" }} />
            <p style={{ margin: 0, maxWidth: 480, color: "var(--text-on-dark-muted)" }}>
              I love solving complex problems and designing resilient systems. If you are interested to connect, let's chat — I'm open to collaborations and opportunities.
            </p>
            <div>
              <p style={{ margin: 0, fontWeight: "var(--weight-medium)" }}>Kelvin Benzali</p>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", opacity: 0.8 }}>Jakarta, Indonesia</p>
            </div>
            <SocialLinks links={contactSocials} />
          </div>
          <div style={{ position: "relative", minHeight: 480, overflow: "hidden" }}>
            <img src="../../assets/photos/contact-photo.jpeg" alt="Contact" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(1.1) contrast(1.1) saturate(1.1)" }} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border-default)", background: "var(--bg-subtle)", padding: "2rem 0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", textAlign: "center", boxSizing: "border-box" }}>
          <p style={{ margin: 0, maxWidth: 560, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-faint)" }}>
            Loosely designed in <strong>Figma</strong> and coded in <strong>IntelliJ IDEA</strong>. Built with{" "}
            <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, deployed with <strong>Vercel</strong> and powered by{" "}
            <strong>Supabase</strong>. All text is set in the <strong>Plus Jakarta Sans</strong> typeface.
          </p>
          <SocialLinks links={socials} />
        </div>
      </footer>
    </div>
  );
}

window.HomeScreen = HomeScreen;
