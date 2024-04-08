import "./App.css";
import { useEffect, useState, createContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Staff from "./pages/Staff";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

function App() {
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
