import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function AddEvent() {

    const [course, setCourse] = useState();
    const [additionalInformation, setAdditionalInformation] = useState();
    const [courseTypeChange, setCourseTypeChange] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [region, setRegion] = useState();

    function handleFormSubmission(event) {
        event.preventDefault();

        // add validation of the radio buttons (make sure the user has selected one)

        // validation of date/time in the future
        const dateTimeInputString = String(date + time);
        const dateTimeInput = new Date(dateTimeInputString);
        const currentDate = new Date();

        if (currentDate > dateTimeInput) {
            // the input is in the past and not in the future
        } else {

        }
    }


    function handleAdditionalInformationInput(event) {
        setAdditionalInformation(event.target.value);
    }

    function handleCourseChange(event) {
        setCourse(event.target.value)
    }

    function handleCourseTypeChange(event) {
        setCourseTypeChange(event.target.value);
    }

    function handleRegionChange(event) {
        setRegion(event.target.value);
    }

    function handleDateChange(event){
        setDate(event.target.value);
    }

    function handleTimeChange(event){
        setTime(event.target.value);
    }

    return (
        <div>
            <h1>Add Event</h1>

            <br />

            <form>

                <div className="form-group">
                    <label htmlFor="coursePostcode">Course Date and Time</label>
                    {/* might need to assign a value to the input */}
                    <input type="date" onChange={ handleDateChange } value={ date }/>
                    <input type="time" onChange={ handleTimeChange } value={ time }/>
                </div>

                <div className="form-group">
                    <label htmlFor="coursePostcode">Course Postcode</label>
                    <input type="text" className="form-control" id="coursePostcode" placeholder="Postcode" required />
                </div>

                <div className="form-group">
                    <h3>Region</h3>
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
                    <h3>Course Type</h3>
                    <div className="form-checked">
                        <input type="radio" className="form-check-input" onChange={handleCourseTypeChange} value={"Face-to-Face Training"} id="faceTraining" checked />
                        <label htmlFor="faceTraining" className="form-check-label">Face-to-Face Training</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseTypeChange} value={"Online Webinar"} id="webinar" />
                        <label htmlFor="webinar" className="form-check-label">Online Webinar</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseTypeChange} value={"Virtual Learning"} id="virtual" />
                        <label htmlFor="virtual" className="form-check-label">Virtual Learning</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-checked">
                        <h6>Induction & Management Courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Basic Life Support"} id="basicLifeSupport" />
                        <label htmlFor="basicLifeSupport" className="form-check-label">Basic Life Support</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Care of Medicine Level 1"} id="CareMedicine" />
                        <label htmlFor="careMedicine" className="form-check-label">Care of Medicine Level 1</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Effective Communication"} id="effectiveCommunication" />
                        <label htmlFor="effectiveCommunication" className="form-check-label">Effective Communication</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Lone Working & Personal Saftey"} id="loneWorking" />
                        <label htmlFor="loneWorking" className="form-check-label">Lone Working & Personal Saftey</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"People Handling"} id="peopleHandling" />
                        <label htmlFor="peopleHandling" className="form-check-label">People Handling</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Safeguarding of Adults"} id="safeguardingAdults" />
                        <label htmlFor="safeguardingAdults" className="form-check-label">Safeguarding of Adults</label>

                        <h6>Childcare courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Autism Awareness"} id="autismAwareness" />
                        <label htmlFor="autismAwareness" className="form-check-label">Autism Awareness</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Key Worker Skills"} id="keyWorkerSkills" />
                        <label htmlFor="keyWorkerSkills" className="form-check-label">Key Worker Skills</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Basic Life Support"} id="basicLifeSupport" />
                        <label htmlFor="basicLifeSupport" className="form-check-label">Basic Life Support</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Nutrition, Postive Eating & Early Years"} id="nutrition" />
                        <label htmlFor="nutrition" className="form-check-label">Nutrition, Postive Eating & Early Years</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Paediatric Manual Handling"} id="manualHanding" />
                        <label htmlFor="manualHandling" className="form-check-label">Paediatric Manual Handling</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Safeguarding of Children"} id="safeguardingChildren" />
                        <label htmlFor="safeguardingChildren" className="form-check-label">Safeguarding of Children</label>

                        <h6>Clinical courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Anaphulaxis & Auto-Injectors"} id="aa" />
                        <label htmlFor="aa" className="form-check-label">Anaphulaxis & Auto-Injectors</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Blood Glucose Monitoring"} id="bloodGlucose" />
                        <label htmlFor="bloodGlucose" className="form-check-label">Blood Glucose Monitoring</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Catheterisation"} id="Catheterisation" />
                        <label htmlFor="Catheterisation" className="form-check-label">Catheterisation</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Diabetes Insulin & Blood Glucose Monitoring "} id="diabetes" />
                        <label htmlFor="diabetes" className="form-check-label">Diabetes</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"IV Cannulation"} id="iv" />
                        <label htmlFor="iv" className="form-check-label">IV Cannulation</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Syringe Driver Awareness"} id="sda" />
                        <label htmlFor="sda" className="form-check-label">Syringe Driver Awareness</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Venepuncture Training"} id="vt" />
                        <label htmlFor="vt" className="form-check-label">Venepuncture Training</label>

                        <h6>Mental health courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Alzheimer's Disease Awareness"} id="ada" />
                        <label htmlFor="ada" className="form-check-label">Alzheimer's Disease Awareness</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Autistic Spectrum Disorder"} id="asd" />
                        <label htmlFor="asd" className="form-check-label">Autistic Spectrum Disorder</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Dementia Awareness"} id="da" />
                        <label htmlFor="da" className="form-check-label">Dementia Awareness</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Ligature Awareness"} id="la" />
                        <label htmlFor="la" className="form-check-label">Ligature Awareness</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Mental Health Awareness"} id="mha" />
                        <label htmlFor="mha" className="form-check-label">Mental Health Awareness</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Positive Behaviour Management"} id="pbm" />
                        <label htmlFor="pbm" className="form-check-label">Positive Behaviour Management</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="additionalInformationInput">Additional Event Information</label>
                    <textarea name="additionalInformationInput" id="additionalInformationInput" cols="30" rows="10"></textarea>
                </div>

                <br />

                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleFormSubmission}>Add Event</button>
                </div>
            </form>
        </div>
    );
}

export default AddEvent;