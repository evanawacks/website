import { Highlight, ProButton, ProHeadline, ProHero, ProLink, ProPage, ProPhoto } from "wacks-ui";
import acadia from "./_assets/acadia.webp";

export const Hero = () => (
  <ProPage>
    <ProHero
      eyebrow="Born in Brooklyn, based in Boston"
      title={
        <ProHeadline>
          Good <Highlight color="blue">Data</Highlight> is <Highlight color="green">Fundamental</Highlight>
          <br />
          to Great <Highlight color="pink">Insights</Highlight>
        </ProHeadline>
      }
      lede="Senior Marketing Analyst at Cirrus Systems, where I steer a multi-million-dollar paid social spend with custom built data infrastructure."
      actions={
        <>
          <ProButton href="mailto:Evan.a.wacks@gmail.com">Get in touch</ProButton>
          <ProLink href="https://www.linkedin.com/in/evan-wacks/">LinkedIn</ProLink>
        </>
      }
      media={<ProPhoto src={acadia} alt="Evan Wacks in Acadia, Maine" aspectRatio="3024 / 4007" caption="Acadia, Maine" />}
    />
  </ProPage>
);
