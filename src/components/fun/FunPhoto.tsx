import type { ReactNode } from "react";
import { cx } from "../../utils";

export interface FunPhotoCardProps {
  src: string;
  alt: string;
  /** Pill caption hanging off the bottom-left corner. */
  caption?: ReactNode;
  /** CSS aspect-ratio of the photo, e.g. "3024 / 4007". */
  aspectRatio?: string;
}

/** Hero photo card: photo in a framed card with an 8px hard shadow, over a t2 plate tilted -3°, plus a t3 caption pill. */
export function FunPhotoCard({ src, alt, caption, aspectRatio }: FunPhotoCardProps) {
  return (
    <div className="ew-fun-photo">
      <div className="ew-fun-photo__plate" />
      <div className="ew-fun-photo__frame">
        <img className="ew-fun-photo__img" src={src} alt={alt} style={aspectRatio ? { aspectRatio } : undefined} />
      </div>
      {caption != null && <div className="ew-fun-photo__caption">{caption}</div>}
    </div>
  );
}

export interface FunFigureProps {
  src: string;
  alt: string;
  caption?: ReactNode;
  /** Frame fill behind the photo. Default "t1". */
  tone?: "t1" | "t2" | "t3";
  /** Fixed crop height in px; omit to keep the photo's natural ratio. */
  height?: number;
}

/** Framed photo (2px outline, 20px radius, 6px hard shadow) with a mono caption below. */
export function FunFigure({ src, alt, caption, tone = "t1", height }: FunFigureProps) {
  return (
    <figure className="ew-fun-figure">
      <div className={cx("ew-fun-figure__frame", tone !== "t1" && `ew-fun-figure__frame--${tone}`)}>
        <img className="ew-fun-figure__img" src={src} alt={alt} style={height ? { height } : undefined} />
      </div>
      {caption != null && <figcaption className="ew-fun-figure__caption">{caption}</figcaption>}
    </figure>
  );
}
