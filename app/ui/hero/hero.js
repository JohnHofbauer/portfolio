import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./heroStyles";

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of My Portfolio is to track my learning progress and provide
        a general overview to the many projects I have completed in the past.
      </SectionText>
      <a href="https://johnhofbauer.github.io/website">
        <Button>No JS Page</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
