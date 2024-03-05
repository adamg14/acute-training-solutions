const express = require("express");
const PORT = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
const addCourse = require("./middleware/addCourse");
const addEmployee = require("./middleware/addEmployee");
const addEvent = require("./middleware/addEvent");
const addTrainer = require("./middleware/addTrainer");
const addTrainerCourse = require("./middleware/addTrainerCourse");
const assignEvent = require("./middleware/assignEvent");
const findEvent = require("./middleware/findEvent");
const registerEmployee = require("./middleware/registerEmployee");
const passwordHashing = require("./middleware/passwordHashing");
const expressSession = require("express-session");
const getEmployee = require("./middleware/getEmployee");
const compareHash = require("./middleware/compareHash");
const automatedMail = require("./middleware/automatedMail");
const cookieParser = require("cookie-parser");
const app = express();
const uuid = require("uuid");
const getTrainerByCourseRegion = require("./middleware/getTrainerByCourseRegion");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(expressSession({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}));
app.use(cookieParser());

function authenticateTrainer(req, res, next) {
    // add more authentication conditions
    if (req.session && req.session.role == "trainer") {
        next();
    } else {
        // this redirect may not work
        res.redirect("/register-employee");
    }
}

function authenticateEmployee() {
    if (req.session && req.session.role == "employee") {
        next();
    } else {
        // this redirect may not work
        res.redirect("/register-employee");
    }
}


app.post("/register-employee", async (req, res) => {
    const employeeEmail = req.body.employeeEmail;
    const employeePassword = passwordHashing(req.body.employeePassword);
    const registerEmployeeResult = await registerEmployee(employeeEmail, employeePassword);
});

app.post("/register-trainer", async (req, res) => {

});

app.post("/login-employee", async (req, res) => {
    const employeeEmail = req.body.employeeEmail;
    const employeePassword = req.body.employeePassword;
    const employeeDatabaseRecord = await getEmployee(employeeEmail);

    if (employeeDatabaseRecord[0].employeeEmail.toString() === employeeEmail && compareHash(employeePassword, employeeDatabaseRecord[0].employeePassword.toString())) {
        req.session.user = {
            email: employeeEmail,
            role: 'employee'
        };

        res.cookie("sessionId", req.sessionID, { maxAge: 900000, httpOnly: true });
        res.send("valid credentials");
    } else {
        res.send("invalid credentials");
    }
});

app.post("/add-course", async (req, res) => {
    const addCourseResult = await addCourse(req.body.courseId, req.body.courseName, req.body.sharepointURL);
    res.send(addCourseResult);
});

app.post("/add-employee", async (req, res) => {
    const addEmployeeResult = await addEmployee(req.body.employeeEmail, req.body.employeeName);
    res.send(addEmployeeResult);
});

app.post("/add-event", async (req, res) => {
    // generate an id for an event
    const eventId = uuid.v4();

    const addEventResult = await addEvent(eventId, req.body.additionalInformation, req.body.course, req.body.date, req.body.eventPostcode, req.body.eventRegion, req.body.eventType);
    console.log("this should be the result of adding the event: " + addEventResult);

    // once the event is added send an email to all the trainers within the region who can do the course
    const [filteredTrainers] = getTrainerByCourseRegion(req.body.course, req.body.eventRegion);
    if (filteredTrainers[0] == "error occurred"){
        res.send("error occurred");
    }else{
        // for each of the filtered
        if (filteredTrainers.length === 0){
            // CAN SEND THE TRAINER A LIST OF 
            res.send("no trainers within the region");
        }else{
            for (i = 0; i < filteredTrainers.length; i++){
                automatedMail(filteredTrainers[i].trainerEmail);
            }
        }
    }
});

app.post("/add-trainer", async (req, res) => {
    const addTrainerResult = await addTrainer(req.body.trainerEmail, req.body.trainerCourse, req.body.trainerName, req.body.trainerPostcode, req.body.trainerRegion, req.body.passwordHash);

    res.send(addTrainerResult);
});

app.post("/add-trainer-course", async (req, res) => {
    const addTrainerCourseResult = await addTrainerCourse(req.body.courseId, req.body.trainerEmail);

    res.send(addTrainerCourseResult);
});

// for this route add the authentication as only employees should be able to post to this route
app.post("/add-event", async (req, res) => {
    null;
});

app.post("/assign-event", async (req, res) => {
    const assignEventResult = await assignEvent(req.body.eventId, req.body.trainerId, req.body.employeeEmail);

    res.send(assignEventResult);
});

app.post("/findEvent", async (req, res) => {
    const findEventResult = await findEvent(req.body.eventId);

    res.send(findEventResult);
});

app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT);
});

// addCourse, addEmployee, addEvent, addTrainer, addTrainerCourse, assignEvent, findEvent