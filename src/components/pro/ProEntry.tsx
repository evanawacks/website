import type { ReactNode } from "react";
import { cx } from "../../utils";

export interface ProEntryProps {
  /** Entry heading (h3, 18px/600). */
  title: ReactNode;
  /** Organization line under the title (14.5px, muted). */
  org?: ReactNode;
  /** Date range. When set, the row becomes a 160px date column + content grid. */
  date?: ReactNode;
  /** Body copy (15.5px/1.65, body gray). */
  children?: ReactNode;
}

/**
 * One row in a ProSection's right column. Consecutive entries are separated by 1px rules
 * with 26px vertical padding; the first has no top padding, the last no rule.
 */
export function ProEntry({ title, org, date, children }: ProEntryProps) {
  const body = (
    <>
      <h3 className="ew-pro-entry__title">{title}</h3>
      {org != null && <span className="ew-pro-entry__org">{org}</span>}
      {children != null && <p className="ew-pro-entry__text">{children}</p>}
    </>
  );
  if (date != null) {
    return (
      <div className={cx("ew-pro-entry", "ew-pro-entry--dated")}>
        <span className="ew-pro-entry__date">{date}</span>
        <div className="ew-pro-entry__body">{body}</div>
      </div>
    );
  }
  return <div className="ew-pro-entry">{body}</div>;
}
