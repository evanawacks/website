import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

export interface AudioState {
  /** Track title, or "" when nothing is loaded. */
  title: string;
  playing: boolean;
  /** Seconds elapsed. */
  elapsed: number;
  /** Track length in seconds (0 until metadata loads). */
  duration: number;
  /** 22 live band levels 0–1 (150 Hz–2.8 kHz, log-spaced) while playing; empty otherwise. */
  levels: number[];
  /** Card-style play: starts from 0 with a 3s fade-in, or fades out over 2s and resets. */
  togglePlay: () => void;
  /** Transport-style play/pause: pauses in place and resumes where it left off. */
  toggle: () => void;
  /** Seek by a number of seconds (negative = back). */
  seek: (delta: number) => void;
}

const noop = () => {};
const AudioCtx = createContext<AudioState>({
  title: "",
  playing: false,
  elapsed: 0,
  duration: 0,
  levels: [],
  togglePlay: noop,
  toggle: noop,
  seek: noop,
});

/** Read the shared audio player. Outside an AudioProvider it returns an idle, no-op state. */
export function useAudio(): AudioState {
  return useContext(AudioCtx);
}

export interface AudioProviderProps {
  /** Audio file URL. */
  src: string;
  /** Title shown in the Transport. */
  title: string;
  children?: ReactNode;
}

const BANDS = 22;

/**
 * Owns one `<audio>` element plus a Web Audio analyser, outside any mode-specific tree, so playback
 * survives Pro/Fun switches. Children read it with `useAudio()`.
 */
export function AudioProvider({ src, title, children }: AudioProviderProps) {
  const el = useRef<HTMLAudioElement | null>(null);
  const graph = useRef<{ ctx: AudioContext; an: AnalyserNode; freq: Uint8Array<ArrayBuffer>; binHz: number } | null>(null);
  const raf = useRef(0);
  const fadeRaf = useRef(0);
  const fadingOut = useRef(false);
  const fadeStart = useRef(0);
  const peakEnv = useRef(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [levels, setLevels] = useState<number[]>([]);

  const stopLoop = useCallback(() => {
    cancelAnimationFrame(raf.current);
    cancelAnimationFrame(fadeRaf.current);
    fadingOut.current = false;
  }, []);

  useEffect(() => {
    const a = new Audio(src);
    a.preload = "metadata";
    a.onloadedmetadata = () => setDuration(a.duration || 0);
    a.onended = () => {
      stopLoop();
      setPlaying(false);
      setElapsed(0);
      setLevels([]);
    };
    el.current = a;
    return () => {
      stopLoop();
      a.pause();
      el.current = null;
    };
  }, [src, stopLoop]);

  const ensureGraph = () => {
    if (graph.current || !el.current) return;
    try {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AC();
      const source = ctx.createMediaElementSource(el.current);
      const an = ctx.createAnalyser();
      an.fftSize = 2048;
      an.smoothingTimeConstant = 0.72;
      an.minDecibels = -82;
      an.maxDecibels = -18;
      source.connect(an);
      an.connect(ctx.destination);
      graph.current = { ctx, an, freq: new Uint8Array(an.frequencyBinCount), binHz: ctx.sampleRate / an.fftSize };
    } catch {
      graph.current = null;
    }
  };

  const tick = () => {
    const a = el.current;
    if (!a) return;
    const t = a.currentTime, d = a.duration || 0;
    const g = graph.current;
    if (g) {
      g.an.getByteFrequencyData(g.freq);
      const fMin = 150, fMax = 2800;
      const raw: number[] = [];
      for (let i = 0; i < BANDS; i++) {
        const f0 = fMin * Math.pow(fMax / fMin, i / BANDS);
        const f1 = fMin * Math.pow(fMax / fMin, (i + 1) / BANDS);
        const k0 = Math.max(1, Math.round(f0 / g.binHz));
        const k1 = Math.max(k0 + 1, Math.round(f1 / g.binHz));
        let sum = 0, n = 0;
        for (let k = k0; k < k1 && k < g.freq.length; k++) { sum += g.freq[k]; n++; }
        const avg = n ? sum / n : 0;
        const floor = 0.3;
        const norm = Math.max(0, (avg / 255 - floor) / (1 - floor));
        raw.push(norm * (0.8 + 1.5 * (i / (BANDS - 1))));
      }
      // slow AGC: aim for a peak near 0.85 within a narrow gain band
      peakEnv.current = Math.max(Math.max(...raw), peakEnv.current * 0.985);
      const gain = Math.max(0.7, Math.min(1.8, 0.85 / Math.max(0.12, peakEnv.current)));
      setLevels(raw.map((v) => Math.min(1, Math.pow(v * gain, 1.5))));
    }
    if (!fadingOut.current) {
      const inV = Math.min(1, (performance.now() - fadeStart.current) / 3000);
      const outV = d ? Math.pow(Math.min(1, Math.max(0, (d - t) / 3)), 2.2) : 1;
      a.volume = Math.max(0, Math.min(1, Math.min(inV, outV)));
    }
    setElapsed(t);
    raf.current = requestAnimationFrame(tick);
  };

  const start = (fromStart: boolean) => {
    const a = el.current;
    if (!a) return;
    ensureGraph();
    if (graph.current?.ctx.state === "suspended") graph.current.ctx.resume();
    if (fromStart) a.currentTime = 0;
    fadeStart.current = performance.now();
    a.volume = 0;
    a.play().catch(() => setPlaying(false));
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
    setPlaying(true);
  };

  const togglePlay = () => {
    const a = el.current;
    if (!a) return;
    if (!playing) {
      setElapsed(0);
      start(true);
      return;
    }
    if (a.paused) {
      stopLoop();
      setPlaying(false);
      setElapsed(0);
      return;
    }
    fadingOut.current = true;
    const v0 = a.volume, t0 = performance.now();
    const step = () => {
      const k = (performance.now() - t0) / 2000;
      if (k >= 1 || !el.current) {
        stopLoop();
        a.pause();
        setPlaying(false);
        setElapsed(0);
        setLevels([]);
        return;
      }
      a.volume = Math.max(0, v0 * (1 - k));
      fadeRaf.current = requestAnimationFrame(step);
    };
    fadeRaf.current = requestAnimationFrame(step);
  };

  const toggle = () => {
    const a = el.current;
    if (!a) return;
    if (playing) {
      stopLoop();
      a.pause();
      setPlaying(false);
    } else {
      start(false);
    }
  };

  const seek = (delta: number) => {
    const a = el.current;
    if (!a) return;
    a.currentTime = Math.max(0, Math.min(a.duration || 0, a.currentTime + delta));
    setElapsed(a.currentTime);
  };

  const value = { title, playing, elapsed, duration, levels, togglePlay, toggle, seek };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memo = useMemo(() => value, [title, playing, elapsed, duration, levels]);
  return <AudioCtx.Provider value={memo}>{children}</AudioCtx.Provider>;
}
