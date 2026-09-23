import { ProAudioCard, ProPage } from "wacks-ui";

export const Idle = () => (
  <ProPage>
    <div style={{ padding: "24px 0", maxWidth: 620 }}>
      <ProAudioCard duration={207} />
    </div>
  </ProPage>
);

export const Playing = () => (
  <ProPage>
    <div style={{ padding: "24px 0", maxWidth: 620 }}>
      <ProAudioCard playing elapsed={96} duration={207} />
    </div>
  </ProPage>
);
