import React from "react";
import styles from "./dashNav.module.css";

function DashboardNav() {
  return (
    <div className={styles.dashboardParent}>
      <img src="/logo.png" alt="logo" />
    </div>
  );
}

export default DashboardNav;
