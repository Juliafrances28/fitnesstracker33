const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("express").Router();

const PORT = process.env.PORT || 3000;
const workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  workout
    .aggregate([
      {
        $addFields: {
          totalWeight: { $sum: "$exercises.weight" },
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// You need a post route for api/workouts
router.post("/api/workouts", ({ body }, res) => {
  workout
    .create(body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  workout
    .findByIdAndUpdate(
      params.id,
      {
        $push: { exercises: body },
      },
      { new: true, runValidators: true }
    )
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workout
    .aggregate([
      { $sort: { day: -1 } },
      { $limit: 7 },
      {
        $addFields: {
          totalWeight: { $sum: "$exercises.weight" },
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
    .then(function (workouts) {
      res.json(workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
