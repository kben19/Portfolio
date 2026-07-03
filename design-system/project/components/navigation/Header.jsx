import React from "react";

/**
 * Header — top navigation. Right-aligned link list, underline-on-hover,
 * no logo mark (the site relies on the hero heading for identity).
 */
export function Header({ links = [] }) {
  return (
    <header
      style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "1rem 1.5rem 1rem 0",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ textUnderlineOffset: 4, color: "inherit", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
