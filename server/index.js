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
const cookieParser = require("cookie-parser");
const app = express();

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
    const addEventResult = await addEvent(req.body.eventId, req.body.additionalInformation, req.body.course, req.body.date, req.body.eventPostcode, req.body.eventRegion, req.body.eventType);
    res.send(addEventResult);
});

app.post("/add-trainer", async (req, res) => {
    const addTrainerResult = await addTrainer(req.body.trainerEmail, req.body.trainerCourse, req.body.trainerName, req.body.trainerPostcode, req.body.trainerRegion, req.body.passwordHash);

    res.send(addTrainerResult);
});

app.post("/add-trainer-course", async (req, res) => {
    const addTrainerCourseResult = await addTrainerCourse(req.body.courseId, req.body.trainerEmail);

    res.send(addTrainerCourseResult);
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