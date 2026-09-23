import { useCallback, useEffect, useRef, type ReactNode, type PointerEvent } from "react";
import { FunHeadline } from "./FunType";

export interface ScribbleHeadlineProps {
  /** Headline size, passed to FunHeadline. */
  size?: "lg" | "md" | "sm";
  /** Headline text. Change it (e.g. keyed by stage) to show the next line after a scratch. */
  children?: ReactNode;
  /** Fired once the scribbled stroke length passes `threshold` × headline width. */
  onScratched?: () => void;
  /** Fraction of the headline width the user must scribble. Default 0.9. */
  threshold?: number;
  /** Delay before `onScratched` fires and the canvas clears, in ms. Default 420. */
  delay?: number;
}

/**
 * Fun hero headline you can scribble out. A canvas overlays the h1 (8px bleed, DPR-scaled);
 * dragging draws 7px round strokes in the headline's ink color. When enough has been drawn,
 * `onScratched` fires and the canvas clears.
 */
export function ScribbleHeadline({ size = "lg", children, onScratched, threshold = 0.9, delay = 420 }: ScribbleHeadlineProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const st = useRef({ drawing: false, drawn: 0, needed: 900, last: null as null | { x: number; y: number }, advancing: false });
  const cb = useRef(onScratched);
  cb.current = onScratched;

  const size2d = useCallback(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const r = cv.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if (cv.width !== w || cv.height !== h) {
      cv.width = w;
      cv.height = h;
      cv.getContext("2d")?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    st.current.needed = r.width * threshold;
  }, [threshold]);

  const clear = useCallback(() => {
    const cv = canvasRef.current;
    const c = cv?.getContext("2d");
    if (cv && c) {
      c.save();
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.clearRect(0, 0, cv.width, cv.height);
      c.restore();
    }
    Object.assign(st.current, { drawn: 0, last: null, drawing: false });
  }, []);

  useEffect(() => {
    size2d();
    const ro = new ResizeObserver(size2d);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [size2d]);

  const point = (e: PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onDown = (e: PointerEvent<HTMLCanvasElement>) => {
    if (st.current.advancing) return;
    size2d();
    e.currentTarget.setPointerCapture(e.pointerId);
    st.current.drawing = true;
    st.current.last = point(e);
  };

  const onMove = (e: PointerEvent<HTMLCanvasElement>) => {
    const s = st.current;
    const c = e.currentTarget.getContext("2d");
    if (!s.drawing || !s.last || !c) return;
    const p = point(e);
    c.strokeStyle = wrapRef.current ? getComputedStyle(wrapRef.current).color : "#2d3b44";
    c.lineWidth = 7;
    c.lineCap = "round";
    c.lineJoin = "round";
    c.globalAlpha = 0.85;
    c.beginPath();
    c.moveTo(s.last.x, s.last.y);
    c.lineTo(p.x, p.y);
    c.stroke();
    s.drawn += Math.hypot(p.x - s.last.x, p.y - s.last.y);
    s.last = p;
    if (s.drawn > s.needed && !s.advancing) {
      s.advancing = true;
      s.drawing = false;
      window.setTimeout(() => {
        clear();
        s.advancing = false;
        cb.current?.();
      }, delay);
    }
  };

  const onUp = () => {
    st.current.drawing = false;
    st.current.last = null;
  };

  return (
    <div ref={wrapRef} className="ew-scribble">
      <FunHeadline size={size}>{children}</FunHeadline>
      <canvas
        ref={canvasRef}
        className="ew-scribble__canvas"
        aria-hidden="true"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
      />
    </div>
  );
}
