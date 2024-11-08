import React from "react";
import Styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbarIconAndHeading}>
        <div className={Styles.navbarIcon}></div>
        <p>Inventory Management System</p>
      </div>
      <div className={Styles.navbarHome}>
        <p>Home</p>
      </div>
    </div>
  );
}

export default Navbar;
