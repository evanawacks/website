import type { ReactNode } from "react";

export interface FunHeroProps {
  /** Location/role pill above the headline, usually a `<FunPill>`. */
  badge?: ReactNode;
  /** Headline: `<FunHeadline>` or `<ScribbleHeadline>`. */
  headline: ReactNode;
  /** Nudge under the headline, usually `<FunPill variant="hint">`. */
  hint?: ReactNode;
  /** Intro paragraph (18px, 46ch). */
  text?: ReactNode;
  /** Small mono line, e.g. schools. */
  meta?: ReactNode;
  /** CTA row of FunButtons. */
  actions?: ReactNode;
  /** Anything after the CTAs, e.g. a `<SwatchPicker>`. */
  extra?: ReactNode;
  /** Right column, usually a `<FunPhotoCard>`. */
  media?: ReactNode;
}

/** Fun hero: same 1.08fr / 0.92fr grid as the Pro hero, vertically centered, copy stack left, photo card right. */
export function FunHero({ badge, headline, hint, text, meta, actions, extra, media }: FunHeroProps) {
  return (
    <section className="ew-fun-hero">
      <div className="ew-fun-hero__copy">
        {badge}
        {headline}
        {hint}
        {text != null && <p className="ew-fun-text ew-fun-text--lg">{text}</p>}
        {meta != null && <div className="ew-fun-mono">{meta}</div>}
        {actions != null && <div className="ew-fun-hero__actions">{actions}</div>}
        {extra}
      </div>
      {media != null && <div>{media}</div>}
    </section>
  );
}
