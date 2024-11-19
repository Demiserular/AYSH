// src/pages/AITool.js
import React, { useState } from 'react';
import './AITool.css';

const AITool = () => {
    const [userInput, setUserInput] = useState('');
    const [aiResponse, setAiResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/ai-tool', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userInput }),
            });

            const data = await response.json();
            setAiResponse(data.answer);
        } catch (error) {
            setAiResponse('Error fetching AI response. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="ai-tool">
            <h2>Health AI Advisor</h2>
            <form onSubmit={handleSubmit} className="ai-form">
                <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask about a medicine, health advice, or treatment..."
                    required
                />
                <button type="submit">Get Advice</button>
            </form>
            {aiResponse && (
                <div className="ai-response">
                    <h3>AI's Response:</h3>
                    <p>{aiResponse}</p>
                </div>
            )}
        </div>
    );
};

export default AITool;
