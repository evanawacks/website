import { Transport } from "wacks-ui";

export const Paused = () => (
  <div style={{ padding: 24, background: "#ffffff" }}>
    <Transport floating={false} title="Didactic Diminishment" elapsed={0} duration={207} />
  </div>
);

export const PlayingOnFun = () => (
  <div style={{ padding: 24, background: "#a8e9f5" }}>
    <Transport floating={false} title="Didactic Diminishment" playing elapsed={88} duration={207} />
  </div>
);
