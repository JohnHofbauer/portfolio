import React, { useState, useRef, useEffect } from "react";
import WordCloudjs from "wordcloud";

useEffect(() => {
  const container = document.getElementById("wordcloud-container");
  if (container) {
    WordCloudjs(container, {
      gridSize: 8,
      weightFactor: 16,
      fontFamily: "Hiragino Mincho Pro, serif",
      color: "random-dark",
      backgroundColor: "#1a1a1a",
      rotateRatio: 0,
      list: [
        ["Integrity", 5],
        ["Excellence", 2],
        ["Innovation", 3],
        ["Teamwork", 6],
        ["Respect", 4],
        ["Adaptability", 2],
        ["Sustainability", 1],
        ["Transparency", 1],
        ["Diversity and Inclusion", 4],
      ],
    });
  }
}, []);

const WordCloud = () => (
  <div
    style={{ height: "600px", width: "600px", margin: "auto" }}
    id="wordcloud-container"
  ></div>
);

export default WordCloud;
