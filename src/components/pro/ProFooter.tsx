import type { ReactNode } from "react";

export interface ProFooterProps {
  /** Closing line in Newsreader 28px, e.g. "Let's talk." */
  title?: ReactNode;
  /** Mono meta line, e.g. "Boston, MA · 617-503-7939". */
  meta?: ReactNode;
  /** Right-hand links: ProLinks and a quiet ProButton. */
  children?: ReactNode;
  /** Small full-width line at the very bottom, e.g. a disclaimer or credit. */
  note?: ReactNode;
}

/** Pro page footer: serif sign-off and mono contact line left, underlined links right. */
export function ProFooter({ title = "Let's talk.", meta, children, note }: ProFooterProps) {
  return (
    <footer className="ew-pro-footer">
      <div className="ew-pro-footer__lead">
        <span className="ew-pro-footer__title">{title}</span>
        {meta != null && <span className="ew-pro-footer__meta">{meta}</span>}
      </div>
      <div className="ew-pro-footer__links">{children}</div>
      {note != null && <p className="ew-pro-footer__note">{note}</p>}
    </footer>
  );
}
