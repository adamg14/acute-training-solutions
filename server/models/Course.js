const mongoose = require("mongoose");

// connection string
mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

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