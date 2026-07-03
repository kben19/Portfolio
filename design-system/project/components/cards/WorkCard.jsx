import React, { useState } from "react";

/**
 * WorkCard — full-bleed, tinted panel used in the two-column "Work" grid.
 * Icon + title logo centered; subtitle below; a dark reveal-bar slides up
 * from the bottom on hover reading "View Project".
 */
export function WorkCard({ href = "#", onClick, title, logo, iconSrc, subtitle, bgColor = "var(--bg-card-mint)", height = 320 }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: "relative", overflow: "hidden", background: bgColor }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              marginBottom: "1rem",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              justifyContent: "center",
              transform: hover ? "scale(1.15)" : "scale(1)",
              transition: "transform var(--duration-base) var(--ease-out)",
            }}
          >
            {iconSrc && <img src={iconSrc} alt="" style={{ height: 40, width: 40, objectFit: "contain" }} />}
            {logo}
          </div>
          {subtitle && (
            <p
              style={{
                marginTop: "0.5rem",
                color: "rgb(55 65 81 / 0.8)",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-base)",
                maxWidth: 440,
                transform: hover ? "translateY(6px)" : "translateY(0)",
                transition: "transform var(--duration-base) var(--ease-out)",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <a
        href={href}
        onClick={onClick}
        style={{
          position: "absolute",
          insetInline: 0,
          bottom: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "15%",
          minHeight: 44,
          background: "var(--slate-900)",
          color: "white",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-xl)",
          fontWeight: "var(--weight-bold)",
          letterSpacing: "0.02em",
          textDecoration: "none",
          opacity: hover ? 0.85 : 0,
          transform: hover ? "translateY(0)" : "translateY(100%)",
          pointerEvents: hover ? "auto" : "none",
          transition: "all var(--duration-base) var(--ease-out)",
        }}
      >
        View Project
      </a>
    </div>
  );
}
