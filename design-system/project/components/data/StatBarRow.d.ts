export interface StatBarRowProps {
  /** Icon slug for the leading glyph (flag emoji is used for countries instead — pass icon=null). */
  icon?: string | null;
  iconSet?: "lucide" | "brand";
  label: string;
  /** 0-100 */
  percent: number;
}
