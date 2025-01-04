import "./About.css";
import * as React from "react";
import leetcode from "../../img/leetcode.png";
import hackerrank from "../../img/hackerrank.png";
import { Education } from "./Education";
import Experience from "./Experience";
function About() {
  return (
    <div className="about" id="About">
      <div className="about-heading">ABOUT ME </div>
      <hr></hr>
      <div className="a-top">
        <div className="about-description">
          <p>
            As a CSE undergraduate, I possess a strong foundation in programming
            and software development. I am looking forward to apply my skills
            and knowledge in a dynamic and challenging work environment.
          </p>
        </div>
        <div className="about-button">
          <a href="/Resume.pdf" download>
            <button className="a-btn">DOWNLOAD RESUME </button>
          </a>
        </div>
      </div>

      <div className="a-bottom">
        <Education />
        <Experience />
      </div>
      <div style={{ marginTop: "30px" }}>
        <div id="Coding Profiles" className="codingheading">
          Coding Profiles
        </div>
        <div className="codingProfiles">
          <div>
            <a href="https://leetcode.com/leelarohith10/">
              <img src={leetcode} alt="leetcodelogo"></img>
            </a>
            <div style={{ marginTop: "10px" }}>Leetcode</div>
          </div>
          <div>
            <a href="https://www.hackerrank.com/leelarohith101">
              <img src={hackerrank} alt="hackerranklogo"></img>
            </a>
            <div style={{ marginTop: "10px" }}>Hackerrank</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
