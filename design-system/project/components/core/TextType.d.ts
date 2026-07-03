export interface TextTypeProps {
  /** One string, or an array of strings to cycle through when loop=true. */
  text: string | string[];
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  style?: React.CSSProperties;
}
