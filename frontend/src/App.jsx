import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AddBooking } from "./Components/AddBooking";
import { AdminBookingList } from "./Components/AdminBookingList";
import { AdminLogin } from "./Components/AdminLogin";
import { EditBooking } from "./Components/EditBooking";
import { EditBookingUser } from "./Components/EditBookingUser";
import { EditPetDetails } from "./Components/EditPetDetails";
import { Home } from "./Components/Home";
import { HouseDetails } from "./Components/HouseDetails";
import { HouseDetailsEdit } from "./Components/HouseDetailsEdit";
import { Login } from "./Components/Login";
import { Pethouseform } from "./Components/Pethouseform";
import { Register } from "./Components/Register";
import { RegisterPet } from "./Components/RegisterPet";
import { UserBookingList } from "./Components/UserBookingList";
import { UsersList } from "./Components/UsersList";
import { UsersPetDetails } from "./Components/UsersPetDetails";

function App() {
  const { login } = useSelector((store) => store.loginUser);
  const { admin } = useSelector((store) => store.admins);

  const PrivateRoute = ({ login, children }) => {
    return login ? children : <Navigate to="/" />;
  };

  const PrivateRouteAdmin = ({ admin, children }) => {
    return admin ? children : <Navigate to="/adLogin" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/list/create"}
          element={
            <PrivateRouteAdmin admin={admin}>
              <Pethouseform />
            </PrivateRouteAdmin>
          }
        />
        <Route path={"/list/:id"} element={<HouseDetails />} />
        <Route
          path={"/list/edit/:id"}
          element={
            <PrivateRouteAdmin admin={admin}>
              <HouseDetailsEdit />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path={"/users"}
          element={
            <PrivateRouteAdmin admin={admin}>
              <UsersList />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path={"/booking/create"}
          element={
            <PrivateRoute login={login}>
              <AddBooking />
            </PrivateRoute>
          }
        />
        <Route
          path={"/booking/:id"}
          element={
            <PrivateRouteAdmin admin={admin}>
              <AdminBookingList />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path={"/booking/user/:id"}
          element={
            <PrivateRoute login={login}>
              <UserBookingList />
            </PrivateRoute>
          }
        />
        <Route
          path={"/booking/edit/:id"}
          element={
            <PrivateRouteAdmin admin={admin}>
              <EditBooking />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path={"/booking/user/edit/:id"}
          element={
            <PrivateRoute login={login}>
              <EditBookingUser />
            </PrivateRoute>
          }
        />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/adLogin"} element={<AdminLogin />} />
        <Route path={"/register"} element={<Register />} />
        <Route
          path={"/pets/create"}
          element={
            <PrivateRoute login={login}>
              <RegisterPet />
            </PrivateRoute>
          }
        />
        <Route
          path={"/pets/edit"}
          element={
            <PrivateRoute login={login}>
              <EditPetDetails />
            </PrivateRoute>
          }
        />
        <Route
          path={"/pets/:id"}
          element={
            <PrivateRoute login={login}>
              <UsersPetDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
