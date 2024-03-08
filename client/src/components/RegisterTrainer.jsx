import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function RegisterTrainer() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [postcode, setPostcode] = useState("");
    const [region, setRegion] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [inductionChecked, setInductionChecked] = useState(false);
    const [childcareChecked, setChildcareChecked] = useState(false);
    const [clinicalChecked, setClinicalChecked] = useState(false);
    const [mentalHealthChecked, setMentalHealthChecked] = useState(false);
    const [password, setPassword] = useState();

    function handleNameInput(event) {
        setName(event.target.value);
    }

    function handleEmailInput(event) {
        setEmail(event.target.value);
    }

    function handlePostcodeInput(event) {
        setPostcode(event.target.value);
    }

    function handleInductionCheckInput(event) {
        setInductionChecked(!inductionChecked);
    }

    function handleChildcareCheckInput(event) {
        setChildcareChecked(!childcareChecked);
    }

    function handleClinicalCheckInput(event) {
        setClinicalChecked(!clinicalChecked);
    }

    function handleMentalHealthCheckInput(event) {
        setMentalHealthChecked(!mentalHealthChecked);
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value);
    }

    function handleRegionChange(event) {
        setRegion(event.target.value);
    }

    async function handleFormSubmission(event) {
        event.preventDefault();
        // // validate that a region has been selected
        // if (region !== "") {
        //     // user has selected a region
        // } else {
        //     // render an error message
        //     setErrorMessage("Region not selected. Please select a region.");
        //     document.getElementById("errorMessage").removeAttribute("hidden");
        // }

        const postData = {
            email: email,
            fullName: name,
            postcode: postcode,
            region: region,
            inductionChecked: inductionChecked,
            childcareChecked: childcareChecked,
            clinicalChecked: clinicalChecked,
            mentalHealthChecked: mentalHealthChecked,
            password: password
        };

        await axios.post("http://localhost:4000/register-trainer", postData);

    }

    return (
        <div>
            <h1>Register Trainer</h1>

            <br />

            <form>
                <div className="form-group">
                    <label htmlFor="emailInput">Email Address</label>
                    <input type="text" id="emailInput" className="form-control" placeholder="Email" onChange={handleEmailInput} />
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="nameInput">Full Name</label>
                    <input type="text" id="nameInput" className="form-control" placeholder="Full Name" onChange={handleNameInput} />
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="postcodeInput">Postcode</label>
                    <input type="text" id="postcodeInput" className="form-control" placeholder="Postcode" onChange={handlePostcodeInput} />
                </div>

                <br />

                <div className="form-group">
                    <h6>Select a Region</h6>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"London"} id="London" name="region-input" />
                    <label htmlFor="London" className="form-check-label">London</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"North East"} id="ne" name="region-input" />
                    <label htmlFor="ne" className="form-check-label">North East</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"North West"} id="nw" name="region-input" />
                    <label htmlFor="nw" className="form-check-label">North West</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"Yorkshire"} id="york" name="region-input" />
                    <label htmlFor="york" className="form-check-label">Yorkshire</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"East Midlands"} id="em" name="region-input" />
                    <label htmlFor="East Midlands" className="form-check-label">East Midlands</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"West Midlands"} id="wm" name="region-input" />
                    <label htmlFor="wm" className="form-check-label">West Midlands</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South East"} id="se" name="region-input" />
                    <label htmlFor="se" className="form-check-label">South East</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South West"} id="sw" name="region-input" />
                    <label htmlFor="sw" className="form-check-label">South West</label>
                    <br />
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South West/Wales"} id="sww" name="region-input" />
                    <label htmlFor="sww" className="form-check-label">South West/Wales</label>
                    <br />
                </div>

                <br />

                <div className="form-group">
                    <h6>Select Course Qualifications</h6>
                    <div className="form-group">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" value={inductionChecked} id="induction" onChange={handleInductionCheckInput} />
                            <label htmlFor="induction">Induction & Management Training</label>
                            <br />

                            <input type="checkbox" className="form-check-input" value={childcareChecked} id="childcare" onChange={handleChildcareCheckInput} />
                            <label htmlFor="childcare">Childcare Training</label>
                            <br />

                            <label htmlFor="childcare">Clinical Training</label>
                            <input type="checkbox" className="form-check-input" value={clinicalChecked} id="clinical" onChange={handleClinicalCheckInput} />
                            <br />

                            <label htmlFor="clinical">Mental Health Training</label>
                            <input type="checkbox" className="form-check-input" value={mentalHealthChecked} id="mental-health" onChange={handleMentalHealthCheckInput} />
                            <br />
                        </div>
                    </div>
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" id="passwordInput" className="form-control" placeholder="Password" onChange={handlePasswordInput} />
                </div>

                <br />

                <div>
                    <button className="btn btn-primary" onClick={handleFormSubmission}>Register Trainer</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterTrainer;