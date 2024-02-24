import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployeeLogin() {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    function handleFormSubmission(event) {
        event.preventDefault();
    }

    function handleEmailInput(event){

    }

    function handlePasswordInput(event){

    }

    return (
        <div>
            <h1>Employee Login</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="emailInput">Employee Email Address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Email Address" required onChange={ handleEmailInput }/>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" required onChange={ handlePasswordInput }/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleFormSubmission}>Login</button>
                </div>
            </form>
        </div>
    )
};

export default EmployeeLogin;
