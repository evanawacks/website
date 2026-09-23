export interface ChipRowProps {
  /** Chip labels, e.g. skills or tools. */
  items: string[];
  /** `pro`: square hairline mono chips. `fun`: 2px-outlined surface pills (use inside FunTheme). */
  tone?: "pro" | "fun";
}

/** Wrapping row of small mono chips. */
export function ChipRow({ items, tone = "pro" }: ChipRowProps) {
  const row = tone === "fun" ? "ew-fun-chip-row" : "ew-chip-row";
  const chip = tone === "fun" ? "ew-fun-chip" : "ew-pro-chip";
  return (
    <div className={row}>
      {items.map((it) => (
        <span key={it} className={chip}>
          {it}
        </span>
      ))}
    </div>
  );
}
