import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';
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
    return (
        <div className="container">
            <h1>App</h1>
        </div>
    )
}

export default App;