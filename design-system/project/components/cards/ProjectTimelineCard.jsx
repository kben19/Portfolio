import React from "react";
import { Icon } from "../core/Icon.jsx";
import { TechBadge } from "../core/TechBadge.jsx";

/**
 * ProjectTimelineCard — a single entry in the vertical project timeline
 * (the "branch" cards on /project). Frosted card, year/month chip, role,
 * blurb, impact line, bullets, tech pills, image grid, links.
 */
export function ProjectTimelineCard({ project }) {
  const { title, role, year, month, subtitle, impact, bullets = [], tech = [], images = [], links = [] } = project;
  return (
    <article
      style={{
        position: "relative",
        borderRadius: "var(--radius-2xl)",
        border: "1px solid var(--border-soft)",
        background: "var(--bg-card-neutral)",
        backdropFilter: "blur(8px)",
        boxShadow: "var(--shadow-card-lg)",
        padding: "1.5rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", flexWrap: "wrap" }}>
        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--text-2xl)", fontWeight: "var(--weight-semibold)", margin: 0 }}>
          <Icon name="git-branch" size={20} />
          {title}
        </h3>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            borderRadius: "var(--radius-full)",
            border: "1px solid rgb(17 24 39 / 0.15)",
            padding: "0.375rem 0.75rem",
            fontSize: "var(--text-xs)",
            color: "var(--text-primary)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          <Icon name="calendar" size={14} />
          {year} {month}
        </span>
      </header>

      {role && <p style={{ marginTop: "0.5rem", fontSize: "var(--text-sm)", color: "var(--slate-700)" }}>{role}</p>}
      {subtitle && <p style={{ marginTop: "0.75rem", color: "var(--slate-800)" }}>{subtitle}</p>}
      {impact && (
        <p style={{ marginTop: "0.5rem", color: "rgb(16 185 129 / 0.9)" }}>
          <strong>Impact:</strong> {impact}
        </p>
      )}

      {bullets.length > 0 && (
        <ul style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "var(--slate-800)", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {tech.length > 0 && (
        <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {tech.map((t) => <TechBadge key={t} label={t} />)}
        </div>
      )}

      {images.length > 0 && (
        <div style={{ marginTop: "1.25rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.75rem", alignItems: "center" }}>
          {images.map((img, i) => (
            <figure key={i} style={{ margin: 0, borderRadius: "var(--radius-2xl)", border: "1px solid rgb(0 0 0 / 0.2)", background: "white", overflow: "hidden" }}>
              <img src={img.src} alt={img.alt} style={{ width: "100%", display: "block", objectFit: "cover" }} />
            </figure>
          ))}
        </div>
      )}

      {links.length > 0 && (
        <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
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
                borderRadius: "var(--radius-md)",
                border: "1px solid rgb(255 255 255 / 0.15)",
                background: "rgb(255 255 255 / 0.4)",
                padding: "0.375rem 0.75rem",
                fontSize: "var(--text-sm)",
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              <Icon name="external-link" size={14} />
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
