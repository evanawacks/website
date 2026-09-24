import { FunPage, FunPill } from "wacks-ui";

export const Solid = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0", display: "flex", gap: 12, flexWrap: "wrap" }}>
      <FunPill>Boston, MA · data Scientist</FunPill>
      <FunPill>2021 — 2025</FunPill>
      <FunPill tone="t3">Acadia, Maine</FunPill>
    </div>
  </FunPage>
);

export const Hint = () => (
  <FunPage scheme="lemonade">
    <div style={{ padding: "28px 0" }}>
      <FunPill variant="hint">Not a fan of haikus? Scratch it out.</FunPill>
    </div>
  </FunPage>
);
