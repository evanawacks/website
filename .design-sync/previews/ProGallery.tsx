import { ProGallery, ProPage, ProPhoto } from "wacks-ui";
import dogs from "./_assets/padme-zeus.webp";
import goats from "./_assets/goats.webp";

export const TwoUp = () => (
  <ProPage>
    <div style={{ padding: "24px 0" }}>
      <ProGallery>
        <ProPhoto variant="gallery" src={dogs} alt="Padme and Zeus" caption="Padme & Zeus" />
        <ProPhoto variant="gallery" src={goats} alt="Goats in the pasture" caption="Jerry, Venus & Tommy" />
      </ProGallery>
    </div>
  </ProPage>
);
