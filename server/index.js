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
const registerTrainer = require("./middleware/registerTrainer");
const getTrainerByCourse = require("./middleware/getTrainerByCourse");
const loginEmployee = require("./middleware/loginEmployee");
const loginTrainer = require("./middleware/loginTrainer");
const changeTrainerPassword = require("./middleware/changeTrainerPassword");
const changeEmployeePassword = require("./middleware/changeEmployeePassword");
const getEvents = require("./middleware/getEvents");
const getEvent = require("./middleware/getEvent");
const getTrainerByRegion = require("./middleware/getTrainerByRegion");
const getTrainer = require("./middleware/getTrainer");
const getEventByCourseRegion = require("./middleware/getEventsByCourseRegion");
const getEventsByCourse = require("./middleware/getEventsByCourse");
const getEventsByRegion = require("./middleware/getEventsByRegion");
const addPotentialTrainer = require("./middleware/AddPotentialTrainer");
const bookEvent = require("./middleware/bookEvent");


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
    try {
        const employeeEmail = req.body.employeeEmail;
        const employeePassword = passwordHashing(req.body.employeePassword);
        const registerEmployeeResult = await registerEmployee(employeeEmail, employeePassword);
        res.send(registerEmployeeResult);
    } catch (error) {
        res.send("error occurred");
    }
});

app.post("/register-trainer", async (req, res) => {
    const trainerId = uuid.v4();
    const trainerPassword = passwordHashing(req.body.password);
    const registerResult = await registerTrainer(trainerId, req.body.email, req.body.fullName, req.body.postcode, req.body.region, req.body.qualifications, trainerPassword);
    res.send(registerResult);
});

app.post("/login-employee", async (req, res) => {
    const employeeEmail = req.body.employeeEmail;
    const employeePassword = req.body.employeePassword;
    const correctCredentials = await loginEmployee(employeeEmail, employeePassword);

    if (correctCredentials === "successful login") {
        req.session.user = {
            email: employeeEmail,
            role: "Employee"
        };

        // one hour cookie
        res.cookie("sessionId", req.sessionID, { maxAge: 600 * 1000 });

        res.send("successful login");
    } else {
        res.send("error occured");
    }
});

app.post("/login-trainer", async (req, res) => {
    const trainerEmail = req.body.trainerEmail;
    const trainerPassword = req.body.trainerPassword;
    const correctCredentials = await loginTrainer(trainerEmail, trainerPassword);

    if (correctCredentials === "sucessful login") {
        req.session.user = {
            email: trainerEmail,
            role: "Trainer"
        };

        // one hour cookie
        res.cookie("sessionId", req.sessionID, { maxAge: 600 * 1000 });

        res.send("successful login");
    } else {
        res.send("error occured");
    }
});

app.get("/get-events", async (req, res) => {
    const events = await getEvents();
    res.send(events);
});

// get Event for the individual get Event page
app.post("/get-event", async (req, res) => {
    const getEventResult = await getEvent(req.body.eventId);
    res.send(getEventResult);
});

app.post("/get-events-course-region", async (req, res) => {
    const getEventsResult = await getEventByCourseRegion(req.body.course, req.body.region);
    res.send(getEventsResult);
});

app.post("/get-events-course", async (req, res) => {
    const getEventsResult = await getEventsByCourse(req.body.course);
    res.send(getEventsResult);
});

app.post("/get-events-region", async (req, res) => {
    const getEventsResult = await getEventsByRegion(req.body.region);
    res.send(getEventsResult);
});

app.post("/edit-trainer-password", async (req, res) => {
    // get the email of the trainer from the session that is sending a request to this route
    const trainerEmail = req.session.user.email;
    const newPassword = req.body.newPassword;

    const editPasswordResult = await changeTrainerPassword(trainerEmail, newPassword);

    res.send(editPasswordResult);
});


app.post("/edit-employee-password", async (req, res) => {
    const employeeEmail = req.session.user.email;
    const newPassword = req.body.newPassword;

    const editPasswordResult = await changeEmployeePassword
        (employeeEmail, newPassword);

    res.send(editPasswordResult);
});

app.post("/add-course", async (req, res) => {
    const addCourseResult = await addCourse(req.body.courseId, req.body.courseName, req.body.sharepointURL);
    res.send(addCourseResult);
});

