# design-sync notes (wacks-ui)

- Library source is `src/` (built to `dist/` by `npm run build:lib`: Vite library mode + `tsc` declarations). The website in `site/` consumes the same source; `dist-site/` is the site build.
- Node: this Mac had no Node; Node 22 (arm64) lives at `~/.local/node/bin` — prepend to PATH. Homebrew here is an Intel/Rosetta install that builds from source; avoid it.
- Headless browser: no Playwright download. Use the installed Chrome: `export DS_CHROMIUM_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`, install playwright in `.ds-sync` with `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`.
- Converter command: `node .ds-sync/package-build.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./dist/index.js --out ./ds-bundle`.
- Don't put `"sideEffects"` in package.json: Vite 8/rolldown tree-shakes `src/styles/index.css` out of the site build with `["*.css"]` or `["**/*.css"]`.
- Components defined in shared files (FunType, FunCard, Piano, FunPhoto, ProPhoto, ProSection, RoleList) are pinned via `componentSrcMap` so they group under pro/ or fun/ instead of general/. `AudioProvider` is excluded from cards (non-visual) but still ships in the bundle.
- Previews wrap every component in `ProPage` or `FunPage` themselves (the two modes need different roots, so no global `cfg.provider`). Preview photos are small WebP copies in `.design-sync/previews/_assets/`, inlined as data URLs.
- `cardMode: column` for FunPianoPanel, Highlight, ProHeadline, ProSection, Transport (flagged GRID_OVERFLOW).
- Known render warns: none outstanding after authoring.

## Re-sync risks
- Preview photos in `previews/_assets/` are copies; if site photos change, re-export them (cwebp -q 62 -resize 440).
- Fonts load at runtime from Google Fonts (`@import` in `src/styles/index.css`) — designs offline render in fallbacks.
- `conventions.md` names tokens/classes by hand; re-validate after any rename in `src/styles/`.
