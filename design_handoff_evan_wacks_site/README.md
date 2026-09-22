# Handoff: Evan Wacks — Personal Site (Pro / Fun dual mode)

## Overview
Single-page personal site for Evan Wacks (Senior Marketing Analyst, Cirrus Systems). Two complete layouts share one page and one audio player:
- **Pro** (default on load): white, editorial, serif headlines.
- **Fun**: pastel "duck art" palette, chunky outlined cards, interactive headline you scribble out, a palette switcher and a live piano visualizer.

Target deploy: static hosting on **GitHub Pages** (repo `evanawacks/website`, branch `main`), custom domain via **GoDaddy DNS**.

## About the Design Files
Files in this bundle are **design references built in HTML**. They're prototypes that show the intended look and behavior, not production code to copy verbatim. `Evan Wacks.dc.html` runs on a small custom runtime (`support.js`) that uses `{{ }}` template holes and `<sc-if>` blocks. Don't port that runtime.

**Task:** recreate the design as a clean static site. Recommended stack: **Vite + vanilla TS** or **Astro**, since there's no backend. React is fine if preferred. Output must be plain static files deployable to GitHub Pages. `reference-bundled.html` is a self-contained snapshot that opens in any browser for visual comparison.

## Fidelity
**High-fidelity.** Colors, type, spacing, copy and interactions are final. Recreate pixel-accurately.

## Global
- Fonts (Google Fonts): **Newsreader** (opsz 6–72; 400/500/600), **IBM Plex Sans** (300–600), **IBM Plex Mono** (400/500), **Bricolage Grotesque** (opsz 12–96; 400/600/800). The fun-mode H1 intentionally uses **Arial/Helvetica 800**.
- Links: `color: inherit; text-decoration: none`. Hover: underline, 2px thickness, 4px offset.
- `body { margin: 0 }`.
- State `mode: "pro" | "fun"`, default `"pro"`. Switching scrolls to top.

---

## Screen 1 — Pro mode
Page bg `#ffffff`, text `#15191d`, IBM Plex Sans, antialiased. Container `max-width: 1060px; margin: 0 auto; padding: 0 32px`.

