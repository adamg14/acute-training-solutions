import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Navigation Bar</a>

                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar;