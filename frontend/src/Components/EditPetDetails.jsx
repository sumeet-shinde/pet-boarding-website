import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPetDataRequest, editPetDataRequest } from "../Redux/Pets/action";
import { useNavigate } from "react-router-dom";

export const EditPetDetails = () => {
  const [Name, setName] = useState("");
  const [Animal, setAnimal] = useState("");
  const [Weight, setWeight] = useState(0);
  const [Image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const UserID = JSON.parse(localStorage.getItem("userID"));
    const id = JSON.parse(localStorage.getItem("petID"));
    dispatch(editPetDataRequest(id, Name, Animal, Weight, Image, UserID));
    alert("Your Pet Details Updated");
    navigate(`/pets/${UserID}`);
  }

  return (
    <div>
      <h2>Edit your Pet Details</h2>
      <TextField label="Enter Name" onChange={(e) => setName(e.target.value)}/><br /><br />
      Animal:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setAnimal(e.target.value)}>
        <option value=""></option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
        <option value="Reptile">Reptile</option>
      </select><br /><br />
      <TextField type="number" label="Enter Weight" onChange={(e) => setWeight(e.target.value)}/><br /><br />
      <TextField label="Enter Image Link" onChange={(e) => setImage(e.target.value)}/><br /><br />
      <Button variant="contained" disabled={!Name || !Animal || !Weight || !Image} onClick={handleSubmit}>SUBMIT</Button>
    </div>
  )
}