import { FunCard, FunGlyph, FunGrid, FunPage } from "wacks-ui";

export const ThreeCards = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0" }}>
      <FunGrid min={200}>
        <FunCard icon={<FunGlyph kind="dollar" />} title="Paid social">Every dollar tested and accounted for.</FunCard>
        <FunCard icon={<FunGlyph kind="stack" />} title="Data Infrastructure">$20k/yr and 1,000+ hours saved.</FunCard>
        <FunCard icon={<FunGlyph kind="bars" />} title="Data Visualization">Dashboards leadership reads in seconds.</FunCard>
      </FunGrid>
    </div>
  </FunPage>
);
