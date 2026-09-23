import type { ReactNode } from "react";

export interface ProNavLink {
  label: string;
  href: string;
}

export interface ProHeaderProps {
  /** Wordmark on the left, set in Newsreader 23px. */
  brand?: ReactNode;
  /** In-page anchor links. */
  links?: ProNavLink[];
  /** Trailing control, typically `<ProButton variant="outline">Fun version</ProButton>`. */
  action?: ReactNode;
}

/** Pro-mode top bar: serif wordmark left, gray nav links and one action right, hairline rule below. */
export function ProHeader({ brand = "Evan Wacks", links = [], action }: ProHeaderProps) {
  return (
    <header className="ew-pro-header">
      <span className="ew-pro-header__brand">{brand}</span>
      <nav className="ew-pro-header__nav">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        {action}
      </nav>
    </header>
  );
}
