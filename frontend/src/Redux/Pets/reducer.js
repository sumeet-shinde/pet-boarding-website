import { PETS_DATA, PETS_DATA_LOADING, PETS_DATA_ERROR } from "./action";

const initState = {
  pet: [],
  loading: false,
  error: false,
};

export const petReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case PETS_DATA:
      return { ...store, pet: payload, loading: false, error: false };

    case PETS_DATA_LOADING:
      return { ...store, loading: true };

    case PETS_DATA_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
