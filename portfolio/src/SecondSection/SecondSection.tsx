import React from "react";
import "./main.scss";

export default function FirstSection() {
  return (
    <>
      <div className="section1">
        <h3 className="top-heading">Education</h3>
        <div className="center">
          <table>
            <tbody>
              <tr style={{ height: "100px" }}>
                <td style={{ height: "100px", width: "130px" }}>
                  <img
                    src="https://raw.githubusercontent.com/JohnHofbauer/website/main/images/psu-mark.svg"
                    width={100}
                    height={40}
                  />
                </td>
                <td style={{ height: "100px", width: "400px" }}>
                  <p>
                    Bachelor of Science in Computer Science
                    <strong>GPA: 3.63/4.00</strong>
                  </p>
                  <p>Pennsylvania State University, University Park, PA</p>
                  <p>Graduated December 2021</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
