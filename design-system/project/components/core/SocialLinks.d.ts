export interface SocialLink {
  /** simple-icons slug, e.g. "github", "linkedin", "medium", "x", "instagram", "supabase" */
  icon: string;
  url: string;
  label?: string;
}

export interface SocialLinksProps {
  links: SocialLink[];
  gap?: number;
}
