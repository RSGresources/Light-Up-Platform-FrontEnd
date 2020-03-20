import React, { useContext } from 'react';

import { searchParamsContext } from '../../utils/Contexts/searchBarContext';
import ContentNotFoundPage from '../ErrorPages/ContentsNotFoundPage/ContentsNotFoundPage'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useGetPodcasts from '../../utils/customHooks/useGetPodcasts';
import LoadingSpinner from '../LoadSpinner/LoadSpinner';
import PodcastCard from '../Podcasts/PodcastCard';

import FuzzySearch from 'fuzzy-search'; // Or: var FuzzySearch = require('fuzzy-search');
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center'
  },
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

  const renderFuzzySearch = () => {
    const search = fuzzySearch();

    if (search.length === 0) {
      return <ContentNotFoundPage on={true} timeout={1000} direction={'left'} />

    } else {
      return search.map((podcast, index) => {
        return (
          <Grid className={classes.gridItem} item xs={12} key={index}>
            <PodcastCard podcast={podcast} timeout={1000} direction={'left'} name={index} />
          </Grid>
        )
      })
    }
  }




  if (!podcastList) {
    return <LoadingSpinner color={'#d72832'} />;
  }

  if (PodcastListError) {
    return <h3 style={{ color: 'red' }}>{PodcastListError.message}</h3>
  }


  return (
    <Grid className={classes.grid} container spacing={3}>

      {!searchParams && podcastList.map((podcast, index) => {
        return (
          <Grid className={classes.gridItem} item xs={12} key={index}>
            <PodcastCard podcast={podcast} timeout={700} direction={'left'} name={index} />
          </Grid>
        )
      })}
      {searchParams && renderFuzzySearch()}
    </Grid>
  );
}

export default Podcasts;