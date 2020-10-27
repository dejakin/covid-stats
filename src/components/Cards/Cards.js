import React, { Fragment } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Spinner from '../Layout/Spinner';
import CountUp from 'react-countup';

import classes from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    /* If the stats function from App.js has not returned, a spinner will be rendered. 
    Once the data is fetched and in the state, the card components with the data will
    be rendered instead */
    return (
        <Fragment>
            {!confirmed ? <Spinner /> :  
            <div className={classes.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                            <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={1} separator=',' /></Typography>
                            <Typography color="textSecondary">as of {new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={1} separator=',' /></Typography>
                            <Typography color="textSecondary">as of {new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={1} separator=',' /></Typography>
                            <Typography color="textSecondary">as of {new Date(lastUpdate).toDateString()}</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div> }
        </Fragment>
    )
}

export default Cards;