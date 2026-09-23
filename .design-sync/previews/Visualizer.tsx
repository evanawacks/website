import { FunPage, Visualizer } from "wacks-ui";

const LEVELS = [0.35, 0.5, 0.62, 0.8, 0.7, 0.55, 0.9, 0.66, 0.48, 0.72, 0.84, 0.6, 0.42, 0.58, 0.76, 0.5, 0.38, 0.64, 0.52, 0.44, 0.3, 0.26];

export const Idle = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0", maxWidth: 420 }}>
      <Visualizer />
    </div>
  </FunPage>
);

export const Live = () => (
  <FunPage scheme="bubblegum">
    <div style={{ padding: "28px 0", maxWidth: 420 }}>
      <Visualizer playing levels={LEVELS} />
    </div>
  </FunPage>
);
