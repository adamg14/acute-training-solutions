import React, { useState } from "react";
import axios from "axios";

function EditTrainerPassword() {
    const [passwordInput, setPasswordInput] = useState();
    const [confirmPasswordInput, setConfirmPasswordInput] = useState();
    const [successMessage, setSuccessMessage] = useState();
    const [failureMessage, setFailureMessage] = useState();

    function handleNewPasswordInput(event) {
        setPasswordInput(event.target.value);
    }

    function handleConfirmNewPasswordInput(event) {
        setConfirmPasswordInput(event.target.value);
    }

    async function handleFormSubmission(){
        if (passwordInput !== confirmPasswordInput){
            setFailureMessage("New Password and Confirm New Password fields do not match.");
            document.getElementById("failure-message").removeAttribute("hidden");
        }else{
            const postData = {
                newPassword: passwordInput
            };

            const editPasswordResponse = (await axios.post("/edit-trainer-password", postData)).data;

            if (editPasswordResponse === "Employee record successfully updated"){
                document.getElementById("failure-message").setAttribute("hidden", true);
                setSuccessMessage("Your password has sucessfully been changed");
                document.getElementById("sucess-message").removeAttribute("hidden");
            }else{
                document.getElementById("sucess-message").setAttribute("hidden", true);
                setFailureMessage("An error occurred. Please try again, ensuring you are logged in.");
                document.getElementById("failure-message").removeAttribute("hidden");
            }            
        }
    }

    return (
        <div>
            <h1>Change Password</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="passwordInput">New Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="New Password" required onChange={handleNewPasswordInput} />
                </div>

                <br />

                <div className="form-group">
                    <label htmlFor="confirmPasswordInput">Confirm New Password</label>
                    <input type="password" id="confirmPasswordInput" className="passwordInput" placeholder="Confirm New Password" required onchange={ handleConfirmNewPasswordInput }/>
                </div>

                <br />

                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleFormSubmission}>Change Password</button>
                </div>

                <div className="alert alert-danger" role="alert" hidden id="failure-message">
                    <p>{ failureMessage }</p>
                </div>

                <div className="alert alert-success" role="alert" hidden id="success-message">
                    <p>{ successMessage }</p>
                </div>
            </form>
        </div>
    );
}

export default EditTrainerPassword;