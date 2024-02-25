import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function EmployeeLogin() {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    async function handleFormSubmission(event) {
        // add extra validation here 
        event.preventDefault();

        if (emailInput.length > 5 && passwordInput.length > 3) {
            const postData = {
                employeeEmail: emailInput,
                employeePassword: passwordInput
            };

            const loginResult = (await axios.post("http://localhost:4000/login-employee", postData)).data;

            if (loginResult === "invalid credentials") {
                setValidationMessage("Invalid Credentials. Please try again.");
                document.getElementById("failureMessage").removeAttribute("hidden");
            } else {
                setValidationMessage("Valid Credentials. You have been logged in successfully");
                document.getElementById("failureMessage").setAttribute("hidden", true);
                document.getElementById("successMessage").removeAttribute("hidden");
            }
        } else {
            setValidationMessage("Invalid credentials. Both password and email input must be above 3 characters");
            document.getElementById("failureMessage").removeAttribute("hidden");
        }
    }

    function handleEmailInput(event) {
        setEmailInput(event.target.value);
    }

    function handlePasswordInput(event) {
        setPasswordInput(event.target.value);
    }

    return (
        <div>
            <h1>Employee Login</h1>

            <br />

            <form>
                <div className="form-group">
                    <label htmlFor="emailInput">Employee Email Address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Email Address" required onChange={handleEmailInput} />
                </div>

                <div className="form-group">
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" required onChange={handlePasswordInput} />
                </div>

                <br />

                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleFormSubmission}>Login</button>
                </div>
            </form>

            <br />

            {/* hidden success message */}
            <div className="alert alert-success" role="alert" id="successMessage" hidden>
                {validationMessage}
            </div>

            {/* hidden failure message */}
            <div className="alert alert-danger" role="alert" id="failureMessage" hidden>
                {validationMessage}
            </div>
        </div>
    )
};

export default EmployeeLogin;
