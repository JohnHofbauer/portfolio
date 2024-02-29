import React, { useState, useEffect, Suspense } from "react";
import { WordCloudData } from "../../constants/constants";
import ReactWordcloud from "react-wordcloud";

const callbacks = {
  getWordColor: (word) => (word.value > 50 ? "blue" : "red"),
  onWordClick: console.log,
  onWordMouseOver: console.log,
  getWordTooltip: (word) =>
    `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
};
const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};
const size = [600, 400];
const words = WordCloudData;

const ReactWordCloud = () => {
  return (
    <ReactWordcloud
      callbacks={callbacks}
      options={options}
      size={size}
      words={words}
    />
  );
};

export default ReactWordCloud;
