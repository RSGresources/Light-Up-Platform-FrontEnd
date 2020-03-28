import React from 'react';
import { useHistory, withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ForumIcon from '@material-ui/icons/Forum';
import FlagIcon from '@material-ui/icons/Flag';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InfoIcon from '@material-ui/icons/Info';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '22%',
        backgroundColor: '#D72832',
        padding: '6% 5% 5% 5%'
    },
    image: {
        height: '11vh',
        borderRadius: '50%'
    },
    profileButton: {
        textTransform: 'none',
        backgroundColor: '#00000029',
        '&:hover': {
            backgroundColor: '#D72832'
        }
    },
    profileButtonText: {
        color: 'white'
    },
    profileNameText: {
        color: 'white'
    },
    headerTopContent: {
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'space-between'
    },
    listButtons: {
        paddingBottom: '5%',
    }

})

const DrawerConent = () => {
    const classes = useStyles();
    const history = useHistory();
    const listItems = [
        { name: 'Podcasts', icon: <RecordVoiceOverIcon />, route: '/' },
        { name: 'Webinars', icon: <AccountBoxIcon />, route: '/Webinars' },
        { name: 'Courses', icon: <LibraryBooksIcon />, route: '/Courses' },
        { name: 'Library', icon: <AccountBalanceIcon />, route: '/Library' },
        { name: 'Landing Page', icon: <AccountBalanceIcon/>, route: '/LandingPage'},
        { name: 'Forums', icon: <ForumIcon />, route: '/Forums' },
        { name: 'Training', icon: <FlagIcon />, route: '/Training' },
        { name: 'Weekly Re-ignition', icon: <VpnKeyIcon />, route: '/WeeklyReignition' },
        { name: 'About Light Up', icon: <InfoIcon />, route: '/AboutLightUp' },
        { name: 'Subscriptions', icon: <SubscriptionsIcon />, route: '/Subscriptions' }
    ];

    const handleOnClick = (pathname) => {
        history.push(pathname);
    }

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.headerTopContent}>
                    <img className={classes.image} src={'/images/profile_pic_placeholder.jpg'} alt='profile-placeholder' />
                    <Button classes={{ root: classes.profileButton }} onClick={() => handleOnClick('/Profile')} variant='contained' color='default' >
                        <Typography className={classes.profileButtonText} variant='body1'>
                            Profile
                    </Typography>
                    </Button>
                </div>
                <div>
                    <Typography className={classes.profileNameText} variant='body1'>
                        bradley.morgan393k@gmail.com
                </Typography>
                </div>
            </div>
            <div className='list-container'>
                <List>
                    {listItems.map((item, index) => {
                        return (
                            <ListItem button onClick={() => handleOnClick(item.route)} className={classes.listButtons} key={index}>
                                <ListItemIcon style={{ color: history.location.pathname === item.route ? '#4386F4' : null }}>{item.icon}</ListItemIcon>
                                <ListItemText style={{ color: history.location.pathname === item.route ? '#4386F4' : null }}>{item.name}</ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </div>
    );
}

export default withRouter(DrawerConent)