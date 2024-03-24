const mongoose = require("mongoose");
const Event = require("../models/Event");


async function addEvent(_eventId, _additionalInformation, _course, _date, _eventPostcode, _eventRegion, _eventType) {

    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        // add event - omit trainer and booked fields - these fields will be filled once a suitable canidate has been choosen by an employee

        const newEvent = new Event({
            eventId: _eventId,
            additionalInformation: _additionalInformation,
            course: _course,
            date: _date,
            eventPostcode: _eventPostcode,
            eventRegion: _eventRegion,
            eventType: _eventType
        });

        await newEvent.save();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const currentDate = new Date();

module.exports = addEvent;