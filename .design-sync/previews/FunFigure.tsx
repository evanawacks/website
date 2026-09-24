import { FunFigure, FunGrid, FunPage } from "wacks-ui";
import dogs from "./_assets/padme-zeus.webp";
import goats from "./_assets/goats.webp";

export const Pair = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0" }}>
      <FunGrid min={220} gap={22}>
        <FunFigure src={dogs} alt="Padme and Zeus" height={300} caption="Padme & Zeus — Arepo Farm Co-CSOs" />
        <FunFigure src={goats} alt="Goats in the pasture" tone="t2" height={300} caption="Jerry, Venus, Tommy - Professional Goats" />
      </FunGrid>
    </div>
  </FunPage>
);
