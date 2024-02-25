const bcrypt = require("bcrypt");
const saltRounds = 10;

function passwordHashing(plaintextPasword) {
    const generateSalt = bcrypt.genSaltSync(saltRounds);
    const hashedpassword = bcrypt.hashSync(plaintextPasword, saltRounds);

    return hashedpassword
}


module.exports = passwordHashing;