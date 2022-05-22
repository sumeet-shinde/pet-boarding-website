import axios from "axios";

export const HOUSE_DATA = "HOUSE_DATA";
export const ONE_HOUSE_DATA = "ONE_HOUSE_DATA";
export const HOUSE_DATA_LOADING = "HOUSE_DATA_LOADING";
export const HOUSE_DATA_ERROR = "HOUSE_DATA_ERROR";

export const houseData = (house) => ({ type: HOUSE_DATA, payload: house });
export const oneHouseData = (oneHouse) => ({
  type: ONE_HOUSE_DATA,
  payload: oneHouse,
});
export const houseDataLoading = () => ({ type: HOUSE_DATA_LOADING });
export const houseDataError = () => ({ type: HOUSE_DATA_ERROR });

export const getHouseDataRequest = () => async (dispatch) => {
  dispatch(houseDataLoading());
  axios
    .get("https://pet-boarding-backend.herokuapp.com/petBoard?page=1&size=5")
    .then((res) => {
      const data = res.data.docs;
      dispatch(houseData(data));
    })
    .catch((err) => {
      dispatch(houseDataError());
      console.log(err);
    });
};

export const getHouseDataPageRequest = (Page) => async (dispatch) => {
  dispatch(houseDataLoading());
  axios
    .get(
      `https://pet-boarding-backend.herokuapp.com/petBoard?page=${Page}&size=5`
    )
    .then((res) => {
      const data = res.data.docs;
      dispatch(houseData(data));
    })
    .catch((err) => {
      dispatch(houseDataError());
      console.log(err);
    });
};

export const addHouseDataRequest =
  (
    Name,
    City,
    Address,
    Capacity,
    Cost,
    Verified,
    Rating,
    Summary,
    NumberOfPets,
    Dogs,
    Cats,
    Birds,
    Reptiles,
    under10,
    under20,
    under40,
    above40,
    SuperVision,
    Unsupervised,
    Sleep,
    Breaks,
    Walks,
    HomeType,
    AreaSize,
    Emergency
  ) =>
  async (dispatch) => {
    dispatch(houseDataLoading());
    axios
      .post("https://pet-boarding-backend.herokuapp.com/petBoard/create", {
        name: Name,
        city: City,
        address: Address,
        capacity: Capacity,
        cost: Cost,
        verified: Verified,
        rating: Rating,
        summary: Summary,
        numberOfPets: NumberOfPets,
        dogs: Dogs,
        cats: Cats,
        birds: Birds,
        reptiles: Reptiles,
        below10: under10,
        below20: under20,
        below40: under40,
        above40: above40,
        supervision: SuperVision,
        unsupervised: Unsupervised,
        sleepPlace: Sleep,
        pottyBreaks: Breaks,
        walks: Walks,
        homeType: HomeType,
        areaSize: AreaSize,
        emergencyTransport: Emergency,
      })
      .then(() => {
        dispatch(getHouseDataRequest());
      })
      .catch((err) => {
        dispatch(houseDataError());
        console.log(err);
      });
  };

export const getHouseDataByIdRequest = (id) => async (dispatch) => {
  dispatch(houseDataLoading());
  if (!id) {
    return;
  }
  axios
    .get(`https://pet-boarding-backend.herokuapp.com/petBoard/${id}`)
    .then((res) => {
      const data = res.data;
      dispatch(oneHouseData(data));
    })
    .catch((err) => {
      dispatch(houseDataError());
      console.log(err);
    });
};

export const getHouseDataBySortingRequest = (Sorting) => async (dispatch) => {
  dispatch(houseDataLoading());

  axios
    .get(
      `https://pet-boarding-backend.herokuapp.com/petBoard?page=1&size=5&sorting=${Sorting}`
    )
    .then((res) => {
      const data = res.data.docs;
      dispatch(houseData(data));
    })
    .catch((err) => {
      dispatch(houseDataError());
      console.log(err);
    });
};

export const getHouseDataByRatingRequest = (rating) => async (dispatch) => {
  dispatch(houseDataLoading());

  axios
    .get(`https://pet-boarding-backend.herokuapp.com/petBoard/rate/${rating}`)
    .then((res) => {
      const data = res.data;
      dispatch(houseData(data));
    })
    .catch((err) => {
      dispatch(houseDataError());
      console.log(err);
    });
};

export const editHouseDataRequest =
  (
    id,
    Name,
    City,
    Address,
    Capacity,
    Cost,
    Verified,
    Rating,
    Summary,
    NumberOfPets,
    Dogs,
    Cats,
    Birds,
    Reptiles,
    under10,
    under20,
    under40,
    above40,
    SuperVision,
    Unsupervised,
    Sleep,
    Breaks,
    Walks,
    HomeType,
    AreaSize,
    Emergency
  ) =>
  async (dispatch) => {
    dispatch(houseDataLoading());
    if (!id) {
      return;
    }
    axios
      .patch(`https://pet-boarding-backend.herokuapp.com/petBoard/edit/${id}`, {
        name: Name,
        city: City,
        address: Address,
        capacity: Capacity,
        cost: Cost,
        verified: Verified,
        rating: Rating,
        summary: Summary,
        numberOfPets: NumberOfPets,
        dogs: Dogs,
        cats: Cats,
        birds: Birds,
        reptiles: Reptiles,
        below10: under10,
        below20: under20,
        below40: under40,
        above40: above40,
        supervision: SuperVision,
        unsupervised: Unsupervised,
        sleepPlace: Sleep,
        pottyBreaks: Breaks,
        walks: Walks,
        homeType: HomeType,
        areaSize: AreaSize,
        emergencyTransport: Emergency,
      })
      .then(() => {
        dispatch(getHouseDataRequest());
      })
      .catch((err) => {
        dispatch(houseDataError());
        console.log(err);
      });
  };

export const deleteHouseDataRequest = (id) => async (dispatch) => {
  dispatch(houseDataLoading());

  axios
    .delete(`https://pet-boarding-backend.herokuapp.com/petBoard/delete/${id}`)
    .then((res) => {
      dispatch(getHouseDataRequest());
    })
    .catch((err) => {
      dispatch(houseDataError());
      console.log(err);
    });
};
