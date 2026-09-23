import type { ReactNode } from "react";
import type { FunScheme } from "./FunPage";

export interface SwatchOption {
  /** Scheme applied when this swatch is picked. */
  value: FunScheme;
  /** Accessible name / tooltip, e.g. "Duck Blue". */
  label: string;
  /** Optional thumbnail image. Without one, the swatch shows the scheme's own colors in quadrants. */
  image?: string;
}

export const DEFAULT_SWATCHES: SwatchOption[] = [
  { value: "duck-blue", label: "Duck Blue" },
  { value: "bubblegum", label: "Bubblegum" },
  { value: "lemonade", label: "Lemonade" },
  { value: "pond-mint", label: "Pond Mint" },
];

export interface SwatchPickerProps {
  /** Currently active scheme (gets an outline ring). */
  value?: FunScheme;
  onChange?: (scheme: FunScheme) => void;
  options?: SwatchOption[];
  /** Kicker above the swatches. */
  label?: ReactNode;
}

/** Row of 76px outlined palette swatches that switch the FunPage scheme. Grows 12% on hover. */
export function SwatchPicker({ value, onChange, options = DEFAULT_SWATCHES, label = "Fancy a change of colors?" }: SwatchPickerProps) {
  return (
    <div className="ew-swatches">
      {label != null && <span className="ew-fun-kicker">{label}</span>}
      <div className="ew-swatches__row">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            className="ew-swatch"
            title={o.label}
            aria-label={o.label + " palette"}
            aria-pressed={value === o.value}
            onClick={() => onChange?.(o.value)}
          >
            {o.image ? (
              <img src={o.image} alt="" />
            ) : (
              <span className="ew-swatch__fill" data-fun-scheme={o.value}>
                <span style={{ background: "var(--fun-bg)" }} />
                <span style={{ background: "var(--fun-t1)" }} />
                <span style={{ background: "var(--fun-t2)" }} />
                <span style={{ background: "var(--fun-t3)" }} />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
