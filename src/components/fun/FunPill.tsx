import type { ReactNode } from "react";
import { cx } from "../../utils";
import type { FunTone } from "./FunButton";

export interface FunPillProps {
  /** `solid`: outlined label pill. `hint`: dashed, see-through, 70% opacity (for "scratch it out" nudges). */
  variant?: "solid" | "hint";
  /** Fill for the solid variant. Default "surface". */
  tone?: FunTone;
  children?: ReactNode;
}

/** Uppercase mono label pill (12px, 0.14em tracking) with a 2px outline. Not interactive. */
export function FunPill({ variant = "solid", tone = "surface", children }: FunPillProps) {
  return (
    <span className={cx("ew-fun-pill", variant === "hint" ? "ew-fun-pill--hint" : tone !== "surface" && `ew-fun-pill--${tone}`)}>
      {children}
    </span>
  );
}
