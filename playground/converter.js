const axios = require('axios');

const getExchangesRate = async (from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        const rate = response.data.rates[to];

        if (rate) {
            return rate;
        } else {
            throw new Error()
        }
    } catch (e) {
        throw new Error(`Unable to get exchangesRate for ${from} and ${to}`)
    }
};

const getCountries = async (currencyCode) => {
    try {
        const country = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return country.data.map((tempCountry) => tempCountry.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`)
    }




    // OLD VIEW
    // return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    //     .then((response) => {
    //         return response.data.map((country) => country.name);
    //     })
};

// PROMISE

const convertCurrency = (from, to, amount = 100) => {
    let countries;
    return getCountries(to)
        .then((tempCountries) => {
            countries = tempCountries;

            return getExchangesRate(from, to);
        })
        .then((rate) => {
            const exchangedAmount = amount * rate;

            return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
        })
};

// ASYNC AWAIT

const convertCurrencyAsync = async (from, to, amount) => {
    const countries = await getCountries(to);
    const rate = await getExchangesRate(from, to);
    const exchangedAmount = amount * rate;

    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
};

convertCurrencyAsync('USD', 'CAD', 100)
    .then((status) => {
        console.log(status);
    })
    .catch((e) => {
        console.log(e.message)
    });