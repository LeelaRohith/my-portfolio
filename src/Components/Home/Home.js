import insta from "../../img/insta.png";
import git from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import { useState, useEffect, useRef } from "react";
import React from "react";
import styles from "./home.module.css";
import LongMenu from "../LongMenu";
import { Link } from "react-scroll";

function Home() {
  const options = ["Home", "About", "Skills", "Projects", "Contact"];
  const [open, setOpen] = useState(false);
  const divRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <div id="home" className={styles.home}>
      <div className={styles.area}>
        <div className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.navbar}>
          <div>
            <div className={styles.nName}>Leela Rohith</div>
          </div>
          <div className={styles.nRight}>
            {options.map((option, index) => {
              return (
                <div key={index} style={{ margin: "0", cursor: "pointer" }}>
                  <Link
                    spy={true}
                    to={option}
                    smooth={true}
                    activeClass="activeClass"
                  >
                    {option}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={styles.menu}>
            <LongMenu></LongMenu>
            {/* <button onClick={() => setOpen(!open)}>☰</button>
            {open && (
              <div className={styles.dropdown} ref={divRef}>
                <ul>
                  <li>About</li>
                  <hr></hr>
                  <li>Skills</li>
                  <hr></hr>
                  <li>Experience</li>
                  <hr></hr>
                  <li>Projects</li>
                  <hr></hr>
                  <li>Contact</li>
                </ul>
              </div>
            )} */}
          </div>
        </div>
        <div className={styles.middleContent}>
          <div className={styles.name}>
            <div>Hi ! I Am </div>
            <div>Leela Rohith</div>
          </div>
          <div>
            <Link spy={true} to="About" smooth={true} activeClass="activeClass">
              <div className={styles.rBtn}>
                <button>View Profile</button>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.homeIcons}>
          <a href="https://www.linkedin.com/in/leelarohith/">
            <img src={linkedin} alt="logo"></img>
          </a>
          <a href="https://github.com/LeelaRohith">
            <img src={git} alt="logo"></img>
          </a>
          <a href="https://www.instagram.com/leelarohith10/">
            <img src={insta} alt="logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
