import { forwardRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import {
  ChipRow,
  Credentials,
  Highlight,
  ProAudioCard,
  ProButton,
  ProEntry,
  ProFooter,
  ProGallery,
  ProHeader,
  ProHeadline,
  ProHero,
  ProLink,
  ProPage,
  ProPhoto,
  ProSection,
  ProText,
  RoleList,
  useAudio,
} from "../src";
import { EMAIL, LINKEDIN, PHONE_LINE, SKILLS, asset } from "./content";

interface ProSiteProps {
  onFun: (e: MouseEvent<HTMLButtonElement>) => void;
  /** Absolute position for the hero photo, so it lines up with the Fun hero's photo. */
  photoStyle?: CSSProperties;
  /** Hidden Fun hero used to measure that position. */
  measurer?: ReactNode;
}

export const ProSite = forwardRef<HTMLDivElement, ProSiteProps>(function ProSite({ onFun, photoStyle, measurer }, ref) {
  const audio = useAudio();
  return (
    <ProPage ref={ref}>
      {measurer}
      <ProHeader
        links={[
          { label: "Work", href: "#p-work" },
          { label: "Education", href: "#p-earlier" },
          { label: "Piano", href: "#p-piano" },
          { label: "Outside", href: "#p-life" },
        ]}
        action={
          <ProButton variant="outline" onClick={onFun}>
            Fun version
          </ProButton>
        }
      />

      <ProHero
        eyebrow="Born in Brooklyn, based in Boston"
        title={
          <ProHeadline treatment="marker">
            Good <Highlight color="blue">Data</Highlight> is <Highlight color="green">Fundamental</Highlight>
            <br />
            to Great <Highlight color="pink">Insights</Highlight>
          </ProHeadline>
        }
        lede="Senior Marketing Analyst at Cirrus Systems, where I steer a multi-million-dollar paid social spend with custom built data infrastructure."
        actions={
          <>
            <ProButton href={`mailto:${EMAIL}`}>Get in touch</ProButton>
            <ProLink href={LINKEDIN}>LinkedIn</ProLink>
          </>
        }
        mediaStyle={photoStyle}
        media={<ProPhoto src={asset("acadia.webp")} alt="Evan Wacks" aspectRatio="3024 / 4007" caption="Acadia, Maine" />}
      />

      <ProSection
        id="p-work"
        title="Cirrus Systems"
        logo={<img className="ew-pro-section__logo" src={asset("cirrus-logo.webp")} alt="Cirrus Systems logo" width={78} height={72} />}
        aside={
          <RoleList
            roles={[
              { title: "Senior Marketing Analyst", dates: "June 2026 — present" },
              { title: "Marketing Analyst", dates: "June 2025 — June 2026", past: true },
            ]}
          />
        }
      >
        <ProEntry title="Multi-million-dollar paid social">
          Managing the spend across all Meta and TikTok campaigns requires precision.
          <br />
          Design A/B testing on forms, landing pages and audiences to boost performance.
          <br />
          Every dollar accounted for and put to good use.
        </ProEntry>
        <ProEntry title="Data infrastructure">
          I engineered a custom marketing and sales database on Google Cloud.
          <br />
          Data refreshes live data across the organization.
          <br />
          Over $20k and 1,000 hours saved per year–no more reliance on overpriced APIs and manually uploading CSVs.
        </ProEntry>
        <ProEntry title="Visualization & reporting">
          Polished Looker Studio dashboards that leadership can read in seconds.
          <br />
          The source of truth for sales and marketing performance.
        </ProEntry>
        <ChipRow items={SKILLS} />
      </ProSection>

      <ProSection
        id="p-earlier"
        title="Wesleyan University"
        logo={<img className="ew-pro-section__logo" src={asset("wesleyan.webp")} alt="Wesleyan University insignia" width={74} />}
        label="2021 — 2025"
        aside={<Credentials items={["Bachelor of Arts", "Psychology major", "Certificate in Applied Data Science"]} />}
      >
        <ProEntry date="2025 — present" title="Statistical Consultant" org="ASA DataFest @ Wesleyan">
          My team won the 48-hour competition in 2024 with a fantastic team.
          <br />
          Now I go back every year to help other students take on the hackathon and explore their passion for data science.
        </ProEntry>
        <ProEntry date="Jan 2023 — May 2025" title="Head Teaching Assistant" org="Quantitative Analysis Center">
          Managed 15 TAs and mentored 52 students over nine semesters — modeling, visualization, methodology, and the harder part: saying
          what the data means.
        </ProEntry>
        <ProEntry date="Sept 2023 — May 2025" title="Immigration Research Assistant" org="Cultural Psychology Research Lab">
          I worked with Dr. Michael Perez to design a study on immigration sentiment.
          <br />
          We sent it to a panel of 342 respondents, performed MANOVAs, graphed the data, and presented the findings to peers and professors
          alike.
        </ProEntry>
      </ProSection>

      <ProSection id="p-piano" title="Piano" label="Improvisation">
        <div className="ew-pro-player-wrap">
          <ProText>My pieces only exist in my head–and in my phone's voice memos.</ProText>
          <ProAudioCard playing={audio.playing} elapsed={audio.elapsed} duration={audio.duration} onToggle={audio.togglePlay} />
        </div>
      </ProSection>

      <ProSection id="p-life" title="Outside work" label="Arepo Farm, NH">
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <ProText>
            Goat farming in New Hampshire, black diamond skiing in the Adirondacks, hiking in Maine, kayaking on the Charles. I can't recall
            an outdoor experience I don't enjoy, especially if animals were involved!
          </ProText>
          <ProGallery>
            <ProPhoto variant="gallery" src={asset("padme-zeus.webp")} alt="Padme and Zeus" caption="Padme & Zeus" />
            <ProPhoto variant="gallery" src={asset("goats.webp")} alt="Goats in the pasture" caption="Jerry, Venus & Tommy" />
          </ProGallery>
        </div>
      </ProSection>

      <ProFooter title="Let's talk." meta={PHONE_LINE}>
        <ProLink href={`mailto:${EMAIL}`}>{EMAIL}</ProLink>
        <ProLink href={LINKEDIN}>LinkedIn</ProLink>
        <ProButton variant="quiet" onClick={onFun}>
          See the fun version
        </ProButton>
      </ProFooter>
    </ProPage>
  );
});
