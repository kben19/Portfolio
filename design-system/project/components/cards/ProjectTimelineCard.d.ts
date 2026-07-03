export interface TimelineImage {
  src: string;
  alt: string;
}
export interface TimelineLink {
  label: string;
  href: string;
}
export interface TimelineProject {
  title: string;
  role?: string;
  year: number;
  month: string;
  subtitle?: string;
  impact?: string;
  bullets?: string[];
  tech?: string[];
  images?: TimelineImage[];
  links?: TimelineLink[];
}

export interface ProjectTimelineCardProps {
  project: TimelineProject;
}
