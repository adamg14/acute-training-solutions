const mongoose = require("mongoose");
const Event = require("../models/Event");


async function getEventsByRegion(region) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");
        const eventsQuery = await Event.find({eventRegion: region});
        return eventsQuery;
    } catch (error) {
        return ["error occurred", error];
    }
}

module.exports = getEventsByRegion;