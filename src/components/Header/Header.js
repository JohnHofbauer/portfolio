import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "Center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink href="#projects">Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink href="#tech">Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink href="#about">About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/JohnHofbauer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/john-hofbauer-149765188/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://mail.google.com/mail/u/0/?fs=1&to=John.C.Hofbauer@gmail.com&tf=cm">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
