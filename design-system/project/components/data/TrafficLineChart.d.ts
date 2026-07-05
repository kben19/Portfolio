export interface TrafficLineChartSeries {
  label: string;
  /** CSS color (hex or var()) for this line, its area fill, and its legend dot. */
  color: string;
  values: number[];
}

export interface TrafficLineChartProps {
  /** Footer caption next to the legend, e.g. "Last 31 days". */
  caption?: string;
  /** X-axis labels, one per data point. */
  dates: string[];
  /** 1-3 series, each the same length as `dates`. */
  series: TrafficLineChartSeries[];
}
