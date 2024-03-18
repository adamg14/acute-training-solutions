const mongoose = require("mongoose");
const eventModel = require("./Event");

// connection string
mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

const employeeSchema = mongoose.Schema({
    employeeEmail: {
        type: String,
        required: true,
        unique: true
    },

    employeePassword: {
        type: String,
        required: true
    },

    events: {
        type: [String]
    }
});

module.exports = mongoose.model("Employee", employeeSchema);