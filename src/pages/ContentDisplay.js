// src/pages/Recommendations.js
import React from 'react';

const Recommendations = () => {
    return (
        <div className="recommendations">
            <h2>Personalized Health Recommendations</h2>
            <p>Here are some recommended health tips and medicines based on your profile and history:</p>
            <ul className="recommendation-list">
                <li>Stay hydrated and drink at least 8 glasses of water daily.</li>
                <li>Include more fruits and vegetables in your diet for better immunity.</li>
                <li>Consider taking Vitamin D supplements if you have limited sun exposure.</li>
                <li>Exercise regularly to keep your heart and body healthy.</li>
            </ul>
        </div>
    );
};

export default Recommendations;
