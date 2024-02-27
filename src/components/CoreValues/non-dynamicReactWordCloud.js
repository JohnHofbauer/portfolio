import React, { useState, useRef, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";

const ReactWordCloud = () => (
  <div style={{ height: "auto", width: "auto" }}>
    <ReactWordcloud words={WordCloudData} />
  </div>
);

export default ReactWordCloud;
