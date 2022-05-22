const express = require("express");

const Pets = require("../models/pets.model");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const pet = await Pets.create(req.body);

    res.status(200).send(pet);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const pet = await Pets.find().lean().exec();

    res.status(200).send(pet);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pet = await Pets.find({ userID: req.params.id }).lean().exec();

    res.status(200).send(pet);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const pet = await Pets.findByIdAndDelete({ _id: req.params.id }).lean().exec();

    res.status(200).send(pet);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const pet = await Pets.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

    res.status(200).send(pet);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
