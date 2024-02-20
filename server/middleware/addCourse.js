const mongoose = require("mongoose");
const Course = require("../models/Course");

async function addCourse(_courseId, _courseName, _sharepointURL){
    try {
        await mongoose.connect();

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