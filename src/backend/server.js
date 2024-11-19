const express = require('express');
const cors = require('cors');
const aiResponses = require('./data/aiResponses'); // Import AI responses
const symptomAdvice = require('./data/symptomAdvice'); // Import symptom advice
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data for doctors
const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', location: 'New York' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrics', location: 'Los Angeles' },
    // Add more sample doctors as needed
];

// Endpoint to retrieve the list of doctors
app.get('/api/doctors', (req, res) => {
    res.json(doctors);
});

// Symptom Checker Endpoint
app.post('/api/symptom-checker', (req, res) => {
    
    const { symptoms } = req.body;

    // Create an array to store advice
    let adviceArray = [];

    // Loop through symptoms to find matching advice
    symptoms.forEach(symptom => {
        const advice = symptomAdvice[symptom.toLowerCase()]; // Make sure to match case-insensitively
        if (advice) {
            adviceArray.push(advice); // Push matching advice into the array
        }
    });

    // If no advice is found, return a default message
    const response = adviceArray.length > 0
        ? adviceArray
        : ["We couldn't determine a specific issue based on your symptoms."];

    res.json({ advice: response });
});

// AI Tool Endpoint
app.post('/api/ai-tool', (req, res) => {
    const { query } = req.body;

    const answer = aiResponses[query] || "Sorry, I don't have an answer for that. Please ask something else.";

    res.json({ answer });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
