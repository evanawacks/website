import type { ReactNode } from "react";
import { cx } from "../../utils";

export interface ProHeadlineProps {
  /**
   * `marker` opens up the line-height (1.26) so `<Highlight>` spans have room;
   * `plain` keeps the tight 1.04 display leading (use with plain text or `.ew-ink-teal`/`.ew-ink-plum` spans).
   */
  treatment?: "marker" | "plain";
  children?: ReactNode;
  className?: string;
}

/** Pro display headline (h1): Newsreader 500, clamp(42px, 6.4vw, 76px), balanced wrapping. */
export function ProHeadline({ treatment = "marker", children, className }: ProHeadlineProps) {
  return <h1 className={cx("ew-pro-h1", treatment === "marker" && "ew-pro-h1--marker", className)}>{children}</h1>;
}
