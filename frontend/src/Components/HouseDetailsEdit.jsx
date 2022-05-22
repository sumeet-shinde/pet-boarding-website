import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editHouseDataRequest } from "../Redux/Houses/action";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const HouseDetailsEdit = () => {
  const [Name, setName] = useState("");
  const [City, setCity] = useState("");
  const [Address, setAddress] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [Cost, setCost] = useState(0);
  const [Verified, setVerified] = useState("");
  const [Rating, setRating] = useState(0);
  const [Summary, setSummary] = useState("");
  const [NumberOfPets, setNumberOfPets] = useState("");
  const [Dogs, setDogs] = useState("Not Allowed");
  const [Cats, setCats] = useState("Not Allowed");
  const [Birds, setBirds] = useState("Not Allowed");
  const [Reptiles, setReptiles] = useState("Not Allowed");
  const [under10, setUnder10] = useState("Not Allowed");
  const [under20, setUnder20] = useState("Not Allowed");
  const [under40, setUnder40] = useState("Not Allowed");
  const [above40, setAbove40] = useState("Not Allowed");
  const [SuperVision, setSuperVision] = useState("");
  const [Unsupervised, setUnSupervised] = useState("");
  const [Sleep, setSleep] = useState("");
  const [Breaks, setBreaks] = useState("");
  const [Walks, setWalks] = useState("");
  const [HomeType, setHomeType] = useState("");
  const [AreaSize, setAreaSize] = useState("");
  const [Emergency, setEmergency] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let id = JSON.parse(localStorage.getItem("ID"));
    dispatch(
      editHouseDataRequest(
        id,
        Name,
        City,
        Address,
        Capacity,
        Cost,
        Verified,
        Rating,
        Summary,
        NumberOfPets,
        Dogs,
        Cats,
        Birds,
        Reptiles,
        under10,
        under20,
        under40,
        above40,
        SuperVision,
        Unsupervised,
        Sleep,
        Breaks,
        Walks,
        HomeType,
        AreaSize,
        Emergency
      )
    );
    alert("Your Pet Boarding Service Edited");
    navigate("/");
  };

  return (
    <div>
      <h2>Edit PetHouse Details</h2>
      <TextField
        onChange={(e) => setName(e.target.value)}
        label="Enter Pet Boarding Name"
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter City Name"
        onChange={(e) => setCity(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Address"
        onChange={(e) => setAddress(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Capacity of Pets"
        onChange={(e) => setCapacity(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        type="number"
        label="Enter Cost Per Day"
        onChange={(e) => setCost(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      Verified:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setVerified(e.target.value)}>
        <option value=""></option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <br />
      <br />
      <TextField
        type="number"
        label="Enter Ratings"
        onChange={(e) => setRating(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Summary"
        onChange={(e) => setSummary(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Number of Pets will be watched"
        onChange={(e) => setNumberOfPets(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      Select type of Pets:
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setDogs("Allowed");
          } else {
            setDogs("Not Allowed");
          }
        }}
      />
      Dogs
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setCats("Allowed");
          } else {
            setCats("Not Allowed");
          }
        }}
      />
      Cats
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setBirds("Allowed");
          } else {
            setBirds("Not Allowed");
          }
        }}
      />
      Birds
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setReptiles("Allowed");
          } else {
            setReptiles("Not Allowed");
          }
        }}
      />
      Reptiles
      <br />
      <br />
      Select Size of Pets:
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setUnder10("Allowed");
          } else {
            setUnder10("Not Allowed");
          }
        }}
      />
      5-10 kgs
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setUnder20("Allowed");
          } else {
            setUnder20("Not Allowed");
          }
        }}
      />
      10-20 kgs
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setUnder40("Allowed");
          } else {
            setUnder40("Not Allowed");
          }
        }}
      />
      20-40 kgs
      <Checkbox
        type="checkbox"
        name=""
        id=""
        onChange={(e) => {
          if (e.target.checked) {
            setAbove40("Allowed");
          } else {
            setAbove40("Not Allowed");
          }
        }}
      />
      40+ kgs
      <br />
      <br />
      <TextField
        label="Enter Level of SuperVision"
        onChange={(e) => setSuperVision(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Area where Pets are Unsupervised"
        onChange={(e) => setUnSupervised(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Area where Pets will Sleep"
        onChange={(e) => setSleep(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Number of Pets Potty Breaks"
        onChange={(e) => setBreaks(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      <TextField
        label="Enter Numbers of Pet Walks per Day"
        onChange={(e) => setWalks(e.target.value)}
        size="small"
        sx={{ width: 500 }}
      />
      <br />
      <br />
      Select the type of house:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setHomeType(e.target.value)}>
        <option value=""></option>
        <option value="Apartment">Apartment</option>
        <option value="Bunglow">Bunglow</option>
      </select>
      <br />
      <br />
      Select Size of Outdoor Area:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setAreaSize(e.target.value)}>
        <option value=""></option>
        <option value="Small">Small</option>
        <option value="Meduim">Medium</option>
        <option value="Large">Large</option>
      </select>
      <br />
      <br />
      Emergency Transport:&nbsp;&nbsp;
      <select name="" id="" onChange={(e) => setEmergency(e.target.value)}>
        <option value=""></option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <br />
      <br />
      <Button
        variant="contained"
        size="small"
        disabled={
          !Name ||
          !City ||
          !Address ||
          !Capacity ||
          !Cost ||
          !Verified ||
          !Rating ||
          !Summary ||
          !NumberOfPets ||
          !SuperVision ||
          !Unsupervised ||
          !Sleep ||
          !Breaks ||
          !Walks ||
          !HomeType ||
          !AreaSize ||
          !Emergency
        }
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};
