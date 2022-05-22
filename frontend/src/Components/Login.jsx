import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { userLoginRequest, userRegisterRequest } from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";
import { getPetDataRequest } from "../Redux/Pets/action";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { login } = useSelector((store) => store.loginUser);
  const { pet } = useSelector((store) => store.pets);

  useEffect(() => {
    const userID = JSON.parse(localStorage.getItem("userID"));
    dispatch(getPetDataRequest(userID));
  }, []);

  const handleSubmit = async () => {
    dispatch(userLoginRequest(Email, Password));
    alert("Press Login Again to authenticate");
    if (login) {
      navigate("/pets/create");
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
      &nbsp;&nbsp;
      <Button
        variant="contained"
        onClick={() => {
          navigate("/register");
        }}
      >
        REGISTER
      </Button>
    </div>
  );
};
