import { USER_LOGIN, USER_LOGIN_LOADING, USER_LOGIN_ERROR } from "./action";

const initState = {
  login: false,
  loading: false,
  error: false,
};

export const loginReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...store, login: true, loading: false, error: false };

    case USER_LOGIN_LOADING:
      return { ...store, loading: true };

    case USER_LOGIN_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
