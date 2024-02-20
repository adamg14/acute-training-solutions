const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");
const Course = require("../models/Course");

async function addTrainerCourse(_courseId, _trainerEmail) {
    await mongoose.connect();
    
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