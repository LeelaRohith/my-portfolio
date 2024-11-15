import "./About.css";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import educationicon from "../../img/graduationcap.jpg";
import experienceicon from "../../img/experienceicon.png";

import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import leetcode from "../../img/leetcode.png";
import hackerrank from "../../img/hackerrank.png";
function About() {
  const educationtimeline = [
    {
      date: "2020-2024",
      course: "BTECH CSE ",
      college: "G Pulla Reddy Engineering College",
      branch: "CSE",
    },
  ];
  const experiencetimeline = [
    {
      date: "July 2022 - August 2022",
      company: "BOLT IOT",
      role: "Frontend Web Developer Internship",
    },
  ];
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
        <div className="education">
          <div className="education-top">
            <div className="education-heading">
              <img src={educationicon} alt="logo"></img>
            </div>
            <div className="education-heading">Education</div>
          </div>

          <div className="education-timeline">
            <Timeline sx={{ mt: "0" }}>
              {educationtimeline.map((work, index) => {
                return (
                  <TimelineItem sx={{ margin: "0" }} key={index}>
                    <TimelineOppositeContent color="textSecondary">
                      {work.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="info" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div
                        style={{
                          margin: "0",
                          padding: "0",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        {work.course}
                      </div>
                      <div
                        style={{
                          margin: "0",
                          padding: "0",
                          textAlign: "left",
                          color: "#565656",
                        }}
                      >
                        {work.college}
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </div>
        <div className="experience">
          <div className="experience-top">
            <div className="experience-heading">
              <img src={experienceicon} alt="logo"></img>
            </div>
            <div className="experience-heading">Experience</div>
          </div>
          <div className="experience-timeline">
            <Timeline sx={{ mt: "0" }}>
              {experiencetimeline.map((work, index) => {
                return (
                  <TimelineItem sx={{ margin: "0" }} key={index}>
                    <TimelineOppositeContent color="textSecondary">
                      {work.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="info" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div
                        style={{
                          margin: "0",
                          padding: "0",
                          textAlign: "left",
                          fontWeight: "bold",
                        }}
                      >
                        {work.role}
                      </div>
                      <div
                        style={{
                          margin: "0",
                          padding: "0",
                          textAlign: "left",
                          color: "#565656",
                        }}
                      >
                        {work.company}
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </div>
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
