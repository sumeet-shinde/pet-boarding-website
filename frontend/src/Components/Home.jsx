import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteHouseDataRequest,
  getHouseDataByIdRequest,
  getHouseDataByRatingRequest,
  getHouseDataBySortingRequest,
  getHouseDataPageRequest,
  getHouseDataRequest,
  houseDataLoading,
} from "../Redux/Houses/action";
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

export const Home = () => {
  const { house } = useSelector((store) => store.houses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((store) => store.admins);
  const [page, setPage] = useState(1);
  const { login } = useSelector((store) => store.loginUser);

  useEffect(() => {
    dispatch(getHouseDataPageRequest(1));
  }, []);

  if (!house) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>Home</h2>
      <h4>Click on Name to see Details</h4>
      {admin === false && (
        <Button
          variant="contained"
          onClick={() => {
            if (login) {
              const id = JSON.parse(localStorage.getItem("userID"));
              navigate(`/booking/user/${id}`);
            } else {
              navigate("/login");
            }
          }}
        >
          See Booking List
        </Button>
      )}&nbsp;&nbsp;
      {admin === false && (
        <Button
          variant="contained"
          onClick={() => {
            if (login) {
              navigate(`/pets/create`);
            } else {
              navigate("/login");
            }
          }}
        >
          Add your Pet
        </Button>
      )}
      &nbsp;&nbsp;
      {admin === false && (
        <Button
          variant="contained"
          onClick={() => {
            if (login) {
              const id = JSON.parse(localStorage.getItem("userID"));
              navigate(`/pets/${id}`);
            } else {
              navigate("/login");
            }
          }}
        >
          List of pets
        </Button>
      )}
      <br />
      <br />
      Sort By Price:&nbsp;&nbsp;
      <Button
        onClick={() => {
          dispatch(getHouseDataBySortingRequest(-1));
        }}
        variant="outlined"
      >
        High to Low
      </Button>
      <Button
        onClick={() => {
          dispatch(getHouseDataBySortingRequest(1));
        }}
        variant="outlined"
      >
        Low to High
      </Button>
      &nbsp;&nbsp;Select Rating:&nbsp;&nbsp;
      <Button
        onClick={() => {
          dispatch(getHouseDataByRatingRequest(1));
        }}
        variant="outlined"
      >
        1
      </Button>
      <Button
        onClick={() => {
          dispatch(getHouseDataByRatingRequest(2));
        }}
        variant="outlined"
      >
        2
      </Button>
      <Button
        onClick={() => {
          dispatch(getHouseDataByRatingRequest(3));
        }}
        variant="outlined"
      >
        3
      </Button>
      <Button
        onClick={() => {
          dispatch(getHouseDataByRatingRequest(4));
        }}
        variant="outlined"
      >
        4
      </Button>
      <Button
        onClick={() => {
          dispatch(getHouseDataByRatingRequest(5));
        }}
        variant="outlined"
      >
        5
      </Button>
      <br />
      <br />
      Page:&nbsp;&nbsp;
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(getHouseDataPageRequest(1));
        }}
      >
        1
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(getHouseDataPageRequest(2));
        }}
      >
        2
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(getHouseDataPageRequest(3));
        }}
      >
        3
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(getHouseDataPageRequest(4));
        }}
      >
        4
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(getHouseDataPageRequest(5));
        }}
      >
        5
      </Button>
      <br />
      <br />
      {admin === true && (
        <Button
          variant="contained"
          onClick={() => {
            navigate("/list/create");
          }}
        >
          Add Pet Boarding House
        </Button>
      )}
      &nbsp;&nbsp;
      {admin === true && (
        <Button
          variant="contained"
          onClick={() => {
            navigate("/users");
          }}
        >
          List of Users
        </Button>
      )}
      <br />
      <br />
      <TableContainer sx={{ margin: "auto", width: 1200 }} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Capacity</StyledTableCell>
              <StyledTableCell align="center">Cost Per Day</StyledTableCell>
              <StyledTableCell align="center">Verified</StyledTableCell>
              <StyledTableCell align="center">Rating</StyledTableCell>
              {admin === true && (
                <StyledTableCell align="center">Edit</StyledTableCell>
              )}
              {admin === true && (
                <StyledTableCell align="center">Delete</StyledTableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {house.map((e, id) => {
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {id + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      const id = e._id;
                      navigate(`/list/${id}`);
                      localStorage.setItem("ID", JSON.stringify(id));
                    }}
                  >
                    {e.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{e.city}</StyledTableCell>
                  <StyledTableCell align="center">{e.address}</StyledTableCell>
                  <StyledTableCell align="center">{e.capacity}</StyledTableCell>
                  <StyledTableCell align="center">{e.cost}</StyledTableCell>
                  <StyledTableCell align="center">{e.verified}</StyledTableCell>
                  <StyledTableCell align="center">{e.rating}</StyledTableCell>
                  {admin === true && (
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
                  )}
                  {admin === true && (
                    <StyledTableCell align="center">
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          const text =
                            "Do you want to delete this Pet Board Service";
                          if (confirm(text) === true) {
                            const id = e._id;
                            dispatch(deleteHouseDataRequest(id));
                            alert("Pet House Service Deleted.");
                          } else {
                            navigate("/");
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
