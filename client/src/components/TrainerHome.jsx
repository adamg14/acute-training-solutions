import React from "react";

function TrainerHome() {
    return (
        <div>
            <h1>Trainer Home- Acute Training Solutions</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Trainer Home</a>

                <ul className="navbar-nav">
                    <li className="nav-item active" >
                        <a href="/trainer-login" className="nav-link active">Trainer Login</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/trainer-register" className="nav-link active">Trainer Register</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default TrainerHome;