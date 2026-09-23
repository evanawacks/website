import type { ReactNode } from "react";

export interface Role {
  title: string;
  dates: string;
  /** Past roles render lighter (500 weight, body gray). */
  past?: boolean;
}

export interface RoleListProps {
  roles: Role[];
}

/** Stack of job titles with mono date ranges, for a ProSection's `aside`. Current role first. */
export function RoleList({ roles }: RoleListProps) {
  return (
    <div className="ew-role-list">
      {roles.map((r) => (
        <div key={r.title + r.dates} className={r.past ? "ew-role ew-role--past" : "ew-role"}>
          <span className="ew-role__title">{r.title}</span>
          <span className="ew-role__date">{r.dates}</span>
        </div>
      ))}
    </div>
  );
}

export interface CredentialsProps {
  items: ReactNode[];
}

/** Plain stacked lines (14px body gray) for degrees and certificates, for a ProSection's `aside`. */
export function Credentials({ items }: CredentialsProps) {
  return (
    <div className="ew-credentials">
      {items.map((it, i) => (
        <span key={i}>{it}</span>
      ))}
    </div>
  );
}
