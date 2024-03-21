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

    const [regionalEvents, setRegionalEvents] = useState([]);
    useEffect(() => {
        const postBody = {
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

                // get teh courses that the trainer is qualified for
                axios.post("http://localhost:4000/get-events-course", postBody).then((result3) => {
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

            <h3>Events you Qualify for</h3>
            <h3>Events in your Region</h3>

            <RegionalEvents events={regionalEvents}></RegionalEvents>
        </div>
    );

    function RegionalEvents({ events }) {

        function handleButtonClick(event) {
            // add the trainer as a potential trainer
            console.log(event.target.value);
            console.log("hello");
        }

        return (
            <div>
                {events.map(regionalEvent => (
                    <div>
                        <h6>{regionalEvent.additionalInformation}</h6>
                        <button className="btn btn-primary" onClick={handleButtonClick} value={regionalEvent.eventId}>Sign up to be a potential trainer for this event.</button>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default PotentialEvents