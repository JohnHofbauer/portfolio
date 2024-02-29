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
} from "./headerStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>

      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>

      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
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
