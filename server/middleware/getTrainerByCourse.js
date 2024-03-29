const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function getTrainerByCourse(course){
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const trainerQueryResult = await Trainer.find({ trainerCourse: course });
        return trainerQueryResult;
    } catch (error) {
        return ["error", error];
    }
}


module.exports = getTrainerByCourse;