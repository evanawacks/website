import { ProHeader, ProButton, ProPage } from "wacks-ui";

export const Default = () => (
  <ProPage>
    <ProHeader
      links={[
        { label: "Work", href: "#p-work" },
        { label: "Education", href: "#p-earlier" },
        { label: "Piano", href: "#p-piano" },
        { label: "Outside", href: "#p-life" },
      ]}
      action={<ProButton variant="outline">Fun version</ProButton>}
    />
  </ProPage>
);

export const BrandOnly = () => (
  <ProPage>
    <ProHeader brand="Evan Wacks" links={[{ label: "Writing", href: "#writing" }, { label: "Contact", href: "#contact" }]} />
  </ProPage>
);
