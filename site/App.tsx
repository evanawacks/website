import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { FunPage, Transport, shatter, useAudio, type FunScheme } from "../src";
import { FunSite, FunTop, type Stage } from "./FunSite";
import { ProSite } from "./ProSite";

type Mode = "pro" | "fun";
const noop = () => {};

export function App() {
  const audio = useAudio();
  const [mode, setMode] = useState<Mode>("pro");
  const [stage, setStage] = useState<Stage>(0);
  const [scheme, setScheme] = useState<FunScheme>("duck-blue");
  const [exiting, setExiting] = useState(false);
  const proRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [photoStyle, setPhotoStyle] = useState<CSSProperties | undefined>();

  // Pin the Pro hero photo to the exact rect the Fun hero photo occupies, so the
  // photo stays put across the mode switch. Desktop only; mobile stacks normally.
  const measure = useCallback(() => {
    const box = measureRef.current;
    const img = box?.querySelector<HTMLImageElement>(".ew-fun-photo__img");
    if (!box || !img || window.innerWidth <= 760) {
      setPhotoStyle(undefined);
      return;
    }
    const a = img.getBoundingClientRect(), b = box.getBoundingClientRect();
    setPhotoStyle({ position: "absolute", left: a.left - b.left, top: a.top - b.top, width: a.width, paddingTop: 0 });
  }, []);

  useLayoutEffect(() => {
    if (mode === "pro") measure();
  }, [mode, measure]);

  useEffect(() => {
    let t = 0;
    const onResize = () => {
      clearTimeout(t);
      t = window.setTimeout(measure, 120);
    };
    window.addEventListener("resize", onResize);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const goFun = (e: MouseEvent<HTMLButtonElement>) => {
    if (proRef.current) shatter(proRef.current, e.clientX, e.clientY);
    setStage(0);
    setMode("fun");
    window.scrollTo(0, 0);
  };

  const goPro = () => {
    setStage(0);
    setMode("pro");
    window.scrollTo(0, 0);
  };

  const onScratched = () => {
    if (stage >= 2) {
      setExiting(true);
      window.setTimeout(() => {
        setExiting(false);
        goPro();
      }, 700);
      return;
    }
    setStage((s) => Math.min(3, s + 1) as Stage);
  };

  const funScheme: FunScheme = exiting || stage === 3 ? "mono" : scheme;
  const funStyle: CSSProperties = {
    transition: "opacity 650ms ease",
    opacity: exiting ? 0 : 1,
    filter: funScheme === "mono" ? "grayscale(1)" : undefined,
  };

  return (
    <>
      {mode === "pro" ? (
        <ProSite
          ref={proRef}
          onFun={goFun}
          photoStyle={photoStyle}
          measurer={
            <div ref={measureRef} aria-hidden="true" inert style={{ position: "absolute", top: 0, left: 0, right: 0, visibility: "hidden", pointerEvents: "none" }}>
              <FunPage scheme={scheme}>
                <FunTop scheme={scheme} stage={0} onScheme={noop} onScratched={noop} onRevert={noop} onPro={noop} />
              </FunPage>
            </div>
          }
        />
      ) : (
        <FunSite
          scheme={funScheme}
          stage={stage}
          style={funStyle}
          onScheme={setScheme}
          onScratched={onScratched}
          onRevert={() => setStage(0)}
          onPro={goPro}
        />
      )}
      {audio.title && (
        <Transport
          title={audio.title}
          playing={audio.playing}
          elapsed={audio.elapsed}
          duration={audio.duration}
          onToggle={audio.toggle}
          onSeek={audio.seek}
        />
      )}
    </>
  );
}
