import {
  USERS_DATA,
  USERS_DATA_ERROR,
  USERS_DATA_LOADING,
  ONE_USERS_DATA,
} from "./action";

const initState = {
  user: [],
  oneUser: [],
  loading: false,
  error: false,
};

export const userReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case USERS_DATA:
      return { ...store, user: payload, loading: false, error: false };

    case ONE_USERS_DATA:
      return { ...store, oneUser: payload, loading: false, error: false };

    case USERS_DATA_LOADING:
      return { ...store, loading: true };

    case USERS_DATA_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
