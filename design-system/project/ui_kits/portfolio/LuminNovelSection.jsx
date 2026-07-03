// LuminNovelSection — showcases the freelance project luminnovel.com with an
// auto-cycling, lightly interactive recreation of the storefront framed in a
// browser window. Cream accent surface tying the portfolio's navy/emerald
// identity to the product's warm palette.

const LN = {
  cream: "#faf7f1",
  creamDeep: "#f3ede2",
  ink: "#1c1917",
  sub: "#78716c",
  line: "#e7ddcd",
  green: "#16a34a",
  orange: "#ea9a1c",
  pillDouji: { bg: "#fbe1ec", fg: "#be3d78" },
  pillLN: { bg: "#dcf3e6", fg: "#1f8a54" },
  pillManga: { bg: "#e7e2fb", fg: "#6a54c9" },
};

const LN_PRODUCTS = [
  { img: "../../assets/luminnovel/cover-sana.png", title: "#SANAtion Doujinshi — Hiten", tag: "Doujinshi", pill: LN.pillDouji, stock: "In Stock", dot: LN.green, price: "Rp 160.000", sold: "1 sold" },
  { img: "../../assets/luminnovel/cover-5cm.png", title: "5 Centimeters per Second: one more side", tag: "Light Novel", pill: LN.pillLN, stock: "Preorder", dot: LN.orange, price: "Rp 280.000", sold: "8 sold" },
  { img: "../../assets/luminnovel/cover-browsing.png", title: "5TH BROWSING — Kantoku Illustration Book", tag: "Doujinshi", pill: LN.pillDouji, stock: "In Stock", dot: LN.green, price: "Rp 200.000", sold: "1 sold" },
  { img: "../../assets/luminnovel/cover-7thloop3.png", title: "7th Time Loop — Light Novel Vol. 3", tag: "Light Novel", pill: LN.pillLN, stock: "Preorder", dot: LN.orange, price: "Rp 310.000", sold: "12 sold" },
  { img: "../../assets/luminnovel/cover-7thloop6.png", title: "7th Time Loop — Light Novel Vol. 6", tag: "Light Novel", pill: LN.pillLN, stock: "In Stock", dot: LN.green, price: "Rp 300.000", sold: "8 sold" },
];

function LNChrome() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: LN.creamDeep, borderBottom: `1px solid ${LN.line}` }}>
      <div style={{ display: "flex", gap: 6 }}>
        {["#f87171", "#fbbf24", "#34d399"].map((c) => <span key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: `1px solid ${LN.line}`, borderRadius: 999, padding: "4px 14px", fontSize: 12, color: LN.sub, minWidth: 220, justifyContent: "center" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: LN.green }} />
          luminnovel.com
        </div>
      </div>
      <div style={{ width: 46 }} />
    </div>
  );
}

