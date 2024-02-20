const mongoose = require("mongoose");

// connection string
mongoose.connect();

const courseSchema = mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unqiue: true
    },

    courseName: {
        type: String,
        required: true
    },

    // create a function to update this
    sharepointURL:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Course", courseSchema);