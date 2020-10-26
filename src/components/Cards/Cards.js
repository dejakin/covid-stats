import React, { Fragment } from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Spinner from '../Layout/Spinner';

import classes from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths } }) => {

    /* If the stats function from App.js has not returned, a spinner will be rendered. 
    Once the data is fetched and in the state, the card components with the data will
    be rendered instead */

    return (
        <Fragment>
            {!confirmed ? <Spinner /> :  
            <div className={classes.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                            <Typography variant="h5">{confirmed.value}</Typography>
                            <Typography color="textSecondary">Date</Typography>
                            <Typography variant="body2">Number of confirmed cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">{recovered.value}</Typography>
                            <Typography color="textSecondary">Date</Typography>
                            <Typography variant="body2">Number of recoveries</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">{deaths.value}</Typography>
                            <Typography color="textSecondary">Date</Typography>
                            <Typography variant="body2">Number of deaths</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div> }
        </Fragment>
    )
}

export default Cards;