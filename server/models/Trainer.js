const mongoose = require("mongoose");
const eventModel = require("./Event");
const courseModel = require("./Course");
// connection string
mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0")

const trainerSchema = mongoose.Schema({
    trainerEmail: {
        type: String,
        required: true,
        unique: true
    },


    trainerCourse: {
        type: [String],
        required: true
    },

    trainerName: {
        type: String,
        required: true
    },

    trainerPostcode: {
        type: String,
        required: true
    },

    // the trainer's region is a predefined list
    trainerRegion: {
        type: String,
        required: true
    },

    passwordHash: {
        type: String,
        required: true
    },

    events: {
        type: [String],
    }
});

module.exports = mongoose.model("Trainer", trainerSchema);