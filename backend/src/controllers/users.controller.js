const express = require("express");

const router = express.Router();

const User = require("../models/users.model");

router.get("/all", async (req, res) => {
  try {
    const user = await User.find().lean().exec();

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
