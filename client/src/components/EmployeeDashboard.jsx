import React from "react";


function EmployeeDashboard(){
    return (
        <div>
            <h1>Employee Dashboard - Acute Training Solutions</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Trainer Dashboard</a>

                <ul className="navbar-nav">

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

export default EmployeeDashboard;