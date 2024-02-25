const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");
const Course = require("../models/Course");

async function addTrainerCourse(_courseId, _trainerEmail) {
    
    mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0")
    Course.findOne({ courseId: _courseId }).then((databaseCourse) => {
        if (databaseCourse) {
            Trainer.findOneAndUpdate({ trainerEmail: _trainerEmail }, { $push: { trainerCourse: databaseCourse } }).then((error, result) => {
                if (error) {
                    return error;
                } else {

                    return true || result;
                }
            });
        } else {
            return false;
        }
    })
}

module.exports = addTrainerCourse;