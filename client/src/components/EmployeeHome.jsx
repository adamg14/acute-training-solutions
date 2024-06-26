import React from "react";


function EmployeeHome(){
    return (
        <div>
            <h1>Employee Home - Acute Training Solutions</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Employee Home</a>

                <ul className="navbar-nav">
                    <li className="nav-item active" >
                        <a href="/employee-login" className="nav-link active">Employee Login</a>
                    </li>
                    
                    <li className="nav-item active" >
                        <a href="/employee-register" className="nav-link active">Employee Register</a>
                    </li>

                    <li className="nav-item active" >
                        <a href="/events" className="nav-link active">Upcoming Events</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/add-event" className="nav-link active">Add Event</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/edit-event" className="nav-link active">Edit Event Details</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/admin-home" className="nav-link active">Edit Details</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/change-password" className="nav-link active">Change Password</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default EmployeeHome;