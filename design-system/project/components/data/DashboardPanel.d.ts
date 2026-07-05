export interface DashboardVisitorCard {
  label: string;
  value: number | string;
  delta?: string;
  deltaTone?: "good" | "bad" | "neutral";
}
export interface DashboardStatRow {
  icon?: string | null;
  iconSet?: "lucide" | "brand";
  label: string;
  percent: number;
}
export interface DashboardSeries {
  dates: string[];
  visitors: number[];
  pageViews: number[];
}

export interface DashboardPanelProps {
  title?: string;
  /** Small line under the title, e.g. "Live Traffic Showcase (Click to Explore)" — shown next to a pulsing live dot. */
  subheader?: string;
  /** Optional node rendered top-right of the header, e.g. a "Powered by Supabase" credit + logo link. */
  credit?: React.ReactNode;
  visitors: DashboardVisitorCard[];
  /** Traffic-trend line chart data for the Visitors tab. Omit to hide the chart. */
  series?: DashboardSeries;
  /** Rows keyed by tab id: countries | devices | browsers | referrers */
  rows: Record<string, DashboardStatRow[]>;
  topN?: number;
}
