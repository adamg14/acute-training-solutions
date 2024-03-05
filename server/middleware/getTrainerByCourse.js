const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function getTrainerByCourse(course){
    try {
        mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");
        const trainerQueryResult = await Trainer.find({ trainerCourse: { $in: [new RegExp(course, "i")] }});
        return trainerQueryResult;
    } catch (error) {
        return ["error", error];
    }
}

module.exports = getTrainerByCourse;