const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function registerTrainer(trainerId, email, fullName, postcode, region, qualifications, password) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const registerNewTrainer = new Trainer({
            trainerId: trainerId,
            trainerEmail: email,
            trainerName: fullName,
            trainerPostcode: postcode,
            trainerRegion: region,
            qualifications: qualifications,
            passwordHash: password
        });

        await registerNewTrainer.save();

        return "registered successfully";
    } catch (error) {
        console.log(error);
        return "error occurred";
    }
}

module.exports = registerTrainer;