// src/pages/FindDoctor.js
import React, { useState, useEffect, useRef } from 'react';

const FindDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [query, setQuery] = useState('');
    const [cameraOpen, setCameraOpen] = useState(false); // Track camera state
    const videoRef = useRef(null);
    const streamRef = useRef(null); // Store the stream for cleanup

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

    const openCamera = async () => {
        try {
            // Request access to the camera (include facingMode for mobile support)
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }, // Use rear camera on mobile
            });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                streamRef.current = stream; // Store the stream for later cleanup
                setCameraOpen(true); // Update camera state
            }
        } catch (error) {
            console.error("Error accessing camera:", error);
            alert("Unable to access camera.");
        }
    };
    const closeCamera = () => {
        // Stop all video tracks of the stream
        if (streamRef.current) {
            const tracks = streamRef.current.getTracks();
            tracks.forEach(track => track.stop()); // Stop each track
            videoRef.current.srcObject = null; // Disconnect video feed
            streamRef.current = null; // Clear the stream reference
            setCameraOpen(false); // Update camera state
        }
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
            {/* Button to open the camera */} 
            <button onClick={openCamera}>Open Camera</button>

            <button onClick={openCamera}>close Camera</button>
            {/* Video element to display the camera feed */}
            <video ref={videoRef} style={{ display: 'block', width: '50%', marginTop: '20px' }}></video>

          

        </div>
    );
};

export default FindDoctor;
