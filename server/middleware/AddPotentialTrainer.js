const mongoose = require("mongoose");
const Event = require("../models/Event");

async function AddPotentialTrainer(eventId, trainerEmail, distance) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const newPotentialTrainer = {
            trainerEmail: trainerEmail,
            distance: distance,
            selected: false
        };

        const selectedEvent = await Event.find({eventId: eventId});

        selectedEvent.potentialTrainers.push(newPotentialTrainer);

        await selectedEvent.save();

        return "Potential trainer added";
    } catch (error) {
        console.log(error);
        return "error";
    }


};

AddPotentialTrainer("568f5873-5f22-4e1c-adc4-d4b7085bccea", "adam@email.com", 1).then((result) => {
    console.log(result);
});
module.exports = AddPotentialTrainer;