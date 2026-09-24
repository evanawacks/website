import { ChipRow, Credentials, ProEntry, ProPage, ProSection, RoleList } from "wacks-ui";
import cirrus from "./_assets/cirrus-logo.webp";
import wesleyan from "./_assets/wesleyan.webp";

export const WorkHistory = () => (
  <ProPage>
    <ProSection
      id="p-work"
      title="Cirrus Systems"
      logo={<img className="ew-pro-section__logo" src={cirrus} alt="Cirrus Systems logo" width={78} height={72} />}
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
        Managing the spend across all Meta and TikTok campaigns requires precision. Design A/B testing on forms, landing pages and
        audiences to boost performance.
      </ProEntry>
      <ProEntry title="Data infrastructure">
        I engineered a custom marketing and sales database on Google Cloud. Over $20k and 1,000 hours saved per year.
      </ProEntry>
      <ChipRow items={["Python", "SQL", "R", "Google Cloud", "Looker Studio"]} />
    </ProSection>
  </ProPage>
);

export const DatedEntries = () => (
  <ProPage>
    <ProSection
      id="p-earlier"
      title="Wesleyan University"
      logo={<img className="ew-pro-section__logo" src={wesleyan} alt="Wesleyan University insignia" width={74} />}
      label="2021 — 2025"
      aside={<Credentials items={["Bachelor of Arts", "Psychology major", "Certificate in Applied Data Science"]} />}
    >
      <ProEntry date="Jan 2023 — May 2025" title="Head Teaching Assistant" org="Quantitative Analysis Center">
        Managed 15 TAs and mentored 52 students over nine semesters — helping them learn how to design studies, run logistic and OLS regression models, visualize data, and tell the stories they're passionate about.
      </ProEntry>
      <ProEntry date="2025 — present" title="Statistical Consultant" org="ASA DataFest @ Wesleyan">
        Now I go back every year to help other students take on the challenge.
      </ProEntry>
    </ProSection>
  </ProPage>
);
