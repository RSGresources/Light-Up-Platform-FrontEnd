import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const LoadSpinner = (({ color }) => {
    const useStyles = makeStyles({
        colorPrimary: {
            color: color,
        },
    })
    const classes = useStyles();

    return (
        <CircularProgress thickness={3} size={80} className={classes.colorPrimary} />
    )
});

export default LoadSpinner
