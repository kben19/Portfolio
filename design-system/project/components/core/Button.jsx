import React from "react";

/**
 * Button — the app's single button treatment: rounded, bordered, quiet.
 * Used sparingly in the real app (there is no primary/CTA button anywhere
 * in the product — links and reveal-bars do that job instead).
 */
export function Button({ children, onClick, type = "button", disabled = false, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        borderRadius: "var(--radius-2xl)",
        border: "1px solid var(--border-default)",
        padding: "0.5rem 1rem",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        color: "var(--text-primary)",
        background: "var(--bg-page)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: `box-shadow var(--duration-base) var(--ease-out)`,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.boxShadow = "var(--shadow-button-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
    >
      {children}
    </button>
  );
}
