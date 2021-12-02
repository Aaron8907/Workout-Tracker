const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name"
      },
      weight: {
        type: Number,
        required: "Enter weight"
      },
      reps: {
        type: Number,
        required: "Enter reps"
      },
      sets: {
        type: Number,
        drequired: "Enter sets"
      },
      distance: {
        type: Number,
        required: "Enter distance"
      }
    }
  ],
  totalDuration: {
    type: Number,
    required: "Enter duration"
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;