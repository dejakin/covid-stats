import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async (country) => {
    let dynamicUrl = url;

    if (country) {
        dynamicUrl = `${url}/countries/${country}`;
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicUrl);
        const modifiedData = { confirmed, recovered, deaths, lastUpdate };
        return modifiedData;
    } catch(err) {
        console.log(err);
    }
}

export const getDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data;
    } catch(err) {
        console.log(err);
    }
}

export const countries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        // Filter out other irrelevant data such as ISO2 and ISO3 name
        return countries.map((country) => country.name);
    } catch(err) {
        console.log(err);
    }
}