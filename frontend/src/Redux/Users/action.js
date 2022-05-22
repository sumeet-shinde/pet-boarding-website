import axios from "axios";

export const USERS_DATA = "USERS_DATA";
export const ONE_USERS_DATA = "ONE_USERS_DATA";
export const USERS_DATA_LOADING = "USERS_DATA_LOADING";
export const USERS_DATA_ERROR = "USERS_DATA_ERROR";

export const userData = (user) => ({ type: USERS_DATA, payload: user });
export const oneUserData = (oneUser) => ({
  type: ONE_USERS_DATA,
  payload: oneUser,
});
export const userDataLoading = () => ({ type: USERS_DATA_LOADING });
export const userDataError = () => ({ type: USERS_DATA_ERROR });

export const getUserDataRequest = () => async (dispatch) => {
  dispatch(userDataLoading());
  axios
    .get("https://pet-boarding-backend.herokuapp.com/users/all")
    .then((res) => {
      const data = res.data;
      dispatch(userData(data));
    })
    .catch((err) => {
      dispatch(userDataError());
      console.log(err);
    });
};

export const deleteUserDataRequest = (id) => async (dispatch) => {
  dispatch(userDataLoading());

  axios
    .delete(`https://pet-boarding-backend.herokuapp.com/users/${id}`)
    .then((res) => {
      dispatch(getUserDataRequest());
    })
    .catch((err) => {
      dispatch(userDataError());
      console.log(err);
    });
};
