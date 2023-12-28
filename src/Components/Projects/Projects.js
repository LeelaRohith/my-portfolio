import styles from "./projects.module.css";
import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import userauthentication from "../../img/projects/userauthentication.png";
import studentmanagement from "../../img/projects/person-studying-online.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  const [project, setProject] = React.useState({
    title: "",
    image: "",
    codelink: "",
    technologies: [],
    features: [],
  });
  const projectsData = [
    {
      title: "User Authentication",
      image: userauthentication,
      codelink:
        "https://github.com/LeelaRohith/Spring-Security-JWT-Authentication-",
      description:
        "JWT (Jason Web Token) based Authentication system using Spring Security ",
      technologies: [
        { tech: "Springboot" },
        { tech: "Spring Security" },
        { tech: "My SQL Database" },
      ],
      features: [
        {
          feature:
            "JWT-based Authentication: Leveraging JSON Web Tokens for secure user authentication and authorization.",
        },
        {
          feature:
            "User Registration: Created a user registration API using springboot that allows users to create an account securely.",
        },
        {
          feature:
            "User Login: Created a user login API for seamless authentication and access to protected resources.",
        },
        {
          feature:
            "React.js Frontend Integration: Integrated the frontend with the backend Springboot application using axios.",
        },
        {
          feature:
            "Enhanced Security: Implementing 256-bit encryption key for password encryption, ensuring high level data security",
        },
      ],
    },

    {
      title: "Student Management System",
      image: studentmanagement,
      codelink: "https://github.com/LeelaRohith/Student-Management-System",
      description:
        "Implemented CRUD operations using REST API's to manage student data",
      technologies: [
        { tech: "Springboot" },
        { tech: "Spring Security" },
        { tech: "React JS" },
      ],
      features: [
        {
          feature:
            " Frontend: Developed using ReactJS, ensuring a modern and intuitive user interface that enables easy navigation and a delightful user experience.",
        },
        {
          feature:
            "Backend: Developed by Spring Boot, delivering a secure, scalable, and high-performance foundation for the application.",
        },
        {
          feature:
            "Authentication and Authorization: Implemented JWT (JSON Web Token) based authentication and authorization mechanisms using Spring Security. This ensures secure access to the system's functionalities, safeguarding sensitive data.",
        },
        {
          feature:
            "Forgot Password Feature: A user-friendly password recovery feature allows faculty members to reset their passwords. An OTP (One-Time Password) is securely sent to their registered email for authentication.",
        },
        {
          feature:
            "CRUD Operations: Faculty members have complete control over student records, with the ability to add, view, edit, and delete student information effortlessly.",
        },
        {
          feature:
            " MySQL Database : Utilized MySQL Database for efficient data storage and retrieval.",
        },
      ],
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType, projectidx) => () => {
    const clickedproject = projectsData[projectidx];
    setOpen(true);
    setScroll(scrollType);
    setProject(clickedproject);
  };

  const handleClose = () => {
    setOpen(false);
    setProject({
      title: "",
      image: "",
      codelink: "",
      technologies: [],
      features: [],
    });
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div id="Projects" className={styles.projects}>
      <div className={styles.projectsHeading}>My Projects</div>
      <hr></hr>
      <div className={styles.projectCards}>
        {projectsData.map((item, index) => {
          return (
            <div className={styles.project} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.image}
                />
                <CardContent>
                  <div className={styles.projectHeading}>{item.title}</div>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <div style={{ marginBottom: "20px" }}>
                  <button
                    onClick={handleClickOpen("paper", index)}
                    className={styles.btn}
                  >
                    View Details
                  </button>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                  >
                    <DialogTitle id="scroll-dialog-title">
                      <div className={styles.dialogHeading}>
                        {project.title}
                      </div>
                    </DialogTitle>
                    <DialogContent dividers={scroll === "paper"}>
                      <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                      >
                        <div className={styles.dialogContent}>
                          <div
                            onClick={() => window.open(project.codelink)}
                            className={styles.githubLink}
                          >
                            <div>
                              <GitHubIcon></GitHubIcon>
                            </div>
                            <button className={styles.gitBtn}>
                              View Source Code
                            </button>
                          </div>
                          <div className={styles.projectDescription}>
                            <div className={styles.contentHeading}>
                              Project Description :
                            </div>
                            <div>{project.description}</div>
                          </div>
                          <div className={styles.projectTechnologies}>
                            <div className={styles.contentHeading}>
                              Technologies Used :
                            </div>
                            <ul>
                              {project.technologies.map((item, index) => {
                                return <li key={index}>{item.tech}</li>;
                              })}
                            </ul>
                          </div>
                          <div className={styles.projectFeatures}>
                            <div className={styles.contentHeading}>
                              Features :
                            </div>
                            <ul>
                              {project.features.map((item, index) => {
                                return <li key={index}>{item.feature}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
