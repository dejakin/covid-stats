import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
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
        return countries;
    } catch(err) {
        console.log(err);
    }
}