import React from "react";
import WordCloud from "./WordCloud";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const CoreValue = () => {
  return (
    <Section id="about">
      <SectionTitle>Core Values</SectionTitle>
      <WordCloud />
    </Section>
  );
};

export default CoreValue;
