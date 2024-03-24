const mongoose = require("mongoose");
const Event = require("../models/Event");

async function addPotentialTrainer(eventId, trainerEmail, distance) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const newPotentialTrainer = {
            trainerEmail: trainerEmail,
            distance: distance
        };

        const selectedEvent = await Event.updateOne({ eventId: eventId }, { $push: { potentialTrainers: newPotentialTrainer } });

        console.log(selectedEvent);

        // await selectedEvent.save();

        return "Potential trainer added";
    } catch (error) {
        console.log(error);
        return "error";
    }


};



module.exports = addPotentialTrainer;