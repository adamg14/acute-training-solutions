const mongoose = require("mongoose");
const compareHash = require("./compareHash");
const getTrainer = require("./getTrainer");

async function loginTrainer(trainerEmail, trainerPassword) {
    try {
        const trainerQuery = await getTrainer(trainerEmail);
        console.log("this should be the password hash" + trainerQuery.passwordHash);
        if (compareHash(trainerPassword, trainerQuery.passwordHash)) {
            return "sucessful login";
        } else {
            return "error occurred";
        }
    } catch (error) {
        console.log(error);
        return "error occurred";
    }
}

module.exports = loginTrainer;