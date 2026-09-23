import { FunButton, FunHeader, FunPage } from "wacks-ui";
import duck from "./_assets/duck-art.webp";

export const Default = () => (
  <FunPage scheme="duck-blue">
    <FunHeader
      tileSrc={duck}
      tileAlt="Duck rosette art"
      links={[
        { label: "Work", href: "#work" },
        { label: "Wesleyan", href: "#before" },
        { label: "Piano", href: "#piano" },
        { label: "Dogs & goats", href: "#farm" },
      ]}
    >
      <FunButton size="sm" tone="t3" href="mailto:Evan.a.wacks@gmail.com">Say hello</FunButton>
      <FunButton size="sm" hoverFill>Back to serious</FunButton>
    </FunHeader>
  </FunPage>
);
