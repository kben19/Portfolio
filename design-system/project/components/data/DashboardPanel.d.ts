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

export interface DashboardPanelProps {
  title?: string;
  visitors: DashboardVisitorCard[];
  /** Rows keyed by tab id: countries | devices | browsers | referrers */
  rows: Record<string, DashboardStatRow[]>;
  topN?: number;
}
