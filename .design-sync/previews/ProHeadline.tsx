import { Highlight, ProHeadline, ProPage } from "wacks-ui";

export const Marker = () => (
  <ProPage>
    <div style={{ padding: "20px 0" }}>
      <ProHeadline treatment="marker">
        Good <Highlight color="blue">Data</Highlight> is <Highlight color="green">Fundamental</Highlight>
        <br />
        to Great <Highlight color="pink">Insights</Highlight>
      </ProHeadline>
    </div>
  </ProPage>
);

export const TwoTone = () => (
  <ProPage>
    <div style={{ padding: "20px 0" }}>
      <ProHeadline treatment="plain">
        <span className="ew-ink-teal">Good Data</span> is Fundamental
        <br />
        to <span className="ew-ink-plum">Great Insights</span>
      </ProHeadline>
    </div>
  </ProPage>
);

export const Plain = () => (
  <ProPage>
    <div style={{ padding: "20px 0" }}>
      <ProHeadline treatment="plain">
        Good Data is Fundamental
        <br />
        to Great Insights
      </ProHeadline>
    </div>
  </ProPage>
);
