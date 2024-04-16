import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function NotAuthenticated(){

    const navigate = useNavigate();

    function returnHome(){
        navigate("/");
    }

    return (
        <div className="alert alert-danger" role="alert">
            <h1>Warning. You are not authenticated.</h1>
            <p>Please login as an Employee or a Trainer to access this route. Access levels determine access to routes in order to secure sensitive information.</p>
            
            <button className="btn btn-danger" onClick={ returnHome }>Back to Home</button>
        </div>
    );
}

export default NotAuthenticated;