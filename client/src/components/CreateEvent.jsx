import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// function unfinished
function CreateEvent() {

    const [event, setEvent] = useState();
    function buttonClick() {

    }

    function courseInput(event) {
        setEvent(event.target.value);
    }
    return (
        <div>
            <h1>Add Event Details</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="courseInput">Course</label>
                    <input type="text" className="form-control" id="courseInput" placeholder="Course" required />
                </div>

                {/* ... */}
                <div className="form-group">
                    <label htmlFor="additionalInformationInput"></label>
                    <textarea class="form-control" id="additionalInformationInput" rows={3}/>
                </div>

                <div className="form-group">
                    <button onClick={buttonClick}>Submit Event Details</button>
                </div>
            </form>
        </div>
    );
}

export default CreateEvent;