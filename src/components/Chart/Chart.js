import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api/index';
import { Line } from 'react-chartjs-2';
import classes from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await getDailyData());
        }
        fetchApi();
    }, [])

const lineChart = (
    /* Check to see if fetchApi function has returned first otherwise there will be
    no data in the state to map through */
    !dailyData[0] ? null : 
    ( <Line data={{
        labels: dailyData.map((stat) => stat.reportDate),
        datasets: [{
            data: dailyData.map((stat) => stat.confirmed.total),
            label: 'Confirmed',
            borderColor: '#3333ff',
            fill: true
        }, {
            data: dailyData.map((stat) => stat.deaths.total),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
        }]
    }} /> )
) 

    return (
        <div className={classes.container}>
            {lineChart}
        </div>
    )
}

export default Chart;