import React, { useState, useRef, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";

const words = [
  { text: "Integrity", value: 8 },
  { text: "Excellence", value: 4 },
  { text: "Innovation", value: 2 },
  { text: "Teamwork", value: 4 },
  { text: "Respect", value: 4 },
  { text: "Adaptability", value: 4 },
  { text: "Sustainability", value: 3 },
  { text: "Transparency", value: 3 },
  { text: "Diversity and Inclusion", value: 4 },
  { text: "Accountability", value: 5 },
  { text: "Customer Focus", value: 5 },
  { text: "Empowerment", value: 4 },
  { text: "Continuous Learning", value: 3 },
  { text: "Open Communication", value: 3 },
  { text: "Creativity", value: 3 },
  { text: "Trust", value: 4 },
  { text: "Collaboration", value: 4 },
  { text: "Responsibility", value: 4 },
  { text: "Quality", value: 4 },
  { text: "Humility", value: 3 },
  { text: "Passion", value: 4 },
  { text: "Resilience", value: 3 },
  { text: "Ownership", value: 4 },
  { text: "Flexibility", value: 3 },
  { text: "Empathy", value: 4 },
  { text: "Social Responsibility", value: 3 },
  { text: "Equality", value: 4 },
  { text: "Inclusivity", value: 4 },
  { text: "Empowering Others", value: 4 },
  { text: "Work-Life Balance", value: 3 },
  { text: "Fairness", value: 4 },
];

const ReactWordCloud = () => (
  <div style={{ height: "auto", width: "auto" }}>
    <ReactWordcloud words={words} />
  </div>
);

export default ReactWordCloud;
