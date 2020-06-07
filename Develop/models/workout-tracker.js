const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            variation: {
                type: String,
                trim: true,
                required: "Please select your exercise type."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of your exercise."
            },
            duration: {
                type: String,
                trim: true,
                required: "Please enter the duration of your exercise."
            },
            weight: {
                type: Number,
                trim: true,
            },
            reps: {
                type: Number,
                trim: true,
                required: "Please enter the number of reps completed."
            },
            sets: {
                type: Number,
                trim: true,
                required: "Please enter the number of sets completed."
            },
            distance: {
                type: Number,
                trim: true
            }
        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;