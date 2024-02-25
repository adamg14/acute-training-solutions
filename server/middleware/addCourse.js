const mongoose = require("mongoose");
const Course = require("../models/Course");

async function addCourse(_courseId, _courseName, _sharepointURL){
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const newCourse = new Course({
            courseId: _courseId,
            courseName: _courseName,
            sharepointURL: _sharepointURL
        });

        await newCourse.save();
        return true;
    } catch (error) {
        return error;
    }
}
module.exports = addCourse;