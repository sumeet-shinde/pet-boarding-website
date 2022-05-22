import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./Admin/reducer";
import { bookingReducer } from "./Bookings/reducer";
import { houseReducer } from "./Houses/reducer";
import { loginReducer } from "./Login/reducer";
import { petReducer } from "./Pets/reducer";
import { userReducer } from "./Users/reducer";

const rootReducer = combineReducers({
  houses: houseReducer,
  users: userReducer,
  bookings: bookingReducer,
  loginUser: loginReducer,
  pets: petReducer,
  admins: adminReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
