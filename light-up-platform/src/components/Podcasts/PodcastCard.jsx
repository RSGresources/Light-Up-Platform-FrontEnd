import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player'
import './PodcastCard.css'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slide from '@material-ui/core/Slide';

import { Divider } from '@material-ui/core';
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '79vw',
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
  expandMoreIcon: {
    color: '#397FD6'
  },
  cardContent: {
    padding: 0
  },
  cardContentDetails: {
    padding: '2% 2% 0% 2%',
  },
  cardContentDetailsTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'black',
    fontWeight: 'bold'
  },
  cardContentDetailsDateTimeContainer: {
    display: 'flex',
  },
  cardContentDetailsDateTime: {
    marginRight: '2%'
  },
  profilePicImg: {
    width: '10%',
    borderRadius: '50%',
    marginRight: '2%'
  },
  cardAuthorText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardLightUpsIconImg: {
    width: '69%'
  },
  cardLightUpsIconLabel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardLightUpsIconRoot: {
    width: '16%',
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  cardLightUpsText: {
    fontSize: '0.5em'
  },
  cardActions: {
    paddingTop: '1%'
  },
  collapseTitle: {
    textAlign: 'center',
    marginTop: '4%'
  },
  collapseDescription: {
    fontSize: '0.7em',
    textAlign: 'center'
  },
  reactPlayer: {
    '@media (min-width:520px)': {
      height: '33vh'
    }
  }
}));

const PodcastCard = ({ podcast, timeout, name, direction }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [lightUps, setLightUps] = useState(podcast.lightUps);
  const [isInViewPort, setIsInViewPort] = useState(false);
  const [element, setElement] = useState(null)

  const obsever = useRef(new IntersectionObserver((entries) => {
    const first = entries[0];
    if (first.isIntersecting) {
      setIsInViewPort(true)
    }
  }, { threshold: 1, rootMargin: '-15%' }));


  useEffect(() => {
    const currentElement = element;
    const currentObserver = obsever.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    }
  }, [element])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLightUpClick = () => {
    setLightUps(lightUps + 1)
  };

  return (

    <div>
      {!isInViewPort && <div className={String(name)} style={{ minHeight: '42vh' }} ref={setElement}></div>}

      {isInViewPort &&
        <Slide direction={direction} in={true} timeout={timeout} mountOnEnter unmountOnExit>
          <Card className={classes.root}>
            <CardContent className={classes.cardContent}>
              <div className={classes.reactPlayer} >
                <ReactPlayer
                  url={podcast.videoURL}
                  controls={true}
                  light={false}
                  height='100%'
                  width='100%'
                  wrapper='player-wrapper'
                />
              </div>
              {/* 232px */}
              <div className={classes.cardContentDetails}>
                <div className={classes.cardContentDetailsDateTimeContainer}>
                  <Typography className={classes.cardContentDetailsDateTime} variant="body2" color="textSecondary" component="p">
                    {podcast.dateRecorded}
                  </Typography>
                  <Typography className={classes.cardContentDetailsDateTime} variant="body2" color="textSecondary" component="p">
                    {podcast.timeRecorded}
                  </Typography>
                </div>
                <Typography className={classes.cardContentDetailsTitle} variant="body1" color="textSecondary" component="p">
                  {podcast.title}
                </Typography>
              </div>
            </CardContent>
            <CardActions classes={{ root: classes.cardActions }} disableSpacing>

              <img className={classes.profilePicImg} src={podcast.authorPicURL} alt='profile pic placeholder' />
              <Typography className={classes.cardAuthorText} variant="body1" color="textSecondary" component="p">
                {podcast.author}
              </Typography>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon className={classes.expandMoreIcon} />
              </IconButton>

              <IconButton classes={{ label: classes.cardLightUpsIconLabel, root: classes.cardLightUpsIconRoot }} onClick={handleLightUpClick} aria-label="show more" >
                <Typography className={classes.cardLightUpsText} variant="body1" color="textSecondary" component="p">
                  {lightUps}
                </Typography>
                <img className={classes.cardLightUpsIconImg} src='/icons/lightUpsIcon.png' alt='light icon' />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Divider />
                <Typography className={classes.collapseTitle} paragraph variant='subtitle1' color='textSecondary'>
                  {podcast.title}
                </Typography>
                <Typography className={classes.collapseDescription} paragraph variant='body1' color='textSecondary' component="p">
                  {podcast.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Slide>
      }
    </div>
  )
}

export default PodcastCard;