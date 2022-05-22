import axios from "axios";
import { useNavigate } from "react-router-dom";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_LOADING = "USER_LOGIN_LOADING";
export const USER_LOGIN_ERROR = "USER_LOGIN_LOADING";

export const userLogin = () => ({ type: USER_LOGIN });
export const userLoginLoading = () => ({ type: USER_LOGIN_LOADING });
export const userLoginError = () => ({ type: USER_LOGIN_ERROR });

export const userRegisterRequest =
  (Name, Email, Password) => async (dispatch) => {
    dispatch(userLoginLoading());
    return axios
      .post("https://pet-boarding-backend.herokuapp.com/register", {
        name: Name,
        email: Email,
        password: Password,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(userLoginError());
      });
  };

export const userLoginRequest = (Email, Password) => async (dispatch) => {
  return axios
    .post("https://pet-boarding-backend.herokuapp.com/login", {
      email: Email,
      password: Password,
    })
    .then(({ data }) => {
      if (data) {
        const id = data.user._id;
        localStorage.setItem("userID", JSON.stringify(id));
        dispatch(userLogin());
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Please check your email and password.");
      dispatch(userLoginError());
    });
};
