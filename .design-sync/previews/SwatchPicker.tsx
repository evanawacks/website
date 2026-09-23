import { FunPage, SwatchPicker } from "wacks-ui";
import duckBlue from "./_assets/swatch-duck-blue.webp";
import bubblegum from "./_assets/swatch-bubblegum.webp";
import lemonade from "./_assets/swatch-lemonade.webp";
import pondMint from "./_assets/swatch-pond-mint.webp";

export const WithThumbnails = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0" }}>
      <SwatchPicker
        value="duck-blue"
        options={[
          { value: "duck-blue", label: "Duck Blue", image: duckBlue },
          { value: "bubblegum", label: "Bubblegum", image: bubblegum },
          { value: "lemonade", label: "Lemonade", image: lemonade },
          { value: "pond-mint", label: "Pond Mint", image: pondMint },
        ]}
      />
    </div>
  </FunPage>
);

export const ColorQuadrants = () => (
  <FunPage scheme="lemonade">
    <div style={{ padding: "28px 0" }}>
      <SwatchPicker value="lemonade" />
    </div>
  </FunPage>
);
