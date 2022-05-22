import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLoginRequest } from "../Redux/Admin/action";

export const AdminLogin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((store) => store.admins);

  const handleSubmit = async () => {
    dispatch(adminLoginRequest(Email, Password));
    alert("Press Login Again to authenticate");
    if (admin) {
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <TextField
        label="Enter Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Enter Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="contained"
        disabled={!Email || !Password}
        onClick={handleSubmit}
      >
        LOGIN
      </Button>
    </div>
  );
};
