import styled from "styled-components";
import { FaFileSignature } from "react-icons/fa";

// Include the global components styles
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

// CertificationContainer component
export const CertificationContainer = styled.div`
  margin-bottom: 20px;
`;

// CertificationText component
export const CertificationText = styled.p`
  font-weight: bold;
  ${SectionTitle};
`;

// CertificationInfo component
export const CertificationInfo = styled.p`
  margin-top: 5px;
  margin-left: 20px;
  ${SectionText};
`;

// IconContainer component
export const IconContainer = styled.span`
  margin-right: 5px;
  ${SectionText};
`;

// DocuSignIcon component
export const DocuSignIcon = styled(FaFileSignature)`
  color: #0072ce; /* Example color for DocuSign icon */
  ${SectionText};
`;
