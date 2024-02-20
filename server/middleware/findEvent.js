const mongoose = require("mongoose");
const Event = require("../models/Event");

async function findEvent(_eventId){

    mongoose.connect();

    const searchedEvent = Event.findOne({eventId: _eventId}).then((error, result) => {
        if (error){
            return error;
        }else{
            return result;
        }
    });
}

module.exports = findEvent;

