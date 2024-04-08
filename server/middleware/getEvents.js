// either in this function or another function add a filter to return all the events that have not been assigned to a trainer
const mongoose = require("mongoose");
const Event = require("../models/Event");


async function getEvents() {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        // find all the events that aren't assigned to a trainer
        const events = await Event.find({
            $or: [
                { trainer: { $size: 0 } },
                { trainer: "" }
            ]
        }).exec();
        return events;
    } catch (error) {
        return "An error occurred";
    }
}



module.exports = getEvents;
