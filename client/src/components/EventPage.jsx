import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

function EventPage() {
    const location = useLocation();
    const currentPath = location.pathname;

    // slice the API endpoint to get the eventId of the selected event
    const eventId = currentPath.slice(7, currentPath.length);
   
    const [eventDetails, setEventDetails] = useState();

    useEffect(() => {
        const postData = {
            eventId: eventId
        };

        axios.post("http://localhost:4000/get-event", postData).then((result) => {
            // retrieving event details to 
            const eventRecord = result.data;
            console.log(eventRecord);
            console.log("hello world")
            setEventDetails(eventRecord);
            });
    });

    return (
        <div>
            <h1>Event Page</h1>
            <p>Event Course: { eventDetails.additionalInformation } </p>
        </div>
    );

}

export default EventPage;