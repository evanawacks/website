import { ChipRow, FunCard, FunGlyph, FunGrid, FunPage, FunPill, FunSection } from "wacks-ui";

export const WithBadge = () => (
  <FunPage scheme="duck-blue" style={{ paddingTop: 28 }}>
    <FunSection id="before" title="Four years at Wesleyan." headingSize="md" badge={<FunPill>2021 — 2025</FunPill>} spaceAfter={28}>
      <FunGrid min={220}>
        <FunCard tone="t1" shadow="md" eyebrow="Jan 2023 — May 2025" title="Head Teaching Assistant">Mentored 52 students.</FunCard>
        <FunCard tone="t3" shadow="md" eyebrow="2025 - Present" title="Statistical Consultant">Back every year for DataFest.</FunCard>
      </FunGrid>
    </FunSection>
  </FunPage>
);

export const WithChips = () => (
  <FunPage scheme="lemonade" style={{ paddingTop: 28 }}>
    <FunSection id="work" title="Working at Cirrus Systems." headingMaxCh={22} spaceAfter={28}>
      <FunGrid min={220}>
        <FunCard icon={<FunGlyph kind="stack" />} title="Data Infrastructure">Bespoke marketing and sales data infrastructure.</FunCard>
        <FunCard icon={<FunGlyph kind="bars" />} title="Data Visualization">A polished Looker dashboard.</FunCard>
      </FunGrid>
      <ChipRow tone="fun" items={["Python", "SQL", "R", "Looker Studio"]} />
    </FunSection>
  </FunPage>
);
