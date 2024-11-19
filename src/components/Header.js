// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">AYSH</h1>
                <nav className="navbar">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/doctors">Find a Doctor</Link>
                    <Link className="nav-link" to="/recommendations">Recommendations</Link>
                    <Link className="nav-link" to="/content">Content</Link>
                    <Link className="nav-link" to="/symptom-checker">Symptom Checker</Link>                </nav>
            </div>
        </header>
    );
};

export default Header;
