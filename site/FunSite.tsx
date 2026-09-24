import type { CSSProperties, ReactNode } from "react";
import {
  ChipRow,
  FunButton,
  FunCard,
  FunFigure,
  FunFooter,
  FunGlyph,
  FunGrid,
  FunHeader,
  FunHero,
  FunPage,
  FunPhotoCard,
  FunPianoPanel,
  FunPill,
  FunSection,
  FunText,
  ScribbleHeadline,
  SwatchPicker,
  useAudio,
  type FunScheme,
  type SwatchOption,
} from "../src";
import { EMAIL, LINKEDIN, PHONE_LINE, SKILLS, asset } from "./content";

export type Stage = 0 | 1 | 2 | 3;

const SWATCHES: SwatchOption[] = [
  { value: "duck-blue", label: "Duck Blue", image: asset("swatch-duck-blue.webp") },
  { value: "bubblegum", label: "Bubblegum", image: asset("swatch-bubblegum.webp") },
  { value: "lemonade", label: "Lemonade", image: asset("swatch-lemonade.webp") },
  { value: "pond-mint", label: "Pond Mint", image: asset("swatch-pond-mint.webp") },
];

const STAGES: Record<Stage, { size: "lg" | "md" | "sm"; text: ReactNode; hint: string }> = {
  0: {
    size: "lg",
    text: (
      <>
        Data oh Data
        <br />
        The world is 1s and 0s
        <br />
        Life is far more
      </>
    ),
    hint: "Not a fan of haikus? Scratch it out.",
  },
  1: { size: "lg", text: "Wacks on Data", hint: "Too cheesy?" },
  2: { size: "sm", text: "Using Data to find Beta before Theta makes my findings outdated.", hint: "I wouldn't be offended this time–not my finest work." },
  3: { size: "md", text: "Using data to unlock insights and drive evidence based decisions.", hint: "Or scratch this one out too." },
};

interface FunHeadProps {
  scheme: FunScheme;
  stage: Stage;
  onScheme: (s: FunScheme) => void;
  onScratched: () => void;
  onRevert: () => void;
  onPro: () => void;
}

/** Fun header + hero. Also rendered invisibly in Pro mode to measure where the photo sits. */
export function FunTop({ scheme, stage, onScheme, onScratched, onRevert, onPro }: FunHeadProps) {
  const s = STAGES[stage];
  return (
    <>
      <FunHeader
        tileSrc={asset("duck-art.webp")}
        tileAlt="Duck rosette art"
        links={[
          { label: "Work", href: "#work" },
          { label: "Wesleyan", href: "#before" },
          { label: "Piano", href: "#piano" },
          { label: "Dogs & goats", href: "#farm" },
        ]}
      >
        <FunButton size="sm" tone="t3" href={`mailto:${EMAIL}`}>
          Say hello
        </FunButton>
        <FunButton size="sm" hoverFill onClick={onPro}>
          Back to serious
        </FunButton>
      </FunHeader>

      <FunHero
        badge={<FunPill>Boston, MA · Data Scientist</FunPill>}
        headline={
          <ScribbleHeadline key={stage} size={s.size} onScratched={onScratched} delay={stage >= 2 ? 0 : 420}>
            {s.text}
          </ScribbleHeadline>
        }
        hint={
          stage === 3 ? (
            <>
              <FunButton tone="t1" size="md" raised onClick={onRevert} style={{ padding: "14px 24px" }}>
                Make it fun again
              </FunButton>
              <FunPill variant="hint">{s.hint}</FunPill>
            </>
          ) : (
            <FunPill variant="hint">{s.hint}</FunPill>
          )
        }
        text={"Data mercenary by day, piano-man by night.\u00a0 Goat farming in New Hampshire, skiing in the Adirondacks, hiking in Maine, kayaking on the Charles in Boston. Spending time with friends and family in such beautiful environments."}
        meta={
          <>
            Wesleyan University, Class of 2025
            <br />
            Winston Preparatory School New York, Class of 2021
          </>
        }
        actions={
          <>
            <FunButton href="#work" tone="t1" raised>
              What I do
            </FunButton>
            <FunButton href="#piano">Hear a piece</FunButton>
          </>
        }
        extra={<SwatchPicker value={scheme} onChange={onScheme} options={SWATCHES} />}
        media={<FunPhotoCard src={asset("acadia.webp")} alt="Evan Wacks in Acadia, Maine" aspectRatio="3024 / 4007" caption="Acadia, Maine" />}
      />
    </>
  );
}

interface FunSiteProps extends FunHeadProps {
  style?: CSSProperties;
}

