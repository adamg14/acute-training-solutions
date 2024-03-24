const mongoose = require("mongoose");
const Event = require("../models/Event");

// this function returns an array of potential trainers for a specified event
async function getPotentialTrainers(eventId) {
    try {

        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const selectedEvent = await Event.find({
            eventId: eventId
        });

        console.log(selectedEvent);
        return selectedEvent[0].potentialTrainers;
    } catch (error) {
        return "error";
    }
}


module.exports = getPotentialTrainers