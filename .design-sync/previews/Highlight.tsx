import { Highlight, ProHeadline, ProPage } from "wacks-ui";

export const CoolMarkers = () => (
  <ProPage>
    <div style={{ padding: "20px 0" }}>
      <ProHeadline>
        Good <Highlight color="blue">Data</Highlight> is <Highlight color="green">Fundamental</Highlight>
        <br />
        to Great <Highlight color="pink">Insights</Highlight>
      </ProHeadline>
    </div>
  </ProPage>
);

export const WarmMarkers = () => (
  <ProPage>
    <div style={{ padding: "20px 0" }}>
      <ProHeadline>
        Good <Highlight color="yellow">Data</Highlight> is <Highlight color="coral">Fundamental</Highlight>
        <br />
        to Great <Highlight color="blue">Insights</Highlight>
      </ProHeadline>
    </div>
  </ProPage>
);
