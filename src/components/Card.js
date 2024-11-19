// src/components/Card.js
import React from 'react';

const Card = ({ title, description, link }) => {
    return (
        <div className="border p-4 rounded-md shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={link} className="text-blue-600 underline">Find out more</a>
        </div>
    );
};

export default Card;
