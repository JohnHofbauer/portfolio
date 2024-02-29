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
export const CertificationSection = styled.div`
  margin: 1rem;
  padding: 1rem;
`;

// CertificationContainer component
export const CertificationsContainer = styled.div`
  padding: 1rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

// CertificationContainer component
export const CertificationContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  place-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

// CertificationText component
export const CertificationText = styled.p`
  font-weight: bold;
  color: rgb(228, 230, 231);
  ${SectionTitle};
`;

// CertificationInfo component
export const CertificationInfo = styled.p`
  margin-top: 1rem;
  margin-left: 1rem;
  color: rgb(228, 230, 231);
  ${SectionText};
`;

// IconContainer component
export const IconContainer = styled.span`
  margin-right: 1rem;
  ${SectionText};
`;

// DocuSignIcon component
export const DocuSignIcon = styled(FaFileSignature)`
  color: #0072ce; /* Example color for DocuSign icon */
  ${SectionText};
`;
