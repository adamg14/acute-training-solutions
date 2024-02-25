const mongoose = require("mongoose");
const Event = require("../models/Event");

async function findEvent(_eventId){

    mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

    const searchedEvent = Event.findOne({eventId: _eventId}).then((error, result) => {
        if (error){
            return error;
        }else{
            return result;
        }
    });
}

module.exports = findEvent;

