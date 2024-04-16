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

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
};

app.use(cors(corsOptions));

app.use(expressSession({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 600000
    }
}));

app.use(cookieParser());

// for routes that only trainer can access - employees should not access these routes
function authenticateTrainer(req, res, next) {
    try {
        if (req.session.user.email != null && req.session.user.role == "Trainer"){
            next();
        }else{
            res.send("not authenticated");
        }
    } catch (error) {
        // if there is no session object
        res.send("not authenticated");
    }
}

// for routes that only employees can access - employees should not access these routes
function authenticateEmployee(req, res, next) {
    try {
        if (req.session.user.email != null && req.session.user.role == "Employee"){
            next();
        }else{
            res.send("not authenicated");
        }
    } catch (error) {
        res.send("not authenticated");
    }
}

// for routes which both - still must be authenticated as a valid user of the web application to access the route
function authenticateUser(req, res, next){
    try {
        if (req.session.user.email != null){
            next();
        }else{
            res.send("not authenticated");
        }
    } catch (error) {
        res.send("not authenticated");
    }
}

app.post("/register-employee", async (req, res) => {
    try {
        const employeeId = uuid.v4();
        const employeeEmail = req.body.employeeEmail;
        const employeePassword = passwordHashing(req.body.employeePassword);
        const registerEmployeeResult = await registerEmployee(employeeId, employeeEmail, employeePassword);
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

        res.send("successful login");
    } else {
        res.send("error occurred");
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

        
        res.send("successful login");
    } else {
        res.send("error occured");
    }
});

app.get("/get-events", authenticateEmployee, async (req, res) => {
    console.log("this should be the user object " + req.session.user);
    const events = await getEvents();
    res.send(events);
});

app.post("/get-event", authenticateUser ,async (req, res) => {
    const getEventResult = await getEvent(req.body.eventId);
    res.send(getEventResult);
});

app.post("/get-events-course-region", authenticateTrainer, async (req, res) => {
    const getEventsResult = await getEventByCourseRegion(req.body.course, req.body.region);
    res.send(getEventsResult);
});

app.post("/get-events-course", authenticateTrainer ,async (req, res) => {
    const getEventsResult = await getEventsByCourse(req.body.course);
    res.send(getEventsResult);
});

app.post("/get-events-region", authenticateTrainer, async (req, res) => {
    const getEventsResult = await getEventsByRegion(req.body.region);
    res.send(getEventsResult);
});

app.post("/edit-trainer-password", authenticateTrainer, async (req, res) => {
    // get the email of the trainer from the session that is sending a request to this route
    const trainerEmail = req.session.user.email;
    const newPassword = req.body.newPassword;

    const editPasswordResult = await changeTrainerPassword(trainerEmail, newPassword);

    res.send(editPasswordResult);
});


app.post("/edit-employee-password", authenticateEmployee,async (req, res) => {
    const employeeEmail = req.session.user.email;
    const newPassword = req.body.newPassword;

    const editPasswordResult = await changeEmployeePassword
        (employeeEmail, newPassword);

    res.send(editPasswordResult);
});

app.post("/add-course", authenticateEmployee ,async (req, res) => {
    const addCourseResult = await addCourse(req.body.courseId, req.body.courseName, req.body.sharepointURL);
    res.send(addCourseResult);
});

app.post("/edit-course/:courseId", authenticateEmployee, async (req, res) => {
    // create a function for this route 
});


app.post("/add-event", authenticateEmployee, async (req, res) => {
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



app.post("/add-potential-trainer", authenticateTrainer, async (req, res) => {
    // trainerEmail SHOULD EITHER COME FROM THE SESSION OBJECT OR ADD A TRAINER ID TO BE ADDED TO THE API ENDPOINT
    // WRITE A FUNCTION THAT CALCULATES THE DISTANCE BETWEEN TWO POSTCODES FOR THE THIRD ARGUMENT
    const addPotentialTrainerResult = await addPotentialTrainer(req.body.eventId, req.body.trainerId, req.body.distance);
    res.send(addPotentialTrainerResult);
});

// only employees should be able to access this route because trainers should not be allowed to see information about other trainers - this is prevented in the web application by using authentication 
app.post("/get-trainer", authenticateUser, async (req, res) => {
    // SHOULD GET THIS DATA FROM THE SESSION OBJECT FOR SECURITY REASONS
    const databaseQuery = await getTrainer(req.body.trainerEmail);
    res.send(databaseQuery);
});

app.post("/get-trainer-course-region", authenticateEmployee, async (req, res) => {
    const course = req.body.course;
    const region = req.body.region;
    const trainerQueryResult = await getTrainerByCourseRegion(course, region);
    res.send(trainerQueryResult);
});

app.post("/get-trainer-course", authenticateEmployee, async (req, res) => {
    const course = req.body.course;

    const trainerQueryResult = await getTrainerByCourse(course);

    res.send(trainerQueryResult);
});

app.post("/get-trainer-region", authenticateEmployee, async (req, res) => {
    const region = req.body.region;

    const trainerQueryResult = await getTrainerByRegion(region);

    res.send(trainerQueryResult);
});



app.post("/book-event", authenticateEmployee, async (req, res) => {
    console.log("this should be the session object" + req.session.user);
    // get the email of the employee from the session object
    const bookEventResult = await bookEvent(req.body.eventId, req.body.trainerId, req.session.user.email);
    res.send(bookEventResult);
});

// double check the authentication for this route
app.post("/assign-event/:eventId/:trainerId", authenticateUser, async (req, res) => {
    const assignEventResult = await assignEvent(req.body.eventId, req.body.trainerId, req.body.employeeEmail);

    res.send(assignEventResult);
});


app.post("/findEvent", authenticateUser,async (req, res) => {
    const findEventResult = await findEvent(req.body.eventId);

    res.send(findEventResult);
});

app.get("/:eventId/potential-trainers", authenticateTrainer, async (req, res) => {
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