// src/services/api.js
export const fetchDoctors = async (searchTerm) => {
    const response = await fetch(`/api/doctors?name=${searchTerm}`);
    return response.json();
};
