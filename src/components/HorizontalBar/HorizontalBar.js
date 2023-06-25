import React from "react";
import styles from "./HorizontalBar.module.css";
import home from "./Home.svg";
import messages from "./Messages.svg";
import members from "./Members.svg";
import settings from "./settings.svg";
import tasks from "./Tasks.svg";
import add from "./add.svg";
import greendot from "./greendot.svg";
import bluedot from "./bluedot.svg";
import yellowdot from "./yellowdot.svg";
import greydot from "./greydot.svg";
import last from "./last.png";
function HorizontalBar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.subheading}>
            <img src={home} alt="" />
            <p className={styles.title}>Home</p>
          </div>
          <div className={styles.subheading}>
            <img src={messages} alt="" />
            <p className={styles.title}>Messages</p>
          </div>
          <div className={styles.subheading}>
            <img src={tasks} alt="" />
            <p className={styles.title}>Tasks</p>
          </div>
          <div className={styles.subheading}>
            <img src={members} alt="" />
            <p className={styles.title}>Members</p>
          </div>
          <div className={styles.subheading}>
            <img src={settings} alt="" />
            <p className={styles.title}>Settings</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.heading}>
            <p className={styles.text}>my projects</p>
            <img src={add} alt="" />
          </div>
          <div className={styles.subheading}>
            <img src={yellowdot} alt="" />
            <p className={styles.subtext}>Website Redesign</p>
          </div>
          <div className={styles.subheading}>
            <img src={greydot} alt="" />
            <p className={styles.subtext}>Design System</p>
          </div>
          <div className={styles.subheading}>
            <img src={bluedot} alt="" />
            <p className={styles.subtext}>Wireframes</p>
          </div>
          <div className={styles.subheading}>
            <img src={greendot} alt="" />
            <p className={styles.subtext}>Mobile App</p>
          </div>
        </div>
        <div className={styles.last}>
          <img src={last} className={styles.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default HorizontalBar;
