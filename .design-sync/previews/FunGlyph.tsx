import { FunGlyph, FunPage } from "wacks-ui";

export const AllKinds = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 8px", display: "flex", gap: 32, alignItems: "center" }}>
      <FunGlyph kind="dollar" />
      <FunGlyph kind="stack" />
      <FunGlyph kind="bars" />
    </div>
  </FunPage>
);
