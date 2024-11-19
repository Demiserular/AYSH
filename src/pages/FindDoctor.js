// src/pages/FindDoctor.js
import React, { useState, useEffect } from 'react';

const FindDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        // Fetch doctors from an API or database
        const fetchDoctors = async () => {
            const response = await fetch('/api/doctors'); // Replace with your API endpoint
            const data = await response.json();
            setDoctors(data);
        };
        fetchDoctors();
    }, []);

    const handleSearch = () => {
        // Implement search logic
        const filteredDoctors = doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(query.toLowerCase())
        );
        setDoctors(filteredDoctors);
    };
    

    return (
        <div className="find-doctor">
            <h2>Find a Doctor</h2>
            <input
                type="text"
                placeholder="Search for a doctor..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <div className="doctor-list">
                {doctors.map((doctor) => (
                    <div key={doctor.id} className="doctor-card">
                        <h3>{doctor.name}</h3>
                        <p>{doctor.specialty}</p>
                        <p>{doctor.location}</p>
                        <button onClick={() => alert(`Connecting to ${doctor.name}`)}>Connect</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default FindDoctor;
