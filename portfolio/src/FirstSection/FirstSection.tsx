import React from "react";
import "./FirstSection.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function FirstSection() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage:
              "https://raw.githubusercontent.com/JohnHofbauer/website/main/images/div1.jpg",
            backgroundSize: "cover",
          }}
        >
          <p className="parallax1_text">Parallax</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
