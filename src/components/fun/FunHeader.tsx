import type { ReactNode } from "react";

export interface FunNavLink {
  label: string;
  href: string;
}

export interface FunHeaderProps {
  /** Wordmark (800 weight, 19px). */
  brand?: ReactNode;
  /** Optional 40×40 outlined image tile left of the wordmark. */
  tileSrc?: string;
  tileAlt?: string;
  links?: FunNavLink[];
  /** Trailing pill buttons, e.g. `<FunButton size="sm" tone="t3">Say hello</FunButton>`. */
  children?: ReactNode;
}

/** Fun-mode top bar: image tile + bold wordmark left, nav links and pill buttons right. */
export function FunHeader({ brand = "Evan Wacks", tileSrc, tileAlt = "", links = [], children }: FunHeaderProps) {
  return (
    <header className="ew-fun-header">
      <div className="ew-fun-header__brand">
        {tileSrc && <img className="ew-fun-header__tile" src={tileSrc} alt={tileAlt} />}
        <span className="ew-fun-header__name">{brand}</span>
      </div>
      <nav className="ew-fun-header__nav">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        {children}
      </nav>
    </header>
  );
}
