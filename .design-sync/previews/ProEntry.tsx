import { ProEntry, ProPage } from "wacks-ui";

export const Stacked = () => (
  <ProPage>
    <div style={{ padding: "24px 0", maxWidth: 680 }}>
      <ProEntry title="Multi-million-dollar paid social">
        Managing the spend across all Meta and TikTok campaigns requires precision. Every dollar accounted for and put to good use.
      </ProEntry>
      <ProEntry title="Visualization & reporting">
        Polished Looker Studio dashboards that leadership can read in seconds. The source of truth for sales and marketing performance.
      </ProEntry>
    </div>
  </ProPage>
);

export const Dated = () => (
  <ProPage>
    <div style={{ padding: "24px 0", maxWidth: 680 }}>
      <ProEntry date="Jan 2023 — May 2025" title="Head Teaching Assistant" org="Quantitative Analysis Center">
        Managed 15 TAs and mentored 52 students over nine semesters — helping them learn how to design studies, run logistic and OLS regression models, visualize data, and tell the stories they're passionate about.
      </ProEntry>
      <ProEntry date="Sept 2023 — May 2025" title="Immigration Research Assistant" org="Cultural Psychology Research Lab">
        Designed a study on immigration sentiment, ran MANOVAs on 342 responses and presented the findings.
      </ProEntry>
    </div>
  </ProPage>
);
