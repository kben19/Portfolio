export interface MetricCardProps {
  label: string;
  value: number | string;
  delta?: string;
  deltaTone?: "good" | "bad" | "neutral";
  helpText?: string;
}
