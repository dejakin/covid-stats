import React from 'react';
import { useEffect, useState } from 'react';

import classes from './App.module.css';
import Cards from './components/Cards/Cards';
import { getData } from './api/index';


const App = () => {
    const [currentData, setData] = useState({
        data: {}
    })

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
            <Cards />
        </div>
    )
}

export default App;