### Header
Flex row, space-between, gap 24, `padding: 30px 0`, `border-bottom: 1px solid #e7eaee`, wraps.
- Name "Evan Wacks": Newsreader 23px/500, letter-spacing −0.01em.
- Nav (gap 30, 14.5px, `#4b5560`): Work (#p-work), Education (#p-earlier), Piano (#p-piano), Outside (#p-life).
- **"Fun version" button**: Plex Mono 11px, uppercase, letter-spacing 0.1em, `padding 9px 16px`, `1px solid #15191d`, radius 4, transparent. Hover: bg `#15191d`, text white. Click triggers the **shatter transition** (below).

### Hero
Grid `minmax(0,1.08fr) minmax(0,0.92fr)`, gap 44, align start, `padding: 84px 0 72px`. **Grid proportions deliberately match the fun hero** so the photo sits in the same place in both modes.
- Left column (flex column, gap 28):
  - Eyebrow "BORN IN BROOKLYN, BASED IN BOSTON": Plex Mono 11px, letter-spacing 0.16em, `#78838f`.
  - H1 "Good Data is Fundamental / to Great Insights" (line break after "Fundamental"): Newsreader 500, `clamp(42px, 6.4vw, 76px)`, letter-spacing −0.022em, `text-wrap: balance`. Default treatment is **marker highlights** with line-height 1.26: "Data" `#a8e9f5`, "Fundamental" `#b8f0bd`, "Insights" `#fbc4f4`. Each highlight is `padding: 0.16em 0.12em 0.02em; border-radius: 3px; box-decoration-break: clone`, weighted upward. Alternates (a build-time option is fine): warm marker (`#fbe27a` / `#f9aeae` / `#a8e9f5`), teal "Data" `#0f6d80`, teal "Great Insights", two-tone teal `#0f6d80` + plum `#8a2f7a`, plain (line-height 1.04 for non-marker versions).
  - Lede, 17px/1.6, `#4b5560`, max 52ch: "Senior Marketing Analyst at Cirrus Systems, where I steer a multi-million-dollar paid social spend with custom built data infrastructure."
  - CTAs (gap 22): **Get in touch** (mailto:Evan.a.wacks@gmail.com). `padding 13px 24px`, bg `#15191d`, white, radius 4, 15px/500. **LinkedIn** (https://www.linkedin.com/in/evan-wacks/), 15px `#4b5560`, `border-bottom 1px solid #c9d0d8`.
- Right column: photo `img_4335-3-muc57rwf-261s.jpg`, width 100% of column, `aspect-ratio 3024/4007`, `object-fit: cover`, radius 4, `filter: saturate(0.9)`. Caption "Acadia, Maine": Plex Mono 11px, 0.08em, `#8b959f`, margin-top 12.
  - **Alignment requirement:** the pro photo's left, top and width must equal the fun hero photo's exact position. The prototype measures the fun photo's rect off-screen and absolutely positions the pro one (re-measures on resize and after fonts load). In a rebuild, prefer achieving this with shared grid tracks and a matching vertical offset instead of runtime measuring.

### Section pattern (Work / Education / Piano / Outside)
Each section: `padding: 8px 0 76px; border-top: 1px solid #e7eaee`. Inner grid `minmax(0,0.32fr) minmax(0,1fr)`, gap 48, padding-top 44.
- Left label: H2 Newsreader 30px/500, −0.01em. Sub-label Plex Mono 11px, uppercase, 0.12em, `#8b959f`.
- Right entries: H3 16–18px/600, −0.01em. Body 15.5px/1.65, `#4b5560`, max 60–62ch. Rows separated by `1px solid #eef1f4`, 26px vertical padding.

**#p-work — Cirrus Systems.** Logo `cirrus-logo.png` 78×72 next to H2.
- Roles: Senior Marketing Analyst (June 2026 — present), 14.5px/600. Marketing Analyst (June 2025 — June 2026), 14.5px/500 `#4b5560`. Dates in Plex Mono 11px `#8b959f`.
- Entries (use the copy exactly as in the file):
  - Multi-million-dollar paid social
  - Data infrastructure
  - Visualization & reporting
- Skill chips: Python, SQL, R, Google Cloud, Looker Studio, Power BI, Qualtrics, Stata. Plex Mono 11.5px, `padding 6px 11px`, `1px solid #e0e5ea`, radius 3, gap 8.

**#p-earlier — Wesleyan University.** Insignia `pasted-1790105643189-0-mud2oibb-ktsv.png` at 74px wide.
- "2021 — 2025". Credentials: Bachelor of Arts / Psychology major / Certificate in Applied Data Science (14px `#4b5560`).
- Rows use grid `160px minmax(0,1fr)`, gap 24, with the date in Plex Mono 11.5px on the left:
  - Head Teaching Assistant — Quantitative Analysis Center (Jan 2023 — May 2025)
  - Immigration Research Assistant — Cultural Psychology Research Lab (Sept 2023 — May 2025)
  - Statistical Consultant — ASA DataFest @ Wesleyan (2025 — present)

**#p-piano — Piano / "Improvisation".**
- Copy: "My pieces only exist in my head–and in my phone's voice memos."
- Player card: `1px solid #e0e5ea`, radius 6, `padding 22px 24px`.
  - Play button: bg `#15191d`, white, radius 4, `padding 11px 22px 11px 14px`, with a 26px white circle holding ▶/❚❚.
  - Progress bar: 3px high, track `#e7eaee`, fill `#15191d`. Elapsed and total times below in Plex Mono 11.5px `#8b959f`.

**#p-life — Outside work / "Arepo Farms, NH".**
- Paragraph copy as in the file.
- Two figures in grid `repeat(auto-fit, minmax(230px,1fr))`, gap 18. Images are 260px tall, cover, radius 4, saturate 0.9:
  - "Padme & Zeus" (`dogs-zeus-padme.png`)
  - "Jerry, Venus & Tommy" (`uploads/IMG_5300.JPEG`)

### Footer
`border-top 1px solid #e7eaee; padding 40px 0 56px`, flex space-between, align end.
- "Let's talk." Newsreader 28px/500.
- "Boston, MA · 617-503-7939" in Plex Mono 12px `#8b959f`.
- Links: email, LinkedIn, and a "See the fun version" button (Plex Mono 12px uppercase, `#8b959f`, underline border). This button also triggers the shatter.

---

## Screen 2 — Fun mode
Themed with CSS variables `--bg --surface --ink --line --t1 --t2 --t3` (see tokens). Page bg `var(--bg)`, font Bricolage Grotesque, color `var(--ink)`. Container `max-width 1120px; padding 0 26px`.
- **Header:** 40×40 `duck-art.png` tile (2px `--line` border, radius 9) + "Evan Wacks" 800/19px.
  - Nav: Work, Wesleyan, Piano, Dogs & goats.
  - "Say hello" pill: bg `--t3`, 2px `--line` border, radius 999.
  - "Back to serious" pill: bg `--surface`, hover `--t1`. Returns to pro with no animation.
- **Hero:** grid `1.08fr / 0.92fr`, gap 44, align center, `padding 34px 0 76px`.
  - Location pill "Boston, MA · data Sciencist" (typo is intentional). Plex Mono 12px, 2px border, radius 999.
  - **Scribble headline** (see Interactions).
  - Paragraph (18px/1.55, opacity .85).
  - Schools line in mono.
  - CTAs "What I do" (bg `--t1`, hard shadow `4px 4px 0 --line`) and "Hear a piece" (bg `--surface`).
  - "Fancy a change of colors?" and four 76×76 swatch buttons (2px border, radius 12, swatch PNG fill). Hover scale 1.12, active 1.04, 200ms ease.
  - Photo card: back plate rotated −3° (bg `--t2`, radius 22) behind a front card (radius 20, 2px border, shadow `8px 8px 0 --line`, padding 16 around). "Acadia, Maine" pill bottom-left at −12/−12 (bg `--t3`).
- **Sections #work, #before, #piano, #farm:** outlined pastel cards (2px `--line`, radius 20–26, hard offset shadows).
  - Piano card: bg `--t2`, with a 22-bar live visualizer. Bars cycle `--t1 / --t3 / --bg`, `transition height 90ms linear`.
  - Exact markup is in `Evan Wacks.dc.html`, lines ~150–270.

---

## Interactions & Behavior

### 1. Shatter transition (pro → fun)
Triggered by either "Fun version" button.
1. Switch state to fun immediately. The fun page renders underneath.
2. Over it, add a fixed full-viewport overlay (z 99999, pointer-events none) holding shards of a **snapshot of the pro page**.
   - The prototype deep-clones the pro root DOM into each shard, offset to its current viewport rect.
   - A rebuild can use the same approach, or `html2canvas`, or a pre-rendered screenshot as the shard fill.
3. **Crack geometry**, centered on the click point (fallback `0.8W, 60`):
   - 11 rays at angle `(i + rand(−0.3, 0.3)) / 11 · 2π`.
   - Rings at radius 0, 70, 190, 380, and R = 1.6 × the farthest viewport-corner distance.
   - Inner ring points jitter ±0.06 rad in angle and ×0.85–1.15 in radius.
   - Ring 0 makes triangles; the other rings make quads. That's 44 shards, each a `clip-path: polygon()`.
4. **Crack lines:** an SVG overlay of the same polygons, stroke `rgba(21,25,29,.55)` at 1.2px. Opacity keyframes 0 → 1 (15%) → 1 (60%) → 0 over 520ms.
5. **Impact flash:** 120px radial white gradient at the click point, scaling 0.4 → 1.8 while fading 1 → 0 over 350ms ease-out.
6. **Each shard** animates via WAAPI:
   - Values, with d = distance from the click to the shard centroid:
     - `push = rand(40,140)/(ring+1)`
     - `tx = unit(dx)·push + rand(−30,30)`
     - `fall = H·rand(0.9,1.4) + (H − centroidY)`
     - `rot = rand(−40,40)°`
     - `delay = 180 + d·0.35 + rand(0,120)` ms
     - `duration = rand(900,1300)` ms
     - easing `cubic-bezier(.45,0,.9,.55)`
   - Keyframes:
     - 0%: none
     - 12%: `translate(tx·0.4, unit(dy)·push·0.3) rotate(rot·0.1)`
     - 100%: `translate(tx, fall) rotate(rot)`, opacity 0.85
7. Remove the overlay at max(delay + duration) + 100ms, about 1.5–2s total.
8. Currently plays even with `prefers-reduced-motion` (user's request). Consider an instant swap for reduced motion in production.

### 2. Scribble-out headline (fun mode)
A canvas overlays the H1 (inset −8px, DPR-scaled, `touch-action: none`, crosshair cursor). Pointer drag draws strokes: 7px wide, round caps and joins, alpha .85, in the H1's computed color. Once the total stroke length passes **90% of the H1 width**, the headline advances 420ms later and the canvas clears.

| Stage | H1 (Arial 800) | Hint pill (Plex Mono 12px, dashed 2px border, opacity .7) |
|---|---|---|
| 0 | "Data oh Data / The world is 1s and 0s / Life is far more", clamp(26px,3.9vw,48px), lh 1.02 | "Not a fan of haikus? Scratch it out." |
| 1 | "Wacks on Data" | "Too cheesy?" |
| 2 | "Using Data to find Beta before Theta makes my findings outdated.", clamp(20px,2.4vw,29px), lh 1.25 | "I wouldn't be offended this time–not my finest work." |
| → | Scratching stage 2: page goes grayscale ("Mono" scheme + `filter: grayscale(1)`) and fades to opacity 0 over 650ms. After 700ms it switches to **pro mode** at stage 0 and scrolls to top. | |

A stage 3 ("Using data to unlock insights and drive evidence based decisions." plus a "Make it fun again" button) exists in code and is reachable only via state.

### 3. Palette switcher (fun)
Clicking a swatch sets the scheme (see tokens). The default is **Duck Blue**.

### 4. Audio player (both modes)
- Track `didactic-diminishment.m4a` ("Didactic Diminishment").
- Play: fade volume in over 3s. In the last 3s, fade out on a steep curve. On end, reset to 0.
- Analyser: Web Audio `AnalyserNode`, fftSize 2048, smoothing 0.72, minDb −82, maxDb −18.
- **22 log-spaced bands from 150 Hz to 2.8 kHz.** For each band:
  - Take the average byte value, subtract a 0.3 noise floor, and renormalize.
  - Weight by `0.8 + 1.5·(i/21)`.
- Slow AGC:
  - `peakEnv = max(peak, peakEnv·0.985)`
  - `gain = clamp(0.85/max(0.12, peakEnv), 0.7, 1.8)`
  - `level = min(1, (v·gain)^1.5)`
- Bar heights come from the level.
- Optional "Upload a recording" file input swaps in a local file for preview. It's dev-only, so it can be dropped in production.
- **Floating transport** (visible in both modes while a track is loaded):
  - Fixed, bottom 22px, centered, z 70, pill-shaped, bg `rgba(21,25,29,.92)`, `backdrop-filter: blur(8px)`, shadow `0 12px 34px rgba(0,0,0,.22)`.
  - Controls: "↺ 15" and "15 ↻" (±15s seek), a 38px white round play/pause, and the track title plus elapsed/total in Plex Mono 11/10px.
- **Playback must persist across mode switches.** Keep a single audio element outside the mode-specific trees.

### Responsive
The prototype targets desktop (grids use `minmax(0, …fr)`; nav and CTA rows wrap). For production, collapse both heroes and the 0.32fr/1fr section grids to one column below ~760px, with the photo below the text.

## State
- `mode` ("pro" | "fun")
- `stage` (0–3)
- `palette` (scheme name)
- `override` ("Mono" during the stage 2 exit)
- `fading` (bool)
- `playing`, `elapsed`, `trackDur`, `trackName`

## Design Tokens
**Pro:**

| Role | Value |
|---|---|
| ink | `#15191d` |
| body text | `#4b5560` |
| muted | `#78838f` |
| muted-2 | `#8b959f` |
| rule | `#e7eaee` |
| rule-2 | `#eef1f4` |
| chip border | `#e0e5ea` |
| link underline | `#c9d0d8` |
| underline-2 | `#d7dde3` |

Accents: teal `#0f6d80`, plum `#8a2f7a`.

**Fun schemes:**

| Scheme | bg | surface | ink | line | t1 | t2 | t3 |
|---|---|---|---|---|---|---|---|
| Duck Blue (default) | #a8e9f5 | #f2fdff | #2d3b44 | #4a4453 | #fbc4f4 | #fbe27a | #b8f0bd |
| Bubblegum | #fbc4f4 | #fff6fc | #3f3546 | #4a4453 | #9fe9f4 | #b8f0bd | #f9aeae |
| Lemonade | #fbe27a | #fffaea | #41382c | #4a4453 | #f9aeae | #b8f0bd | #9fe9f4 |
| Pond Mint | #b9efc4 | #f6fff8 | #2f3f36 | #4a4453 | #9fe9f4 | #fbc4f4 | #fbe27a |
| Mono (exit) | #e9e9e9 | #ffffff | #111111 | #111111 | #d4d4d4 | #c2c2c2 | #aeaeae |

**Radii:**
- Pro: 3, 4, 6
- Fun: 9, 12, 20, 22, 26, 999

**Shadows (fun):** hard offset `4px 4px 0 var(--line)` and `8px 8px 0 var(--line)`, no blur.

**Spacing** is ad hoc on a ~2px grid. Common values: 6, 8, 10, 14, 18, 22, 24, 26, 28, 30, 44, 48, 56, 72, 76, 84.

## Assets
| File | Use |
|---|---|
| img_4335-3-muc57rwf-261s.jpg | Hero portrait (Acadia, Maine), both modes. 3024×4007, **compress to ~1600px wide / WebP** |
| dogs-zeus-padme.png | Dogs photo. **Compress** |
| uploads/IMG_5300.JPEG | Goats photo. **Compress** |
| cirrus-logo.png | Cirrus Systems logo |
| pasted-1790105643189-0-mud2oibb-ktsv.png | Wesleyan insignia |
| duck-art.png | Fun-mode header tile |
| swatch-*.png (4) | Palette swatch thumbnails |
| didactic-diminishment.m4a | Evan's original piano recording |

All assets are the user's own. The current bundled build is 19.6 MB, mostly unoptimized photos. Image optimization is a priority.

## Files
- `Evan Wacks.dc.html` is the source prototype: template markup plus a logic class near the bottom (`SCHEMES`, `shatter()`, scribble, audio/analyser, hero measuring).
- `reference-bundled.html` is a self-contained snapshot. Open it in a browser to see intended behavior.
- `support.js` and `image-slot.js` are prototype runtime files, needed only to open the `.dc.html`. Don't port them.

## Deploy
1. Build to static output (`dist/`).
2. Deploy with GitHub Actions → Pages (or push `dist` to a `gh-pages` branch).
3. Add a `CNAME` file containing the domain.
4. GoDaddy DNS:
   - `A @` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME www` → `evanawacks.github.io`
5. Enable "Enforce HTTPS".
