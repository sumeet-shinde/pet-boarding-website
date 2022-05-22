import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { deleteUserDataRequest, getUserDataRequest } from "../Redux/Users/action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1A3C40",
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#EDE6DB",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#67cbc6",
  },
  "&:hover": {
    backgroundColor: "#468984",
    cursor: "pointer",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const UsersDetails = () => {
  const { user } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserDataRequest());
  }, []);

  if (!user) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>Users List</h2>
      <TableContainer sx={{ margin: "auto", width: 1200 }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user.map((e, id) => {
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {id + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      const id = e._id;
                      navigate(``);
                      localStorage.setItem("ID", JSON.stringify(id));
                    }}
                  >
                    {e.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => {
                        const id = e._id;
                        localStorage.setItem("ID", JSON.stringify(id));
                        navigate(`list/edit/${id}`);
                      }}
                    >
                      Edit
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        const text =
                          "Do you want to delete this User?";
                        if (confirm(text) === true) {
                          const id = e._id;
                          dispatch(deleteUserDataRequest(id));
                          alert("User Deleted.");
                        } else {
                          navigate("/users");
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
