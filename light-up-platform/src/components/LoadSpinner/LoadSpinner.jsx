import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const LoadSpinner = (({ color }) => {
    const useStyles = makeStyles({
        colorPrimary: {
            color: color,
        },
        alignment: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
    const classes = useStyles();

    return (
        <div className={classes.alignment}>
            <CircularProgress thickness={3} size={80} className={classes.colorPrimary} />
        </div>
    )
});

export default LoadSpinner
