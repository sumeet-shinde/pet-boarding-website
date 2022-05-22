import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { editBookingDataRequest } from "../Redux/Bookings/action";
import { getUserDataRequest } from "../Redux/Users/action";
import { getHouseDataRequest } from "../Redux/Houses/action";
import { getPetDataRequest } from "../Redux/Pets/action";

export const EditBooking = () => {
  const [UserID, setUserID] = useState("");
  const [PetBoardID, setPetBoardID] = useState("");
  const [PetID, setPetID] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [Status, setStatus] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {house} = useSelector((store) => store.houses);
  const {pet} = useSelector((store) => store.pets);
  const {user} = useSelector((store) => store.users);
  const {admin} = useSelector((store) => store.admins);

  useEffect(() => {
    dispatch(getUserDataRequest());
    dispatch(getHouseDataRequest());
    const id = JSON.parse(localStorage.getItem("userID"));
    dispatch(getPetDataRequest(id));
  }, [])

  const handleSubmit = () => {
    const id = JSON.parse(localStorage.getItem("bookingID"));
    dispatch(
      editBookingDataRequest(id, UserID, PetBoardID, PetID, StartDate, EndDate, Status)
    );
    alert("Booking Edited");
  };

  if (!admin) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>Edit Booking Data</h2>
      Select User:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setUserID(e.target.value)}>
        <option value=""></option>
        {user.map((e, id) => {
          return <option key={id} value={e._id}>{e.name}</option>
        })}
      </select>
      <br />
      <br />
      Select Pet Board:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setPetBoardID(e.target.value)}>
        <option value=""></option>
        {house.map((e, id) => {
          return (
            <option key={id} value={e._id}>
              {e.name}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      Select Pet:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setPetID(e.target.value)}>
        <option value=""></option>
        {pet.map((e, id) => {
          return (
            <option key={id} value={e._id}>
              {e.name}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      Status:&nbsp;&nbsp;
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value=""></option>
        <option value="Approved">Approved</option>
        <option value="Not Approved">Not Approved</option>
      </select>
      <br />
      <br />
      <h3>Enter Start Date:</h3>
      <TextField
        type="date"
        onChange={(e) => setStartDate(e.target.value)}
      />
      <br />
      <h3>Enter End Date:</h3>
      <TextField
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
      />
      <br />
      <br />
      <Button
        disabled={!UserID || !PetID || !PetBoardID || !StartDate || !EndDate}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};
