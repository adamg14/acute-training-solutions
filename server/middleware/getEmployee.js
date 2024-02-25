const mongoose = require("mongoose");
const Employee = require("../models/Employee");

async function getEmployee(employeeEmail) {

    mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

    const findEmployee = await Employee.find({ employeeEmail: employeeEmail }).exec();
    
    return findEmployee;
}

// an example of a record returned by the function 
// [
//     {
//       _id: new ObjectId('65d7a22cde737ee7767f73ba'),
//       employeeEmail: 'adam@email.com',
//       employeePassword: 'adam',
//       booked: [],
//       __v: 0
//     }
//   ]
  
module.exports = getEmployee;
