const bcrypt = require("bcrypt");
const saltRounds = 10;


function compareHash(plaintextPassword, hashedPassword) {
    if (bcrypt.compareSync(plaintextPassword, hashedPassword)) {
        return true;
    } else {
        return false;
    }
}

module.exports = compareHash;