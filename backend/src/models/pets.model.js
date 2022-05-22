const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    animalType: { type: String, require: true },
    weight: { type: Number, require: true },
    image: { type: String, require: true },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("pets", petSchema);
