export interface WorkCardProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  title: string;
  /** Rendered title wordmark/logo, e.g. an <img>. */
  logo?: React.ReactNode;
  /** Optional small mascot/icon image shown beside the logo. */
  iconSrc?: string;
  subtitle?: React.ReactNode;
  /** CSS color/token for the panel background tint, e.g. "var(--bg-card-mint)". */
  bgColor?: string;
  /** Panel height in px. Source scales 320 -> 416 -> 576 across breakpoints. */
  height?: number;
}
