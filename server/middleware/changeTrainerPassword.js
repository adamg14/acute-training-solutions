const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");
const passwordHashing = require("./passwordHashing");

async function changeTrainerPassword(trainerEmail, newPassword){
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const newHashedPassword = passwordHashing(newPassword);

        const updatedTrainer = Trainer.findOneAndUpdate({
            trainerEmail: trainerEmail
        },
        {
            $set: {
                trainerPassword: newHashedPassword
            }
        });

        return "Trainer record successfully update.";
    } catch (error) {
        return "error occurred";
    }
}

module.exports = changeTrainerPassword;