const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    petBoardID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "petBoard",
      required: true,
    },
    petID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pets",
      required: true,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, required: true, default: "Not Approved" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("bookings", bookingSchema);
