import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function EmployeeRegister() {

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    async function handleFormSubmission(event) {
        event.preventDefault();
        if (passwordInput.toString() !== confirmPasswordInput.toString() && emailInput.length > 5 && passwordInput.length > 5) {
            document.getElementById("passwordMatchError").removeAttribute("hidden");
        } else {
            const postData = {
                employeeEmail: emailInput,
                employeePassword: passwordInput
            };

            await axios.post("http://localhost:4000/login-employee", postData);
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

            <div className="alert alert-danger" role="alert" hidden id="passwordMatchError">
                <p>Password and Confirm password do not match.</p>
            </div>
        </div>
    )
};

export default EmployeeRegister;