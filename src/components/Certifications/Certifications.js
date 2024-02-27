import React, { useState, useRef, useEffect } from "react";

import { Certifications } from "../../constants/constants";
import {
  CertificationContainer,
  CertificationText,
  CertificationInfo,
  IconContainer,
  DocuSignIcon,
} from "./CertificationsStyle";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const CertificationsComponent = () => {
  const certifications = Certifications || [];

  return (
    <Section id="about">
      <SectionTitle>Certifications</SectionTitle>
      {certifications.map((certification) => (
        <CertificationContainer key={certification.text}>
          <CertificationText>
            <IconContainer>
              <DocuSignIcon />
            </IconContainer>
            {certification.text}
          </CertificationText>
          <CertificationInfo>
            Date Received: {certification.Date}
          </CertificationInfo>
          <CertificationInfo>
            Issued by: {certification.Issued_by}
          </CertificationInfo>
        </CertificationContainer>
      ))}
    </Section>
  );
};

export default CertificationsComponent;
