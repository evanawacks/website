import type { ReactNode } from "react";

export type HighlightColor = "blue" | "green" | "pink" | "yellow" | "coral";

export interface HighlightProps {
  /** Marker color. */
  color?: HighlightColor;
  children?: ReactNode;
}

/**
 * Marker-pen highlight for words inside a ProHeadline with `treatment="marker"`.
 * Padding is weighted upward and clones across line breaks.
 */
export function Highlight({ color = "blue", children }: HighlightProps) {
  return <span className={`ew-mark ew-mark--${color}`}>{children}</span>;
}
