import { FunButton, FunHeading, FunPage, FunPill, FunText } from "wacks-ui";

const Body = () => (
  <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
    <FunPill>Boston, MA · data Sciencist</FunPill>
    <FunHeading size="lg">Let's talk data, or goats.</FunHeading>
    <FunText>Data mercenary by day, piano-man by night.</FunText>
    <FunButton tone="t1" raised>What I do</FunButton>
  </div>
);

export const DuckBlue = () => <FunPage scheme="duck-blue"><Body /></FunPage>;
export const Bubblegum = () => <FunPage scheme="bubblegum"><Body /></FunPage>;
export const Lemonade = () => <FunPage scheme="lemonade"><Body /></FunPage>;
export const PondMint = () => <FunPage scheme="pond-mint"><Body /></FunPage>;
