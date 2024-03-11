import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeeRegister() {

    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [registered, setRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // this use effect hook is constantly checking if the user has been registered in order for the employee to be redirected to the login page
        if (registered) {

            navigate("/employee-login");
        }
    });
    async function handleFormSubmission(event) {
        event.preventDefault();
        if (passwordInput.toString() !== confirmPasswordInput.toString() && emailInput.length > 5 && passwordInput.length > 5) {
            document.getElementById("passwordMatchError").removeAttribute("hidden");
        } else {
            const postData = {
                employeeEmail: emailInput,
                employeePassword: passwordInput
            };

            const registerResponse = (await axios.post("http://localhost:4000/register-employee", postData)).data;

            if (registerResponse === "successful registration") {
                setRegistered(true);
            } else {
                setErrorMessage("An error occurred when registering your account, please check your input and try again.");
                document.getElementById("errorMessage").removeAttribute("hidden");
                console.log("error message should be returned");
            }
        }
    }

    function handleEmailInput(event) {
        setEmailInput(event.target.value);
    }

    function handlePasswordInput(event) {
        setPasswordInput(event.target.value);
        console.log("password: " + passwordInput);
    }

    function handleConfirmPasswordInput(event) {
        setConfirmPasswordInput(event.target.value);
        console.log("confirm password: " + confirmPasswordInput);
    }

    return (
        <div>
            <h1>Employee Register</h1>

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

                <div className="form-group">
                    <label htmlFor="confirmPasswordInput">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPasswordInput" placeholder="Repeated Password" required onChange={handleConfirmPasswordInput} />
                </div>

                <br />

                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleFormSubmission}>Register</button>
                </div>
            </form>
            <div className="alert alert-danger" role="alert" hidden id="errorMessage">
                <p>{errorMessage}</p>
            </div>
            <div className="alert alert-danger" role="alert" hidden id="passwordMatchError">
                <p>Password and Confirm password do not match.</p>
            </div>
        </div>
    )
};

export default EmployeeRegister;