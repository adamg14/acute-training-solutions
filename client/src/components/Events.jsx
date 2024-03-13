import React, { useState, useEffect } from "react";
import axios from "axios";

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
    return (
        <div>
            {events.map(record => (
                <div>
                    <h6>{String(record.eventId)}</h6>
                    <p>{record.additionalInformation}</p>
                    <p>{record.date}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default Events;