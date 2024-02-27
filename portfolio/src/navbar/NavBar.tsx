import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

export default function navBar() {
  return (
    <Container>
      <Div1>
        <a href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <image /> <span>Portfolio</span>
          </a>
        </a>
      </Div1>
      <Div2>
        <li>
          <a href="#projects">
            <NavLink>Projects</NavLink>
          </a>
        </li>
        <li>
          <a href="#tech">
            <NavLink>Technologies</NavLink>
          </a>
        </li>
        <li>
          <a href="#about">
            <NavLink>About</NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}
