import type { ReactNode } from "react";

export interface FunFooterProps {
  /** Sign-off line (22px, 800). */
  title?: ReactNode;
  /** Mono contact line. */
  meta?: ReactNode;
  /** Pill links, e.g. `<FunButton size="md" tone="t3" href="mailto:…">`. */
  children?: ReactNode;
}

/** Fun page footer: 2px line on top, bold sign-off and mono meta left, pill links right. */
export function FunFooter({ title = "Let's talk data, or goats.", meta, children }: FunFooterProps) {
  return (
    <footer className="ew-fun-footer">
      <div className="ew-fun-footer__lead">
        <span className="ew-fun-footer__title">{title}</span>
        {meta != null && <span className="ew-fun-footer__meta">{meta}</span>}
      </div>
      <div className="ew-fun-footer__links">{children}</div>
    </footer>
  );
}
