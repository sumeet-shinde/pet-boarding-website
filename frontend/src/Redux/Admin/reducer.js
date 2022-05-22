import { ADMIN_LOGIN, ADMIN_LOGIN_LOADING, ADMIN_LOGIN_ERROR } from "./action";

const initState = {
  admin: false,
  loading: false,
  error: false,
};

export const adminReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN:
      return { ...store, admin: true, loading: false, error: false };

    case ADMIN_LOGIN_LOADING:
      return { ...store, loading: true };

    case ADMIN_LOGIN_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
