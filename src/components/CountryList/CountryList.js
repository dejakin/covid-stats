import React, { useState, useEffect } from 'react';
import { countries } from '../../api/index';
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryList = ({ countryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const getCountries = async () => {
            setFetchedCountries(await countries());
        }

        getCountries();
    }, []);
    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => countryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => 
                <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryList;