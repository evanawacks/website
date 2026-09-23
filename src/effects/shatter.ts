/**
 * Glass-shatter transition. Snapshots `root` (by deep-cloning it into 44 clipped shards over a
 * fixed overlay), cracks it from the click point, and lets the shards fall away. Call it right
 * before swapping the page underneath. Returns the total duration in ms.
 */
export function shatter(root: HTMLElement, clientX?: number, clientY?: number): number {
  const W = window.innerWidth, H = window.innerHeight;
  const rr = root.getBoundingClientRect();
  const cx = clientX || W * 0.8, cy = clientY || 60;
  const R = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy)) * 1.6;
  const rnd = (a: number, b: number) => a + Math.random() * (b - a);
  const rays = 11, rings = [0, 70, 190, 380, R];
  const angs: number[] = [];
  for (let i = 0; i < rays; i++) angs.push(((i + rnd(-0.3, 0.3)) / rays) * Math.PI * 2);
  const inner = (ri: number) => ri > 0 && ri < rings.length - 1;
  const pt = (ai: number, ri: number): [number, number] => {
    const a = angs[ai % rays] + (inner(ri) ? rnd(-0.06, 0.06) : 0);
    const r = rings[ri] * (inner(ri) ? rnd(0.85, 1.15) : 1);
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  };
  const grid = rings.map((_, ri) => angs.map((_, ai) => pt(ai, ri)));

  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", String(W));
  svg.setAttribute("height", String(H));
  svg.style.cssText = "position:absolute;inset:0;z-index:2;";

  const shards: { wrap: HTMLDivElement; mx: number; my: number; ri: number }[] = [];
  for (let ri = 0; ri < rings.length - 1; ri++) {
    for (let ai = 0; ai < rays; ai++) {
      const n = (ai + 1) % rays;
      const poly = ri === 0 ? [grid[0][0], grid[1][ai], grid[1][n]] : [grid[ri][ai], grid[ri + 1][ai], grid[ri + 1][n], grid[ri][n]];
      const wrap = document.createElement("div");
      wrap.style.cssText =
        "position:absolute;inset:0;overflow:hidden;will-change:transform,opacity;clip-path:polygon(" +
        poly.map((p) => p[0].toFixed(1) + "px " + p[1].toFixed(1) + "px").join(",") +
        ");";
      const clone = root.cloneNode(true) as HTMLElement;
      clone.style.position = "absolute";
      clone.style.left = rr.left + "px";
      clone.style.top = rr.top + "px";
      clone.style.width = rr.width + "px";
      clone.style.margin = "0";
      clone.removeAttribute("id");
      wrap.appendChild(clone);
      overlay.appendChild(wrap);
      const mx = poly.reduce((s, p) => s + p[0], 0) / poly.length;
      const my = poly.reduce((s, p) => s + p[1], 0) / poly.length;
      shards.push({ wrap, mx, my, ri });
      const path = document.createElementNS(svgNS, "polygon");
      path.setAttribute("points", poly.map((p) => p.join(",")).join(" "));
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "rgba(21,25,29,0.55)");
      path.setAttribute("stroke-width", "1.2");
      svg.appendChild(path);
    }
  }
  const flash = document.createElement("div");
  flash.style.cssText =
    "position:absolute;left:" + (cx - 60) + "px;top:" + (cy - 60) +
    "px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0) 70%);z-index:3;";
  overlay.appendChild(svg);
  overlay.appendChild(flash);
  document.body.appendChild(overlay);

  flash.animate([{ opacity: 1, transform: "scale(0.4)" }, { opacity: 0, transform: "scale(1.8)" }], { duration: 350, easing: "ease-out", fill: "forwards" });
  svg.animate([{ opacity: 0 }, { opacity: 1, offset: 0.15 }, { opacity: 1, offset: 0.6 }, { opacity: 0 }], { duration: 520, fill: "forwards" });

  let maxEnd = 0;
  for (const { wrap, mx, my, ri } of shards) {
    const dx = mx - cx, dy = my - cy, d = Math.hypot(dx, dy) || 1;
    const push = rnd(40, 140) / (ri + 1);
    const tx = (dx / d) * push + rnd(-30, 30);
    const fall = H * rnd(0.9, 1.4) + (H - my);
    const rot = rnd(-40, 40);
    const delay = 180 + d * 0.35 + rnd(0, 120);
    const dur = rnd(900, 1300);
    maxEnd = Math.max(maxEnd, delay + dur);
    wrap.animate(
      [
        { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
        { transform: "translate(" + tx * 0.4 + "px," + (dy / d) * push * 0.3 + "px) rotate(" + rot * 0.1 + "deg)", opacity: 1, offset: 0.12 },
        { transform: "translate(" + tx + "px," + fall + "px) rotate(" + rot + "deg)", opacity: 0.85 },
      ],
      { duration: dur, delay, easing: "cubic-bezier(.45,0,.9,.55)", fill: "both" },
    );
  }
  window.setTimeout(() => overlay.remove(), maxEnd + 100);
  return maxEnd + 100;
}
