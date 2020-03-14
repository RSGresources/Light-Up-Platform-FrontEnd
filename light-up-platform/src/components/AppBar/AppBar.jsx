import React, { useState, useContext } from 'react';

import SearchBar from './SearchBar';
import { SetsearchParamsContext } from '../../utils/Contexts/searchBarContext';

import AppBar from '@material-ui/core/AppBar';
import DrawerContent from './DrawerContent'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';



const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: '#D72832',
    height: '5vh',
    minHeight: 30,
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    fontSize: '1em',
    width: '100%'
  },
  drawer: {
    width: '80%'
  },
}));

const HeaderAppBar = ({ renderSearch }) => {

  const classes = useStyles();
  const setSearchParams = useContext(SetsearchParamsContext)
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (state) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(state);
  }

  const isEmptyorWhiteSpace = (str) => {
    const result = str === null || str.match(/^\s*$/) !== null;
    return result
  };

  const handleSearchBarClick = (searchParams, ) => {
    isEmptyorWhiteSpace(searchParams) ? setSearchParams(undefined) : setSearchParams(searchParams)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h5" noWrap>
            Specialised
          </Typography>

          {renderSearch && <SearchBar handleClick={handleSearchBarClick} />}

          <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer classes={{ paper: classes.drawer }} onClick={toggleDrawer(false)} open={drawerState} anchor='left' onClose={toggleDrawer(false)}>
        <DrawerContent />
      </Drawer>
    </div>
  );
}

export default HeaderAppBar