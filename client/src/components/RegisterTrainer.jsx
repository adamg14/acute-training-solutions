import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

    function handleFormSubmission(event) {
        event.preventDefault();

        // validate that a region has been selected
        if (region !== "") {
            // user has selected a region
        } else {
            // render an error message
            setErrorMessage("Region not selected. Please select a region.");
            document.getElementById("errorMessage").removeAttribute("hidden");
        }
    }
    return (
        <div>
            <h1>Register Trainer</h1>

            <form>

                <div className="form-group">
                    <label htmlFor="emailInput">Email Address</label>
                    <input type="text" id="emailInput" className="form-control" placeholder="Email" onChange={handleEmailInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="nameInput">Full Name</label>
                    <input type="text" id="nameInput" className="form-control" placeholder="Full Name" onChange={handleNameInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="postcodeInput">Postcode</label>
                    <input type="text" id="postcodeInput" className="form-control" placeholder="Postcode" onChange={handlePostcodeInput} />
                </div>

                <div className="form-group">
                    <h3>Select Region</h3>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"London"} id="London" checked />
                    <label htmlFor="London" className="form-check-label">London</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"North East"} id="ne" />
                    <label htmlFor="ne" className="form-check-label">North East</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"North West"} id="nw" />
                    <label htmlFor="nw" className="form-check-label">North West</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"Yorkshire"} id="york" />
                    <label htmlFor="york" className="form-check-label">Yorkshire</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"East Midlands"} id="em" />
                    <label htmlFor="East Midlands" className="form-check-label">East Midlands</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"West Midlands"} id="wm" />
                    <label htmlFor="wm" className="form-check-label">West Midlands</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South East"} id="se" />
                    <label htmlFor="se" className="form-check-label">South East</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South West"} id="sw" />
                    <label htmlFor="sw" className="form-check-label">South West</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South West/Wales"} id="sww" />
                    <label htmlFor="sww" className="form-check-label">South West/Wales</label>
                </div>

                <div className="form-group">
                    <h3>Course Qualifications</h3>
                    <div className="form-check">
                        <input type="check" className="form-check-input" value={inductionChecked} id="induction" onChange={handleInductionCheckInput} />
                        <label htmlFor="induction">Induction & Management Training</label>
                        <input type="check" className="form-check-input" value={childcareChecked} id="childcare" onChange={handleChildcareCheckInput} />
                        <label htmlFor="childcare">Childcare Training</label>
                        <input type="check" className="form-check-input" value={clinicalChecked} id="clinical" onChange={handleClinicalCheckInput} />
                        <label htmlFor="clinical">Clinical Training</label>
                        <input type="check" className="form-check-input" value={mentalHealthChecked} id="mental-health" onChange={handleMentalHealthCheckInput} />
                        <label htmlFor="mental-health">Mental Health Training</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={ handlePasswordInput }/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleFormSubmission}>Register Trainer</button>
                </div>
            </form>

            <div className="alert alert-danger" hidden id="errorMessage" role="alert">
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

export default RegisterTrainer;