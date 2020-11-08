import React from 'react';
import { useEffect, useState } from 'react';

import classes from './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryList from './components/CountryList/CountryList';
import { getData } from './api/index';


const App = () => {
    const [currentData, setData] = useState({
        data: {}
    })

    /* Once the App component is rendered, the stats function is delared and called, which
    fetches the data from the API through getData and then loads the state with it */
    useEffect(() => {
        const stats = async () => {
            const result = await getData();
            setData({ data: result });
        }
        stats();
    }, []);

    const { data } = currentData;

    return (
        <div className={classes.container}>
            <Cards data={data} />
            <CountryList />
            <Chart />
        </div>
    )
}

export default App;