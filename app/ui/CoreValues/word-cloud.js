import React from "react";
import WordCloud from "./WordCloud";

const WordCloudPage = () => {
  const Circles = ({ data, diameter, fill }) => {
    const svg = React.useRef();
    React.useEffect(() => {
      d3.select(svg.current)
        .selectAll("circle")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", `translate(${diameter / 2})`)
        .append("circle")
        .attr("cx", (i) => i * diameter)
        .attr("cy", diameter)
        .attr("r", diameter / 2)
        .attr("fill", "#F06E65");
    }, []);
    return (
      <div>
        <h3>Circles</h3>
        <svg ref={svg} id="svg" width="100%" height="300"></svg>
      </div>
    );
  };
};

export default WordCloudPage;
