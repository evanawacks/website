import { ProPage, RoleList } from "wacks-ui";

export const CurrentAndPast = () => (
  <ProPage>
    <div style={{ padding: "24px 0", width: 240 }}>
      <RoleList
        roles={[
          { title: "Senior Marketing Analyst", dates: "June 2026 — present" },
          { title: "Marketing Analyst", dates: "June 2025 — June 2026", past: true },
        ]}
      />
    </div>
  </ProPage>
);
