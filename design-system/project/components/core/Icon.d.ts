export interface IconProps {
  /** Icon slug. For set="lucide": kebab-case lucide name (e.g. "external-link"). For set="brand": simple-icons slug (e.g. "github"). */
  name: string;
  /** Which CDN icon set to pull from. Default "lucide". */
  set?: "lucide" | "brand";
  /** Pixel size (square). Default 20. */
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
