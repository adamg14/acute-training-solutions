const mongoose = require("mongoose");
const Employee = require("../models/Employee");


async function addEmployee(_employeeEmail, _employeeName){
    try {

        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const addEmployee = new Employee({
            employeeEmail: _employeeEmail,
            employeeName: _employeeName
        });

        return true; 
    } catch (error) {
        return error;
    }
}

module.exports = addEmployee;