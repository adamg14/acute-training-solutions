const mongoose = require("mongoose");
const compareHash = require("./compareHash");
const getTrainer = require("./getTrainer");

async function loginTrainer(trainerEmail, trainerPassword) {
    try {
        const trainerQuery = await getTrainer(trainerEmail);

        if (compareHash(trainerPassword, trainerQuery[0].passwordHash)) {
            return "sucessful login";
        } else {
            return "error occurred";
        }
    } catch (error) {
        return "error occurred";
    }
}

module.exports = loginTrainer;