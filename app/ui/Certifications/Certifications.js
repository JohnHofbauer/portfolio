import React, { useState, useRef, useEffect } from "react";

import { Certifications } from "../../constants/constants";
import {
  CertificationsContainer,
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
    <Section id="Certifications">
      <SectionDivider />
      <br />
      <SectionTitle>Certifications</SectionTitle>
      <CertificationsContainer>
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
      </CertificationsContainer>
    </Section>
  );
};

export default CertificationsComponent;
