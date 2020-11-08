import React, { useState, useEffect } from 'react';
import { getDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import classes from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
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
                borderColor: 'yellow',
                fill: true
            }, {
                data: dailyData.map((stat) => stat.deaths.total),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'white',
                fill: true
            }]
        }} 
    /> )    
) 
    
    console.log()
    
    /* / If !country returns true, this means no country has been selected from
        the drop-down list and no JSX is returned. If it returns false, a country
        has been selected by the user and a bar chart with the data (from props) 
        is created */
    const barChart = (
        !country ? null :
        (
            <Bar 
                data={{
                    labels: [ 'Confirmed', 'Recovered', 'Deaths' ],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [ 'yellow', 'green', 'red' ],
                        data: [ confirmed.value, recovered.value, deaths.value ]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` } 
                }}
            />
        )
    )


    return (
        <div className={classes.container}>
            { country ? barChart : lineChart }
        </div>
    )
}

export default Chart;