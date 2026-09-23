import type { ReactNode } from "react";
import { cx } from "../../utils";

export interface FunHeadlineProps {
  /** `lg` clamp(26–48px) haiku-scale, `md` clamp(22–34px), `sm` clamp(20–29px) for long one-liners. */
  size?: "lg" | "md" | "sm";
  children?: ReactNode;
}

/** Fun hero headline (h1). Deliberately Arial/Helvetica 800, not the display face. */
export function FunHeadline({ size = "lg", children }: FunHeadlineProps) {
  return <h1 className={cx("ew-fun-h1", `ew-fun-h1--${size}`)}>{children}</h1>;
}

export interface FunHeadingProps {
  /** `xl` clamp(28–44px), `lg` clamp(28–42px), `md` clamp(26–40px). */
  size?: "xl" | "lg" | "md";
  children?: ReactNode;
  /** Optional max width in ch, e.g. 22. */
  maxCh?: number;
}

/** Fun section heading (h2): Bricolage 800, tight -0.03em tracking. */
export function FunHeading({ size = "xl", maxCh, children }: FunHeadingProps) {
  return (
    <h2 className={cx("ew-fun-h2", `ew-fun-h2--${size}`)} style={maxCh ? { maxWidth: maxCh + "ch" } : undefined}>
      {children}
    </h2>
  );
}

export interface FunTextProps {
  /** `lg` 18px (hero), `md` 17px, `sm` 16px. All at 85% opacity. */
  size?: "lg" | "md" | "sm";
  children?: ReactNode;
}

/** Fun body paragraph. */
export function FunText({ size = "md", children }: FunTextProps) {
  return <p className={cx("ew-fun-text", size !== "md" && `ew-fun-text--${size}`)}>{children}</p>;
}
