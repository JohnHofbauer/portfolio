import React from "react";
import "./FirstSection.scss";
import Graduation from "./Graduation.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function FirstSection() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: `url:(${Graduation})`,
            backgroundSize: "cover",
          }}
        >
          <div className="parallax1">
            <p className="parallax1_text">Parallax</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
