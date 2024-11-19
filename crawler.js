// crawler.js
const axios = require('axios');
const cheerio = require('cheerio');

// Function to scrape prices from 1mg
const search1mgPrices = async (medicineName) => {
    try {
        const url = `https://www.1mg.com/search/all medicines?q=${encodeURIComponent(medicineName)}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const prices = [];

        $('.styles__product-container___2yq7g').each((index, element) => {
            const product = $(element).find('.styles__product-title___1b8KZ').text();
            const price = $(element).find('.styles__price___2qFY5').text();

            if (product && price) {
                prices.push({ name: product.trim(), price: price.trim() });
            }
        });

        return prices;
    } catch (error) {
        console.error('Error fetching prices from 1mg:', error);
        throw error;
    }
};

// Function to scrape prices from Netmeds
const searchNetmedsPrices = async (medicineName) => {
    try {
        const url = `https://www.netmeds.com/search?search=medicines&filter=1&query=${encodeURIComponent(medicineName)}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const prices = [];

        $('.product-list .product-name').each((index, element) => {
            const product = $(element).find('.product-name').text();
            const price = $(element).find('.price').text();

            if (product && price) {
                prices.push({ name: product.trim(), price: price.trim() });
            }
        });

        return prices;
    } catch (error) {
        console.error('Error fetching prices from Netmeds:', error);
        throw error;
    }
};

// Main function to search prices on both sites
const searchMedicinePrices = async (medicineName) => {
    try {
        const prices1mg = await search1mgPrices(medicineName);
        const pricesNetmeds = await searchNetmedsPrices(medicineName);
        return { prices1mg, pricesNetmeds };
    } catch (error) {
        throw error;
    }
};

// Example usage
searchMedicinePrices('aspirin')
    .then(prices => {
        console.log('Prices found on 1mg:', prices.prices1mg);
        console.log('Prices found on Netmeds:', prices.pricesNetmeds);
    })
    .catch(err => {
        console.error(err);
    });
