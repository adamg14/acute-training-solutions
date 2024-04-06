const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

// this function will return a list of trainers filtered by region and course
async function getTrainerByCourseRegion(course, region) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const trainerQueryResult = await Trainer.find({ qualifications: { $in: [course] }, trainerRegion: region });

        return trainerQueryResult;
    } catch (error) {
        return ["error occurred", error];
    }
}

module.exports = getTrainerByCourseRegion;