app.post("/edit-course/:courseId", async (req, res) => {
    // create a function for this route 
});

// no longer need this course
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
    const qualifiedTrainers = await getTrainerByCourse(req.body.course);
    const regionalTrainers = await getTrainerByRegion(req.body.eventRegion);
    const qualifiedRegionalTrainers = await getTrainerByCourseRegion(req.body.course, req.body.eventRegion);

    const potentialTrainers = qualifiedTrainers.concat(regionalTrainers, qualifiedRegionalTrainers);

    const uniquePotentialTrainers = [...new Set(potentialTrainers)];

    // sending an email to each potential trainers notifying them of an added event
    for (let i = 0; i < uniquePotentialTrainers.length; i++){
        let trainerEmailAddress = uniquePotentialTrainers[i].trainerEmail;
        automatedMail(trainerEmailAddress);
    }
});

// no longer need this route
app.post("/add-trainer", async (req, res) => {
    const addTrainerResult = await addTrainer(req.body.trainerEmail, req.body.trainerCourse, req.body.trainerName, req.body.trainerPostcode, req.body.trainerRegion, req.body.passwordHash);

    res.send(addTrainerResult);
});

// no longer need this route
app.post("/add-trainer-course", async (req, res) => {
    const addTrainerCourseResult = await addTrainerCourse(req.body.courseId, req.body.trainerEmail);

    res.send(addTrainerCourseResult);
});

app.post("/add-potential-trainer", async (req, res) => {
    // trainerEmail SHOULD EITHER COME FROM THE SESSION OBJECT OR ADD A TRAINER ID TO BE ADDED TO THE API ENDPOINT
    // WRITE A FUNCTION THAT CALCULATES THE DISTANCE BETWEEN TWO POSTCODES FOR THE THIRD ARGUMENT
    const addPotentialTrainerResult = await addPotentialTrainer(req.body.eventId, req.body.trainerId, req.body.distance);
    res.send(addPotentialTrainerResult);
});

app.post("/get-trainer", async (req, res) => {
    // SHOULD GET THIS DATA FROM THE SESSION OBJECT FOR SECURITY REASONS
    const databaseQuery = await getTrainer(req.body.trainerEmail);
    res.send(databaseQuery);
});

app.post("/get-trainer-course-region", async (req, res) => {
    const course = req.body.course;
    const region = req.body.region;
    const trainerQueryResult = await getTrainerByCourseRegion(course, region);
    res.send(trainerQueryResult);
});

app.post("/get-trainer-course", async (req, res) => {
    const course = req.body.course;

    const trainerQueryResult = await getTrainerByCourse(course);

    res.send(trainerQueryResult);
});

app.post("/get-trainer-region", async (req, res) => {
    const region = req.body.region;

    const trainerQueryResult = await getTrainerByRegion(region);

    res.send(trainerQueryResult);
});


// ADD THE AUTHENTICATETRAINER FUNCTION TO VERIFY
app.post("/book-event", async (req, res) => {
    // get the email of the employee from the session object
    const bookEventResult = await bookEvent(req.body.eventId, req.body.trainerId, req.session.user.email);
    res.send(bookEventResult);
});

app.post("/assign-event/:eventId/:trainerId", async (req, res) => {
    const assignEventResult = await assignEvent(req.body.eventId, req.body.trainerId, req.body.employeeEmail);

    res.send(assignEventResult);
});

app.post("/findEvent", async (req, res) => {
    const findEventResult = await findEvent(req.body.eventId);

    res.send(findEventResult);
});

app.get("/:eventId/potential-trainers", async (req, res) => {
    // render the potential trainers for a specific event to the employee
    const selectedEvent = await findEvent(req.params.eventId);

    // retrieve the region and the course of the selected event
    const eventRegion = selectedEvent.eventRegion;
    const eventPostcode = selectedEvent.eventPostcode;
    const eventCourse = selectedEvent.course;

    // the candiates that are strong candidates - match with region and course
    const [strongCanidates] = getTrainerByCourseRegion(eventCourse, eventRegion);
    const [allCandidates] = getTrainerByCourse(eventCourse);

    // render both of these lists of canidates to the employee on the frontend - and allow them to selcted the trainer that is the most suitable for the event
    // ...
});

app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT);
});

// addCourse, addEmployee, addEvent, addTrainer, addTrainerCourse, assignEvent, findEvent