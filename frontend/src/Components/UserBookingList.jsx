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
import {
  deleteBookingDataRequest,
  getBookingDataRequest,
} from "../Redux/Bookings/action";

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

export const UserBookingList = () => {
  const { oneBooking } = useSelector((store) => store.bookings);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userID"));
    dispatch(getBookingDataRequest(id));
  }, []);

  if (!oneBooking) {
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
      </Button>
      <br />
      <br />
      <TableContainer sx={{ margin: "auto", width: 1400 }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="center">Pet Image</StyledTableCell>
              <StyledTableCell align="center">Pet Name</StyledTableCell>
              <StyledTableCell align="center">Pet Board Name</StyledTableCell>
              <StyledTableCell align="center">
                Pet Board Location
              </StyledTableCell>
              <StyledTableCell align="center">Start Date</StyledTableCell>
              <StyledTableCell align="center">End Date</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {oneBooking.map((e, id) => {
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {id + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <img
                      style={{ height: "80px" }}
                      src={e.petID.image}
                      alt=""
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {e.petID.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {e.petBoardID.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {e.petBoardID.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {e.startDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.endDate}</StyledTableCell>
                  <StyledTableCell align="center">{e.status}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => {
                        const id = e._id;
                        localStorage.setItem("bookingID", JSON.stringify(id));
                        navigate(`/booking/user/edit/${id}`);
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
                        const text = "Do you want to delete this Booking?";
                        if (confirm(text) === true) {
                          const id = e._id;
                          dispatch(deleteBookingDataRequest(id));
                          alert("User's Booking Deleted.");
                          const id1 = JSON.parse(localStorage.getItem("ID"));
                          dispatch(getBookingDataRequest(id1));
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
