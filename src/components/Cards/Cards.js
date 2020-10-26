import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import classes from './Cards.module.css';

const Cards = (props) => {
    return (
        <div className={classes.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">Value</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">Value</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">Value</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Cards;