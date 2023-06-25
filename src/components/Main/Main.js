import React from "react";
import styles from "./Main.module.css";
import icons from "./icons.svg";
import invite from "./invite.svg";
import filter from "./filter.svg";
import share from "./share.svg";
import Board from "../Board/Board.js";
function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.heading}>
            <p className={styles.headingText}>Mobile App</p>
            <img src={icons} className={styles.headingImg} alt="" />
          </div>
          <img src={invite} className={styles.inviteImg} alt="" />
        </div>
        <div className={styles.middle}>
          <img src={filter} alt="" />
          <img src={share} alt="" />
        </div>
        <div className={styles.bottom}>
          <Board></Board>
        </div>
      </div>
    </>
  );
}

export default Main;
