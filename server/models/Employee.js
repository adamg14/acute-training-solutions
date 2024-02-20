const mongoose = require("mongoose");
const eventModel = require("./Event");
// connection string
mongoose.connect();

const employeeSchema = mongoose.Schema({
    employeeEmail: {
        type: String,
        required: true,
        unique: true
    },

    employeeName: {
        type: String,
        required: true
    },
    
    booked: {
        type: [eventModel]
    }
});

module.exports = mongoose.model("Employee", employeeSchema);