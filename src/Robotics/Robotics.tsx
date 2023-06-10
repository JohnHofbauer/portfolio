import React from "react";
import "./Robotics.scss";

export default function Footer() {
  return (
    <>
      <div>
        <div className="section2">
          <h3 id="contact" className="top-heading">
            Robotics
          </h3>
          {/* two columns Template  */}
          <div className="center">
            <table>
              <tbody>
                <tr style={{ height: "100px" }}>
                  <td style={{ height: "100px", width: "130px" }}>
                    {/*spacing for logo, must be consistent  */}
                    <img
                      src="https://raw.githubusercontent.com/JohnHofbauer/website/main/images/7244_logo.png"
                      width={120}
                      height={60}
                    />
                  </td>
                  <td style={{ height: "100px", width: "400px" }}>
                    <p>
                      <strong>FIRST Robotics Competition </strong>(2014 – 2017)
                    </p>
                    <p>
                      Program Tele-Op controls and Autonomous controls for IR
                      and Sonar sensors. Utilized motor encoders for more robust
                      distance measurement during autonomous mode.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="center">
            <p>
              All work was split into tasks among the group members and the
              steps were well documented in our Engineering notebook. This
              helped to create a professional environment where no single person
              was reworking or 'reinventing the wheel' and this allowed me to
              create a distance indicator using an Arduino. This also allowed
              the opportunity to interface Arduino software directly with the
              hardware.
            </p>
          </div>
          <div className="center">
            <p className="sub-heading">
              <strong>Engineering Process </strong>(2018 to Present)
            </p>
            <p>
              Every day is a new life experience that I can add to my
              'swiss-army-knife' of ideas as I progress further, learning new
              procedures and exercising my rhetoric. I am confident this webpage
              will document the journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
