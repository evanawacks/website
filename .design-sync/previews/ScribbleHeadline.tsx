import { FunPage, FunPill, ScribbleHeadline } from "wacks-ui";

export const Haiku = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", maxWidth: 560 }}>
      <ScribbleHeadline size="lg">
        Data oh Data
        <br />
        The world is 1s and 0s
        <br />
        Life is far deeper
      </ScribbleHeadline>
      <FunPill variant="hint">Not a fan of haikus? Scratch it out.</FunPill>
    </div>
  </FunPage>
);

export const NextStage = () => (
  <FunPage scheme="lemonade">
    <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start", maxWidth: 560 }}>
      <ScribbleHeadline size="lg">Wacks on Data</ScribbleHeadline>
      <FunPill variant="hint">Too cheesy?</FunPill>
    </div>
  </FunPage>
);
