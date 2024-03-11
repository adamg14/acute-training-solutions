const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function registerTrainer(email, fullName, postcode, region, induction, childcare, clinical, mentalHealth, password) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const registerNewTrainer = new Trainer({
            trainerEmail: email,
            trainerName: fullName,
            trainerPostcode: postcode,
            trainerRegion: region,
            trainerCourse: [induction, childcare, clinical, mentalHealth],
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