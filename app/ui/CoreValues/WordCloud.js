import React from "react";
import { WordCloudData } from "../../constants/constants";
import dynamic from "next/dynamic";

// Import ReactWordcloud dynamically to prevent server-side rendering
const ReactWordcloud = dynamic(() => import("react-wordcloud"), { ssr: false });

const size = [900, 400];
const words = WordCloudData;

const WordCloud = () => {
  // Check if running in the browser before rendering the component
  if (typeof window === "undefined") return null;

  return <ReactWordcloud size={size} words={words} />;
};

export default WordCloud;
