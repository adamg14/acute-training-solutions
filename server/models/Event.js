const mongoose = require("mongoose");
const courseModel = require("./Course");
const trainerModel = require("./Trainer");
const employeeModel = require("./Employee");

// connection string
mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

const eventSchema = mongoose.Schema({
    eventId: {
        type: String,
        required: true,
        unique: true
    },

    additionalInformation: {
        type: String
    },

    course: {
        type: String,
        required: true
    },

    trainer: {
        type: [String],
        required: true
    },

    date: {
        type: Date,
        required: true,
    },

    eventPostcode: {
        type: String,
        required: true
    },

    eventRegion: {
        type: String,
        required: true
    },

    // face-to-face training, online webinar training, virtual learning
    eventType: {
        type: String,
        required: true
    },

    booked: {
        type: [String]
    }
});

module.exports = mongoose.model("Event", eventSchema);