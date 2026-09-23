import type { HTMLAttributes, ReactNode, Ref } from "react";
import { cx } from "../../utils";

export interface ProPageProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** Page content, usually ProHeader, ProHero, ProSection(s) and ProFooter. */
  children?: ReactNode;
}

/**
 * Root wrapper for Pro mode: white paper, IBM Plex Sans, ink text, and a centered
 * 1060px container with 32px side padding. Every Pro component expects to sit inside it.
 */
export function ProPage({ children, className, ...rest }: ProPageProps) {
  return (
    <div className={cx("ew-pro", className)} {...rest}>
      <div className="ew-pro__container">{children}</div>
    </div>
  );
}
