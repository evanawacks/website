import { FunHeading, FunPage } from "wacks-ui";

export const Sizes = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: 20 }}>
      <FunHeading size="xl" maxCh={22}>Working at Cirrus Systems.</FunHeading>
      <FunHeading size="lg">A piece I can never play twice</FunHeading>
      <FunHeading size="md">Four years at Wesleyan.</FunHeading>
    </div>
  </FunPage>
);
