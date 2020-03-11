import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useGetPodcasts from '../../utils/customHooks/useGetPodcasts';
import LoadingSpinner from '../LoadSpinner/LoadSpinner';
import PodcastCard from '../Podcasts/PodcastCard';

const useStyles = makeStyles({
  gridItem:{
      display: 'flex',
      justifyContent: 'center'
  }
});

const Podcasts = () => {
  const classes = useStyles();
  const [podcastList, PodcastListError] = useGetPodcasts();

  if (!podcastList){
      return <LoadingSpinner />;
  }

  if (PodcastListError){
  return <h3 style={{color: 'red'}}>{PodcastListError.message}</h3>
  }

  return (
    <Grid container spacing={3}>
        {podcastList.map((podcast, index)=> {
            return (
                <Grid className={classes.gridItem} item xs={12}>
                   <PodcastCard podcast={podcast} timeout={500 + (index * 400)} />
                </Grid>
        )})}
    </Grid>
  );
}

export default Podcasts;