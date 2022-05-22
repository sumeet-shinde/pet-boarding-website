const express = require("express");

const router = express.Router();

const petboard = require("../models/petBoard.model");

router.post("/create", async (req, res) => {
  try {
    const board = await petboard.create(req.body);

    res.status(200).send(board);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const board = await petboard.find().lean().exec();

    res.status(202).send(board);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const board = await petboard.findById(req.params.id).lean().exec();

    res.status(202).send(board);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    let { page, size, sorting, skip } = req.query;

    if (!page) {
      page = 1;
    }

    if (!size) {
      size = 5;
    }

    if (!skip) {
      skip = 0;
    }

    const limit = parseInt(size);

    skip = parseInt((page-1) * size);

    const user = await petboard
      .find()
      .sort({ cost: sorting, _id: 1 })
      .limit(limit)
      .skip(skip);

    res.status(202).send({
      page,
      size,
      docs: user,
    });

    // res.status(202).send(board);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/rate/:rating", async (req, res) => {
  try {
    const board = await petboard
      .find({ rating: req.params.rating })
      .lean()
      .exec();

    res.status(202).send(board);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const board = await petboard
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();

    res.status(200).send(board);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const board = await petboard.findByIdAndDelete(req.params.id).lean().exec();

    res.status(200).send(board);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
