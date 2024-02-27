import React, { useState, useRef, useEffect } from "react";

import dynamic from "next/dynamic";

const WordCloud = dynamic(() => import("./ReactWordCloud"), {
  ssr: false,
});

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
