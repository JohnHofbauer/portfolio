import React from "react";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../header/headerStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./footerStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">111-111-1111</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:JohnCHofbauer@gmail.com">
            JohnCHofbauer@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            As a Computer Science Engineer, Not even the sky is the limit
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/JohnHofbauer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/john-hofbauer-149765188/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://mail.google.com/mail/u/0/?fs=1&to=John.C.Hofbauer@gmail.com&tf=cm">
            <AiFillMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
