const mongoose = require("mongoose");
const eventModel = require("./Event");
const courseModel = require("./Course");
// connection string
mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0")

const trainerSchema = mongoose.Schema({
    // trainerId added to the schema to be used as a unique API endpoint 
    trainerId: {
        type: String,
        required: true,
        unqiue: true
    },

    trainerEmail: {
        type: String,
        required: true,
        unique: true
    },


    qualifications: {
        // the array is in the consistent order of: induction, childcare, clinical, mental health
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