import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../utils";

export interface ProPhotoProps {
  src: string;
  alt: string;
  /** Mono caption under the image, e.g. "Acadia, Maine". */
  caption?: ReactNode;
  /**
   * `portrait`: full-width image at its natural ratio (pass `aspectRatio`).
   * `gallery`: fixed 260px-tall cover crop for side-by-side photos inside a ProGallery.
   */
  variant?: "portrait" | "gallery";
  /** CSS aspect-ratio for the portrait variant, e.g. "3024 / 4007". */
  aspectRatio?: string;
  className?: string;
  style?: CSSProperties;
}

/** Pro photo: 4px radius, slightly desaturated, with an optional mono caption. */
export function ProPhoto({ src, alt, caption, variant = "portrait", aspectRatio, className, style }: ProPhotoProps) {
  return (
    <figure className={cx("ew-pro-photo", variant === "gallery" && "ew-pro-photo--gallery", className)} style={style}>
      <img className="ew-pro-photo__img" src={src} alt={alt} style={aspectRatio ? { aspectRatio } : undefined} />
      {caption != null && <figcaption className="ew-pro-photo__caption">{caption}</figcaption>}
    </figure>
  );
}

export interface ProGalleryProps {
  children?: ReactNode;
}

/** Responsive grid of gallery photos (auto-fit, min 230px columns, 18px gap). */
export function ProGallery({ children }: ProGalleryProps) {
  return <div className="ew-pro-gallery">{children}</div>;
}
