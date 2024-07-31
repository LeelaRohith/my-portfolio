import styles from "./skills.module.css";
import java from "../../img/ProgrammingLanguages/java.png";
import python from "../../img/ProgrammingLanguages/python.png";
import html from "../../img/Frontend/html.png";
import css from "../../img/Frontend/css-3.png";
import reactjs from "../../img/Frontend/react.png";
import materialui from "../../img/Frontend/mui.png";
import springboot from "../../img/Backend/springboot.png";
import springdata from "../../img/Backend/spring-data.png";
import springsecurity from "../../img/Backend/spring-security.png";

import git from "../../img/version control/git.png";
import github from "../../img/version control/github.png";
import mysql from "../../img/version control/mysql.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      {
        title: "Java",
        image: java,
      },
      {
        title: "Python",
        image: python,
      },
    ],
  },
  {
    title: "Frontend Web Technologies",
    skills: [
      {
        title: "HTML",
        image: html,
      },
      {
        title: "CSS",
        image: css,
      },
      {
        title: "React JS",
        image: reactjs,
      },
      {
        title: "Material UI",
        image: materialui,
      },
    ],
  },
  {
    title: "Backend Web Technologies",
    skills: [
      {
        title: "Springboot",
        image: springboot,
      },
      {
        title: "Spring Security",
        image: springsecurity,
      },
      {
        title: "Spring Data JPA",
        image: springdata,
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        title: "MySQL",
        image: mysql,
      },
    ],
  },
  {
    title: "Version Control",
    skills: [
      {
        title: "Git",
        image: git,
      },
      {
        title: "Github",
        image: github,
      },
    ],
  },

  //   {
  //       title:'',
  //       skills:[
  //           {
  //               title:'',
  //               image: '
  //           }
  //       ]
  // }
];

function Skills() {
  return (
    <div id="Skills" className={styles.skills}>
      <div className={styles.skillsHeading}>Skills</div>
      <hr></hr>
      <div className={styles.skillsContent}>
        {skillsData.map((item, index) => {
          return (
            <div className={styles.skillCard} key={index}>
              <div className={styles.skillTitle}>{item.title}</div>

              <hr className={styles.divider}></hr>
              <div className={styles.skillList}>
                <div
                  style={{
                    width: "fit-content",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.skills.map((skill, index) => {
                    return (
                      <div key={index} style={{ margin: "10px" }}>
                        <div>
                          <img src={skill.image} alt="skilllogo"></img>
                        </div>
                        <div style={{ marginTop: "10px" }}>{skill.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {/* <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {skillsData.map((item, index) => {
            return (
              <SwiperSlide>
                <div key={index}>
                  <div className={styles.skillTitle}>{item.title}</div>

                  <hr className={styles.divider}></hr>
                  <div className={styles.skillList}>
                    <div
                      style={{
                        width: "fit-content",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.skills.map((skill, index) => {
                        return (
                          <div key={index} style={{ margin: "10px" }}>
                            <div>
                              <img src={skill.image} alt="skilllogo"></img>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                              {skill.title}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
    </div>
  );
}
export default Skills;
