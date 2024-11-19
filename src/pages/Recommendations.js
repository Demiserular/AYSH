// src/pages/Recommendations.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Recommendations = () => {
    const recommendationsRef = useRef(null);

    useEffect(() => {
        gsap.from(recommendationsRef.current, { y: 50, opacity: 0, duration: 1 });
    }, []);

    return (
        <div className="container mx-auto p-6 h-screen flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Medicine Recommendations</h2>
            <div ref={recommendationsRef} className="space-y-4 opacity-0">
                {/* Example Medicine Cards */}
                <div className="border p-4 rounded-md shadow-md">
                    <h3 className="font-semibold">Medicine Name</h3>
                    <p>Recommended for: Condition</p>
                    <a href="#" className="text-blue-600 underline">Find the best price</a>
                </div>
                <div className="border p-4 rounded-md shadow-md">
                    <h3 className="font-semibold">Another Medicine Name</h3>
                    <p>Recommended for: Condition</p>
                    <a href="#" className="text-blue-600 underline">Find the best price</a>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
