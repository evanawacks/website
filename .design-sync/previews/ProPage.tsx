import { ProPage, ProHeader, ProButton, Eyebrow, ProHeadline, Highlight } from "wacks-ui";

export const PageShell = () => (
  <ProPage>
    <ProHeader
      links={[{ label: "Work", href: "#p-work" }, { label: "Education", href: "#p-earlier" }, { label: "Piano", href: "#p-piano" }]}
      action={<ProButton variant="outline">Fun version</ProButton>}
    />
    <div style={{ padding: "48px 0", display: "flex", flexDirection: "column", gap: 24 }}>
      <Eyebrow>Born in Brooklyn, based in Boston</Eyebrow>
      <ProHeadline>
        Good <Highlight color="blue">Data</Highlight> is <Highlight color="green">Fundamental</Highlight>
      </ProHeadline>
    </div>
  </ProPage>
);
