import {
  BOOKING_DATA,
  BOOKING_DATA_ERROR,
  BOOKING_DATA_LOADING,
  ONE_BOOKING_DATA,
} from "./action";

const initState = {
  booking: [],
  oneBooking: [],
  loading: false,
  error: false,
};

export const bookingReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case BOOKING_DATA:
      return { ...store, booking: payload, loading: false, error: false };

    case ONE_BOOKING_DATA:
      return { ...store, oneBooking: payload, loading: false, error: false };

    case BOOKING_DATA_LOADING:
      return { ...store, loading: true };

    case BOOKING_DATA_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
