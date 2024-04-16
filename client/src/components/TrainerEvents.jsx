import React, {useState, useEffect} from "react";
import axios from "axios";

function TrainerEvents(){
    const [setTrainerEvents, trainerEvents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/view-trainer-events", {withCredentials: true}).then((result) => {
            // check that result.data is an array of at least length 1 - this will impact the display on the frontend
            setTrainerEvents(result)
        });
    });

    return (
        <div>
            <h1>My Events</h1>
        </div>
    );
}

export default TrainerEvents;