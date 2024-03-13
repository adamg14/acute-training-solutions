import React from "react";

function TrainerHome() {
    return (
        <div>
            <h1>Trainer Home- Acute Training Solutions</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Trainer Dashboard</a>

                <ul className="navbar-nav">
                    <li className="nav-item active" >
                        <a href="/trainer-home" className="nav-link active">My Events</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/employee-home" className="nav-link active">Upcoming Events</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/admin-home" className="nav-link active">Edit Details</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/admin-home" className="nav-link active">Change Password</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/admin-home" className="nav-link active">Add Qualifications</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default TrainerHome;