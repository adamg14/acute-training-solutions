const mongoose = require("mongoose");
const Event = require("../models/Event");


async function addEvent(_eventId, _additionalInformation, _course, _date, _eventPostcode, _eventRegion, _eventType){

    try {
        await mongoose.connect();
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
        return false;
    }
}

module.exports = addEvent;