import { cx, formatTime } from "../../utils";

export interface TransportProps {
  /** Track title. */
  title: string;
  playing?: boolean;
  elapsed?: number;
  duration?: number;
  /** Play/pause in place. Wire to `useAudio().toggle`. */
  onToggle?: () => void;
  /** Seek by ±15s. Wire to `useAudio().seek`. */
  onSeek?: (delta: number) => void;
  /** Fixed at the bottom-center of the viewport (default). Set false to render inline. */
  floating?: boolean;
  /** When set, a × button appears while paused; call it to dismiss the transport. */
  onClose?: () => void;
}

/**
 * Dark frosted pill audio transport: ↺ 15, a white round play/pause, 15 ↻, then the title and
 * elapsed/total in mono. Same look in both modes. Pass `onClose` to show a × while paused.
 */
export function Transport({ title, playing = false, elapsed = 0, duration = 0, onToggle, onSeek, floating = true, onClose }: TransportProps) {
  return (
    <div className={cx("ew-transport", !floating && "ew-transport--inline")}>
      <button type="button" className="ew-transport__seek" title="Back 15 seconds" onClick={() => onSeek?.(-15)}>
        ↺ 15
      </button>
      <button type="button" className="ew-transport__toggle" title={playing ? "Pause" : "Play"} onClick={onToggle}>
        {playing ? "❚❚" : "▶"}
      </button>
      <button type="button" className="ew-transport__seek" title="Forward 15 seconds" onClick={() => onSeek?.(15)}>
        15 ↻
      </button>
      <div className="ew-transport__info">
        <span className="ew-transport__title">{title}</span>
        <span className="ew-transport__time">
          {formatTime(elapsed)} / {formatTime(duration)}
        </span>
      </div>
      {onClose && !playing && (
        <button type="button" className="ew-transport__close" title="Close player" aria-label="Close player" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
}
