import React from "react";

function TrainerDashboard() {
    return (
        <div>
            <h1>Trainer Home- Acute Training Solutions</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Trainer Home</a>

                <ul className="navbar-nav">
                    <li className="nav-item active" >
                        <a href="/trainer-events" className="nav-link active">My Events</a>
                    </li>
                    
                    <li className="nav-item active" >
                        <a href="/potential-events" className="nav-link active">Upcoming Events</a>
                    </li>


                    {/* need to update these hyperlinks */}
                    <li className="nav-item active" >
                        <a href="/trainer-login" className="nav-link active">Edit Details</a>
                    </li>

                    <li className="nav-item active" >
                        <a href="/trainer-login" className="nav-link active">Add Qualifications</a>
                    </li>

                    <li className="nav-item active" >
                        <a href="/trainer-login" className="nav-link active">Change Password</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/trainer-logou" className="nav-link active">Logout</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default TrainerDashboard;