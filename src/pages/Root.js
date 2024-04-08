import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainHeader/MainNavigation";
import MainHeader from "../components/MainHeader/MainHeader";
import { useEffect, useState, createContext, useMemo, useContext } from "react";
import AuthContext from "../auth-context";
import Login from "../components/Login/Login";

const RootLayout = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main style={{ marginTop: 70 }}>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Outlet />}
      </main>
    </>
  );
};

export default RootLayout;
