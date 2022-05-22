import axios from "axios";

export const BOOKING_DATA = "BOOKING_DATA";
export const ONE_BOOKING_DATA = "ONE_BOOKING_DATA";
export const BOOKING_DATA_LOADING = "BOOKING_DATA_LOADING";
export const BOOKING_DATA_ERROR = "BOOKING_DATA_ERROR";

export const bookingData = (booking) => ({
  type: BOOKING_DATA,
  payload: booking,
});
export const oneBookingData = (oneBooking) => ({
  type: ONE_BOOKING_DATA,
  payload: oneBooking,
});
export const bookingDataLoading = () => ({ type: BOOKING_DATA_LOADING });
export const bookingDataError = () => ({ type: BOOKING_DATA_ERROR });

export const getBookingDataRequest = (id) => async (dispatch) => {
  dispatch(bookingDataLoading());
  if (!id) {
    return;
  }

  axios
    .get(`https://pet-boarding-backend.herokuapp.com/booking/user/${id}`)
    .then((res) => {
      const data = res.data;
      dispatch(oneBookingData(data));
    })
    .catch((err) => {
      dispatch(bookingDataError());
      console.log(err);
    });
};

export const addBookingDataRequest =
  (UserID, PetBoardID, PetID, StartDate, EndDate) => async (dispatch) => {
    dispatch(bookingDataLoading());

    axios
      .post(`https://pet-boarding-backend.herokuapp.com/booking/create`, {
        userID: UserID,
        petBoardID: PetBoardID,
        petID: PetID,
        startDate: StartDate,
        endDate: EndDate,
      })
      .then((res) => {})
      .catch((err) => {
        dispatch(bookingDataError());
        console.log(err);
      });
  };

export const updateStatusBookingDataRequest = (id) => async (dispatch) => {
  dispatch(bookingDataLoading());
  if (!id) {
    return;
  }

  axios
    .patch(`https://pet-boarding-backend.herokuapp.com/booking/approve/${id}`)
    .then((res) => {})
    .catch((err) => {
      dispatch(bookingDataError());
      console.log(err);
    });
};

export const editBookingDataRequest =
  (id, UserID, PetBoardID, PetID, StartDate, EndDate, Status) =>
  async (dispatch) => {
    dispatch(bookingDataLoading());
    if (!id) {
      return;
    }

    axios
      .patch(`https://pet-boarding-backend.herokuapp.com/booking/edit/${id}`, {
        userID: UserID,
        petBoardID: PetBoardID,
        petID: PetID,
        startDate: StartDate,
        endDate: EndDate,
        status: Status,
      })
      .then((res) => {})
      .catch((err) => {
        dispatch(bookingDataError());
        console.log(err);
      });
  };

export const editBookingDataUserRequest =
  (id, PetBoardID, PetID, StartDate, EndDate) => async (dispatch) => {
    dispatch(bookingDataLoading());
    if (!id) {
      return;
    }

    axios
      .patch(`https://pet-boarding-backend.herokuapp.com/booking/edit/${id}`, {
        petBoardID: PetBoardID,
        petID: PetID,
        startDate: StartDate,
        endDate: EndDate,
      })
      .then((res) => {})
      .catch((err) => {
        dispatch(bookingDataError());
        console.log(err);
      });
  };

export const deleteBookingDataRequest = (id) => async (dispatch) => {
  dispatch(bookingDataLoading());

  axios
    .delete(`https://pet-boarding-backend.herokuapp.com/booking/user/${id}`)
    .then((res) => {
      dispatch(getBookingDataRequest());
    })
    .catch((err) => {
      dispatch(bookingDataError());
      console.log(err);
    });
};
