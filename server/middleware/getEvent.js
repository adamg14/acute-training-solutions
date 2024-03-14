const mongoose = require("mongoose");
const Event = require("../models/Event");

async function getEvent(eventId) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const requestedEvent = await Event.find({ eventId: eventId }).exec();

        return requestedEvent[0];
    } catch (error) {
        return "An error occurred";
    }
}

module.exports = getEvent;
