/* @ds-bundle: {"format":4,"namespace":"KelvinBenzaliPortfolioDesignSystem_72cc70","components":[{"name":"ProjectTimelineCard","sourcePath":"components/cards/ProjectTimelineCard.jsx"},{"name":"WorkCard","sourcePath":"components/cards/WorkCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SocialLinks","sourcePath":"components/core/SocialLinks.jsx"},{"name":"TechBadge","sourcePath":"components/core/TechBadge.jsx"},{"name":"TextType","sourcePath":"components/core/TextType.jsx"},{"name":"DashboardPanel","sourcePath":"components/data/DashboardPanel.jsx"},{"name":"DonutChart","sourcePath":"components/data/DonutChart.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"StatBarRow","sourcePath":"components/data/StatBarRow.jsx"},{"name":"TrafficLineChart","sourcePath":"components/data/TrafficLineChart.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"}],"sourceHashes":{"components/cards/ProjectTimelineCard.jsx":"b02ce212e904","components/cards/WorkCard.jsx":"1c8e97f37d58","components/core/Button.jsx":"f0e4d8af808d","components/core/Icon.jsx":"ce2962eeb47b","components/core/SocialLinks.jsx":"af4436c82171","components/core/TechBadge.jsx":"c8580c2df84f","components/core/TextType.jsx":"cfaf5885c1cf","components/data/DashboardPanel.jsx":"13df69bd80a0","components/data/DonutChart.jsx":"e7f641c4ee00","components/data/MetricCard.jsx":"fed46689aa54","components/data/StatBarRow.jsx":"4ee404a558fb","components/data/TrafficLineChart.jsx":"e803a9af5234","components/navigation/Header.jsx":"79fabf46284a","ui_kits/portfolio/HomeScreen.jsx":"87806e2372f6","ui_kits/portfolio/LuminNovelSection.jsx":"390e200a84e7","ui_kits/portfolio/ProjectScreen.jsx":"2b99e4a192fa","ui_kits/portfolio/data.js":"96f900c1b285"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KelvinBenzaliPortfolioDesignSystem_72cc70 = window.KelvinBenzaliPortfolioDesignSystem_72cc70 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/WorkCard.jsx
try { (() => {
const {
  useState
} = React;
/**
 * WorkCard — full-bleed, tinted panel used in the two-column "Work" grid.
 * Icon + title logo centered; subtitle below; a dark reveal-bar slides up
 * from the bottom on hover reading "View Project".
 */
function WorkCard({
  href = "#",
  onClick,
  title,
  logo,
  iconSrc,
  subtitle,
  bgColor = "var(--bg-card-mint)",
  height = 320
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      overflow: "hidden",
      background: bgColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "1rem",
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      justifyContent: "center",
      transform: hover ? "scale(1.15)" : "scale(1)",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  }, iconSrc && /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      height: 40,
      width: 40,
      objectFit: "contain"
    }
  }), logo), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.5rem",
      color: "rgb(55 65 81 / 0.8)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      maxWidth: 440,
      transform: hover ? "translateY(6px)" : "translateY(0)",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  }, subtitle))), /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: {
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
      transition: "all var(--duration-base) var(--ease-out)"
    }
  }, "View Project"));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/WorkCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — the app's single button treatment: rounded, bordered, quiet.
 * Used sparingly in the real app (there is no primary/CTA button anywhere
 * in the product — links and reveal-bars do that job instead).
 */
