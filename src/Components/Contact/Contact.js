import styles from "./contact.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className={styles.contact} id="Contact">
      <div className={styles.contactHeading}>Contact me</div>
      <hr></hr>
      <div className={styles.contactContent}>
        <div className={styles.contactIcons}>
          <a href="https://www.linkedin.com/in/leelarohith/">
            <LinkedInIcon fontSize="large"></LinkedInIcon>
          </a>
          <a href="https://github.com/LeelaRohith">
            <GitHubIcon fontSize="large"></GitHubIcon>
          </a>
          <a href="https://www.instagram.com/leelarohith10/">
            <InstagramIcon fontSize="large"></InstagramIcon>
          </a>
        </div>
        <div>leelarohith10@gmail.com | +91 6301822396</div>
      </div>
    </div>
  );
}
export default Contact;
