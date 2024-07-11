import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Bone Fracture Cure</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-bone-fracture">About Bone Fracture</Link></li>
                <li><Link to="/cure-methods">Cure Methods</Link></li>
                <li><Link to="/ai-model">AI Model</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
