import { FunHeadline, FunPage } from "wacks-ui";

export const Haiku = () => (
  <FunPage scheme="duck-blue">
    <div style={{ padding: "28px 0", maxWidth: 560 }}>
      <FunHeadline size="lg">
        Data oh Data
        <br />
        The world is 1s and 0s
        <br />
        Life is far deeper
      </FunHeadline>
    </div>
  </FunPage>
);

export const OneLiner = () => (
  <FunPage scheme="pond-mint">
    <div style={{ padding: "28px 0", maxWidth: 560 }}>
      <FunHeadline size="sm">Using Data to find Beta before Theta makes my findings outdated.</FunHeadline>
    </div>
  </FunPage>
);
