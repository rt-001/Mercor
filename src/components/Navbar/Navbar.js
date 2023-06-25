import React from "react";
import styles from "./Navbar.module.css";
import logo from "./logo.svg";
import arrow from "./arrow.svg";
import search from "./search.svg";
import icons from "./icons.svg";
import user from "./user.svg";
import userimg from "./userimg.svg";
import downwardArrow from "./downwardArrow.svg";
function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logobox}>
            <img src={logo} alt="" />
            <p className={styles.text}>Project M.</p>
          </div>
          <img src={arrow} className={styles.arrow} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.searchbox}>
            <img src={search} className={styles.search} alt="" />
            <input
              type="text"
              className={styles.input}
              placeholder="Search for anything..."
            />
          </div>
          <div className={styles.righter}>
            <div className={styles.icons}>
              <img src={icons} alt="" />
            </div>
            <div className={styles.profile}>
              <div className={styles.details}>
                <p className={styles.username}>Anima Agarwal</p>
                <span className={styles.userlocation}>U.P, India</span>
              </div>
              <div className={styles.userimg}>
                <img src={userimg} alt="" />
                <img src={downwardArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
