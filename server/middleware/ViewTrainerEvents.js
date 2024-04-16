const mongoose = require("mongoose");
const Event = require("../models/Event");

async function viewTrainerEvents(trainerEmail){
    try {
        const trainerEvents = await Event.find({selectedTrainer: trainerEmail});
        return trainerEvents;
    } catch (error) {
        return "error occurred";
    }
}

module.exports = viewTrainerEvents;