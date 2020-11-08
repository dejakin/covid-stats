import React, { useState, useEffect } from 'react';
import { countries } from '../../api/index';
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryList = () => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const getCountries = async () => {
            setFetchedCountries(await countries());
        }

        getCountries();
    })
    return (
        <FormControl>
            <NativeSelect>

            </NativeSelect>
        </FormControl>
    )
}

export default CountryList;