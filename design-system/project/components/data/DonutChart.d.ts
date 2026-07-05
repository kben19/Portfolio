export interface DonutSegment {
  label: string;
  /** 0-100. Segments are drawn in array order, clockwise from the top. */
  percent: number;
  /** CSS color (hex or var()) for the ring segment and its legend dot. */
  color: string;
  icon?: string | null;
  iconSet?: "lucide" | "brand";
}

export interface DonutChartProps {
  /** 2-4 segments. The first is treated as the "top" segment shown in the hollow center. */
  data: DonutSegment[];
}
