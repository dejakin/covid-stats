import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api/index';

const Chart = () => {
    const [dailyData, setDailyData] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getDailyData(); 
            setDailyData({ data: result });
        }

        fetchApi();
    }, [])

    return (
        <h1>Chart</h1>
    )
}

export default Chart;