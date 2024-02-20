const mongoose = require("mongoose");
const courseModel = require("./Course");
const trainerModel = require("./Trainer");
const employeeModel = require("./Employee");

// connection string
mongoose.connect();

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
        type: [courseModel],
        required: true
    },

    trainer: {
        type: [trainerModel],
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
        type: employeeModel
    }
});

module.exports = mongoose.model("Event", eventSchema);