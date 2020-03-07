import React from 'react';
import ReactPlayer from 'react-player'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useGetPodcasts from '../../utils/customHooks/useGetPodcasts';
import LoadingSpinner from '../LoadSpinner/LoadSpinner';

const useStyles = makeStyles(theme => ({
  root: {
    width: '89%',
    maxWidth: '87vw',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  gridItem:{
      display: 'flex',
      justifyContent: 'center'
  },
  cardContent: {
      padding: 0
  },
  cardContentDetails:{
    padding: '2% 2% 2% 2%'
  },
  cardContentmedia: {
    // 16:9
     },
}));

const Podcasts = () => {
  const classes = useStyles();
  const [podcastList, PodcastListError] = useGetPodcasts();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  if (!podcastList){
      return <LoadingSpinner />;
  }

  if (PodcastListError){
  return <h3 style={{color: 'red'}}>{PodcastListError.message}</h3>
  }

  return (

    <Grid container spacing={3}>
        {podcastList.map((podcast)=> {
            return (
                <Grid className={classes.gridItem} item xs={12}>
                    <Card className={classes.root}>
                        <CardContent className={classes.cardContent}>
                            <div className={classes.media}>
                                <ReactPlayer
                                    url={podcast.videoURL}
                                    controls={true}
                                    light={false}
                                    height='232px'
                                    width='100%'
                                />
                            </div>
                            <div className={classes.cardContentDetails}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                content
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            extra info
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
        )})}
    </Grid>
  );
}

export default Podcasts;