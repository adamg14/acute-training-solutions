// the page where trainers can see potentially compantible events and state their availability
// when the button is cliked - add the trainer to the array field of potential trainers

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function PotentialEvents() {

    const location = useLocation();
    const pathname = location.pathname.slice(8, location.pathname.length);

    const [region, setRegion] = useState();
    const [course, setCourse] = useState();

    const [qualifiedRegionalEvents, setQualifiedRegionalEvents] = useState([]);
    const [qualifiedEvents, setQualifiedEvents] = useState([]);
    const [regionalEvents, setRegionalEvents] = useState([]);

    // NEED TO ADD A TRAINERID TO THE SCHEMA SO IT CAN BE USED AS AN ENDPOINT
    useEffect(() => {
        const postBody = {
            // EDIT THIS KEY VALUE PAIR ONCE SCHEMA PROPERLY REEVALUATED
            trainerEmail: "adam@email.com",
            course: course,
            region: region
        };

        // server request for details about the logged in trainer
        axios.post("http://localhost:4000/get-trainer", postBody).then((result) => {
            setRegion(result.data.trainerRegion);
            setCourse(result.data.trainerCourse);

            // get the courses the trainer is qualified to do within their region
            axios.post("http://localhost:4000/get-events-course-region", postBody).then((result2) => {
                setQualifiedRegionalEvents(result2.data);
                // get the courses that the trainer is qualified for
                axios.post("http://localhost:4000/get-events-course", postBody).then((result3) => {
                    setQualifiedEvents(result3.data);
                    axios.post("http://localhost:4000/get-events-region", postBody).then((result4) => {
                        setRegionalEvents(result4.data);
                    });

                });
            });
        });
    });

    return (
        <div>
            <h1>Upcoming Events</h1>

            <h3>Events you Qualify for in your Region</h3>

            <DisplayEvents events={qualifiedRegionalEvents}></DisplayEvents>
            <h3>Events you Qualify for</h3>

            <DisplayEvents events={qualifiedEvents}></DisplayEvents>
            <h3>Events in your Region</h3>

            <DisplayEvents events={regionalEvents}></DisplayEvents>
        </div>
    );

    function DisplayEvents({ events }) {

        const [eventId, setEventId] = useState();

        function handlePotentialTrainer(event) {
            console.log("BUTTON CLICKEDDDDD");
            // add the trainer as a potential trainer
            setEventId(event.targe.value);
            
            const postBody = {
                // THE TRAINER EMAIL SHOULD BE REPLACED WITH THE SESSION OBJECT ON THE SERVER - OR ADD A TRAINERID TO THE DATABASE SCHEMA
                eventId: eventId,
                trainerEmail: "adam@email.com",
            };

            axios.post("http://localhost:4000/add-potential-trainer", postBody).then((result) => {
                console.log("this should be the result" + result.data);
            });
        }

        if (events.length == 0) {
            return (
                <p>No current events meet these requirements.</p>
            );
        }
        return (
            <div>
                {events.map(regionalEvent => (
                    <div key={regionalEvent.eventId}>
                        <h6>{regionalEvent.additionalInformation}</h6>
                        <button className="btn btn-primary" onClick={ handlePotentialTrainer } value={regionalEvent.eventId}>Sign up to be a potential trainer for this event.</button>

                        <div className="alert alert-primary" hidden id="eventSelectedMessage">
                            You have submitted your availability. Your application will now be considered by our employees and you will be contacted if you are selected to carry out this event.
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default PotentialEvents;