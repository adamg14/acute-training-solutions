import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {

    return (
        <div>
            <h1>Acute Training Solutions Ltd</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Dashboard Navigation</a>

                <ul className="navbar-nav">
                    <li className="nav-item active" >
                        <a href="/trainer-home" className="nav-link active">Trainer Dashboard</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/employee-home" className="nav-link active">Employee Dashboard</a>
                    </li>

                    <li className="nav-item active">
                        <a href="/admin-home" className="nav-link active">Admin Dashboard</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default HomePage;