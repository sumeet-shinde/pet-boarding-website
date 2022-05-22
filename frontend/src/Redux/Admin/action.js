import axios from "axios";

export const ADMIN_LOGIN = "ADMIN_LOGIN";
export const ADMIN_LOGIN_LOADING = "ADMIN_LOGIN_LOADING";
export const ADMIN_LOGIN_ERROR = "ADMIN_LOGIN_LOADING";

export const adminLogin = () => ({ type: ADMIN_LOGIN });
export const adminLoginLoading = () => ({ type: ADMIN_LOGIN_LOADING });
export const adminLoginError = () => ({ type: ADMIN_LOGIN_ERROR });

export const adminLoginRequest = (Email, Password) => async (dispatch) => {
  return axios
    .post("https://pet-boarding-backend.herokuapp.com/adLogin", {
      email: Email,
      password: Password,
    })
    .then(({ data }) => {
      if (data) {
        dispatch(adminLogin());
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Please check your email and password.");
      dispatch(adminLoginError());
    });
};
