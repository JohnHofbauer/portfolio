import React from "react";
import "./FirstSection.scss";
import Graduation from "./Graduation.jpg";
import SecondSection from "../EducationInfomation/Education";
import CoreValues from "../CoreValues/CoreValues";
import Robotics from "../Robotics/Robotics";
import ContactInformation from "../ContactInformation/ContactInformation";
import Footer from "../Footer/Footer";
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
      <Parallax pages={7} style={{ top: "0", left: "0" }}>
        {/* First page, create teh background and the overlay of text  */}
        <ParallaxLayer offset={1} speed={0}>
          <BlurryCodeText />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          <img
            src={Graduation}
            alt="Graduation Image"
            className="parallaxImage"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5}>
          <div className="parallaxDiv">
            <p className="parallax1_text">John Hofbauer</p>
          </div>
        </ParallaxLayer>
        {/*Second Page, Education  */}
        <ParallaxLayer offset={1} speed={0}>
          <SecondSection />
        </ParallaxLayer>

        {/* Render Order - non clickable objects need to be rendered first 
          Last Page Page, Connections and skills and footer */}
        <ParallaxLayer offset={6} speed={3}>
          <CoreValues />
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0}>
          <Footer />
        </ParallaxLayer>

        {/*Render Order -  clickable objects need to be rendered last
          Third Page, Connections and skills  */}
        <ParallaxLayer offset={3} speed={0}>
          <Robotics />
          <ContactInformation />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
