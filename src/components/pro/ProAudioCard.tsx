import { formatTime } from "../../utils";

export interface ProAudioCardProps {
  /** Whether audio is currently playing (swaps ▶ for ❚❚ and the label). */
  playing?: boolean;
  /** Seconds elapsed. */
  elapsed?: number;
  /** Track length in seconds. */
  duration?: number;
  /** Called when the play/pause button is pressed. Wire to `useAudio().togglePlay`. */
  onToggle?: () => void;
  playLabel?: string;
  pauseLabel?: string;
}

/**
 * Pro audio player card: hairline-bordered box with an ink play button, a 3px progress bar and
 * mono elapsed/total times. Presentational; pair it with `useAudio()` inside an `AudioProvider`.
 */
export function ProAudioCard({
  playing = false,
  elapsed = 0,
  duration = 0,
  onToggle,
  playLabel = "Play the piece",
  pauseLabel = "Pause the piece",
}: ProAudioCardProps) {
  const pct = duration ? Math.min(1, elapsed / duration) * 100 : 0;
  return (
    <div className="ew-pro-player">
      <button type="button" className="ew-pro-player__play" onClick={onToggle} aria-pressed={playing}>
        <span className="ew-pro-player__glyph">{playing ? "❚❚" : "▶"}</span>
        <span>{playing ? pauseLabel : playLabel}</span>
      </button>
      <div className="ew-pro-player__progress">
        <div className="ew-pro-player__track">
          <div className="ew-pro-player__fill" style={{ width: pct.toFixed(1) + "%" }} />
        </div>
        <div className="ew-pro-player__times">
          <span>{formatTime(elapsed)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
