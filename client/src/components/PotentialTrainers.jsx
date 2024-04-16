import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PotentialTrainers() {

    const location = useLocation();
    const navigate = useNavigate();
    const endpoint = location.pathname.slice(26, location.pathname.length);

    const [eventDetails, setEventDetails] = useState();
    const [qualifiedTrainersRegion, setQualifiedTrainersRegion] = useState();

    const [qualifiedTrainers, setQualifiedTrainers] = useState();

    const [regionalTrainers, setRegionalTrainers] = useState([]);


    useEffect(() => {
        const eventDetailsPostData = {
            eventId: endpoint
        };

        axios.post("http://localhost:4000/get-event", eventDetailsPostData, {withCredentials: true}).then((response) => {
            if (response.data === "not authenticated"){
                navigate("/not-authenticated");
            }else{
                const eventCourse = response.data.course;
                const eventRegion = response.data.eventRegion;

                const postBody = {
                    course: eventCourse,
                    region: eventRegion
                };

                axios.post("http://localhost:4000/get-trainer-region", postBody, {withCredentials: true}).then((result2) => {


                if (Array.isArray(result2.data) && result2.data.length >= 1) {
                    setRegionalTrainers(result2.data);
                } else {
                    setRegionalTrainers("There are no current trainers that match these specifications.");
                }

                });

                axios.post("http://localhost:4000/get-trainer-course-region", postBody, {withCredentials: true}).then((result3) => {
                    if (Array.isArray(result3.data) && result3.data.length >= 1){
                        setQualifiedTrainersRegion(result3.data);
                    }else{
                        setQualifiedTrainersRegion("There are no current trainers that match these specifications.");
                    }
                });

                axios.post("http://localhost:4000/get-trainer-course", postBody, {withCredentials: true}).then((result4) =>{
                    if (Array.isArray(result4.data) && result4.data.length >= 1){
                        setQualifiedTrainers(result4.data);
                    }else{
                        setQualifiedTrainers("There are no current trainers that match these specifications")
                    }
                });
            }

            // REPEAT THIS FOR THE NEXT TWO KINDS OF CANDIDATES
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

            const serverResponse = (await axios.post("http://localhost:4000/book-event", postBody, {withCredentials: true})).data;

            // depending on the result of the booking of an event by the trainer: 
            // redirect the employee to the dashboard once routes have been reconfigured
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