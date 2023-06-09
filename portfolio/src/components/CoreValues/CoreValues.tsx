import React, { useEffect } from "react";
import "./CoreValues.scss";
import WordCloud from "wordcloud";

export default function CoreValues() {
  useEffect(() => {
    const container = document.getElementById("wordcloud-container");
    if (container) {
      WordCloud(container, {
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

  let examples = [
    {
      title: "Integrity",
      description:
        "The adherence to a strong moral or ethical code; honesty and fairness in all actions.",
    },
    {
      title: "Excellence",
      description:
        "The pursuit of the highest standards of quality and performance in all endeavors.",
    },
    {
      title: "Innovation",
      description:
        "The ability to think creatively and bring new ideas to the table in order to improve processes, products, and services.",
    },
    {
      title: "Teamwork",
      description:
        "The collaboration and cooperation among individuals and teams to achieve a common goal.",
    },
    {
      title: "Respect",
      description:
        "The recognition and consideration of the worth, rights, and dignity of all individuals.",
    },
    {
      title: "Adaptability",
      description:
        "The ability to change and adjust in response to new information, situations, or environments.",
    },
    {
      title: "Sustainability",
      description:
        "The ability to meet the needs of the present without compromising the ability of future generations to meet their own needs.",
    },
    {
      title: "Transparency",
      description:
        "The practice of being open and honest in communication and decision-making.",
    },
    {
      title: "Diversity and Inclusion",
      description: "The recognition and valuing of differences among people.",
    },
  ];
  return (
    <>
      <div className="section1">
        <h3 className="top-heading">Core Values</h3>
        <div
          style={{ height: "600px", width: "600px", margin: "auto" }}
          id="wordcloud-container"
        ></div>
      </div>
    </>
  );
}
