import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterTrainer() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [postcode, setPostcode] = useState("");
    const [region, setRegion] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState();
    const [registered, setRegistered] = useState(false);
    const [qualifications, setQualifications] = useState([]);
    useEffect(() => {
        if (registered) {
            navigate("/trainer-login");
        }
    });
    function handleNameInput(event) {
        setName(event.target.value);
    }

    function handleEmailInput(event) {
        setEmail(event.target.value);
    }

    function handlePostcodeInput(event) {
        setPostcode(event.target.value);
    }

    function handleQualificationsInput(event) {
        console.log(event.target.value);

        const value = event.target.value;
        const checked = event.target.checked;

        if (checked) {
            setQualifications([...qualifications, value]);
        } else {
            setQualifications(qualifications.filter((item) => item !== value));
        }
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value);
    }

    function handleRegionChange(event) {
        setRegion(event.target.value);
    }

    async function handleFormSubmission(event) {
        event.preventDefault();

        const postData = {
            email: email,
            fullName: name,
            postcode: postcode,
            region: region,
            qualifications: qualifications,
            password: password
        };

        const registerTrainerResponse = (await axios.post("http://localhost:4000/register-trainer", postData)).data;

        if (registerTrainerResponse === "registered successfully") {
            setRegistered(true);
        } else {
            setErrorMessage("An error occurred. Please try again");
            document.getElementById("errorMessage").removeAttribute("hidden");
        }
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
                    <h3>Select Which Courses You Have Qualifications In</h3>
                    <h6>Select Which Courses You have Qualification In</h6>
                    <div className="form-group">
                        <div className="form-check">


                            <h6>Induction & Management Qualifications</h6>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Basic Life Support" id="BLS" onChange={ handleQualificationsInput }/>
                                <label htmlFor="" className="form-checked-label">Basic Life Support</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Care of Medicine Level 1" id="CML1" onChange={ handleQualificationsInput }/>
                                <label htmlFor="CML1" className="form-checked-label">Care of Medicine Level 1</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Effective Communication" id="EC" onChange={ handleQualificationsInput }/>
                                <label htmlFor="EC" className="form-checked-label">Effective Communication</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Lone Working & Personal Safety" id="LWPS" onChange={ handleQualificationsInput }/>
                                <label htmlFor="LWS" className="form-checked-label">Lone Working & Personal Safety</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="People Handling" id="PH" onChange={ handleQualificationsInput }/>
                                <label htmlFor="PH" className="form-checked-label">People Handling</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Safeguarding of Adults" id="SA" onChange={ handleQualificationsInput }/>
                                <label htmlFor="SA" className="form-checked-label">Safeguarding of Adults</label>
                            </div>
                            <br />

                            <h6>Childcare Qualifications</h6>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Autism Awareness" id="AW" onChange={ handleQualificationsInput }/>
                                <label htmlFor="AW" className="form-checked-label">Autism Awareness</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Key Worker Skills" id="KWS" onChange={ handleQualificationsInput }/>
                                <label htmlFor="KWS" className="form-checked-label">Key Worker Skills</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Basic Life Support" id="BLS" onChange={ handleQualificationsInput }/>
                                <label htmlFor="BLS" className="form-checked-label">Basic Life Support</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Nutrition, Postive Eating & Early Years" id="NPEEY" onChange={ handleQualificationsInput }/>
                                <label htmlFor="NPEEY" className="form-checked-label">Nutrition, Postive Eating & Early Years</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Paediatric Manual Handling" id="PMH" onChange={ handleQualificationsInput }/>
                                <label htmlFor="PMH" className="form-checked-label">Paediatric Manual Handling</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Safeguarding of Children" id="SC" onChange={ handleQualificationsInput }/>
                                <label htmlFor="SC" className="form-checked-label">Safeguarding of Children</label>
                            </div>
                            <br />
                            <h6>Clinical Qualifications</h6>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Anaphulaxis & Auto-Injectors" id="AAI" onChange={ handleQualificationsInput }/>
                                <label htmlFor="AAI" className="form-checked-label">Anaphulaxis & Auto-Injectors</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Blood Glucose Monitoring" id="BGM" onChange={ handleQualificationsInput }/>
                                <label htmlFor="BGM" className="form-checked-label">Blood Glucose Monitoring</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Catheterisation" id="C" onChange={ handleQualificationsInput }/>
                                <label htmlFor="C" className="form-checked-label">Catheterisation</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Diabetes" id="D" onChange={ handleQualificationsInput }/>
                                <label htmlFor="D" className="form-checked-label">Diabetes</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="IV Cannulation" id="IVC" onChange={ handleQualificationsInput }/>
                                <label htmlFor="IVC" className="form-checked-label">IV Cannulation</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Syringe Driver Awareness" id="SDA" onChange={ handleQualificationsInput }/>
                                <label htmlFor="SDA" className="form-checked-label">Syringe Driver Awareness</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Venepuncture Training" id="VT" onChange={ handleQualificationsInput }/>
                                <label htmlFor="VT" className="form-checked-label">Venepuncture Training</label>
                            </div>
                            <br />
                            <h6>Mental Health Qualifications</h6>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Alzheimer's Disease Awareness" id="ADA" onChange={ handleQualificationsInput }/>
                                <label htmlFor="ADA" className="form-checked-label">Alzheimer's Disease Awareness</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Autisitic Spectrum Disorder" id="ASD" onChange={ handleQualificationsInput }/>
                                <label htmlFor="ASD" className="form-checked-label">Autisitic Spectrum Disorder</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Dementia Awareness" id="DA" onChange={ handleQualificationsInput }/>
                                <label htmlFor="DA" className="form-checked-label">Dementia Awareness</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Ligature Awareness" id="LA" onChange={ handleQualificationsInput }/>
                                <label htmlFor="LA" className="form-checked-label">Ligature Awareness</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Mental Health Awareness" id="MHA" onChange={ handleQualificationsInput }/>
                                <label htmlFor="MHA" className="form-checked-label">Mental Health Awareness</label>
                            </div>
                            <br />
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" value="Positive Behaviour Management" id="PBM" onChange={ handleQualificationsInput }/>
                                <label htmlFor="PBM" className="form-checked-label">Positive Behaviour Management</label>
                            </div>
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

            <div className="alert alert-danger" role="alert" id="errorMessage" hidden>
                <p>{errorMessage}</p>
            </div>
        </div>
    )
}

export default RegisterTrainer;