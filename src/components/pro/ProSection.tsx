import type { ReactNode } from "react";

export interface ProSectionProps {
  /** Anchor id for in-page nav. */
  id?: string;
  /** Section heading (h2, Newsreader 30px). */
  title: ReactNode;
  /** Optional logo shown left of the title; pass an `<img>` with explicit width. */
  logo?: ReactNode;
  /** Uppercase mono sub-label under the title, e.g. a date range or place. */
  label?: ReactNode;
  /** Extra content under the label in the left column (e.g. `<RoleList>` or `<Credentials>`). */
  aside?: ReactNode;
  /** Right column: ProEntry rows, a ChipRow, paragraphs, a ProAudioCard... */
  children?: ReactNode;
}

/**
 * Pro section: hairline rule on top, then a 0.32fr / 1fr grid with the label column on the left
 * and content on the right. Collapses to one column under 760px.
 */
export function ProSection({ id, title, logo, label, aside, children }: ProSectionProps) {
  return (
    <section id={id} className="ew-pro-section">
      <div className="ew-pro-section__grid">
        <div className="ew-pro-section__aside">
          {logo ? (
            <div className="ew-pro-section__heading">
              {logo}
              <h2 className="ew-pro-section__title">{title}</h2>
            </div>
          ) : (
            <h2 className="ew-pro-section__title">{title}</h2>
          )}
          {label != null && <span className="ew-pro-section__label">{label}</span>}
          {aside}
        </div>
        <div className="ew-pro-section__main">{children}</div>
      </div>
    </section>
  );
}

export interface ProTextProps {
  children?: ReactNode;
}

/** Body paragraph for a ProSection's right column (16.5px/1.65, body gray, max 60ch). */
export function ProText({ children }: ProTextProps) {
  return <p className="ew-pro-section__text">{children}</p>;
}
