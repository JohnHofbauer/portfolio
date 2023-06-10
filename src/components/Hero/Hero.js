import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of My Portfolio is to track my learning progress and provide
        a general overview to the many projects I have completed in the past.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://johnhofbauer.github.io/website")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
