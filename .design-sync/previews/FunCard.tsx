import { FunCard, FunGlyph, FunGrid, FunPage } from "wacks-ui";

export const WithIcon = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0", maxWidth: 340 }}>
      <FunCard icon={<FunGlyph kind="dollar" />} title="Multi-Million $ Responsibility">
        I manage paid social spend across Meta and TikTok, testing and accounting for every dollar spent.
      </FunCard>
    </div>
  </FunPage>
);

export const TonedWithEyebrow = () => (
  <FunPage scheme="bubblegum">
    <div style={{ padding: "28px 0" }}>
      <FunGrid min={220}>
        <FunCard tone="t1" shadow="md" eyebrow="Jan 2023 — May 2025" title="Head Teaching Assistant" meta="Wesleyan Quantitative Analysis Center">
          Mentoring 52 students over nine semesters.
        </FunCard>
        <FunCard tone="t2" shadow="md" eyebrow="Sept 2023 — May 2025" title="Research Assistant" meta="Cultural Psychology Research Lab">
          Designed a study, wrote a survey and ran MANOVAs.
        </FunCard>
        <FunCard tone="t3" shadow="md" eyebrow="2025 - Present" title="Statistical Consultant" meta="ASA DataFest @ Wesleyan">
          Helping student teams share their data insights.
        </FunCard>
      </FunGrid>
    </div>
  </FunPage>
);
