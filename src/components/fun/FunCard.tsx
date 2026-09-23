import type { ReactNode } from "react";
import { cx } from "../../utils";
import type { FunTone } from "./FunButton";

export interface FunCardProps {
  /** Card fill from the active scheme. Default "surface". */
  tone?: FunTone;
  /** Hard offset shadow: `sm` 4px, `md` 5px, `lg` 8px. Default none. */
  shadow?: "none" | "sm" | "md" | "lg";
  /** Top icon, usually a `<FunGlyph>`. */
  icon?: ReactNode;
  /** Uppercase mono line above the title, e.g. a date range. */
  eyebrow?: ReactNode;
  title?: ReactNode;
  /** Secondary line under the title, e.g. an organization. */
  meta?: ReactNode;
  /** Body copy (15px/1.55). */
  children?: ReactNode;
}

/** Outlined pastel card (2px line, 20px radius, 26px padding). Lay several out in a `<FunGrid>`. */
export function FunCard({ tone = "surface", shadow = "none", icon, eyebrow, title, meta, children }: FunCardProps) {
  return (
    <div
      className={cx(
        "ew-fun-card",
        tone !== "surface" && `ew-fun-card--${tone}`,
        shadow !== "none" && `ew-fun-card--shadow-${shadow}`,
        eyebrow != null && "ew-fun-card--eyebrow",
      )}
    >
      {icon}
      {eyebrow != null && <span className="ew-fun-card__eyebrow">{eyebrow}</span>}
      {title != null && <h3 className="ew-fun-card__title">{title}</h3>}
      {meta != null && <span className="ew-fun-card__meta">{meta}</span>}
      {children != null && <p className="ew-fun-card__body">{children}</p>}
    </div>
  );
}

export interface FunGridProps {
  /** Minimum column width in px before wrapping. Default 250. */
  min?: number;
  /** Gap in px. Default 20. */
  gap?: number;
  children?: ReactNode;
}

/** Responsive auto-fit grid for FunCards and FunFigures. */
export function FunGrid({ min = 250, gap = 20, children }: FunGridProps) {
  return (
    <div className="ew-fun-grid" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`, gap }}>
      {children}
    </div>
  );
}

export interface FunGlyphProps {
  /** `dollar`: tilted t1 tile with "$". `stack`: three t2 database discs. `bars`: three rising t3 bars. */
  kind: "dollar" | "stack" | "bars";
}

/** 54px hand-drawn-style icon for the top of a FunCard. */
export function FunGlyph({ kind }: FunGlyphProps) {
  if (kind === "dollar") return <div className="ew-fun-glyph ew-fun-glyph--dollar">$</div>;
  if (kind === "stack")
    return (
      <div className="ew-fun-glyph ew-fun-glyph--stack">
        <span />
        <span />
        <span />
      </div>
    );
  return (
    <div className="ew-fun-glyph ew-fun-glyph--bars">
      <span style={{ height: "40%" }} />
      <span style={{ height: "72%" }} />
      <span style={{ height: "100%" }} />
    </div>
  );
}
