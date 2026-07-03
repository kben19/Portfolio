import React from "react";
import { Icon } from "./Icon.jsx";

const TECH_ICON_MAP = [
  ["cicd", "workflow"], ["argo", "workflow"],
  ["github", "git-branch"], ["actions", "git-branch"],
  ["docker", "server"], ["kubernetes", "server"], ["k8s", "server"],
  ["rest api", "file-code"], ["grpc", "braces"], ["nsq", "message-square-code"],
  ["nginx", "server"],
  ["prometheus", "shield-check"], ["grafana", "shield-check"], ["newrelic", "shield-check"],
  ["slo", "shield-check"], ["opa", "shield-check"], ["security", "shield-check"],
  ["aws", "cloud"], ["gcp", "cloud"], ["bytedance", "cloud"],
  ["postgres", "database"], ["mysql", "database"], ["redis", "database-zap"],
  ["go", "hash"], ["golang", "hash"], ["svelte", "flame"],
];

function techIcon(name) {
  const key = name.toLowerCase();
  const hit = TECH_ICON_MAP.find(([k]) => key.includes(k));
  return hit ? hit[1] : null;
}

/**
 * TechBadge — small pill used to list technologies on a project card.
 */
export function TechBadge({ label }) {
  const icon = techIcon(label);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.25rem",
        borderRadius: "var(--radius-full)",
        border: "1px solid rgb(107 114 128 / 0.1)",
        background: "rgb(224 242 254 / 0.6)",
        padding: "0.25rem 0.625rem",
        fontSize: "var(--text-xs)",
        color: "var(--slate-700)",
      }}
    >
      {icon && <Icon name={icon} size={12} />}
      {label}
    </span>
  );
}
