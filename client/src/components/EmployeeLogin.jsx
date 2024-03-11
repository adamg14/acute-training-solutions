import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function EmployeeLogin() {

    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [authenticated, setAuthenticated] = useState(false);

    // the useEffect hook constantly checks if the employee has been authenticated - when they have been authenticated the user can access restricted routes and can be sent the dashboard
    useEffect(() => {
        if (authenticated) {
            navigate("/employee-home");
        }
    });

    async function handleFormSubmission(event) {
        // add extra validation here 
        event.preventDefault();

        if (emailInput.length > 5 && passwordInput.length > 3) {
            const postData = {
                employeeEmail: emailInput,
                employeePassword: passwordInput
            };

            const loginResult = (await axios.post("http://localhost:4000/login-employee", postData)).data;
            console.log(loginResult)
            if (loginResult === "successful login") {
                setAuthenticated(true);
            } else {
                setValidationMessage("Error occurred. Invalid credentials or error in database connection. Please try again");
                document.getElementById("failureMessage").removeAttribute("hidden");
            }
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
