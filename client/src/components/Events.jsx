import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/get-events").then((result) => {
            setEvents(result.data);
        });
    });

    return (
        <div>
            <h1>Events</h1>
            <Event events={events}></Event>
        </div>
    );

}

function Event({ events }) {
    const navigate = useNavigate();

    function handleButtonClick(event){
        const eventAPIEndpoint = event.target.value;
        navigate("/event/" + eventAPIEndpoint);
    }

    return (
        <div>
            {events.map(record => (
                <div>
                    <h6>{String(record.eventId)}</h6>
                    <p>{record.additionalInformation}</p>
                    <p>{record.date}</p>
                    <button className="btn btn-primary" value={ record.eventId } onClick={ handleButtonClick }>Select Event</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default Events;