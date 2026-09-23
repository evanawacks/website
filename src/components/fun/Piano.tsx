import type { ReactNode } from "react";
import { formatTime } from "../../utils";

export interface VisualizerProps {
  /** Live band levels 0–1 (22 values) from `useAudio().levels`. Empty = idle/demo heights. */
  levels?: number[];
  /** Playing state. When playing without levels, bars wave on a sine pattern driven by `elapsed`. */
  playing?: boolean;
  elapsed?: number;
  /** Number of bars. Default 22. */
  bars?: number;
}

/** 150px outlined box of chunky bars cycling t1 / t3 / bg; heights ease over 90ms. */
export function Visualizer({ levels = [], playing = false, elapsed = 0, bars = 22 }: VisualizerProps) {
  const fills = ["var(--fun-t1)", "var(--fun-t3)", "var(--fun-bg)"];
  return (
    <div className="ew-visualizer" aria-hidden="true">
      {Array.from({ length: bars }, (_, i) => {
        const base = 26 + Math.abs(Math.sin(i * 1.1)) * 52;
        const live = levels[i];
        const h = playing
          ? live !== undefined
            ? 5 + live * 95
            : base * (0.45 + (Math.sin(elapsed * 3.1 + i * 0.7) * 0.5 + 0.5) * 0.85)
          : base * 0.35;
        return <div key={i} className="ew-visualizer__bar" style={{ height: Math.max(8, Math.round(h)) + "%", background: fills[i % 3] }} />;
      })}
    </div>
  );
}

const KEY_PATTERN = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0];

/** Decorative 12-key keyboard strip (outlined, alternating surface / line keys). */
export function PianoKeys() {
  return (
    <div className="ew-keys" aria-hidden="true">
      {KEY_PATTERN.map((dark, i) => (
        <div key={i} className={dark ? "ew-keys__key ew-keys__key--dark" : "ew-keys__key"} />
      ))}
    </div>
  );
}

export interface FunPianoPanelProps {
  /** Pill above the heading. */
  badge?: ReactNode;
  title?: ReactNode;
  text?: ReactNode;
  playing?: boolean;
  elapsed?: number;
  duration?: number;
  levels?: number[];
  /** Wire to `useAudio().togglePlay`. */
  onToggle?: () => void;
  playLabel?: string;
  pauseLabel?: string;
}

/**
 * Big t2 panel (26px radius, 8px shadow) for a music piece: copy, a raised play button and chunky
 * progress bar on the left; a live Visualizer and PianoKeys on the right. Presentational.
 */
export function FunPianoPanel({
  badge,
  title,
  text,
  playing = false,
  elapsed = 0,
  duration = 0,
  levels,
  onToggle,
  playLabel = "Play the piece",
  pauseLabel = "Pause the piece",
}: FunPianoPanelProps) {
  const pct = duration ? Math.min(1, elapsed / duration) * 100 : 0;
  return (
    <div className="ew-fun-panel">
      <div className="ew-fun-panel__copy">
        {badge}
        {title != null && <h2 className="ew-fun-h2 ew-fun-h2--lg">{title}</h2>}
        {text != null && <p className="ew-fun-text ew-fun-text--sm">{text}</p>}
        <button type="button" className="ew-fun-play" onClick={onToggle} aria-pressed={playing}>
          <span className="ew-fun-play__glyph">{playing ? "❚❚" : "▶"}</span>
          <span>{playing ? pauseLabel : playLabel}</span>
        </button>
        <div className="ew-fun-progress">
          <div className="ew-fun-progress__track">
            <div className="ew-fun-progress__fill" data-empty={pct === 0} style={{ width: pct.toFixed(1) + "%" }} />
          </div>
          <div className="ew-fun-progress__times">
            <span>{formatTime(elapsed)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
      <div className="ew-fun-panel__media">
        <Visualizer levels={levels} playing={playing} elapsed={elapsed} />
        <PianoKeys />
      </div>
    </div>
  );
}
