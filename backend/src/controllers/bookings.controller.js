const express = require("express");

const router = express.Router();

const booking = require("../models/booking.model");

router.post("/create", async (req, res) => {
  try {
    const book = await booking.create(req.body);

    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const booked = await booking.find().lean().exec();

    res.status(200).send(booked);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/user/:id", async (req, res) => {
  try {
    const booked = await booking
      .find({ userID: req.params.id })
      .populate({ path: "userID", select: "name" })
      .populate({ path: "petBoardID", select: ["name", "address"] })
      .populate({
        path: "petID",
        select: ["name", "animalType", "image", "weight"],
      })
      .lean()
      .exec();

    res.status(200).send(booked);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.patch("/approve/:id", async (req, res) => {
  try {
    const state = {
      status: "Approved",
    };

    const book = await booking
      .findByIdAndUpdate({ _id: req.params.id }, { $set: state }, { new: true })
      .lean()
      .exec();

    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const book = await booking
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .lean()
      .exec();

    res.status(200).send(book);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const booked = await booking.findByIdAndDelete(req.params.id).lean().exec();

    res.status(200).send(booked);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
