import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export type ProButtonVariant = "solid" | "outline" | "quiet";

type Common = {
  /**
   * `solid`: ink-filled primary CTA ("Get in touch").
   * `outline`: small uppercase mono button that fills with ink on hover ("Fun version").
   * `quiet`: uppercase mono text button with a hairline underline ("See the fun version").
   */
  variant?: ProButtonVariant;
  children?: ReactNode;
  className?: string;
};

export type ProButtonProps = Common &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
  );

/** Pro-mode button. Renders an `<a>` when `href` is given, otherwise a `<button type="button">`. */
export function ProButton({ variant = "solid", className, children, ...rest }: ProButtonProps) {
  const cls = cx("ew-pro-btn", `ew-pro-btn--${variant}`, className);
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
