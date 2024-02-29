import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
  { number: 1, text: "Inspire Awards from FTC Robotics" },
  { number: 2, text: "Years Of Experience" },
  { number: 9, text: "Github Repositories" },
  { number: 3.6, text: "Pennsylvania State University GPA" },
];

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