export function FunSite(props: FunSiteProps) {
  const audio = useAudio();
  const { scheme, style } = props;
  return (
    <FunPage scheme={scheme} style={style}>
      <FunTop {...props} />

      <FunSection id="work" title="Working at Cirrus Systems." headingMaxCh={22}>
        <FunGrid min={250}>
          <FunCard icon={<FunGlyph kind="dollar" />} title="Multi-Million $ Responsibility">
            I manage paid social spend across Meta and TikTok. Getting it right means constantly looking for room for improvement, conducting
            rigorous A/B testing on forms, landing pages, audiences–carefully testing and accounting for every dollar spent.
          </FunCard>
          <FunCard icon={<FunGlyph kind="stack" />} title="Data Infrastructure">
            Politicians are right, infrastructure isn't always fun, but it's critical. I happen to enjoy it, and it doesn't hurt that building
            bespoke marketing and sales data infrastructure led to $20k/yr and 1,000+/hrs a year of time in savings.
          </FunCard>
          <FunCard icon={<FunGlyph kind="bars" />} title="Data Visualization">
            The draft graphs I craft might be head scratchers, but putting in the time is always worth it. A polished (Looker) dashboard means
            leadership gets the point quickly, leading to massive savings on expensive dandruff shampoos.
          </FunCard>
        </FunGrid>
        <ChipRow tone="fun" items={SKILLS} />
      </FunSection>

      <FunSection id="before" title="Four years at Wesleyan." headingSize="md" headingMaxCh={24} badge={<FunPill>2021 — 2025</FunPill>} spaceAfter={86}>
        <FunGrid min={260}>
          <FunCard tone="t1" shadow="md" eyebrow="Jan 2023 — May 2025" title="Head Teaching Assistant" meta="Wesleyan Quantitative Analysis Center">
            Trepidation best describes how I felt walking into my first data class. If I let that fear live, I wouldn't have had the privilege of
            mentoring 52 students over nine semesters, helping them explore their interests and discovering a passion for data they never knew
            they had.
          </FunCard>
          <FunCard tone="t2" shadow="md" eyebrow="Sept 2023 — May 2025" title="Immigration Research Assistant" meta="Wesleyan Cultural Psychology Research Lab">
            I told Prof. Perez I never wanted to conduct research. He recruited me anyway. I got to design a study, write a survey, distribute it
            to hundreds of Americans, perform MANOVAs, then present on it. I'm incredibly grateful for him inviting me to the world of research.
            It gave me an appreciation for experimental and observational studies otherwise unobtainable through solving problem sets and
            reading papers.
          </FunCard>
          <FunCard
            tone="t3"
            shadow="md"
            eyebrow="2025 - Present"
            title="Statistical Consultant"
            meta={<span style={{ fontWeight: 600 }}>American Statistical Association DataFest @ Wesleyan</span>}
          >
            After losing the previous year, my team won DataFest in 2024. I realized I loved two elements the most, learning from my previous
            mistakes, and seeing my team flourish. Now, as a consultant, I get to help students learn how to operate successfully as a team and
            share their fascinating data insights with their peers and the judges.
          </FunCard>
        </FunGrid>
      </FunSection>

      <section id="piano" style={{ paddingBottom: 88 }}>
        <FunPianoPanel
          badge={<FunPill>Composition</FunPill>}
          title="A piece I can never play twice"
          text="I don't know how to read or write music. I don't know proper form. I can't name a single chord, then play it. Those all are a-minor inconvenience and I don't let them stop me."
          playing={audio.playing}
          elapsed={audio.elapsed}
          duration={audio.duration}
          levels={audio.levels}
          onToggle={audio.togglePlay}
        />
      </section>

      <FunSection
        id="farm"
        title="They aren't data dogs or coding goats. They are thieves..."
        intro={
          <FunText>
            Zeus and Padme started small, stealing the beds and couches. Then they graduated and learned organized crime, teaming up with the
            goats to steal my heart.
          </FunText>
        }
        spaceAfter={86}
        gap={30}
      >
        <FunGrid min={280} gap={22}>
          <FunFigure src={asset("padme-zeus.webp")} alt="Padme and Zeus" height={330} objectPosition="center 42%" caption="Padme & Zeus — Arepo Farm Co-CSOs" />
          <FunFigure src={asset("goats.webp")} alt="Goats and spring kids in the pasture" tone="t2" height={330} caption="Jerry, Venus, Tommy - Professional Goats" />
        </FunGrid>
      </FunSection>

      <FunFooter title="Let's talk data, or goats." meta={PHONE_LINE}>
        <FunButton size="md" tone="t3" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </FunButton>
        <FunButton size="md" href={LINKEDIN}>
          LinkedIn
        </FunButton>
      </FunFooter>
    </FunPage>
  );
}
