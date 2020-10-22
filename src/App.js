import React from 'react';
import { useEffect } from 'react';

import './App.css';
import { getData } from './api/index';


const App = () => {
    useEffect(() => {
        const data = async () => {
            const result = await getData();
            console.log(result);
        }
        data();
    }, []);
    return (
        <div className="container">
            <h1>App</h1>
        </div>
    )
}

export default App;