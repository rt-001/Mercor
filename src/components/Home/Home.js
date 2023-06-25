import React from "react";
import HorizontalBar from "../HorizontalBar/HorizontalBar";
import styles from "./Home.module.css";
import Main from "../Main/Main";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <HorizontalBar></HorizontalBar>
        <Main></Main>
      </div>
    </>
  );
}

export default Home;
