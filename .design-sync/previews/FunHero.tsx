import { FunButton, FunHero, FunPage, FunPhotoCard, FunPill, ScribbleHeadline, SwatchPicker } from "wacks-ui";
import acadia from "./_assets/acadia.webp";

export const Hero = () => (
  <FunPage scheme="duck-blue">
    <FunHero
      badge={<FunPill>Boston, MA · data Scientist</FunPill>}
      headline={
        <ScribbleHeadline size="lg">
          Data oh Data
          <br />
          The world is 1s and 0s
          <br />
          Life is far more
        </ScribbleHeadline>
      }
      hint={<FunPill variant="hint">Not a fan of haikus? Scratch it out.</FunPill>}
      text="Data mercenary by day, piano-man by night. Goat farming in New Hampshire, skiing in the Adirondacks, hiking in Maine."
      meta="Wesleyan University, Class of 2025"
      actions={
        <>
          <FunButton href="#work" tone="t1" raised>What I do</FunButton>
          <FunButton href="#piano">Hear a piece</FunButton>
        </>
      }
      extra={<SwatchPicker value="duck-blue" />}
      media={<FunPhotoCard src={acadia} alt="Evan Wacks in Acadia, Maine" aspectRatio="3024 / 4007" caption="Acadia, Maine" />}
    />
  </FunPage>
);