function LNStoreHeader({ compact }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: compact ? "10px 16px" : "12px 18px", borderBottom: `1px solid ${LN.line}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 26, height: 26, borderRadius: 7, background: LN.ink, color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", letterSpacing: "0.02em" }}>LN</span>
        <span style={{ fontWeight: 700, fontSize: 14, color: LN.ink }}>Lumin Novel</span>
      </div>
      {!compact && (
        <div style={{ display: "flex", gap: 14, fontSize: 12, color: LN.sub }}>
          <span>Manga</span><span>Light Novels</span><span>Series</span>
        </div>
      )}
      <div style={{ flex: 1 }} />
      <div style={{ background: "#fff", border: `1px solid ${LN.line}`, borderRadius: 999, padding: "5px 12px", fontSize: 11, color: "#a8a29e", width: compact ? 120 : 180 }}>Search titles…</div>
    </div>
  );
}

// ---- Screen A: Catalog ----
function LNCatalog() {
  return (
    <div style={{ height: "100%", background: LN.cream, display: "flex", flexDirection: "column" }}>
      <LNStoreHeader />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 18px 6px" }}>
        <span style={{ fontSize: 17, fontWeight: 700, color: LN.ink }}>Catalog</span>
        <div style={{ display: "flex", gap: 8 }}>
          {["All Formats", "Title A–Z"].map((t) => (
            <span key={t} style={{ fontSize: 10, color: LN.sub, border: `1px solid ${LN.line}`, borderRadius: 7, padding: "4px 8px", background: "#fff" }}>{t} ▾</span>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, padding: "8px 18px 16px", overflow: "hidden" }}>
        {LN_PRODUCTS.map((p, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 5, minWidth: 0 }}>
            <div style={{ aspectRatio: "0.71", borderRadius: 6, overflow: "hidden", boxShadow: "0 4px 10px rgb(28 25 23 / 0.14)", background: "#fff" }}>
              <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 1 }}>
              <span style={{ fontSize: 8, fontWeight: 600, color: p.pill.fg, background: p.pill.bg, borderRadius: 999, padding: "2px 6px" }}>{p.tag}</span>
              <span style={{ fontSize: 8, color: p.dot, display: "flex", alignItems: "center", gap: 3 }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: p.dot }} />{p.stock}</span>
            </div>
            <span style={{ fontSize: 10, color: LN.ink, lineHeight: 1.25, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{p.title}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: LN.ink }}>{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Screen B: Product detail ----
function LNDetail() {
  const p = LN_PRODUCTS[3];
  return (
    <div style={{ height: "100%", background: LN.cream, display: "flex", flexDirection: "column" }}>
      <LNStoreHeader compact />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "auto 1fr", gap: 22, padding: "22px 26px", alignItems: "center" }}>
        <div style={{ width: 170, aspectRatio: "0.71", borderRadius: 8, overflow: "hidden", boxShadow: "0 10px 26px rgb(28 25 23 / 0.22)" }}>
          <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 10, color: LN.sub }}>Light Novels › 7th Time Loop</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: LN.ink, lineHeight: 1.2 }}>7th Time Loop: The Villainess Enjoys a Carefree Life — Vol. 3</span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: p.pill.fg, background: p.pill.bg, borderRadius: 999, padding: "3px 9px" }}>{p.tag}</span>
            <span style={{ fontSize: 10, color: p.dot, display: "flex", alignItems: "center", gap: 4 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: p.dot }} />{p.stock}</span>
          </div>
          <span style={{ fontSize: 24, fontWeight: 800, color: LN.ink }}>{p.price}</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 4 }}>
            <div style={{ display: "flex", alignItems: "center", border: `1px solid ${LN.line}`, borderRadius: 8, background: "#fff", overflow: "hidden" }}>
              <span style={{ padding: "7px 11px", color: LN.sub }}>–</span>
              <span style={{ padding: "7px 12px", fontSize: 13, fontWeight: 600, color: LN.ink, borderInline: `1px solid ${LN.line}` }}>1</span>
              <span style={{ padding: "7px 11px", color: LN.sub }}>+</span>
            </div>
            <span style={{ background: LN.ink, color: "#fff", fontSize: 13, fontWeight: 600, borderRadius: 8, padding: "9px 22px" }}>Add to Cart</span>
          </div>
          <span style={{ fontSize: 10, color: LN.sub, marginTop: 2 }}>12 sold · Ships from Jakarta · Preorder closes in 6 days</span>
        </div>
      </div>
    </div>
  );
}

// ---- Screen C: Cart ----
function LNCart() {
  const items = [LN_PRODUCTS[3], LN_PRODUCTS[0]];
  return (
    <div style={{ height: "100%", background: LN.cream, display: "flex", flexDirection: "column" }}>
      <LNStoreHeader compact />
      <div style={{ flex: 1, padding: "18px 26px", display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: LN.ink }}>Your Cart · 2 items</span>
        {items.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${LN.line}`, borderRadius: 10, padding: 10 }}>
            <div style={{ width: 40, aspectRatio: "0.71", borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
              <img src={p.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: LN.ink, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.title}</div>
              <div style={{ fontSize: 10, color: LN.sub }}>Qty 1 · {p.tag}</div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: LN.ink }}>{p.price}</span>
          </div>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ borderTop: `1px solid ${LN.line}`, paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 10, color: LN.sub }}>Subtotal</span>
            <span style={{ fontSize: 18, fontWeight: 800, color: LN.ink }}>Rp 470.000</span>
          </div>
          <span style={{ background: LN.ink, color: "#fff", fontSize: 13, fontWeight: 600, borderRadius: 8, padding: "10px 26px" }}>Checkout →</span>
        </div>
      </div>
    </div>
  );
}

