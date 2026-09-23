import { ProButton, ProLink, ProPage } from "wacks-ui";

export const Solid = () => (
  <ProPage>
    <div style={{ padding: "24px 0", display: "flex", gap: 22, alignItems: "center" }}>
      <ProButton href="mailto:Evan.a.wacks@gmail.com">Get in touch</ProButton>
      <ProLink href="https://www.linkedin.com/in/evan-wacks/">LinkedIn</ProLink>
    </div>
  </ProPage>
);

export const Outline = () => (
  <ProPage>
    <div style={{ padding: "24px 0" }}>
      <ProButton variant="outline">Fun version</ProButton>
    </div>
  </ProPage>
);

export const Quiet = () => (
  <ProPage>
    <div style={{ padding: "24px 0" }}>
      <ProButton variant="quiet">See the fun version</ProButton>
    </div>
  </ProPage>
);
