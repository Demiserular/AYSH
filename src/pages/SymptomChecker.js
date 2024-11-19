// src/pages/SymptomChecker.js
import React, { useState } from 'react';

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState('');
    const [advice, setAdvice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/symptom-checker', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ symptoms: symptoms.split(', ') }),
            });
            
            const data = await response.json();
            setAdvice(data.advice);
        } catch (error) {
            console.error('Error fetching symptom advice:', error);
            setAdvice('Error fetching symptom advice. Please try again later.');
        }
    };

    return (
        <div className="symptom-checker">
            <h2>Symptom Checker</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="Enter symptoms, separated by commas"
                    required
                />
                <button type="submit">Check Symptoms</button>
            </form>
            {advice && (
                <div className="advice">
                    <h3>AI's Advice:</h3>
                    <p>{advice}</p>
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;
