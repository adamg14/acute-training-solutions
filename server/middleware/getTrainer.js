const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function getTrainer(trainerEmail) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const findTrainer = await Trainer.find({ trainerEmail: trainerEmail });

        return findTrainer[0];
    } catch (error) {
        return "Error occurred";
    }
}

module.exports = getTrainer;