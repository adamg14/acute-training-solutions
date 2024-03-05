const mongoose = require("mongoose");
const Event = require("../models/Event");

async function getEventsByCourse(course){
    try {
        mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");
        const eventsQuery = await Event.find({ course: { $in: [new RegExp(course, "i")] }});
        return eventsQuery;
    } catch (error) {
        return ["error occurred", error];
    }
}

module.exports = getEventsByCourse;