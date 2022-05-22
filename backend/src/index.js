const express = require("express");

const connect = require("./configs/db");

const {
  login,
  register,
  adminlogin,
} = require("./controllers/auth.controller");

const adminController = require("./controllers/admin.controller");

const petBoardController = require("./controllers/petBoard.controller");

const petsController = require("./controllers/pets.controller");

const bookingController = require("./controllers/bookings.controller");

const userController = require("./controllers/users.controller");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allor-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.post("/register", register);

app.post("/login", login);

app.post("/adlogin", adminlogin);

app.use("/admin", adminController);

app.use("/users", userController);

app.use("/petBoard", petBoardController);

app.use("/pets", petsController);

app.use("/booking", bookingController);

app.listen(process.env.PORT || 8080, async (req, res) => {
  try {
    await connect();
    console.log("Listening on port 8080");
  } catch (error) {
    console.log(error);
  }
});
