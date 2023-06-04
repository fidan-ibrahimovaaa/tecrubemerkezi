import React from "react";

import Resume from "../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
        <span>"CV" ni yarat!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={Resume} alt="Resume SVG" />
      </div>
    </div>
  );
}

export default Header;
