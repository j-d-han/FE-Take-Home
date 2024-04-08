import "./App.css";
import { useEffect, useState, createContext, useMemo, useContext } from "react";
import Staff from "./pages/Staff";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import AuthContext from "./auth-context";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const ctx = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/staff",
          element: <Staff />,
        },
      ],
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      {/* {ctx.isLoggedIn && <MainHeader />} */}
      {/* {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <RouterProvider router={router} />} */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
