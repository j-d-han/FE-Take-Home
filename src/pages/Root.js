import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader/MainHeader";
import { useContext } from "react";
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
