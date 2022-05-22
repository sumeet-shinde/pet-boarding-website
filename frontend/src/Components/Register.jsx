import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { userRegisterRequest } from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(userRegisterRequest(Name, Email, Password));
    alert("You have Successfully Registered");
    navigate("/login");
  }

  return (
    <div>
      <h2>Register</h2>
      <TextField
        label="Enter Name"
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      <TextField
        label="Enter Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      /><br/><br/>
      <TextField
        label="Enter Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <Button variant="contained" disabled={!Name || !Email || !Password} onClick={handleSubmit}>REGISTER</Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={() => {
        navigate("/login");
      }}>LOGIN</Button>
    </div>
  )
}