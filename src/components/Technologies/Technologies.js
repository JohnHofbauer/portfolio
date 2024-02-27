import React from "react";
import {
  FaHtml5,
  FaSass,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaC,
  FaJava,
  FaReact,
  FaAngular,
  FaNode,
  FaDatabase,
  FaMicrosoft,
  FaBlender,
  FaUnity,
  FaGoogle,
  FaAws,
  FaGithub,
  FaPostman,
  FaMicrochip,
} from "react-icons/fa";
import {
  DiDjango,
  DiProcessing,
  DiMatlab,
  DiLua,
  DiSolar,
  DiRust,
  DiVerilog,
  DiReact,
  DiFirebase,
  DiPython,
} from "react-icons/di";
import { BsFiletypeXml } from "react-icons/bs";
import {
  SiRacket,
  SiCplusplus,
  SiCsharp,
  SiC,
  SiLua,
  SiDocusign,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
  SkillContainer,
  SkillsContainer,
  SkillText,
  SkillInfo,
} from "./TechnologiesStyles";
import { Skills } from "../../constants/constants";

const iconComponents = {
  FaHtml5: FaHtml5,
  FaSass: FaSass,
  FaCss3Alt: FaCss3Alt,
  BsFiletypeXml: BsFiletypeXml,
  FaJs: FaJs,
  DiDjango: DiDjango,
  FaPython: FaPython,
  SiC: SiC,
  SiCplusplus: SiCplusplus,
  SiCsharp: SiCsharp,
  FaJava: FaJava,
  DiProcessing: DiProcessing,
  SiRacket: SiRacket,
  SiDocusign: SiDocusign,
  DiMatlab: DiMatlab,
  FaMicrochip: FaMicrochip,
  FaMicrosoft: FaMicrosoft,
  FaBlender: FaBlender,
  FaUnity: FaUnity,
  FaGoogle: FaGoogle,
  FaAws: FaAws,
  FaGithub: FaGithub,
  FaPostman: FaPostman,
  FaReact: FaReact,
  FaAngular: FaAngular,
  FaNode: FaNode,
  SiLua: SiLua,
  DiProcessing: DiProcessing,
  TbBrandNextjs: TbBrandNextjs,
  DiSolar: DiSolar,
  DiRust: DiRust,
  FaDatabase: FaDatabase,
  DiVerilog: DiVerilog,
};

const IconContainer = ({ icon }) => {
  const IconComponent = iconComponents[icon]; // Ensure lowercase comparison
  if (IconComponent) {
    return <IconComponent size="3rem" />; // Render the icon component
  } else {
    return <p></p>;
  }
};

const Technologies = () => {
  const skills = Skills || [];
  return (
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
              tools like Python, C, C++, C#, Java, Processing, Racket, MATLAB,
              and Verilog, Arduino, MS Office Suite, Blender, Unity, google
              workspace, Amazon AWS, GitHub, Postman
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SkillsContainer>
        {skills.map((skill) => (
          <SkillContainer key={skill.name}>
            <SkillText>
              <IconContainer icon={skill.icon} />{" "}
              {/* Pass skill.icon as a prop */}
              {skill.name}
            </SkillText>
            <SkillInfo>{skill.experience}</SkillInfo>
          </SkillContainer>
        ))}
      </SkillsContainer>
    </Section>
  );
};

export default Technologies;
