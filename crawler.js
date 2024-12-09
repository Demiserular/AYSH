const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape prices from PharmEasy
const searchPharmEasyPrices = async (medicineName) => {
    try {
        const url = `https://pharmeasy.in/search?name=${encodeURIComponent(medicineName)}`;
        console.log(`Fetching URL for PharmEasy: ${url}`);
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            },
        });

        const $ = cheerio.load(data);
        const prices = [];

        // Scrape the product containers
        $('.product-card').each((index, element) => {
            const product = $(element).find('.product-card-details .product-title').text().trim();
            const price = $(element).find('.product-card-price').text().trim();

            if (product && price) {
                prices.push({ name: product, price: price });
            }
        });

        return prices;
    } catch (error) {
        console.error('Error fetching prices from PharmEasy:', error.message);
        throw error;
    }
};

// Main function to search prices
const searchMedicinePrices = async (medicineName) => {
    try {
        const pricesPharmEasy = await searchPharmEasyPrices(medicineName);
        console.log('Prices from PharmEasy:', pricesPharmEasy);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Example usage
searchMedicinePrices('paracetamol'); // Replace 'paracetamol' with any medication name
