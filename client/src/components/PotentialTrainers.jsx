import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PotentialTrainers() {

    const location = useLocation();
    const endpoint = location.pathname.slice(26, location.pathname.length);

    const [eventDetails, setEventDetails] = useState();
    const [qualifiedTrainersRegion, setQualifiedTrainersRegion] = useState();

    const [qualifiedTrainers, setQualifiedTrainers] = useState();

    const [regionalTrainers, setRegionalTrainers] = useState([]);


    useEffect(() => {
        const eventDetailsPostData = {
            eventId: endpoint
        };

        axios.post("http://localhost:4000/get-event", eventDetailsPostData).then((response) => {
            const eventCourse = response.data.course;
            const eventRegion = response.data.eventRegion;

            const postBody = {
                course: eventCourse,
                region: eventRegion
            };

            axios.post("http://localhost:4000/get-trainer-region", postBody).then((result2) => {


                if (Array.isArray(result2.data) && result2.data.length >= 1) {
                    setRegionalTrainers(result2.data);
                } else {
                    setRegionalTrainers("There are no current trainers that match these specifications.");
                }
            });

            // repeat this process for the two other types of candidates
        });

    });

    return (
        <div>
            <h1>Potential Trainers</h1>

            <h3>Trainers Available for this Event</h3>

            <h3>Qualified Trainers in the Region</h3>

            {/* need to format these array variables using map  */}
            {/* <p>{qualifiedTrainersRegion}</p> */}

            <h3>Qualified Trainers</h3>

            {/* <p>{qualifiedTrainers}</p> */}

            <h3>Trainers within the Region</h3>

            <PotentialTrainers potentialTrainers={regionalTrainers}></PotentialTrainers>
        </div>
    );

    function PotentialTrainers({ potentialTrainers }) {

        async function handleTrainerButtonClicked(event) {
            const postBody = {
                eventId: endpoint,
                trainerId: event.target.value
            };

            const serverResponse = (await axios.post("http://localhost:4000/book-event", postBody)).data;

            // depending on the result of the booking of an event by the trainer: 
            // REDIRECT THE TRAINER TO A SUCCESS PAGE WITH A HYPERLINK FOR THEM TO GO BACK TO THE TRAINER DASHBOARD
        }

        if (potentialTrainers === "There are no current trainers that match these specifications.") {
            return (
                <p>There are no current trainers that match these specifications.</p>
            );
        } else {
            return (
                <div>
                    {potentialTrainers.map(potentialTrainer => {
                        return (
                            <div key={potentialTrainer.trainerId}>
                                <hr />
                                <p>Trainer Name: {potentialTrainer.trainerName}</p>
                                <p>Trainer Email: {potentialTrainer.trainerEmail}</p>
                                <button onClick={handleTrainerButtonClicked}>Book Trainer</button>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
}

export default PotentialTrainers;