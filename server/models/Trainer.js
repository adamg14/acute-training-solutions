const mongoose = require("mongoose");
const eventModel = require("./Event");
const courseModel = require("./Course");
// connection string
mongoose.connect()

const trainerSchema = mongoose.Schema({
    trainerEmail: {
        type: String,
        required: true,
        unique: true
    },

    // trainer qualificiations must be one of - Nursing home staff, ... - this must be added to validations
    trainerCourse: {
        type: [courseModel],
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
        type: [eventModel],
    }
});

module.exports = mongoose.model("Trainer", trainerSchema);