const mongoose = require("mongoose");
const Event = require("../models/Event");
const Employee = require("../models/Employee");
const Trainer = require("../models/Trainer");
async function bookEvent(eventId, trainerId, employeeId) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        await Event.findOneAndUpdate({ eventId: eventId },
            {
                $set: {
                    trainer: trainerId,
                    booked: employeeEmail
                }
            });


        // add it to the 
        await Employee.findOneAndUpdate({ employeeId: employeeId }, {
            $push: { events: eventId }
        });

        await Trainer.findOneAndUpdate({ trainerId: trainerId,
            $push: { events: eventId}
        });
        
        return "Event booked";
    } catch (error) {
        return ["error", error];
    }
}

module.exports = bookEvent;