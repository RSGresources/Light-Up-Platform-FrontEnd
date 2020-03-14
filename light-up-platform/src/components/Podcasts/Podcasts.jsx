import React, { useContext } from 'react';

import { searchParamsContext } from '../../utils/Contexts/searchBarContext';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useGetPodcasts from '../../utils/customHooks/useGetPodcasts';
import LoadingSpinner from '../LoadSpinner/LoadSpinner';
import PodcastCard from '../Podcasts/PodcastCard';

import FuzzySearch from 'fuzzy-search'; // Or: var FuzzySearch = require('fuzzy-search');


const useStyles = makeStyles({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  }
});

const Podcasts = () => {
  const classes = useStyles();
  const searchParams = useContext(searchParamsContext);
  let [podcastList, PodcastListError] = useGetPodcasts();


  const fuzzySearch = () => {
    const searcher = new FuzzySearch(podcastList, ['dateRecorded', 'timeRecorded', 'title', 'author'], {
      caseSensitive: false, sort: true
    });
    const result = searcher.search(searchParams);
    return result;
  }


  if (!podcastList) {
    return <LoadingSpinner color={'#d72832'} />;
  }

  if (PodcastListError) {
    return <h3 style={{ color: 'red' }}>{PodcastListError.message}</h3>
  }

  return (
    <Grid container spacing={3}>

      {!searchParams && podcastList.map((podcast, index) => {
        return (
          <Grid className={classes.gridItem} item xs={12} key={index}>
            <PodcastCard podcast={podcast} timeout={700} direction={'left'} name={index} />
          </Grid>
        )
      })}
      {searchParams && fuzzySearch().map((podcast, index) => {
        return (
          <Grid className={classes.gridItem} item xs={12} key={index}>
            <PodcastCard podcast={podcast} timeout={1000} direction={'left'} name={index} />
          </Grid>
        )
      })}

    </Grid>
  );
}

export default Podcasts;