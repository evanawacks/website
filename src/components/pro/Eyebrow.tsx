import type { ReactNode } from "react";

export interface EyebrowProps {
  children?: ReactNode;
}

/** Small uppercase mono kicker that sits above a Pro headline (11px, 0.16em tracking, muted gray). */
export function Eyebrow({ children }: EyebrowProps) {
  return <span className="ew-eyebrow">{children}</span>;
}
