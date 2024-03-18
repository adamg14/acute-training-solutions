import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PotentialTrainers() {

    const location = useLocation();
    const endpoint = location.pathname.slice(26, location.pathname.length);

    const [eventDetails, setEventDetails] = useState();
    const [qualifiedTrainersRegion, setQualifiedTrainersRegion] = useState();

    const [qualifiedTrainers, setQualifiedTrainers] = useState();

    const [regionalTrainers, setRegionalTrainers] = useState();


    useEffect(() => {
        console.log(endpoint);
        const eventDetailsPostData = {
            eventId: endpoint
        };

        const eventDetails = axios.post("http://localhost:4000/get-event", eventDetailsPostData).then((response) => {
            const eventCourse = response.data.course[0];
            const eventRegion = response.data.region;

            // get the data for the the trainers within the region who are qualified
            // IF STATEMENTS TO DETERMINE IF ANY OF THE RESPONSES HAVE A LENGTH OF  ZERO
            const qualifiedRegionalTrainersPostData = {
                course: eventCourse,
                region: eventRegion
            };

            const qualifiedTrainersPostData = {
                course: eventCourse
            };

            const regionalTrainersPostData = {
                region: eventRegion
            };

            const queryResult = response.data;

            axios.post("http://localhost:4000/get-trainer-course", qualifiedTrainersPostData).then((response2) => {
                const queryResult = response2.data;


                axios.post("http://localhost:4000/get-trainer-region");
            });
        });
    });

    return (
        <div>
            <h1>Potential Trainers</h1>

            <h3>Qualified Trainers in the Region</h3>

            <h3>Qualified Trainers</h3>

            <h3>Trainers within the Region</h3>
        </div>
    )
}

export default PotentialTrainers;