// src/pages/Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to A</h1>
            <p>Your trusted platform for connecting with health professionals and accessing health information.</p>
            <div className="features">
                <div className="feature-card">
                    <h3>Find a Doctor</h3>
                    <p>Connect with doctors based on specialty, location, and availability.</p>
                </div>
                <div className="feature-card">
                    <h3>Health Recommendations</h3>
                    <p>Get personalized health advice and recommendations using AI.</p>
                </div>
                <div className="feature-card">
                    <h3>Educational Content</h3>
                    <p>Learn more about nutrition, mental health, exercise, and more.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
