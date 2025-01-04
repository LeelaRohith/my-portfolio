import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import experienceicon from "../../img/experienceicon.png";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
const Experience = () => {
  const experiencetimeline = [
    {
      date: "2024 - Present",
      company: "Accenture",
      role: "Associate Software Engineer",
    },
  ];
  return (
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
  );
};

export default Experience;
