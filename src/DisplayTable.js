import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DisplayTable = (props) => {
  return (
    <div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <button onClick={props.colorMode.toggleColorMode} color="inherit">
              {props.theme.palette.mode} mode
              {props.theme.palette.mode === "dark" ? (
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
          {props.data.map((employee, index) => (
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
    </div>
  );
};

export default DisplayTable;
