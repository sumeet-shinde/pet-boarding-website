import {
  HOUSE_DATA,
  HOUSE_DATA_ERROR,
  HOUSE_DATA_LOADING,
  ONE_HOUSE_DATA,
} from "./action";

const initState = {
  house: [],
  oneHouse: [],
  loading: false,
  error: false,
};

export const houseReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case HOUSE_DATA:
      return { ...store, house: payload, loading: false, error: false };

    case ONE_HOUSE_DATA:
      return { ...store, oneHouse: payload, loading: false, error: false };

    case HOUSE_DATA_LOADING:
      return { ...store, loading: true };

    case HOUSE_DATA_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
