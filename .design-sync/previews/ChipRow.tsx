import { ChipRow, FunPage, ProPage } from "wacks-ui";

const SKILLS = ["Python", "SQL", "R", "Google Cloud", "Looker Studio", "Power BI", "Qualtrics", "Stata"];

export const Pro = () => (
  <ProPage>
    <div style={{ padding: "24px 0" }}>
      <ChipRow items={SKILLS} />
    </div>
  </ProPage>
);

export const Fun = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "24px 0" }}>
      <ChipRow tone="fun" items={SKILLS} />
    </div>
  </FunPage>
);
