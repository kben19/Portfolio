import React from "react";

/**
 * Icon renders a glyph from a CDN icon set as a `currentColor`-tintable
 * mask, so it inherits text color and responds to hover/press states the
 * same way a real icon font would.
 *
 * set="lucide" -> UI iconography (the app's real icon set, via lucide-react)
 * set="brand"  -> brand/wordmark glyphs (the app's real react-icons/si set)
 */
export function Icon({ name, set = "lucide", size = 20, className = "", style = {} }) {
  const src =
    set === "brand"
      ? `https://unpkg.com/simple-icons@latest/icons/${name}.svg`
      : `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;

  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        flexShrink: 0,
        width: size,
        height: size,
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        ...style,
      }}
    />
  );
}
