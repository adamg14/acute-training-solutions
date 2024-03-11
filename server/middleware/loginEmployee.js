const mongoose = require("mongoose");
const getEmployee = require("./getEmployee");
const compareHash = require("./compareHash");


async function loginEmployee(employeeEmail, employeePassword) {
    const employeeQuery = await getEmployee(employeeEmail);
    if (compareHash(employeePassword, employeeQuery[0].employeePassword)) {
        return "successful login";
    } else {
        return "error occured";
    }
}

module.exports = loginEmployee;