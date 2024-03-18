const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function getTrainerByRegion(region){
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const trainerQueryResult = await Trainer.find({ trainerRegion: region });
        return trainerQueryResult;
    } catch (error) {
        return ["error", error];
    }
}


module.exports = getTrainerByRegion;