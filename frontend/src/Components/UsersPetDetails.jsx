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
import { deletePetDataRequest, editPetDataRequest, getPetDataRequest } from "../Redux/Pets/action";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const UsersPetDetails = () => {
  const { pet } = useSelector((store) => store.pets);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userID"));
    dispatch(getPetDataRequest(id));
  }, []);

  if (!pet) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>Users Pet & Booking List</h2>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button><br /><br />
      <TableContainer sx={{ margin: "auto", width: 1400 }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Animal</StyledTableCell>
              <StyledTableCell align="center">Weight</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pet.map((e, id) => {
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {id + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.name}</StyledTableCell>
                  <StyledTableCell align="center">{e.animalType}</StyledTableCell>
                  <StyledTableCell align="center">{e.weight}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => {
                        const id = e._id;
                        localStorage.setItem("petID", JSON.stringify(id));
                        navigate(`/pets/edit`);
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
                        const text = "Do you want to delete your Pet Details?";
                        if (confirm(text) === true) {
                          const id = e._id;
                          dispatch(deletePetDataRequest(id));
                          alert("User's Booking Deleted.");
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