function LuminNovelSection() {
  const screens = [
    { key: "catalog", label: "Catalog", el: <LNCatalog /> },
    { key: "detail", label: "Product", el: <LNDetail /> },
    { key: "cart", label: "Cart", el: <LNCart /> },
  ];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % screens.length), 4000);
    return () => clearTimeout(t);
  }, [active, paused]);

  const chips = ["Next.js", "Go", "PostgreSQL", "Vercel", "Claude Code"];

  return (
    <section id="freelance" style={{ background: LN.cream, borderTop: `1px solid ${LN.line}`, borderBottom: `1px solid ${LN.line}` }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "5rem 1.5rem", boxSizing: "border-box", display: "grid", gridTemplateColumns: "5fr 6fr", gap: "3.5rem", alignItems: "center" }}>
        {/* Left: copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--accent-strong)" }}>
            Freelance · E-commerce
          </span>
          <h2 style={{ margin: 0, fontSize: "var(--text-6xl)", fontWeight: "var(--weight-extrabold)", letterSpacing: "var(--tracking-tight)", lineHeight: "var(--leading-tight)", color: "var(--navy-about)" }}>
            Lumin Novel<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p style={{ margin: 0, fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", color: "#44403c", maxWidth: 460 }}>
            Beyond my day job, I designed and shipped <strong>luminnovel.com</strong> — an online store for light novels, manga, and doujinshi — end to end as a freelance build. I owned the full lifecycle: interface design, a <strong>Next.js</strong> front end, a <strong>Go</strong> backend over <strong>PostgreSQL</strong>, testing, and deployment on <strong>Vercel</strong> — using <strong>Claude Code</strong> to scaffold and accelerate the development cycle, turning a blank repo into a live storefront.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {chips.map((c) => (
              <span key={c} style={{ fontSize: "var(--text-xs)", fontWeight: "var(--weight-medium)", color: "#57534e", background: "#fff", border: `1px solid ${LN.line}`, borderRadius: 999, padding: "5px 12px" }}>{c}</span>
            ))}
          </div>
          <a
            href="https://luminnovel.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 4, alignSelf: "flex-start", fontSize: "var(--text-base)", fontWeight: "var(--weight-semibold)", color: "var(--navy-about)", textDecoration: "underline", textUnderlineOffset: 5, textDecorationColor: "var(--accent)" }}
          >
            Visit luminnovel.com →
          </a>
        </div>

        {/* Right: browser-framed auto-cycling storefront */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ borderRadius: 14, overflow: "hidden", background: "#fff", boxShadow: "0 24px 60px rgb(28 25 23 / 0.22)", border: `1px solid ${LN.line}` }}
        >
          <LNChrome />
          <div style={{ position: "relative", height: 380 }}>
            {screens.map((s, i) => (
              <div
                key={s.key}
                aria-hidden={i !== active}
                style={{
                  position: "absolute", inset: 0,
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                {s.el}
              </div>
            ))}
          </div>
          {/* Screen switcher */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, padding: "10px", background: LN.creamDeep, borderTop: `1px solid ${LN.line}` }}>
            {screens.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 6, border: "none", cursor: "pointer",
                  background: "transparent", fontSize: 11, fontWeight: i === active ? 700 : 500,
                  color: i === active ? LN.ink : LN.sub, fontFamily: "var(--font-sans)",
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: i === active ? LN.green : "#d6cdbd", transition: "background 300ms" }} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.LuminNovelSection = LuminNovelSection;
