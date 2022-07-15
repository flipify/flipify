import React from "react";
import styles from "./dashNav.module.css";

function DashContent({children}) {
  return <div className={styles.dashContent}>{children}</div>;
}

export default DashContent;
