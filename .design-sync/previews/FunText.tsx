import { FunPage, FunText } from "wacks-ui";

export const Sizes = () => (
  <FunPage scheme="bubblegum">
    <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: 16, maxWidth: 520 }}>
      <FunText size="lg">Data mercenary by day, piano-man by night. Goat farming in New Hampshire, skiing in the Adirondacks.</FunText>
      <FunText>Zeus and Padme started small, stealing the beds and couches. Then they graduated and learned organized crime.</FunText>
      <FunText size="sm">I don't know how to read or write music. I don't know proper form.</FunText>
    </div>
  </FunPage>
);
