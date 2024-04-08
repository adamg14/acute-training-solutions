const mongoose = require("mongoose");
const Event = require("../models/Event");

async function bookEvent(eventId, trainerId, employeeEmail) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        await Event.findOneAndUpdate({ eventId: eventId },
            {
                $set: {
                    trainer: trainerId,
                    booked: employeeEmail
                }
            });
        return "Event booked";
    } catch (error) {
        return ["error", error];
    }
}

module.exports = bookEvent;