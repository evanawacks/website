import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "../../utils";

export interface ProLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children?: ReactNode;
}

/** Secondary Pro link: 15px body-gray text over a 1px hairline underline ("LinkedIn"). */
export function ProLink({ className, children, ...rest }: ProLinkProps) {
  return (
    <a className={cx("ew-pro-link", className)} {...rest}>
      {children}
    </a>
  );
}
