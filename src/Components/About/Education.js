import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import educationicon from "../../img/graduationcap.jpg";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
export const Education = () => {
  const educationtimeline = [
    {
      date: "2020-2024",
      course: "BTECH CSE ",
      college: "G Pulla Reddy Engineering College",
      branch: "CSE",
    },
  ];
  return (
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
  );
};
