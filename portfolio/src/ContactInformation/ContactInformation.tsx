import React from "react";
import "./ContactInformation.scss";

export default function ContactInformation() {
  return (
    <>
      <div>
        <div className="section2">
          <h3 id="contact" className="top-heading">
            Contact Information
          </h3>
          {/* make cards  */}
          <div id="divoverlay" className="container">
            <div className="center">
              <table
                style={{
                  borderCollapse: "collapse",
                  width: "70%",
                  height: "18px",
                }}
              >
                <tbody>
                  <tr style={{ height: "18px" }}>
                    <td id="linkedin" style={{ width: "50%", height: "18px" }}>
                      <p>
                        <a href="https://www.linkedin.com/in/john-hofbauer-149765188/">
                          <img
                            className="image img1"
                            src="https://raw.githubusercontent.com/JohnHofbauer/website/main/images/linkedin.png"
                          />
                        </a>
                      </p>
                    </td>
                    <td id="gmail" style={{ width: "50%", height: "18px" }}>
                      <p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=John.C.Hofbauer@gmail.com">
                          <img
                            className="image img2"
                            src="https://raw.githubusercontent.com/JohnHofbauer/website/main/images/gmail.png"
                          />
                        </a>
                      </p>
                    </td>
                    <td id="github" style={{ width: "50%", height: "18px" }}>
                      <p>
                        <a href="https://github.com/JohnHofbauer">
                          <img
                            className="image img3"
                            src="https://raw.githubusercontent.com/JohnHofbauer/website/main/images/github.png"
                          />
                        </a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* single column  */}
              <p id="skills" className="sub-heading">
                <strong>SKILLS</strong>
              </p>
              <p id="skills_Content">
                HTML, CSS, Django Web Server, Python, C, C++, C#, Java,
                Processing (core in Java), Racket, MATLAB, and Computer
                Hardware, MS Office Suite, Blender, Unity, google workspace,
                Amazon AWS, GitHub, sass, nodejs
              </p>
              <p className="sub-heading">
                <strong>Python Libraries</strong>
              </p>
              <p>
                collections, django, email, eyed3, itertools, json, math,
                moviepy, os, pynput, PIL, queue, random, re, shutil, signal,
                spotipy, subprocess, sympy, threading, time, unicode_literals
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
