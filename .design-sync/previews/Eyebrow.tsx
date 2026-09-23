import { Eyebrow, ProHeadline, ProPage } from "wacks-ui";

export const OverHeadline = () => (
  <ProPage>
    <div style={{ padding: "24px 0", display: "flex", flexDirection: "column", gap: 20 }}>
      <Eyebrow>Born in Brooklyn, based in Boston</Eyebrow>
      <ProHeadline treatment="plain">Good Data is Fundamental</ProHeadline>
    </div>
  </ProPage>
);
