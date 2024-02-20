const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function addTrainer(_trainerEmail, _trainerCourse, _trainerName, _trainerPostcode, _trainerRegion, _passwordHash) {

    try {
        // connect to the mongoose database
        await mongoose.connect();

        // create a new Trainer object using the function arguments - omit the events field as it will be empty array at the initialisation stage
        const newTrainer = new Trainer({
            trainerEmail: _trainerEmail,
            trainerCourse: _trainerCourse,
            trainerName: _trainerName,
            trainerPostcode: _trainerPostcode,
            trainerRegion: _trainerRegion,
            passwordHash: _passwordHash
        });

        await newTrainer.save();

        // return true when a trainer has been added to the databse
        return true;
    } catch (error) {
        // if a database / connection error occurs when addding the trainer
        return error;
    }
}


module.exports = addTrainer;