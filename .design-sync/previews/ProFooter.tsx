import { ProButton, ProFooter, ProLink, ProPage } from "wacks-ui";

export const Default = () => (
  <ProPage>
    <ProFooter title="Let's talk." meta="Boston, MA · 617-503-7939">
      <ProLink href="mailto:Evan.a.wacks@gmail.com">Evan.a.wacks@gmail.com</ProLink>
      <ProLink href="https://www.linkedin.com/in/evan-wacks/">LinkedIn</ProLink>
      <ProButton variant="quiet">See the fun version</ProButton>
    </ProFooter>
  </ProPage>
);
