const mongoose = require("mongoose");
const Employee = require("../models/Employee");


function addEmployee(_employeeEmail, _employeeName){
    try {

        mongoose.connect("");

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