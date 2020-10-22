import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/';

export const getData = async () => {
    try {
        const response = await axios.get(url);
        return response;
    } catch(err) {
        console.log('Error has occured');
    }
}