import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./AboutMeStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        As I undertake this ambitious project, I intend to utilize GitHub as a
        documentation platform for my growth in web research and development
        practices. I am committed to acquiring invaluable expertise that enables
        me to discern the most appropriate framework for a given scenario.
      </SectionText>
      <CarouselContainer>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode key={index}>
            <CarouselItem id={index}>
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg>
                  <path fillOpacity="0.33" />
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>
    </Section>
  );
};

export default AboutMe;
