const getEmployee = require("./getEmployee");
const compareHash = require("./compareHash");


async function loginEmployee(employeeEmail, employeePassword) {
    try {
        const employeeQuery = await getEmployee(employeeEmail);
        if (compareHash(employeePassword, employeeQuery[0].employeePassword)) {
            return "successful login";
        } else {
            return "error occurred";
        }
    } catch (error) {
        return "error occurred"   
    }
}

module.exports = loginEmployee;