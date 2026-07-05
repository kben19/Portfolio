import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * ProjectTimelineCard — a single entry in the vertical project timeline
 * (the "branch" cards on /project). Flat, hairline-bordered panel: date
 * chip, role, blurb, an optional status badge, up to three stat callouts
 * (falling back to a plain impact line when there are none), bullets,
 * categorized tech pills, an image panel, and outbound links. Runs as a
 * two-column layout (content + image panel) whenever images are present,
 * collapsing to a single column under ~860px or when there's no image.
 */
export function ProjectTimelineCard({ project }) {
  const {
    title,
    role,
    year,
    month,
    subtitle,
    status,
    metrics = [],
    impact,
    bullets = [],
    techGroups = [],
    tech = [],
    images = [],
    links = [],
  } = project;

  const hasImages = images.length > 0;
  const showMetrics = metrics.length > 0;

  return (
    <article
      style={{
        position: "relative",
        borderRadius: "var(--radius-2xl)",
        border: "1px solid var(--border-soft)",
        background: "transparent",
        padding: "1.75rem 2rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      <style>{`
        .ptc-grid { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(240px, 1fr); gap: 2.5rem; align-items: start; }
        @media (max-width: 860px) {
          .ptc-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className={hasImages ? "ptc-grid" : ""}>
        {/* Content column */}
        <div style={{ minWidth: 0 }}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", flexWrap: "wrap" }}>
            <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-tight)", margin: 0 }}>
              {title}
            </h3>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--border-default)",
                background: "var(--bg-subtle)",
                padding: "0.3rem 0.75rem",
                fontSize: "var(--text-xs)",
                color: "var(--text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
            >
              {year} {month}
            </span>
          </header>

          {role && <p style={{ marginTop: "0.4rem", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{role}</p>}
          {subtitle && <p style={{ marginTop: "0.75rem", color: "var(--slate-800)", lineHeight: "var(--leading-relaxed)" }}>{subtitle}</p>}

          {status && (
            <span
              style={{
                marginTop: "0.75rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgb(16 185 129 / 0.2)",
                background: "rgb(16 185 129 / 0.08)",
                padding: "0.3rem 0.7rem",
                fontSize: "var(--text-xs)",
                fontWeight: "var(--weight-medium)",
                color: "var(--emerald-700)",
              }}
            >
              <Icon name="check-circle" size={13} style={{ color: "var(--emerald-500)" }} />
              {status.label}
            </span>
          )}

          {showMetrics ? (
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
              }}
            >
              {metrics.slice(0, 3).map((m, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: "1.25rem 1.5rem",
                    borderLeft: i === 0 ? "none" : "1px solid var(--border-default)",
                  }}
                >
                  <div style={{ fontSize: "var(--text-3xl)", fontWeight: "var(--weight-bold)", color: "var(--emerald-500)", letterSpacing: "var(--tracking-tight)" }}>
                    {m.value}
                  </div>
                  <div style={{ marginTop: "0.25rem", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{m.label}</div>
                </div>
              ))}
            </div>
          ) : impact ? (
            <p style={{ marginTop: "1rem", color: "var(--emerald-700)" }}>
              <strong>Impact:</strong> {impact}
            </p>
          ) : null}

          {bullets.length > 0 && (
            <ul style={{ marginTop: "1.25rem", paddingLeft: "1.25rem", color: "var(--slate-800)", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          {techGroups.length > 0 ? (
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {techGroups.map((g, i) => (
                <div key={i} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--emerald-700)", flexShrink: 0 }}>
                    {g.category}:
                  </span>
                  {g.items.map((t) => (
                    <span
                      key={t}
                      style={{
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-default)",
                        padding: "0.25rem 0.625rem",
                        fontSize: "var(--text-xs)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ) : tech.length > 0 ? (
            <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tech.map((t) => (
                <span
                  key={t}
                  style={{
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-default)",
                    padding: "0.25rem 0.625rem",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {links.length > 0 && (
            <div style={{ marginTop: "1.25rem", display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    fontSize: "var(--text-sm)",
                    color: "var(--text-primary)",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  <Icon name="external-link" size={14} />
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Image panel */}
        {hasImages && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {images.map((img, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  borderRadius: "var(--radius-2xl)",
                  border: "1px solid var(--border-soft)",
                  background: "var(--bg-subtle)",
                  overflow: "hidden",
                }}
              >
                <img src={img.src} alt={img.alt} style={{ width: "100%", display: "block", objectFit: "cover" }} />
              </figure>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
