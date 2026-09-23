import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export type FunTone = "surface" | "t1" | "t2" | "t3";

type Common = {
  /** Fill color from the active scheme. Default "surface". */
  tone?: FunTone;
  /** `sm` nav pill (10/18px pad, 15px), `md` footer pill (13/22px), `lg` hero CTA (15/26px, 16px). */
  size?: "sm" | "md" | "lg";
  /** Adds the hard 4px offset shadow and a press-in on click. */
  raised?: boolean;
  /** Swap the fill to t1 on hover (used by "Back to serious"). */
  hoverFill?: boolean;
  children?: ReactNode;
  className?: string;
};

export type FunButtonProps = Common &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
  );

/** Fun-mode pill button: 2px outline, fully rounded, 600 weight. `<a>` when `href` is set. */
export function FunButton({
  tone = "surface",
  size = "lg",
  raised = false,
  hoverFill = false,
  className,
  children,
  ...rest
}: FunButtonProps) {
  const cls = cx(
    "ew-fun-btn",
    `ew-fun-btn--${size}`,
    `ew-fun-btn--${tone}`,
    raised && "ew-fun-btn--raised",
    hoverFill && "ew-fun-btn--hover-t1",
    className,
  );
  if ("href" in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
