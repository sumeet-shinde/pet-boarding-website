const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const petBoardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    capacity: { type: String, required: true },
    cost: { type: Number, required: true },
    verified: { type: String, required: true },
    rating: { type: Number, required: true },
    summary: { type: String, required: true },
    numberOfPets: { type: String, required: true },
    dogs: { type: String, required: true },
    cats: { type: String, required: true },
    birds: { type: String, required: true },
    reptiles: { type: String, required: true },
    below10: { type: String, required: true },
    below20: { type: String, required: true },
    below40: { type: String, required: true },
    above40: { type: String, required: true },
    supervision: { type: String, required: true },
    unsupervised: { type: String, required: true },
    sleepPlace: { type: String, required: true },
    pottyBreaks: { type: String, required: true },
    walks: { type: String, required: true },
    homeType: { type: String, required: true },
    areaSize: { type: String, required: true },
    emergencyTransport: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

petBoardSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("petBoard", petBoardSchema);
