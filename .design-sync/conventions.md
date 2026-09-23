# Wacks UI: how to build with it

This is Evan Wacks' personal-site design system. It has **two modes that never mix on one surface**:

- **Pro**: white paper, editorial. Newsreader serif headlines, IBM Plex Sans body, IBM Plex Mono labels, hairline rules, 3–6px radii, no shadows.
- **Fun**: pastel "duck art". Bricolage Grotesque, 2px `--fun-line` outlines, pill buttons, 20–26px radii, hard offset shadows with no blur. The Fun hero headline is intentionally Arial/Helvetica 800 (`FunHeadline`).

## Wrap every screen in its mode root

Components pick up fonts, colors and link resets from the root. Without it, Pro renders in the browser default font and Fun loses its background and scheme.

```jsx
const { ProPage, FunPage } = window.WacksUI;
<ProPage>{/* Pro components */}</ProPage>
<FunPage scheme="duck-blue">{/* Fun components */}</FunPage>
```

- `ProPage` adds the centered 1060px container (32px side padding).
- `FunPage` adds a 1120px container (26px padding). Pass `contained={false}` to lay out full-bleed yourself.
- `FunPage scheme`: `"duck-blue"` (default), `"bubblegum"`, `"lemonade"`, `"pond-mint"`, `"mono"`. The scheme re-points every `--fun-*` token for the subtree. To theme a custom block, set `data-fun-scheme="lemonade"` on it.

## Styling idiom: components first, then tokens

Compose with components and their props (`tone`, `size`, `variant`, `shadow`). For your own layout glue, use inline styles or CSS with these tokens. Don't invent colors.

| Family | Tokens |
|---|---|
| Pro color | `--ew-ink` (text/CTA), `--ew-body` (paragraphs), `--ew-muted`, `--ew-muted-2` (labels), `--ew-rule`, `--ew-rule-2` (hairlines), `--ew-chip-border`, `--ew-underline`, `--ew-paper` |
| Pro accents | `--ew-teal`, `--ew-plum`; marker fills `--ew-mark-blue/green/pink/yellow/coral` |
| Fun color | `--fun-bg`, `--fun-surface`, `--fun-ink`, `--fun-line`, accent fills `--fun-t1`, `--fun-t2`, `--fun-t3` |
| Fun shape | `--fun-shadow-sm` (4px), `--fun-shadow-md` (6px), `--fun-shadow-lg` (8px); `--fun-radius-card` 20px, `--fun-radius-pill` 999px |
| Type | `--ew-font-serif`, `--ew-font-sans`, `--ew-font-mono`, `--ew-font-display`, `--ew-font-headline` |
| Radius | `--ew-radius-xs` 3px, `--ew-radius-sm` 4px, `--ew-radius-md` 6px |

Usable helper classes: `ew-ink-teal` and `ew-ink-plum` (color spans in a `ProHeadline treatment="plain"`), and `ew-pro-section__logo` (logo `<img>` in `ProSection logo`).

## Building blocks by mode

- **Pro**: `ProHeader` → `ProHero` (`Eyebrow`, `ProHeadline` + `Highlight`, `ProButton`, `ProLink`, `ProPhoto`) → `ProSection` (title/label left: `RoleList`, `Credentials`; content right: `ProEntry`, `ProText`, `ChipRow`, `ProGallery`, `ProAudioCard`) → `ProFooter`.
- **Fun**: `FunHeader` → `FunHero` (`FunPill`, `ScribbleHeadline`/`FunHeadline`, `FunButton`, `SwatchPicker`, `FunPhotoCard`) → `FunSection` (`FunHeading`, `FunGrid` of `FunCard` + `FunGlyph`, `FunFigure`, `ChipRow tone="fun"`) → `FunPianoPanel` → `FunFooter`.
- **Either mode**: `Transport` (floating dark audio pill). For real playback, wrap the app in `AudioProvider src title` and read `useAudio()` (`playing`, `elapsed`, `duration`, `levels`, `togglePlay`, `toggle`, `seek`). The player components are presentational and take those values as props.

## Where the truth lives

- Read `styles.css` → `_ds_bundle.css` for every class and token before styling.
- Read `components/<group>/<Name>/<Name>.prompt.md` for props and examples.

## Example

```jsx
const { FunPage, FunSection, FunGrid, FunCard, FunGlyph, FunPill, FunButton } = window.WacksUI;
<FunPage scheme="lemonade">
  <FunSection title="Working at Cirrus Systems." badge={<FunPill>2025 — now</FunPill>}>
    <FunGrid min={250}>
      <FunCard icon={<FunGlyph kind="bars" />} title="Data Visualization">Dashboards leadership reads in seconds.</FunCard>
      <FunCard tone="t1" shadow="md" eyebrow="Jan 2023 — May 2025" title="Head TA">Mentored 52 students.</FunCard>
    </FunGrid>
    <div style={{ display: "flex", gap: 13 }}>
      <FunButton tone="t1" raised href="#work">What I do</FunButton>
      <FunButton href="#piano">Hear a piece</FunButton>
    </div>
  </FunSection>
</FunPage>
```
