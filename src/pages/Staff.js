import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import initialData from "../data";
import NewEmployeeForm from "../components/NewEmployeeForm";
import DisplayTable from "../components/DisplayTable";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState, createContext, useMemo } from "react";
import "./Staff.css";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Staff = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        setThemeToLocalStorage(newMode);
      },
    }),
    [mode]
  );

  const setThemeToLocalStorage = (mode) => {
    localStorage.setItem("mode", mode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const showFormHandler = () => {
    setShowForm(true);
  };

  const addNewEmployeeHandler = (employee) => {
    setData((prevData) => {
      return [employee, ...data];
    });

    setShowForm(false);
  };

  const cancelShowFormHandler = () => {
    setShowForm(false);
  };

  useEffect(() => {
    // Initialise data
    setData(initialData);
    // Get user's saved color theme
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  return (
    <>
      <div className="new-data">
        {showForm ? (
          <NewEmployeeForm
            onCancel={cancelShowFormHandler}
            onAddEmployee={addNewEmployeeHandler}
          />
        ) : (
          <button type="submit" onClick={showFormHandler}>
            Add New Employee
          </button>
        )}
      </div>
      <div className="table">
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
              <DisplayTable colorMode={colorMode} theme={theme} data={data} />
            </TableContainer>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </div>
    </>
  );
};

export default Staff;
