import type { ReactNode } from "react";
import { FunHeading } from "./FunType";

export interface FunSectionProps {
  id?: string;
  /** Section heading text. */
  title?: ReactNode;
  headingSize?: "xl" | "lg" | "md";
  /** Max heading width in ch. */
  headingMaxCh?: number;
  /** Element shown opposite the heading (baseline-aligned), usually a `<FunPill>`. */
  badge?: ReactNode;
  /** Intro under the heading, usually a `<FunText>`; heading + intro are capped at 58ch together. */
  intro?: ReactNode;
  /** Bottom padding in px. Default 84. */
  spaceAfter?: number;
  /** Gap between heading block and content in px. Default 26. */
  gap?: number;
  children?: ReactNode;
}

/** Fun page section: bold heading (optionally with a badge or intro) then content, 26px apart. */
export function FunSection({ id, title, headingSize = "xl", headingMaxCh, badge, intro, spaceAfter = 84, gap = 26, children }: FunSectionProps) {
  const heading = title != null && (
    <FunHeading size={headingSize} maxCh={headingMaxCh}>
      {title}
    </FunHeading>
  );
  return (
    <section id={id} className="ew-fun-section" style={{ paddingBottom: spaceAfter, gap }}>
      {badge != null ? (
        <div className="ew-fun-section__head">
          {heading}
          {badge}
        </div>
      ) : intro != null ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: "58ch" }}>
          {heading}
          {intro}
        </div>
      ) : (
        heading
      )}
      {children}
    </section>
  );
}
