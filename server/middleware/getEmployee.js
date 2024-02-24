const mongoose = require("mongoose");
const Employee = require("../models/Employee");

async function getEmployee(employeeEmail) {
    const findEmployee = await Employee.find({ employeeEmail: employeeEmail }).exec();
    return findEmployee;
}

module.exports = getEmployee;
