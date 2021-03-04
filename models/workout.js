const mongoose = require("mongoose");
// const { number } = require("prop-types");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: new Date() },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of workout here",
      },

      name: {
        type: String,
        trim: true,
        required: "Enter the name of workout here",
      },

      duration: {
        type: Number,
        required: "Enter the duration of the workout",
      },

      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    },
  ],
});

workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
