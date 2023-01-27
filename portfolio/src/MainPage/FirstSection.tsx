import React from "react";
import "./FirstSection.scss";
import Graduation from "./Graduation.jpg";
import SecondSection from "../EducationInfomation/Education";
import CoreValues from "../CoreValues/CoreValues";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import BlurryCodeText from "../Background/BlurryCodeText";

export default function FirstSection() {
  return (
    /* 
    For the Background to more slower than the foreground the speed must be 0 and offset 0,
    this will prevent the background from having seems. 
    The background may also be 1 long element. or multiple elements with 0 speed.
    */

    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={1} speed={0}>
          <BlurryCodeText />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <img
            src={Graduation}
            alt="Graduation Image"
            className="parallaxImage"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="parallaxDiv">
            <p className="parallax1_text">John Hofbauer</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.5}>
          <CoreValues />
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={1.5}>
          <SecondSection />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="parallax1">
            <p className="parallax1_text">The World Is my Oyster</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
