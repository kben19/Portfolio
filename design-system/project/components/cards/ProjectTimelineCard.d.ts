export interface TimelineImage {
  src: string;
  alt: string;
}
export interface TimelineLink {
  label: string;
  href: string;
}
export interface TimelineMetric {
  /** Big callout value, e.g. "20%" or "SLOs" — short text, not always a number. */
  value: string;
  label: string;
}
export interface TimelineTechGroup {
  /** e.g. "Infrastructure & Cloud", "Backend & Application", "Database" */
  category: string;
  items: string[];
}
export interface TimelineStatus {
  /** Short outcome badge, e.g. "Successful Migration". Use sparingly — only for a confirmed shipped outcome. */
  label: string;
}
export interface TimelineProject {
  title: string;
  role?: string;
  year: number;
  month: string;
  subtitle?: string;
  /** Small confirmed-outcome badge (icon + label). Optional — omit rather than force one. */
  status?: TimelineStatus;
  /** Up to 3 big stat callouts (value + label). Takes precedence over `impact` when present. */
  metrics?: TimelineMetric[];
  /** Plain-text fallback impact line, shown only when `metrics` is empty. */
  impact?: string;
  bullets?: string[];
  /** Preferred: tech pills grouped under a category label. */
  techGroups?: TimelineTechGroup[];
  /** Legacy flat pill list — used only when `techGroups` is omitted. */
  tech?: string[];
  images?: TimelineImage[];
  links?: TimelineLink[];
}

export interface ProjectTimelineCardProps {
  project: TimelineProject;
}
