import type { HTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export type FunScheme = "duck-blue" | "bubblegum" | "lemonade" | "pond-mint" | "mono";

export interface FunPageProps extends HTMLAttributes<HTMLDivElement> {
  /** Color scheme. Re-points every --fun-* token for this subtree. Default "duck-blue". */
  scheme?: FunScheme;
  /** Wrap children in the centered 1120px container (26px side padding). Default true. */
  contained?: boolean;
  children?: ReactNode;
}

/**
 * Root wrapper for Fun mode: sets the color scheme, paints the page background and switches
 * type to Bricolage Grotesque. Every Fun component must sit inside it, or its colors fall back
 * to Duck Blue and its type to the browser default.
 */
export function FunPage({ scheme = "duck-blue", contained = true, className, children, ...rest }: FunPageProps) {
  return (
    <div className={cx("ew-fun", className)} data-fun-scheme={scheme} {...rest}>
      {contained ? <div className="ew-fun__container">{children}</div> : children}
    </div>
  );
}
