import { Credentials, ProPage } from "wacks-ui";

export const Degree = () => (
  <ProPage>
    <div style={{ padding: "14px 0 24px", width: 260 }}>
      <span className="ew-pro-section__label">2021 — 2025</span>
      <Credentials items={["Bachelor of Arts", "Psychology major", "Certificate in Applied Data Science"]} />
    </div>
  </ProPage>
);
