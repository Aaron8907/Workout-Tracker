const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

const WorkoutSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: "Enter exercise name"
    },
    type: {
      type: String,
      trim: true,
      required: "Enter type of exercise"
    },
    weight: {
        type: Number,
        required: "Enter weight",
        default:0
    },
    sets: {
        type: Number,
        required: "Enter number of sets",
        default:0
    },
    reps: {
        type: Number,
        required: "Enter number of reps",
        default:0
    },
    duration: {
        type: Number,
        required: "Enter duration of exercise",
        default:0
    },
    distance: {
        type: Number,
        required: "If cardio enter distance traveled",
        default:0
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  