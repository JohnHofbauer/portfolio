import React from "react";
import MatlabCode from "./MatlabCode";
import PythonDjangoCode from "./PythonDjangoCode";
import Highlight from "react-highlight";
import "./blurry.scss";

export default function BlurryCodeText() {
  const PythonDjangotext = PythonDjangoCode.replace(/\n/g, "<br>");
  const Matlabtext = MatlabCode.replace(/\n/g, "<br>");
  return (
    <>
      <div className="blurEffect">
        <Highlight>
          <h1> Matlab </h1>
          <p dangerouslySetInnerHTML={{ __html: Matlabtext }} />
        </Highlight>

        <Highlight>
          <h1> DJango </h1>
          <p dangerouslySetInnerHTML={{ __html: PythonDjangotext }} />
        </Highlight>
      </div>
    </>
  );
}
