import { FunButton, FunPage } from "wacks-ui";

export const Tones = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0", display: "flex", gap: 13, flexWrap: "wrap" }}>
      <FunButton tone="t1" raised href="#work">What I do</FunButton>
      <FunButton href="#piano">Hear a piece</FunButton>
      <FunButton tone="t2">Tone t2</FunButton>
      <FunButton tone="t3">Tone t3</FunButton>
    </div>
  </FunPage>
);

export const Sizes = () => (
  <FunPage scheme="bubblegum">
    <div style={{ padding: "28px 0", display: "flex", gap: 13, alignItems: "center", flexWrap: "wrap" }}>
      <FunButton size="sm" tone="t3">Say hello</FunButton>
      <FunButton size="md" tone="t3">Evan.a.wacks@gmail.com</FunButton>
      <FunButton size="lg" tone="t1" raised>What I do</FunButton>
    </div>
  </FunPage>
);
