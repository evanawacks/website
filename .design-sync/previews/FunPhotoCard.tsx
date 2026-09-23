import { FunPage, FunPhotoCard } from "wacks-ui";
import acadia from "./_assets/acadia.webp";

export const Tilted = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "36px 24px", maxWidth: 320 }}>
      <FunPhotoCard src={acadia} alt="Evan Wacks in Acadia, Maine" aspectRatio="3024 / 4007" caption="Acadia, Maine" />
    </div>
  </FunPage>
);

export const OtherScheme = () => (
  <FunPage scheme="pond-mint">
    <div style={{ padding: "36px 24px", maxWidth: 320 }}>
      <FunPhotoCard src={acadia} alt="Evan Wacks in Acadia, Maine" aspectRatio="3024 / 4007" caption="Acadia, Maine" />
    </div>
  </FunPage>
);
