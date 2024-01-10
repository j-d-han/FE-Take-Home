import "./App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import initialData from "./data";
import { useEffect, useState, createContext, useMemo } from "react";
import NewEmployeeForm from "./NewEmployeeForm";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        //setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
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
    console.log("aaaaaaaaaaaaaaa");
    console.log(data);
  };

  const cancelShowFormHandler = () => {
    setShowForm(false);
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   setTimeout(() => {
    //     setData(initialData);
    //   }, 500);
    // };

    // fetchData();
    setData(initialData);
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  return (
    <div className="App">
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
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <button onClick={colorMode.toggleColorMode} color="inherit">
                      {theme.palette.mode} mode
                      {theme.palette.mode === "dark" ? (
                        <Brightness4Icon />
                      ) : (
                        <Brightness7Icon />
                      )}
                    </button>
                  </TableRow>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Lat</TableCell>
                    <TableCell align="right">Lng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell align="right">{employee.age}</TableCell>
                      <TableCell align="right">{employee.email}</TableCell>
                      <TableCell align="right">{employee.address}</TableCell>
                      <TableCell align="right">{employee.lat}</TableCell>
                      <TableCell align="right">{employee.lng}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </div>
    </div>
  );
}

export default App;
