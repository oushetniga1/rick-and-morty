import React from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (

        <nav className="navbar">

            <div className="links">

                <Link to="/">
                    Inicio
                </Link>

                <Link to="/species/Human">
                    Humanos
                </Link>

                <Link to="/species/Alien">
                    Aliens
                </Link>

                <Link to="/species/Robot">
                    Robots
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;