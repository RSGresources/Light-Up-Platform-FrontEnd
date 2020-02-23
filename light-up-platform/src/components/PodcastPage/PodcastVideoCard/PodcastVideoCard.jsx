import React from 'react';
import cx from 'clsx'
import podcastVidImg from '../../../resources/images/youtube-vid-icon.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        borderRadius: '1.1%',
        minHeight: '15vh',
        maxHeight: '15vh',
        marginBottom: '2vh',
        padding: 0,
        backgroundColor: '#E9E9E9',
        boxShadow:
            '0 4px 4px -2px rgba(0,0,0,0.54), 0 4px 24px -2px rgba(0, 0, 0, 0.2)',

    },
    headerContainer: {
        display: 'flex',
        fontSize: '1.5vh',
        backgroundColor: '#6C99F2',
        color: 'white'
    },
    headerContents: {
        marginLeft: 5,
    },
    media: {
        width: '9vh',
    },
    BodyIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '13vh'
    },
    BodyTexts: {
        minHeight: '13vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    BodyTitle: {
        fontSize: '2vh',
        fontWeight: 'bold',
        textOverflow: 'ellipsis',
        overflow: 'scroll',
        paddingRight: '1vw',
        maxHeight: '9vh',
        maxWidth: '49vw',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    BodyAuthor: {
        fontSize: '1.4vh',
        marginBottom: '1vh'
    },
    content: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        }
    },
});

const PodcastVideoCard = ({ dateRecorded, timeRecorded, title, author, color }) => {

    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardContent className={classes.content} >
                <div className={classes.headerContainer} style={{ backgroundColor: color }}>
                    <div className={classes.headerContents}>
                        {dateRecorded}
                    </div>
                    <div className={classes.headerContents}>
                        {timeRecorded}
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <div className={classes.BodyIcon} >
                            <img
                                className={classes.media}
                                src={podcastVidImg}
                                alt="Youtube Podcast video Icon"
                            />
                        </div>
                    </div>

                    <div className='col-8'>
                        <div className={classes.BodyTexts}>
                            <Typography className={classes.BodyTitle} variant='body1'>
                                {title}
                            </Typography>
                            <Typography className={classes.BodyAuthor} variant='body1'>
                                {author}
                            </Typography>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default PodcastVideoCard
