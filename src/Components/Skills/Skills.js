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
import leetcode from "../../img/leetcode.png";
import hackerrank from "../../img/hackerrank.png";

function Skills() {
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
                {item.skills.map((skill, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <img src={skill.image} alt="skilllogo"></img>
                      </div>
                      <div style={{ marginTop: "10px" }}>{skill.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div id="Coding Profiles" className={styles.codingheading}>
        Coding Profiles
      </div>
      <div className={styles.codingProfiles}>
        <div>
          <a href="https://leetcode.com/leelarohith10/" target="_blank">
            <img src={leetcode} alt="leetcodelogo"></img>
          </a>
          <div style={{ marginTop: "10px" }}>Leetcode</div>
        </div>
        <div>
          <a href="https://www.hackerrank.com/leelarohith101" target="_blank">
            <img src={hackerrank} alt="hackerranklogo"></img>
          </a>
          <div style={{ marginTop: "10px" }}>Hackerrank</div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