function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    disabled: disabled,
    className: className,
    style: {
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
      transition: `box-shadow var(--duration-base) var(--ease-out)`
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.boxShadow = "var(--shadow-button-hover)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "none";
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon renders a glyph from a CDN icon set as a `currentColor`-tintable
 * mask, so it inherits text color and responds to hover/press states the
 * same way a real icon font would.
 *
 * set="lucide" -> UI iconography (the app's real icon set, via lucide-react)
 * set="brand"  -> brand/wordmark glyphs (the app's real react-icons/si set)
 */
function Icon({
  name,
  set = "lucide",
  size = 20,
  className = "",
  style = {}
}) {
  const src = set === "brand" ? `https://unpkg.com/simple-icons@latest/icons/${name}.svg` : `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: className,
    style: {
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
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialLinks.jsx
try { (() => {
/**
 * SocialLinks — row of brand icon links. Gray by default, emerald on hover,
 * with a slight scale-up — matches the app's footer/hero/contact usage.
 */
function SocialLinks({
  links = [],
  gap = 20
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap
    }
  }, links.map((link, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: link.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": link.label || "social link",
    style: {
      color: "var(--text-faint)",
      transition: `color var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)`,
      display: "inline-flex"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--accent-hover)";
      e.currentTarget.style.transform = "scale(1.1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "var(--text-faint)";
      e.currentTarget.style.transform = "scale(1)";
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: link.icon,
    set: "brand",
    size: 22
  }))));
}
Object.assign(__ds_scope, { SocialLinks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialLinks.jsx", error: String((e && e.message) || e) }); }

// components/core/TechBadge.jsx
try { (() => {
const TECH_ICON_MAP = [["cicd", "workflow"], ["argo", "workflow"], ["github", "git-branch"], ["actions", "git-branch"], ["docker", "server"], ["kubernetes", "server"], ["k8s", "server"], ["rest api", "file-code"], ["grpc", "braces"], ["nsq", "message-square-code"], ["nginx", "server"], ["prometheus", "shield-check"], ["grafana", "shield-check"], ["newrelic", "shield-check"], ["slo", "shield-check"], ["opa", "shield-check"], ["security", "shield-check"], ["aws", "cloud"], ["gcp", "cloud"], ["bytedance", "cloud"], ["postgres", "database"], ["mysql", "database"], ["redis", "database-zap"], ["go", "hash"], ["golang", "hash"], ["svelte", "flame"]];
function techIcon(name) {
  const key = name.toLowerCase();
  const hit = TECH_ICON_MAP.find(([k]) => key.includes(k));
  return hit ? hit[1] : null;
}

/**
 * TechBadge — small pill used to list technologies on a project card.
 */
function TechBadge({
  label
}) {
  const icon = techIcon(label);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      borderRadius: "var(--radius-full)",
      border: "1px solid rgb(107 114 128 / 0.1)",
      background: "rgb(224 242 254 / 0.6)",
      padding: "0.25rem 0.625rem",
      fontSize: "var(--text-xs)",
      color: "var(--slate-700)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), label);
}
Object.assign(__ds_scope, { TechBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TechBadge.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectTimelineCard.jsx
try { (() => {
/**
 * ProjectTimelineCard — a single entry in the vertical project timeline
 * (the "branch" cards on /project). Frosted card, year/month chip, role,
 * blurb, impact line, bullets, tech pills, image grid, links.
 */
function ProjectTimelineCard({
  project
}) {
  const {
    title,
    role,
    year,
    month,
    subtitle,
    impact,
    bullets = [],
    tech = [],
    images = [],
    links = []
  } = project;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-2xl)",
      border: "1px solid var(--border-soft)",
      background: "var(--bg-card-neutral)",
      backdropFilter: "blur(8px)",
      boxShadow: "var(--shadow-card-lg)",
      padding: "1.5rem",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "0.5rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--weight-semibold)",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "git-branch",
    size: 20
  }), title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      borderRadius: "var(--radius-full)",
      border: "1px solid rgb(17 24 39 / 0.15)",
      padding: "0.375rem 0.75rem",
      fontSize: "var(--text-xs)",
      color: "var(--text-primary)",
      textTransform: "uppercase",
      letterSpacing: "0.05em"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 14
  }), year, " ", month)), role && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.5rem",
      fontSize: "var(--text-sm)",
      color: "var(--slate-700)"
    }
  }, role), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.75rem",
      color: "var(--slate-800)"
    }
  }, subtitle), impact && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.5rem",
      color: "rgb(16 185 129 / 0.9)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Impact:"), " ", impact), bullets.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      marginTop: "1rem",
      paddingLeft: "1.25rem",
      color: "var(--slate-800)",
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem"
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, b))), tech.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }
  }, tech.map(t => /*#__PURE__*/React.createElement(__ds_scope.TechBadge, {
    key: t,
    label: t
  }))), images.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1.25rem",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "0.75rem",
      alignItems: "center"
    }
  }, images.map((img, i) => /*#__PURE__*/React.createElement("figure", {
    key: i,
    style: {
      margin: 0,
      borderRadius: "var(--radius-2xl)",
      border: "1px solid rgb(0 0 0 / 0.2)",
      background: "white",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img.src,
    alt: img.alt,
    style: {
      width: "100%",
      display: "block",
      objectFit: "cover"
    }
  })))), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "1rem",
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      borderRadius: "var(--radius-md)",
      border: "1px solid rgb(255 255 255 / 0.15)",
      background: "rgb(255 255 255 / 0.4)",
      padding: "0.375rem 0.75rem",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 14
  }), l.label))));
}
Object.assign(__ds_scope, { ProjectTimelineCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectTimelineCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TextType.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
/**
 * TextType — typewriter effect used under the hero heading. Faithful
 * reproduction of the source's timing/looping behavior without the GSAP
 * dependency (cursor blink is a CSS keyframe instead of a GSAP tween).
 */
function TextType({
  text,
  typingSpeed = 20,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = false,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  style = {}
}) {
  const textArray = Array.isArray(text) ? text : [text];
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const startedRef = useRef(false);
  useEffect(() => {
    const current = textArray[textIndex];
    let timeout;
    if (!startedRef.current) {
      startedRef.current = true;
      timeout = setTimeout(() => setCharIndex(c => c), initialDelay);
      return () => clearTimeout(timeout);
    }
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(d => d + current[charIndex]);
        setCharIndex(c => c + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex >= current.length) {
      if (loop) timeout = setTimeout(() => setDeleting(true), pauseDuration);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), deletingSpeed);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCharIndex(0);
      setTextIndex(i => (i + 1) % textArray.length);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, deleting, displayed, textIndex]);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      whiteSpace: "pre-wrap",
      ...style
    }
  }, displayed, showCursor && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4,
      display: "inline-block",
      animation: "ds-texttype-blink 1s step-end infinite"
    }
  }, cursorCharacter), /*#__PURE__*/React.createElement("style", null, `@keyframes ds-texttype-blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }`));
}
Object.assign(__ds_scope, { TextType });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextType.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutChart.jsx
try { (() => {
const {
  useState
} = React;
const SIZE = 144;
const STROKE = 20;
const R = (SIZE - STROKE) / 2;
const CIRC = 2 * Math.PI * R;

/**
 * DonutChart — hollow ring breakdown with a legend, used for the Devices
 * and Browsers tabs of `DashboardPanel` (Countries/Referrers use
 * `StatBarRow` bar lists instead — the two chart types are deliberately
 * different so each tab's shape is recognizable at a glance).
 */
function DonutChart({
  data = []
}) {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  let cumulative = 0;
  const top = hoverIdx != null ? data[hoverIdx] : data[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
      flexWrap: "wrap",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--navy-panel-border)",
      background: "var(--navy-panel-soft)",
      padding: "1.25rem",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: SIZE,
      height: SIZE,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    style: {
      width: "100%",
      height: "100%",
      transform: "rotate(-90deg)",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: SIZE / 2,
    cy: SIZE / 2,
    r: R,
    fill: "none",
    stroke: "rgb(255 255 255 / 0.06)",
    strokeWidth: STROKE
  }), data.map((d, i) => {
    const len = Math.max(0, d.percent / 100 * CIRC - 2);
    const dashoffset = -(cumulative / 100 * CIRC);
    cumulative += d.percent;
    const isHover = hoverIdx === i;
    const isDim = hoverIdx != null && !isHover;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: SIZE / 2,
      cy: SIZE / 2,
      r: R,
      fill: "none",
      stroke: d.color,
      strokeWidth: isHover ? STROKE + 5 : STROKE,
      strokeDasharray: `${len} ${CIRC - len}`,
      strokeDashoffset: dashoffset,
      strokeLinecap: "round",
      opacity: isDim ? 0.35 : 1,
      onMouseEnter: () => setHoverIdx(i),
      onMouseLeave: () => setHoverIdx(null),
      style: {
        cursor: "pointer",
        transition: "stroke-width var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out)"
      }
    });
  })), top && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--weight-bold)",
      color: "white",
      lineHeight: 1
    }
  }, top.percent, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "rgb(255 255 255 / 0.5)",
      marginTop: 2
    }
  }, top.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      flex: 1,
      minWidth: 140
    }
  }, data.map((d, i) => {
    const isHover = hoverIdx === i;
    const isDim = hoverIdx != null && !isHover;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onMouseEnter: () => setHoverIdx(i),
      onMouseLeave: () => setHoverIdx(null),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
        borderRadius: "var(--radius-md)",
        padding: "0.25rem 0.375rem",
        marginInline: "-0.375rem",
        background: isHover ? "rgb(255 255 255 / 0.08)" : "transparent",
        opacity: isDim ? 0.5 : 1,
        transition: "background var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: d.color,
        flexShrink: 0
      }
    }), d.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: d.icon,
      set: d.iconSet,
      size: 14,
      style: {
        color: "rgb(255 255 255 / 0.7)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: "var(--text-sm)",
        color: isHover ? "white" : "rgb(255 255 255 / 0.85)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontWeight: isHover ? "var(--weight-semibold)" : "var(--weight-regular)"
      }
    }, d.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: isHover ? "white" : "rgb(255 255 255 / 0.6)",
        fontVariantNumeric: "tabular-nums"
      }
    }, d.percent, "%"));
  })));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
const TONE_TEXT = {
  good: "var(--emerald-400)",
  bad: "var(--rose-400)",
  neutral: "var(--slate-300)"
};

/**
 * MetricCard — dark navy stat tile (visitors / page views) used inside the
 * DashboardPanel on the About section. Sits on `--navy-panel-soft`, one
 * step lighter than the panel it's inside so it still reads as a tile.
 */
function MetricCard({
  label,
  value,
  delta,
  deltaTone = "good",
  helpText
}) {
  const deltaColor = TONE_TEXT[deltaTone] || TONE_TEXT.good;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--navy-panel-border)",
      background: "var(--navy-panel-soft)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      padding: "1.25rem",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "rgb(255 255 255 / 0.6)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-3xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)",
      color: "white"
    }
  }, value), (delta || helpText) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)"
    }
  }, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      color: deltaColor,
      fontWeight: "var(--weight-semibold)"
    }
  }, delta), delta && helpText ? " " : null, helpText && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(255 255 255 / 0.45)"
    }
  }, helpText))));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBarRow.jsx
try { (() => {
/**
 * StatBarRow — one row of a ranked bar list (countries / devices / browsers /
 * OS / referrers tabs inside DashboardPanel). Icon + label, a track bar, and
 * a right-aligned percentage.
 */
function StatBarRow({
  icon,
  iconSet = "lucide",
  label,
  percent,
  color = "var(--accent)"
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      border: `1px solid ${hover ? "rgb(255 255 255 / 0.18)" : "var(--navy-panel-border)"}`,
      background: hover ? "rgb(255 255 255 / 0.06)" : "var(--navy-panel-soft)",
      padding: "0.625rem 0.875rem",
      transform: hover ? "translateX(3px)" : "translateX(0)",
      transition: "background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "5fr 4fr 1fr",
      alignItems: "center",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      minWidth: 0
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    set: iconSet,
    size: 16,
    className: "ds-statbar-icon"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontSize: "var(--text-sm)",
      color: hover ? "white" : "rgb(255 255 255 / 0.9)",
      transition: "color var(--duration-fast) var(--ease-out)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: "var(--radius-full)",
      background: "rgb(255 255 255 / 0.08)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: "var(--radius-full)",
      background: color,
      width: `${Math.min(100, Math.max(0, percent))}%`,
      filter: hover ? "brightness(1.25)" : "brightness(1)",
      boxShadow: hover ? `0 0 10px ${color}` : "none",
      transition: "filter var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      fontSize: "var(--text-sm)",
      color: hover ? "white" : "rgb(255 255 255 / 0.8)",
      fontVariantNumeric: "tabular-nums",
      transition: "color var(--duration-fast) var(--ease-out)"
    }
  }, percent, "%")), /*#__PURE__*/React.createElement("style", null, `.ds-statbar-icon { color: rgb(255 255 255 / 0.8); }`));
}
Object.assign(__ds_scope, { StatBarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBarRow.jsx", error: String((e && e.message) || e) }); }

// components/data/TrafficLineChart.jsx
try { (() => {
const {
  useRef,
  useState
} = React;
const W = 600;
const H = 220;
const PAD_L = 26;
const PAD_T = 12;
const PAD_B = 24;
function smoothPath(points) {
  if (!points.length) return "";
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    const mx = (x0 + x1) / 2;
    d += ` C ${mx.toFixed(2)} ${y0.toFixed(2)}, ${mx.toFixed(2)} ${y1.toFixed(2)}, ${x1.toFixed(2)} ${y1.toFixed(2)}`;
  }
  return d;
}

/**
 * TrafficLineChart — dual-line traffic trend chart (Visitors vs Page Views)
 * with a soft gradient fill, gridlines, and a hover crosshair + tooltip.
 * Used on the Visitors tab of `DashboardPanel`, replacing the old per-metric
 * sparkline with one shared, larger chart.
 */
function TrafficLineChart({
  caption = "Last 31 days",
  dates = [],
  series = []
}) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const wrapRef = useRef(null);
  const n = dates.length;
  const allValues = series.flatMap(s => s.values || []);
  const rawMax = Math.max(1, ...allValues);
  const niceMax = Math.max(10, Math.ceil(rawMax / 10) * 10);
  const ticks = [0, 1, 2, 3, 4].map(i => Math.round(niceMax * i / 4));
  const plotW = W - PAD_L;
  const plotH = H - PAD_T - PAD_B;
  const xFor = i => PAD_L + (n > 1 ? i / (n - 1) * plotW : plotW / 2);
  const yFor = v => PAD_T + plotH - v / niceMax * plotH;
  const seriesPoints = series.map(s => (s.values || []).map((v, i) => [xFor(i), yFor(v)]));
  const labelStep = Math.max(1, Math.round(n / 6));
  const xLabels = dates.map((d, i) => ({
    d,
    i
  })).filter(({
    i
  }) => i % labelStep === 0 || i === n - 1);
  function handleMove(e) {
    if (!wrapRef.current || n === 0) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const frac = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setHoverIdx(Math.round(frac * (n - 1)));
  }
  const hoverFrac = hoverIdx == null ? null : n > 1 ? hoverIdx / (n - 1) : 0.5;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--navy-panel-border)",
      background: "var(--navy-panel-soft)",
      padding: "1rem 1.25rem",
      fontFamily: "var(--font-sans)",
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    onMouseMove: handleMove,
    onMouseLeave: () => setHoverIdx(null),
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: "100%",
      height: "auto",
      display: "block",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("defs", null, series.map((s, si) => /*#__PURE__*/React.createElement("linearGradient", {
    key: si,
    id: `ds-lc-grad-${si}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: s.color,
    stopOpacity: "0.28"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: s.color,
    stopOpacity: "0"
  })))), ticks.map((t, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: PAD_L,
    y1: yFor(t),
    x2: W,
    y2: yFor(t),
    stroke: "rgb(255 255 255 / 0.06)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("text", {
    x: PAD_L - 8,
    y: yFor(t) + 3,
    textAnchor: "end",
    fontSize: "9",
    fill: "rgb(255 255 255 / 0.4)"
  }, t))), seriesPoints.map((pts, si) => {
    if (!pts.length) return null;
    const linePath = smoothPath(pts);
    const base = (PAD_T + plotH).toFixed(2);
    const areaPath = `${linePath} L ${pts[pts.length - 1][0].toFixed(2)} ${base} L ${pts[0][0].toFixed(2)} ${base} Z`;
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, /*#__PURE__*/React.createElement("path", {
      d: areaPath,
      fill: `url(#ds-lc-grad-${si})`,
      stroke: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: linePath,
      fill: "none",
      stroke: series[si].color,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }), hoverIdx != null && /*#__PURE__*/React.createElement("line", {
    x1: xFor(hoverIdx),
    y1: PAD_T,
    x2: xFor(hoverIdx),
    y2: PAD_T + plotH,
    stroke: "rgb(255 255 255 / 0.25)",
    strokeWidth: "1"
  }), hoverIdx != null && seriesPoints.map((pts, si) => pts[hoverIdx] && /*#__PURE__*/React.createElement("circle", {
    key: si,
    cx: pts[hoverIdx][0],
    cy: pts[hoverIdx][1],
    r: "4",
    fill: series[si].color,
    stroke: "var(--navy-panel-soft)",
    strokeWidth: "2"
  })), xLabels.map(({
    d,
    i
  }) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: xFor(i),
    y: H - 4,
    textAnchor: "middle",
    fontSize: "9",
    fill: "rgb(255 255 255 / 0.4)"
  }, d))), hoverIdx != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 6,
      left: `${Math.min(75, Math.max(0, hoverFrac * 100))}%`,
      transform: hoverFrac > 0.7 ? "translateX(-100%)" : "translateX(8px)",
      background: "rgb(6 12 22 / 0.95)",
      border: "1px solid rgb(255 255 255 / 0.1)",
      borderRadius: "var(--radius-md)",
      padding: "0.5rem 0.625rem",
      fontSize: "var(--text-xs)",
      color: "white",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-card-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgb(255 255 255 / 0.5)",
      marginBottom: 4
    }
  }, dates[hoverIdx]), series.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: s.color,
      display: "inline-block"
    }
  }), s.label, ": ", /*#__PURE__*/React.createElement("strong", null, s.values[hoverIdx]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "0.5rem",
      paddingTop: "0.625rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem"
    }
  }, series.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.375rem",
      fontSize: "var(--text-xs)",
      color: "rgb(255 255 255 / 0.6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: s.color,
      display: "inline-block"
    }
  }), s.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "rgb(255 255 255 / 0.4)"
    }
  }, caption)));
}
Object.assign(__ds_scope, { TrafficLineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TrafficLineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/DashboardPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const TABS = [{
  id: "visitors",
  label: "Visitors",
  icon: "users"
}, {
  id: "countries",
  label: "Countries",
  icon: "globe-2"
}, {
  id: "devices",
  label: "Devices",
  icon: "monitor"
}, {
  id: "browsers",
  label: "Browsers",
  icon: "globe"
}, {
  id: "referrers",
  label: "Referrers",
  icon: "external-link"
}];
const DONUT_TABS = ["devices", "browsers"];
const DONUT_PALETTE = ["var(--accent)", "var(--sky-500)", "var(--slate-400)", "var(--rose-400)"];
const BAR_COLOR = {
  countries: "var(--accent)",
  referrers: "var(--sky-500)"
};

/**
 * DashboardPanel — premium-navy "Showcase Dashboard" widget on the About
 * section. Full-text tabs (always visible, not icon-only) switch between a
 * Visitors view (two metric tiles + a shared traffic line chart) and ranked
 * breakdowns: Countries/Referrers as bar lists, Devices/Browsers as donuts.
 */
function DashboardPanel({
  title = "Dashboard Showcase",
  subheader = "Live Traffic Showcase (Click to Explore)",
  credit,
  visitors = [],
  series,
  rows = {},
  topN = 6
}) {
  const [tab, setTab] = useState("visitors");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      border: "1px solid var(--navy-panel-border)",
      background: "var(--navy-panel)",
      padding: "1.5rem",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "1rem",
      marginBottom: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 0.375rem",
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)",
      color: "white",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-live-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--accent)",
      display: "inline-block",
      boxShadow: "0 0 0 3px rgb(16 185 129 / 0.2)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "rgb(255 255 255 / 0.55)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, subheader))), credit && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      whiteSpace: "nowrap"
    }
  }, credit)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1.5rem",
      marginBottom: "1.25rem",
      borderBottom: "1px solid var(--navy-panel-border)"
    }
  }, TABS.map(t => {
    const active = tab === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => setTab(t.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        border: "none",
        borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
        background: "none",
        padding: "0 0 0.75rem",
        cursor: "pointer",
        fontSize: "var(--text-sm)",
        fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: active ? "white" : "rgb(255 255 255 / 0.45)",
        transition: "color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: t.icon,
      size: 16
    }), t.label);
  })), tab === "visitors" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem"
    }
  }, visitors.map((card, i) => /*#__PURE__*/React.createElement(__ds_scope.MetricCard, _extends({
    key: i
  }, card, {
    helpText: "Last 31 days"
  })))), series && /*#__PURE__*/React.createElement(__ds_scope.TrafficLineChart, {
    dates: series.dates,
    series: [{
      label: "Visitors",
      color: "var(--accent)",
      values: series.visitors
    }, {
      label: "Page Views",
      color: "var(--sky-500)",
      values: series.pageViews
    }]
  })), tab !== "visitors" && DONUT_TABS.includes(tab) && /*#__PURE__*/React.createElement(__ds_scope.DonutChart, {
    data: (rows[tab] || []).slice(0, topN).map((r, i) => ({
      ...r,
      color: DONUT_PALETTE[i % DONUT_PALETTE.length]
    }))
  }), tab !== "visitors" && !DONUT_TABS.includes(tab) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, (rows[tab] || []).slice(0, topN).map((r, i) => /*#__PURE__*/React.createElement(__ds_scope.StatBarRow, {
    key: i,
    icon: r.icon,
    iconSet: r.iconSet,
    label: r.label,
    percent: r.percent,
    color: BAR_COLOR[tab] || "var(--accent)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "rgb(255 255 255 / 0.4)",
      paddingLeft: "0.5rem",
      paddingTop: "0.25rem"
    }
  }, "Last 31 days")), /*#__PURE__*/React.createElement("style", null, `
        @keyframes ds-live-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
        .ds-live-dot { animation: ds-live-pulse 2s var(--ease-out) infinite; }
      `));
}
Object.assign(__ds_scope, { DashboardPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DashboardPanel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
/**
 * Header — top navigation. Right-aligned link list, underline-on-hover,
 * no logo mark (the site relies on the hero heading for identity).
 */
function Header({
  links = []
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "1rem 1.5rem 1rem 0",
      width: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    style: {
      textUnderlineOffset: 4,
      color: "inherit",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.textDecoration = "underline",
    onMouseLeave: e => e.currentTarget.style.textDecoration = "none"
  }, l.label))))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onNavigate
}) {
  const {
    Header,
    TextType,
    SocialLinks,
    WorkCard,
    DashboardPanel
  } = window.KelvinBenzaliPortfolioDesignSystem_72cc70;
  const {
    heroTyping,
    socials,
    contactSocials,
    dashboard
  } = window.PORTFOLIO_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--bg-page)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    links: [{
      href: "#about",
      label: "About"
    }, {
      href: "#work",
      label: "Work"
    }, {
      href: "#contact",
      label: "Contact"
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "1.5rem 1.5rem 4rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xl)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-secondary)"
    }
  }, "Senior Software Engineer | ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "Tokopedia")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--text-7xl)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-tight)",
      lineHeight: "var(--leading-tight)"
    }
  }, "Kelvin Benzali"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      minHeight: 100
    }
  }, /*#__PURE__*/React.createElement(TextType, {
    text: heroTyping,
    typingSpeed: 16,
    showCursor: true,
    loop: false
  })), /*#__PURE__*/React.createElement(SocialLinks, {
    links: socials
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      borderRadius: "var(--radius-2xl)",
      border: "1px solid var(--border-default)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/me-hero.jpeg",
    alt: "Kelvin Benzali at his desk",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: "var(--bg-navy-panel)",
      color: "white"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "3rem 1.5rem",
      display: "grid",
      gridTemplateColumns: "6fr 5fr",
      gap: "3rem",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 1.5rem",
      fontSize: "var(--text-6xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "About Me:"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 720,
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-relaxed)",
      color: "rgb(255 255 255 / 0.9)"
    }
  }, "For me, creating an app is not just solving a problem. It is about the continuity and a", " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--rose-400)"
    }
  }, "meaningful impact"), " that we can bring to others. Technology is constantly evolving, unlocking new possibilities that once seemed out of reach. What was once a barrier has now become an ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--rose-400)"
    }
  }, "enabler"), ". As engineers, we have the capabilities to shape this transformation and I'm determined to be part of the movement driving the next era of ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--rose-400)"
    }
  }, "digital innovation"), ".")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DashboardPanel, {
    visitors: dashboard.visitors,
    series: dashboard.series,
    rows: dashboard.rows,
    credit: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "0.5rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-xs)",
        color: "rgb(255 255 255 / 0.4)"
      }
    }, "Powered by Supabase"), /*#__PURE__*/React.createElement(SocialLinks, {
      links: [{
        icon: "supabase",
        url: "https://supabase.com",
        label: "Supabase"
      }],
      gap: 8
    }))
  })))), /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: "5rem 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 1.5rem",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      position: "relative",
      top: 12,
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "var(--tracking-tight)",
      fontSize: "10vw"
    }
  }, "Work", /*#__PURE__*/React.createElement("span", null, "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(WorkCard, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("project");
    },
    title: "Tokopedia",
    bgColor: "var(--bg-card-mint)",
    height: 360,
    logo: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 28,
        color: "#03AC0E"
      }
    }, "tokopedia"),
    iconSrc: "../../assets/photos/tokopedia-mascot.png",
    subtitle: /*#__PURE__*/React.createElement(React.Fragment, null, "As a ", /*#__PURE__*/React.createElement("strong", null, "Senior Software Engineer"), ", I worked with Tokopedia's ", /*#__PURE__*/React.createElement("strong", null, "Digital"), " Team to deliver impactful digital products that drive business growth.")
  }), /*#__PURE__*/React.createElement(WorkCard, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("project");
    },
    title: "ByteDance",
    bgColor: "var(--bg-card-sky)",
    height: 360,
    logo: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photos/bytedance-logo.png",
      alt: "ByteDance",
      style: {
        height: 32,
        objectFit: "contain"
      }
    }),
    subtitle: /*#__PURE__*/React.createElement(React.Fragment, null, "Early on at ", /*#__PURE__*/React.createElement("strong", null, "ByteDance"), ", I led the migration of Tokopedia's core services to the ByteDance Cloud platform, strengthening reliability and scalability.")
  }))), /*#__PURE__*/React.createElement(LuminNovelSection, null), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: "relative",
      padding: "5rem 0"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      position: "relative",
      top: 4,
      left: 24,
      margin: 0,
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "var(--tracking-tight)",
      fontSize: "10vw",
      pointerEvents: "none",
      userSelect: "none"
    }
  }, "Say hi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-dark-panel)",
      color: "var(--text-on-dark)",
      padding: "3.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "1.5rem",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:kevinesia@gmail.com",
    style: {
      color: "inherit",
      textDecoration: "none",
      fontSize: "var(--text-5xl)",
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "var(--tracking-tight)",
      wordBreak: "break-word"
    }
  }, "kevinesia@gmail.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: 48,
      background: "rgb(203 213 225 / 0.4)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 480,
      color: "var(--text-on-dark-muted)"
    }
  }, "I love solving complex problems and designing resilient systems. If you are interested to connect, let's chat \u2014 I'm open to collaborations and opportunities."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: "var(--weight-medium)"
    }
  }, "Kelvin Benzali"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      opacity: 0.8
    }
  }, "Jakarta, Indonesia")), /*#__PURE__*/React.createElement(SocialLinks, {
    links: contactSocials
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 480,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/contact-photo.jpeg",
    alt: "Contact",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(1.1) contrast(1.1) saturate(1.1)"
    }
  })))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-default)",
      background: "var(--bg-subtle)",
      padding: "2rem 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
      textAlign: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-faint)"
    }
  }, "Loosely designed in ", /*#__PURE__*/React.createElement("strong", null, "Figma"), " and coded in ", /*#__PURE__*/React.createElement("strong", null, "IntelliJ IDEA"), ". Built with", " ", /*#__PURE__*/React.createElement("strong", null, "Next.js"), " and ", /*#__PURE__*/React.createElement("strong", null, "Tailwind CSS"), ", deployed with ", /*#__PURE__*/React.createElement("strong", null, "Vercel"), " and powered by", " ", /*#__PURE__*/React.createElement("strong", null, "Supabase"), ". All text is set in the ", /*#__PURE__*/React.createElement("strong", null, "Plus Jakarta Sans"), " typeface."), /*#__PURE__*/React.createElement(SocialLinks, {
    links: socials
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/LuminNovelSection.jsx
try { (() => {
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
  pillDouji: {
    bg: "#fbe1ec",
    fg: "#be3d78"
  },
  pillLN: {
    bg: "#dcf3e6",
    fg: "#1f8a54"
  },
  pillManga: {
    bg: "#e7e2fb",
    fg: "#6a54c9"
  }
};
const LN_PRODUCTS = [{
  img: "../../assets/luminnovel/cover-sana.png",
  title: "#SANAtion Doujinshi — Hiten",
  tag: "Doujinshi",
  pill: LN.pillDouji,
  stock: "In Stock",
  dot: LN.green,
  price: "Rp 160.000",
  sold: "1 sold"
}, {
  img: "../../assets/luminnovel/cover-5cm.png",
  title: "5 Centimeters per Second: one more side",
  tag: "Light Novel",
  pill: LN.pillLN,
  stock: "Preorder",
  dot: LN.orange,
  price: "Rp 280.000",
  sold: "8 sold"
}, {
  img: "../../assets/luminnovel/cover-browsing.png",
  title: "5TH BROWSING — Kantoku Illustration Book",
  tag: "Doujinshi",
  pill: LN.pillDouji,
  stock: "In Stock",
  dot: LN.green,
  price: "Rp 200.000",
  sold: "1 sold"
}, {
  img: "../../assets/luminnovel/cover-7thloop3.png",
  title: "7th Time Loop — Light Novel Vol. 3",
  tag: "Light Novel",
  pill: LN.pillLN,
  stock: "Preorder",
  dot: LN.orange,
  price: "Rp 310.000",
  sold: "12 sold"
}, {
  img: "../../assets/luminnovel/cover-7thloop6.png",
  title: "7th Time Loop — Light Novel Vol. 6",
  tag: "Light Novel",
  pill: LN.pillLN,
  stock: "In Stock",
  dot: LN.green,
  price: "Rp 300.000",
  sold: "8 sold"
}];
function LNChrome() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      background: LN.creamDeep,
      borderBottom: `1px solid ${LN.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["#f87171", "#fbbf24", "#34d399"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 11,
      height: 11,
      borderRadius: "50%",
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: "#fff",
      border: `1px solid ${LN.line}`,
      borderRadius: 999,
      padding: "4px 14px",
      fontSize: 12,
      color: LN.sub,
      minWidth: 220,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: LN.green
    }
  }), "luminnovel.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46
    }
  }));
}
function LNStoreHeader({
  compact
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: compact ? "10px 16px" : "12px 18px",
      borderBottom: `1px solid ${LN.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: LN.ink,
      color: "#fff",
      fontSize: 11,
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      letterSpacing: "0.02em"
    }
  }, "LN"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      color: LN.ink
    }
  }, "Lumin Novel")), !compact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      fontSize: 12,
      color: LN.sub
    }
  }, /*#__PURE__*/React.createElement("span", null, "Manga"), /*#__PURE__*/React.createElement("span", null, "Light Novels"), /*#__PURE__*/React.createElement("span", null, "Series")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${LN.line}`,
      borderRadius: 999,
      padding: "5px 12px",
      fontSize: 11,
      color: "#a8a29e",
      width: compact ? 120 : 180
    }
  }, "Search titles\u2026"));
}

// ---- Screen A: Catalog ----
function LNCatalog() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: LN.cream,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(LNStoreHeader, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 18px 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: LN.ink
    }
  }, "Catalog"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["All Formats", "Title A–Z"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 10,
      color: LN.sub,
      border: `1px solid ${LN.line}`,
      borderRadius: 7,
      padding: "4px 8px",
      background: "#fff"
    }
  }, t, " \u25BE")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 12,
      padding: "8px 18px 16px",
      overflow: "hidden"
    }
  }, LN_PRODUCTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "0.71",
      borderRadius: 6,
      overflow: "hidden",
      boxShadow: "0 4px 10px rgb(28 25 23 / 0.14)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      fontWeight: 600,
      color: p.pill.fg,
      background: p.pill.bg,
      borderRadius: 999,
      padding: "2px 6px"
    }
  }, p.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8,
      color: p.dot,
      display: "flex",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: p.dot
    }
  }), p.stock)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: LN.ink,
      lineHeight: 1.25,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical"
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: LN.ink
    }
  }, p.price)))));
}

// ---- Screen B: Product detail ----
function LNDetail() {
  const p = LN_PRODUCTS[3];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: LN.cream,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(LNStoreHeader, {
    compact: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 22,
      padding: "22px 26px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 170,
      aspectRatio: "0.71",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 10px 26px rgb(28 25 23 / 0.22)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: LN.sub
    }
  }, "Light Novels \u203A 7th Time Loop"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: LN.ink,
      lineHeight: 1.2
    }
  }, "7th Time Loop: The Villainess Enjoys a Carefree Life \u2014 Vol. 3"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 600,
      color: p.pill.fg,
      background: p.pill.bg,
      borderRadius: 999,
      padding: "3px 9px"
    }
  }, p.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: p.dot,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: p.dot
    }
  }), p.stock)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: LN.ink
    }
  }, p.price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      border: `1px solid ${LN.line}`,
      borderRadius: 8,
      background: "#fff",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "7px 11px",
      color: LN.sub
    }
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "7px 12px",
      fontSize: 13,
      fontWeight: 600,
      color: LN.ink,
      borderInline: `1px solid ${LN.line}`
    }
  }, "1"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "7px 11px",
      color: LN.sub
    }
  }, "+")), /*#__PURE__*/React.createElement("span", {
    style: {
      background: LN.ink,
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 8,
      padding: "9px 22px"
    }
  }, "Add to Cart")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: LN.sub,
      marginTop: 2
    }
  }, "12 sold \xB7 Ships from Jakarta \xB7 Preorder closes in 6 days"))));
}

// ---- Screen C: Cart ----
function LNCart() {
  const items = [LN_PRODUCTS[3], LN_PRODUCTS[0]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: LN.cream,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(LNStoreHeader, {
    compact: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "18px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: LN.ink
    }
  }, "Your Cart \xB7 2 items"), items.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "#fff",
      border: `1px solid ${LN.line}`,
      borderRadius: 10,
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      aspectRatio: "0.71",
      borderRadius: 4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: LN.ink,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: LN.sub
    }
  }, "Qty 1 \xB7 ", p.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: LN.ink
    }
  }, p.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${LN.line}`,
      paddingTop: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: LN.sub
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: LN.ink
    }
  }, "Rp 470.000")), /*#__PURE__*/React.createElement("span", {
    style: {
      background: LN.ink,
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 8,
      padding: "10px 26px"
    }
  }, "Checkout \u2192"))));
}
function LuminNovelSection() {
  const screens = [{
    key: "catalog",
    label: "Catalog",
    el: /*#__PURE__*/React.createElement(LNCatalog, null)
  }, {
    key: "detail",
    label: "Product",
    el: /*#__PURE__*/React.createElement(LNDetail, null)
  }, {
    key: "cart",
    label: "Cart",
    el: /*#__PURE__*/React.createElement(LNCart, null)
  }];
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive(a => (a + 1) % screens.length), 4000);
    return () => clearTimeout(t);
  }, [active, paused]);
  const chips = ["Next.js", "Go", "PostgreSQL", "Vercel", "Claude Code"];
  return /*#__PURE__*/React.createElement("section", {
    id: "freelance",
    style: {
      background: LN.cream,
      borderTop: `1px solid ${LN.line}`,
      borderBottom: `1px solid ${LN.line}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "5rem 1.5rem",
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "5fr 6fr",
      gap: "3.5rem",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--accent-strong)"
    }
  }, "Freelance \xB7 E-commerce"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-6xl)",
      fontWeight: "var(--weight-extrabold)",
      letterSpacing: "var(--tracking-tight)",
      lineHeight: "var(--leading-tight)",
      color: "var(--navy-about)"
    }
  }, "Lumin Novel", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "#44403c",
      maxWidth: 460
    }
  }, "Beyond my day job, I designed and shipped ", /*#__PURE__*/React.createElement("strong", null, "luminnovel.com"), " \u2014 an online store for light novels, manga, and doujinshi \u2014 end to end as a freelance build. I owned the full lifecycle: interface design, a ", /*#__PURE__*/React.createElement("strong", null, "Next.js"), " front end, a ", /*#__PURE__*/React.createElement("strong", null, "Go"), " backend over ", /*#__PURE__*/React.createElement("strong", null, "PostgreSQL"), ", testing, and deployment on ", /*#__PURE__*/React.createElement("strong", null, "Vercel"), " \u2014 using ", /*#__PURE__*/React.createElement("strong", null, "Claude Code"), " to scaffold and accelerate the development cycle, turning a blank repo into a live storefront."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      color: "#57534e",
      background: "#fff",
      border: `1px solid ${LN.line}`,
      borderRadius: 999,
      padding: "5px 12px"
    }
  }, c))), /*#__PURE__*/React.createElement("a", {
    href: "https://luminnovel.com",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginTop: 4,
      alignSelf: "flex-start",
      fontSize: "var(--text-base)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--navy-about)",
      textDecoration: "underline",
      textUnderlineOffset: 5,
      textDecorationColor: "var(--accent)"
    }
  }, "Visit luminnovel.com \u2192")), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      borderRadius: 14,
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 24px 60px rgb(28 25 23 / 0.22)",
      border: `1px solid ${LN.line}`
    }
  }, /*#__PURE__*/React.createElement(LNChrome, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 380
    }
  }, screens.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    "aria-hidden": i !== active,
    style: {
      position: "absolute",
      inset: 0,
      opacity: i === active ? 1 : 0,
      transform: i === active ? "translateY(0)" : "translateY(8px)",
      transition: "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)",
      pointerEvents: i === active ? "auto" : "none"
    }
  }, s.el))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      padding: "10px",
      background: LN.creamDeep,
      borderTop: `1px solid ${LN.line}`
    }
  }, screens.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.key,
    onClick: () => setActive(i),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "none",
      cursor: "pointer",
      background: "transparent",
      fontSize: 11,
      fontWeight: i === active ? 700 : 500,
      color: i === active ? LN.ink : LN.sub,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: i === active ? LN.green : "#d6cdbd",
      transition: "background 300ms"
    }
  }), s.label))))));
}
window.LuminNovelSection = LuminNovelSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/LuminNovelSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectScreen.jsx
try { (() => {
function ProjectScreen({
  onNavigate
}) {
  const {
    Header,
    ProjectTimelineCard,
    Icon
  } = window.KelvinBenzaliPortfolioDesignSystem_72cc70;
  const {
    projects
  } = window.PORTFOLIO_DATA;
  const years = Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      background: "var(--bg-page)",
      color: "var(--text-primary)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    links: [{
      href: "#",
      label: "Home"
    }, {
      href: "#about",
      label: "About"
    }, {
      href: "#work",
      label: "Work"
    }, {
      href: "#contact",
      label: "Contact"
    }]
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1152,
      margin: "0 auto",
      padding: "1rem 1.5rem 4rem",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: "2.5rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      textDecoration: "none"
    }
  }, "\u2190 Back home"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0.75rem 0 0",
      fontSize: "var(--text-4xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-tight)"
    }
  }, "Tokopedia Projects"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "0.5rem",
      maxWidth: 640,
      color: "var(--text-muted)"
    }
  }, "A focused timeline of major initiatives I led or contributed to between 2019 and 2025.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "72px 1fr",
      gap: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 24,
      alignSelf: "start",
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      paddingTop: "0.5rem"
    }
  }, years.map(y => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: "var(--slate-700)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--slate-700)"
    }
  }, y)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.75rem"
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(ProjectTimelineCard, {
    key: p.id,
    project: p
  }))))));
}
window.ProjectScreen = ProjectScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Sample data for the Home + Project screens — mirrors the shape/content of
// the real app/page.tsx and app/project/page.tsx (kben19/Portfolio).

// Deterministic pseudo-random 31-day traffic wave for the DashboardPanel's
// Traffic Trends chart — sample data only (production pulls real Supabase numbers).
function generateTrafficSeries(len, base, amp, seed) {
  const out = [];
  let s = seed;
  for (let i = 0; i < len; i++) {
    s = (s * 9301 + 49297) % 233280;
    const rnd = s / 233280;
    const wave = Math.sin(i / 3.2) * amp * 0.6 + Math.sin(i / 7) * amp * 0.4;
    out.push(Math.max(1, Math.round(base + wave + (rnd - 0.5) * amp * 0.3)));
  }
  return out;
}
const TRAFFIC_DATES = Array.from({
  length: 31
}, (_, i) => {
  const d = new Date(2025, 11, 1 + i);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
});
window.PORTFOLIO_DATA = {
  heroTyping: ["Building one of biggest Indonesia e-commerce industry for over 7 years.\n\nSpecializing in scalable microservices serving millions of users."],
  socials: [{
    icon: "github",
    url: "https://github.com/kben19",
    label: "GitHub"
  }, {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/kelvin-benzali/",
    label: "LinkedIn"
  }, {
    icon: "medium",
    url: "https://medium.com/@kevinesia",
    label: "Medium"
  }],
  contactSocials: [{
    icon: "linkedin",
    url: "https://www.linkedin.com/in/kelvin-benzali/",
    label: "LinkedIn"
  }, {
    icon: "x",
    url: "https://x.com/benzali",
    label: "X"
  }, {
    icon: "instagram",
    url: "https://www.instagram.com/kelvinbenzali/",
    label: "Instagram"
  }],
  dashboard: {
    visitors: [{
      label: "Visitors",
      value: 1284,
      delta: "+22%",
      deltaTone: "good"
    }, {
      label: "Page Views",
      value: 3902,
      delta: "+9%",
      deltaTone: "good"
    }],
    series: {
      dates: TRAFFIC_DATES,
      visitors: generateTrafficSeries(31, 40, 20, 7),
      pageViews: generateTrafficSeries(31, 95, 45, 13)
    },
    rows: {
      countries: [{
        icon: null,
        label: "🇮🇩 Indonesia",
        percent: 54
      }, {
        icon: null,
        label: "🇺🇸 United States",
        percent: 18
      }, {
        icon: null,
        label: "🇸🇬 Singapore",
        percent: 11
      }, {
        icon: null,
        label: "🇳🇱 Netherlands",
        percent: 6
      }],
      devices: [{
        icon: "monitor",
        label: "Desktop",
        percent: 68
      }, {
        icon: "smartphone",
        label: "Mobile",
        percent: 29
      }, {
        icon: "tablet-smartphone",
        label: "Tablet",
        percent: 3
      }],
      browsers: [{
        icon: "googlechrome",
        iconSet: "brand",
        label: "Chrome",
        percent: 71
      }, {
        icon: "safari",
        iconSet: "brand",
        label: "Safari",
        percent: 18
      }, {
        icon: "mozillafirefox",
        iconSet: "brand",
        label: "Firefox",
        percent: 7
      }],
      referrers: [{
        icon: "github",
        iconSet: "brand",
        label: "github.com",
        percent: 44
      }, {
        icon: "linkedin",
        iconSet: "brand",
        label: "linkedin.com",
        percent: 31
      }, {
        icon: "google",
        iconSet: "brand",
        label: "google.com",
        percent: 25
      }]
    }
  },
  projects: [{
    id: "2025-toko-migration",
    year: 2025,
    month: "March",
    title: "Cloud Migration — Migration Tokopedia Digital Core Service",
    role: "Senior Software Engineer — Tokopedia Digital",
    subtitle: "Led the migration project of the digital core service to ByteDance cloud platform.",
    impact: "Successful migration service reduce ~20% infrastructure cost, increasing stability while maintaining SLOs",
    bullets: ["Standardized new design docs, runbooks, updated SOP/playbooks in terms of development, scaling operations and monitoring.", "Optimizing and refactor the migrated services to improve performance and stability within the new cloud environment."],
    tech: ["Go", "Docker", "Kubernetes", "gRPC", "Postgresql", "mysql", "Redis", "NSQ", "Nginx", "GCP", "AWS"],
    links: [{
      label: "Tokopedia Digital App",
      href: "https://www.tokopedia.com/top-up-tagihan"
    }],
    images: [{
      src: "../../assets/photos/migration.gif",
      alt: "Cloud Server Migration"
    }]
  }, {
    id: "2024-toko-sandbox",
    year: 2024,
    month: "December",
    title: "Toko Sandbox — CI/CD-Gated Test Environment (Shift-Left)",
    role: "Senior Software Engineer — Tokopedia Travel",
    subtitle: "Proposed and led the design of a self-service sandbox simulator which established a reliable testing environment.",
    impact: "Cut integration/regression test time by ~40–50% and increased test coverage ~30%, boosting release confidence.",
    bullets: ["Integrated with CI/CD pipelines to enable automated integration and regression testing.", "Promotes a test driven development culture by providing a self-service testing environment."],
    tech: ["Go", "Docker", "Kubernetes", "REST API", "Postgresql", "Redis", "CICD"],
    links: [],
    images: [{
      src: "../../assets/illustrations/sandbox-illustration.svg",
      alt: "Sandbox Simulator Illustration"
    }, {
      src: "../../assets/photos/tokopedia-flight.png",
      alt: "Tokopedia Flight Page"
    }]
  }, {
    id: "2019-sobat-dashboard",
    year: 2019,
    month: "August",
    title: "Mitra App & Sobat Dashboard",
    role: "Software Engineer — Tokopedia Mitra",
    subtitle: "Development of Mitra App and Sobat Dashboard from the ground up.",
    impact: "Promotes business growth year on year on Mitra App and its enterprise tools of Sobat Dashboard.",
    bullets: ["Delivers Mitra App to address the problems of b2b market demands on Indonesia's independent sellers.", "Delivers Sobat Dashboard as an enterprise tools for analyzing Mitra business growth."],
    tech: ["Go", "Docker", "GCP", "Postgres", "Redis", "NSQ", "Svelte"],
    links: [],
    images: [{
      src: "../../assets/photos/mitra-page.jpeg",
      alt: "Mitra Tokopedia App"
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ProjectTimelineCard = __ds_scope.ProjectTimelineCard;

__ds_ns.WorkCard = __ds_scope.WorkCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SocialLinks = __ds_scope.SocialLinks;

__ds_ns.TechBadge = __ds_scope.TechBadge;

__ds_ns.TextType = __ds_scope.TextType;

__ds_ns.DashboardPanel = __ds_scope.DashboardPanel;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.StatBarRow = __ds_scope.StatBarRow;

__ds_ns.TrafficLineChart = __ds_scope.TrafficLineChart;

__ds_ns.Header = __ds_scope.Header;

})();
