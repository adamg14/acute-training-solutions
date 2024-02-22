import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployeeLogin() {

    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setPasswordInput] = useState();

    function handleFormSubmission() {

    }

    return (
        <div>
            <h1>Employee Login</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="emailInput">Employee Email Address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Email Address" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
};

export default EmployeeLogin;
