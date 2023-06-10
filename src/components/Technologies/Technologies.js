import React from "react";
import { DiFirebase, DiReact, DiPython, DiDjango, DiAws } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I Have worked with a range of Technologies in the web development world
    </SectionText>
    <List>
      <ListItem>
        {/* Use React Icons to find any Icon  */}
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Web Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Angular, Django Web Server, HTML, CSS, SCSS, JS, TS,
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, MongoDB, MySQL, Surreal
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Python, C, C++, C#, Java, Processing, Racket, MATLAB, and
            Verilog, Arduino, MS Office Suite, Blender, Unity, google workspace,
            Amazon AWS, GitHub, Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
