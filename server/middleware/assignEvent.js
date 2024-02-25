// assign an event to a trainer and employee once a suitable canidate has been selected
const mongoose = require("mongoose");
const Employee = require("../models/Employee");
const Trainer = require("../models/Trainer");
const findEvent = require("./findEvent");

async function assignEvent(_eventId, _trainerId, _employeeEmail) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const selectedEvent = await findEvent(_eventId);

        // assign the event to a trainer and to an employee
        Trainer.findOneAndUpdate({ trainerId: _trainerId }, { $push: { events: selectedEvent } }).then(() => {
            if (error){
                return error;
            }else{
                Employee.findOneAndUpdate({ employeeEmail: _employeeEmail}, {$push: {booked: selectedEvent}}).then((error, result) => {
                    if (error){
                        return error;
                    }else{
                        return true;
                    }
                })
            }
        });
    } catch (error) {
        return false;
    }
}


module.exports = assignEvent;