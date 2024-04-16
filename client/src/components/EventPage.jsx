import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, Link } from "react-router-dom";

function EventPage() {
    const location = useLocation();
    const currentPath = location.pathname;

    // slice the API endpoint to get the eventId of the selected event
    const eventId = currentPath.slice(7, currentPath.length);

    const potentialTrainersEndpoint = "/event/potential-trainers/" + eventId;

    const [eventDetails, setEventDetails] = useState();
    const [additionalInformation, setAdditionalInformation] = useState();
    const [course, setCourse] = useState();
    const [date, setDate] = useState();
    const [eventLocation, setLocation] = useState();
    const [eventType, setEventType] = useState();

    useEffect(() => {
        const postData = {
            eventId: eventId
        };

        axios.post("http://localhost:4000/get-event", postData, {withCredentials: true}).then((result) => {
            console.log(result.data);
            setEventDetails(result.data);
            setAdditionalInformation(result.data.additionalInformation);
            setCourse(result.data.course);
            setDate(result.data.date);
            setLocation(result.data.eventPostcode + ", " + result.data.eventRegion);
            setEventType(result.data.eventType);
        });
    });

    return (
        <div>
            <h1>Event Page</h1>
            <p>{eventType} event.</p>
            <p>Additional Information: {additionalInformation}</p>
            <p>Course: {course}</p>
            <p>Date: {date}</p>
            <p>Location {eventLocation}</p>

            <Link to={potentialTrainersEndpoint}>
                <button className="btn btn-primary">Potential Trainers</button>
            </Link>
        </div>
    );

}

export default EventPage;