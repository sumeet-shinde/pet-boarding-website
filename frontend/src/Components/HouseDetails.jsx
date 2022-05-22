import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHouseDataByIdRequest,
  houseDataLoading,
} from "../Redux/Houses/action";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getPetDataRequest } from "../Redux/Pets/action";

export const HouseDetails = () => {
  const { oneHouse } = useSelector((store) => store.houses);
  const dispatch = useDispatch();
  const { login } = useSelector((store) => store.loginUser);
  const { pet } = useSelector((store) => store.pets);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(houseDataLoading());
    let id = JSON.parse(localStorage.getItem("ID"));
    dispatch(getHouseDataByIdRequest(id));
    const userID = JSON.parse(localStorage.getItem("userID"));
    dispatch(getPetDataRequest(userID));
  }, []);

  if (!oneHouse) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>HouseDetails</h2>
      <Button
        variant="contained"
        onClick={() => {
          if (!login) {
            navigate("/login");
          }
          else {
            const id = oneHouse._id;
            localStorage.setItem("boardID", JSON.stringify(id));
            navigate("/booking/create");
          }
        }}
      >
        Book this Pet Board
      </Button>
      <p>Name: {oneHouse.name}</p>
      <p>City: {oneHouse.city}</p>
      <p>Address: {oneHouse.address}</p>
      <p>Capacity: {oneHouse.capacity}</p>
      <p>Cost: {oneHouse.cost}</p>
      <p>Verified: {oneHouse.verified}</p>
      <p>Rating: {oneHouse.rating}</p>
      <p>Summary: {oneHouse.summary}</p>
      <p>
        Number of pets that will be watched at one time: {oneHouse.numberOfPets}
      </p>
      <p>Accepted Pet Types:</p>
      <p>Dogs: {oneHouse.dogs}</p>
      <p>Cats: {oneHouse.cats}</p>
      <p>Birds: {oneHouse.birds}</p>
      <p>Reptiles: {oneHouse.reptiles}</p>
      <p>Accepted Pet Size:</p>
      <p>5-10: {oneHouse.below10}</p>
      <p>10-20: {oneHouse.below20}</p>
      <p>20-40: {oneHouse.below40}</p>
      <p>40+: {oneHouse.above40}</p>
      <p>Level of adult supervision: {oneHouse.supervision}</p>
      <p>
        The place your pet will be if they are left unsupervised at home:{" "}
        {oneHouse.unsupervised}
      </p>
      <p>The place your pet will sleep at night: {oneHouse.sleepPlace}</p>
      <p>The number of potty breaks provided per day: {oneHouse.pottyBreaks}</p>
      <p>The number of walks provided per day: {oneHouse.walks}</p>
      <p>The type of home I stay in: {oneHouse.homeType}</p>
      <p>My outdoor area size: {oneHouse.areaSize}</p>
      <p>Emergency transport: {oneHouse.emergencyTransport}</p>
    </div>
  );
};
