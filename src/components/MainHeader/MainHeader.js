import React from "react";

import classes from "./MainHeader.module.css";
import MainNavigation from "./MainNavigation";
import { useContext } from "react";
import AuthContext from "../../auth-context";
import Button from "../UI/Button";

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      <h1>Jun Ding</h1>
      <MainNavigation />
      {ctx.isLoggedIn && (
        <Button type="submit" onClick={ctx.onLogout}>
          Logout
        </Button>
      )}
    </header>
  );
};

export default MainHeader;
