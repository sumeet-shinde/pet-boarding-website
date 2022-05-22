import axios from "axios";

export const PETS_DATA = "PETS_DATA";
export const PETS_DATA_LOADING = "PETS_DATA_LOADING";
export const PETS_DATA_ERROR = "PETS_DATA_ERROR";

export const petsData = (pet) => ({ type: PETS_DATA, payload: pet });
export const petsDataLoading = () => ({ type: PETS_DATA_LOADING });
export const petsDataError = () => ({ type: PETS_DATA_ERROR });

export const getPetDataRequest = (id) => async (dispatch) => {
  dispatch(petsDataLoading());
  axios
    .get(`https://pet-boarding-backend.herokuapp.com/pets/${id}`)
    .then((res) => {
      const data = res.data;
      dispatch(petsData(data));
    })
    .catch((err) => {
      dispatch(petsDataError());
      console.log(err);
    });
};

export const addPetDataRequest =
  (Name, Animal, Weight, Image, UserID) => async (dispatch) => {
    dispatch(petsDataLoading());
    axios
      .post("https://pet-boarding-backend.herokuapp.com/pets/create", {
        name: Name,
        animalType: Animal,
        weight: Weight,
        image: Image,
        userID: UserID,
      })
      .then((res) => {
        const id = res.data._id;
        localStorage.setItem("boardID", JSON.stringify(id));
      })
      .catch((err) => {
        dispatch(petsDataError());
        console.log(err);
      });
  };

export const editPetDataRequest =
  (id, Name, Animal, Weight, Image, UserID) => async (dispatch) => {
    dispatch(petsDataLoading());
    axios
      .patch(`https://pet-boarding-backend.herokuapp.com/pets/edit/${id}`, {
        name: Name,
        animalType: Animal,
        weight: Weight,
        image: Image,
        userID: UserID,
      })
      .then((res) => {
        const id = JSON.parse(localStorage.getItem("userID"));
        dispatch(getPetDataRequest(id));
      })
      .catch((err) => {
        dispatch(petsDataError());
        console.log(err);
      });
  };

export const deletePetDataRequest = (id) => async (dispatch) => {
  dispatch(petsDataLoading());

  axios
    .delete(`https://pet-boarding-backend.herokuapp.com/pets/${id}`)
    .then((res) => {
      const id = JSON.parse(localStorage.getItem("userID"));
      dispatch(getPetDataRequest(id));
    })
    .catch((err) => {
      dispatch(petsDataError());
      console.log(err);
    });
};
