const mongoose = require("mongoose");
const Employee = require("../models/Employee");
const passwordHashing = require("./passwordHashing");

async function changeEmployeePassword(employeeEmail, newPassword) {
    try {

        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const newHashedPassword = passwordHashing(newPassword);
        const updatedEmployee = await Employee.findOneAndUpdate({
            employeeEmail: employeeEmail
        },
            {
                $set: {
                    employeePassword: newHashedPassword
                }
            });

        return "Employee record successfully updated";
    } catch (error) {
        return "error occurred";
    }
}


module.exports = changeEmployeePassword;