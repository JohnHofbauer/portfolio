import React from "react";
import "./Education.scss";

export default function Educaiton() {
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

        {/* two columns Template  */}
        <div className="center">
          <table>
            <tbody>
              <tr style={{ height: "100px" }}>
                <td style={{ height: "100px", width: "130px" }}>
                  {/*spacing for logo, must be consistent  */}
                  <img
                    src="https://raw.githubusercontent.com/JohnHofbauer/website/main/images/tvsd.png"
                    width={120}
                    height={30}
                  />
                </td>
                <td style={{ height: "206100pxpx", width: "400px" }}>
                  <p>High School Diploma</p>
                  <p>Twin Valley School District</p>
                  <p>Graduated June 2018</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* single column: for large amounts of information. */}
        <div className="center">
          <p className="sub-heading">
            <strong>Pulsar Search Collaboratory</strong>(2018 – 2019)
          </p>
          <p>
            Being a part of the club means I have analyzed data retrieved by the
            Arecibo Radio Telescope and others like it. Afterward, I catalog the
            data as either “noise” (background radiation), man-made radio
            frequency interference, or an authentic astronomical source such as
            a pulsar or a fast radio burst. For more information please visit
            https://sites.psu.edu/pennstatepsc/
          </p>
        </div>
        {/* single column: for large amounts of information. */}
        <div className="center">
          <p className="sub-heading">
            <strong>First Hackathon </strong>(2018)
          </p>
          <p>
            My first Hackathon experience was in September of 2018 at
            Downingtown Stem Academy. This was one of my first experiences
            designing, programming, and presenting a solution to real-world
            issues with a team. This is also when I realized I had a passion to
            produce creative ideas through coding to solve our day-to-day
            problems. After winning some prototyping breadboards my interests
            grew, leading me to attend two Hackathons at Penn State.
          </p>
        </div>
        {/* single column: for large amounts of information. */}
        <div className="center">
          <p className="sub-heading">
            <strong>Seccond Hackathon </strong>(2019)
          </p>
          <p>
            My second Hackathon was freshman year of college in September of
            2018 at Penn State University. This is when realization became
            reality, where 100 students transformed into over a thousand. Along
            with the competition came inspiring and elaborate new projects.
          </p>
        </div>
        {/* single column: for large amounts of information. */}
        <div className="center">
          <p className="sub-heading">
            <strong>Capstone Project </strong>(2021)
          </p>
          <p>
            For my final year at Penn State, I created a Library website page
            that uses authentication tokens and a database to allow users to
            purchase books. The full stack framework that I chose is Django,
            MySQL, Python, HTML, CSS, and JavaScript. This project allowed me to
            undergo the role of a full stack developer, learning all the
            different frameworks along with the server and front-end
            programming. I chose this framework because of my familiarity and
            understanding of python. (Also one of the reasons I am creating a
            website from scratch, is to try something new)
          </p>
        </div>
        {/* single column: for large amounts of information. */}
        <div className="center">
          <p className="sub-heading">
            <strong>Explanation</strong>
          </p>
          <p>
            This webpage is a proof of concept; it became my inspiration for
            full-stack development, not another social media platform that holds
            information about its users or a template from a hosting website.
            (ex. Wix) Therefore, as I develop this site I will use GitHub to
            document my experience as I research, test, and deploy cutting-edge
            technologies and new frameworks. I will not choose the best stack at
            first but with enough knowledge, I will gain priceless experience
            and the ability to discern the best framework for any situation.
          </p>
        </div>
      </div>
    </>
  );
}
