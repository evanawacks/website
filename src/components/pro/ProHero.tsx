import type { CSSProperties, ReactNode } from "react";

export interface ProHeroProps {
  /** Kicker above the headline, e.g. "Born in Brooklyn, based in Boston". */
  eyebrow?: ReactNode;
  /** The headline, usually a `<ProHeadline>`. */
  title: ReactNode;
  /** Intro paragraph (17px/1.6, max 52ch). */
  lede?: ReactNode;
  /** CTA row, e.g. a solid ProButton and a ProLink. */
  actions?: ReactNode;
  /** Right column, usually a `<ProPhoto>`. */
  media?: ReactNode;
  /** Style override for the media column (the site uses it to pin the photo to the Fun hero's position). */
  mediaStyle?: CSSProperties;
}

/** Pro hero: two-column grid (1.08fr / 0.92fr, 44px gap) with copy on the left and a portrait on the right. */
export function ProHero({ eyebrow, title, lede, actions, media, mediaStyle }: ProHeroProps) {
  return (
    <section className="ew-pro-hero">
      <div className="ew-pro-hero__copy">
        {eyebrow != null && <span className="ew-eyebrow">{eyebrow}</span>}
        {title}
        {lede != null && <p className="ew-lede">{lede}</p>}
        {actions != null && <div className="ew-pro-hero__actions">{actions}</div>}
      </div>
      {media != null && (
        <div className="ew-pro-hero__media" style={mediaStyle}>
          {media}
        </div>
      )}
    </section>
  );
}
