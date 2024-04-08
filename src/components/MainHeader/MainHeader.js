import React from "react";

import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <MainNavigation />
    </header>
  );
};

export default MainHeader;
