import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * SocialLinks — row of brand icon links. Gray by default, emerald on hover,
 * with a slight scale-up — matches the app's footer/hero/contact usage.
 */
export function SocialLinks({ links = [], gap = 20 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap }}>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label || "social link"}
          style={{
            color: "var(--text-faint)",
            transition: `color var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)`,
            display: "inline-flex",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent-hover)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-faint)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Icon name={link.icon} set="brand" size={22} />
        </a>
      ))}
    </div>
  );
}
