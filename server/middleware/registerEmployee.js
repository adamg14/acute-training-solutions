const mongoose = require("mongoose");
const Employee = require("../models/Employee");


async function registerEmployee(employeeEmail, employeePassword) {

    try {
        // connection to the database
        mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const registerEmployee = new Employee({
            employeeEmail: employeeEmail,
            employeePassword: employeePassword
        });

        await registerEmployee.save();

        return "successful registration";
    } catch (error) {
        return "error occurred";
    }
}

module.exports = registerEmployee;