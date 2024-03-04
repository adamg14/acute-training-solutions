import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


function AddEvent() {

    const [course, setCourse] = useState();
    const [additionalInformation, setAdditionalInformation] = useState();
    const [courseTypeChange, setCourseTypeChange] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [region, setRegion] = useState();
    const [postcode, setPostcode] = useState();

    async function handleFormSubmission(event) {
        event.preventDefault();

        // add validation of the radio buttons (make sure the user has selected one)

        // validation of date/time in the future
        const dateTimeInputString = String(date + time);
        const dateTimeInput = new Date(dateTimeInputString);
        const currentDate = new Date();

        if (currentDate > dateTimeInput) {
            // the input is in the past and not in the future
            // add more validation on each of the inputs
        } else {
            // if validation of input passes
            const postData = {
                additionalInformation: additionalInformation,
                course: course,
                date: date,
                eventPostcode: postcode,
                eventRegion: region,
                eventType: courseTypeChange,
            }

            console.log("sending data to server");
            await axios.post("http://localhost:4000/add-event", postData);
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

    function handlePostcodeChange(event){
        setPostcode(event.target.value);
    }

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    function handleTimeChange(event) {
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
                    <input type="date" onChange={handleDateChange} value={date} />
                    <input type="time" onChange={handleTimeChange} value={time} />
                </div>

                <div className="form-group">
                    <label htmlFor="coursePostcode">Course Postcode</label>
                    <input type="text" className="form-control" id="coursePostcode" placeholder="Postcode" required onChange={ handlePostcodeChange }/>
                </div>

                <div className="form-group">
                    <h3>Region</h3>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"London"} id="London" name="region" />
                    <label htmlFor="London" className="form-check-label">London</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"North East"} id="ne" name="region" />
                    <label htmlFor="ne" className="form-check-label">North East</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"North West"} id="nw" name="region" />
                    <label htmlFor="nw" className="form-check-label">North West</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"Yorkshire"} id="york" name="region" />
                    <label htmlFor="york" className="form-check-label">Yorkshire</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"East Midlands"} id="em" name="region" />
                    <label htmlFor="East Midlands" className="form-check-label">East Midlands</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"West Midlands"} id="wm" name="region" />
                    <label htmlFor="wm" className="form-check-label">West Midlands</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South East"} id="se" name="region" />
                    <label htmlFor="se" className="form-check-label">South East</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South West"} id="sw" name="region" />
                    <label htmlFor="sw" className="form-check-label">South West</label>
                    <input type="radio" className="form-check-input" onChange={handleRegionChange} value={"South West/Wales"} id="sww" name="region" />
                    <label htmlFor="sww" className="form-check-label">South West/Wales</label>
                </div>

                <div className="form-group">
                    <h3>Course Type</h3>
                    <div className="form-checked">
                        <input type="radio" className="form-check-input" onChange={handleCourseTypeChange} value={"Face-to-Face Training"} id="faceTraining" name="course-type" />
                        <label htmlFor="faceTraining" className="form-check-label">Face-to-Face Training</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseTypeChange} value={"Online Webinar"} id="webinar" name="course-type" />
                        <label htmlFor="webinar" className="form-check-label">Online Webinar</label>
                        <input type="radio" className="form-check-input" onChange={handleCourseTypeChange} value={"Virtual Learning"} id="virtual" name="course-type" />
                        <label htmlFor="virtual" className="form-check-label">Virtual Learning</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-checked">
                        <h6>Induction & Management Courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Basic Life Support"} id="basicLifeSupport" name="induction" />
                        <label htmlFor="basicLifeSupport" className="form-check-label">Basic Life Support</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Care of Medicine Level 1"} id="CareMedicine" name="induction" />
                        <label htmlFor="careMedicine" className="form-check-label">Care of Medicine Level 1</label>
                        <br />

                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Effective Communication"} id="effectiveCommunication" name="induction" />
                        <label htmlFor="effectiveCommunication" className="form-check-label">Effective Communication</label>
                        <br />

                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Lone Working & Personal Saftey"} id="loneWorking" name="induction" />
                        <label htmlFor="loneWorking" className="form-check-label">Lone Working & Personal Saftey</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"People Handling"} id="peopleHandling" name="induction" />
                        <label htmlFor="peopleHandling" className="form-check-label">People Handling</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Safeguarding of Adults"} id="safeguardingAdults" name="induction" />
                        <label htmlFor="safeguardingAdults" className="form-check-label">Safeguarding of Adults</label>
                        <br />

                        <h6>Childcare courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Autism Awareness"} id="autismAwareness" name="childcare" />
                        <label htmlFor="autismAwareness" className="form-check-label">Autism Awareness</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Key Worker Skills"} id="keyWorkerSkills" name="childcare" />
                        <label htmlFor="keyWorkerSkills" className="form-check-label">Key Worker Skills</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Basic Life Support"} id="basicLifeSupport" name="childcare" />
                        <label htmlFor="basicLifeSupport" className="form-check-label">Basic Life Support</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Nutrition, Postive Eating & Early Years"} id="nutrition" name="childcare" />
                        <label htmlFor="nutrition" className="form-check-label">Nutrition, Postive Eating & Early Years</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Paediatric Manual Handling"} id="manualHanding" name="childcare" />
                        <label htmlFor="manualHandling" className="form-check-label">Paediatric Manual Handling</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Safeguarding of Children"} id="safeguardingChildren" name="childcare" />
                        <label htmlFor="safeguardingChildren" className="form-check-label">Safeguarding of Children</label>
                        <br />

                        <h6>Clinical courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Anaphulaxis & Auto-Injectors"} id="aa" name="clinical" />
                        <label htmlFor="aa" className="form-check-label">Anaphulaxis & Auto-Injectors</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Blood Glucose Monitoring"} id="bloodGlucose" name="clinical" />
                        <label htmlFor="bloodGlucose" className="form-check-label">Blood Glucose Monitoring</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Catheterisation"} id="Catheterisation" name="clinical" />
                        <label htmlFor="Catheterisation" className="form-check-label">Catheterisation</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Diabetes Insulin & Blood Glucose Monitoring "} id="diabetes" name="clinical" />
                        <label htmlFor="diabetes" className="form-check-label">Diabetes</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"IV Cannulation"} id="iv" name="clinical" />
                        <label htmlFor="iv" className="form-check-label">IV Cannulation</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Syringe Driver Awareness"} id="sda" name="clinical" />
                        <label htmlFor="sda" className="form-check-label">Syringe Driver Awareness</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Venepuncture Training"} id="vt" name="clinical" />
                        <label htmlFor="vt" className="form-check-label">Venepuncture Training</label>
                        <br />

                        <h6>Mental health courses</h6>
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Alzheimer's Disease Awareness"} id="ada" name="mental-health" />
                        <label htmlFor="ada" className="form-check-label">Alzheimer's Disease Awareness</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Autistic Spectrum Disorder"} id="asd" name="mental-health" />
                        <label htmlFor="asd" className="form-check-label">Autistic Spectrum Disorder</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Dementia Awareness"} id="da" name="mental-health" />
                        <label htmlFor="da" className="form-check-label">Dementia Awareness</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Ligature Awareness"} id="la" name="mental-health" />
                        <label htmlFor="la" className="form-check-label">Ligature Awareness</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Mental Health Awareness"} id="mha" name="mental-health" />
                        <label htmlFor="mha" className="form-check-label">Mental Health Awareness</label>
                        <br />
                        <input type="radio" className="form-check-input" onChange={handleCourseChange} value={"Positive Behaviour Management"} id="pbm" name="mental-health" />
                        <label htmlFor="pbm" className="form-check-label">Positive Behaviour Management</label>
                        <br />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="additionalInformationInput">Additional Event Information</label>
                    <textarea name="additionalInformationInput" id="additionalInformationInput" cols="30" rows="10" onChange={handleAdditionalInformationInput}></textarea>
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