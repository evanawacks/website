import { ProPage, ProPhoto } from "wacks-ui";
import acadia from "./_assets/acadia.webp";
import dogs from "./_assets/padme-zeus.webp";

export const Portrait = () => (
  <ProPage>
    <div style={{ padding: "24px 0", maxWidth: 320 }}>
      <ProPhoto src={acadia} alt="Evan Wacks in Acadia, Maine" aspectRatio="3024 / 4007" caption="Acadia, Maine" />
    </div>
  </ProPage>
);

export const Gallery = () => (
  <ProPage>
    <div style={{ padding: "24px 0", maxWidth: 300 }}>
      <ProPhoto variant="gallery" src={dogs} alt="Padme and Zeus" caption="Padme & Zeus" />
    </div>
  </ProPage>
);
