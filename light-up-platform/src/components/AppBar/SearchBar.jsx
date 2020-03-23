import React, { useState, useContext } from 'react';

import { SetsearchParamsContext } from '../../utils/Contexts/searchBarContext';

import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    fontSize: '0.63em',
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '10vw',
      '&:focus': {
        width: '40vw',
      },
    },
  },
  clearSearchButtonInactiave: {
    textTransform: 'none',
    color: 'white',
    opacity: '50%'
  },
  clearSerchButtonActive: {
    opacity: '100%',
    textTransform: 'none',
    color: 'white',
  },
}));


const SearchBar = ({ renderClearButton }) => {
  const classes = useStyles();
  const setSearchParams = useContext(SetsearchParamsContext);
  const [filterParams, setfilterParams] = useState('');
  const [clearActive, setClearActive] = useState(false);

  const handleSearchOnChange = (event) => {
    setfilterParams(event.target.value);
  }

  const isEmptyorWhiteSpace = (str) => {
    const result = str === null || str.match(/^\s*$/) !== null;
    return result
  };

  const handleSearchBarClick = (searchParams) => {
    if (isEmptyorWhiteSpace(searchParams)) {
      setSearchParams(undefined);
      setClearActive(false);

    } else {
      setSearchParams(searchParams);
      setClearActive(true);
    }


  }

  const handleClearClick = () => {
    setSearchParams(undefined);
    setfilterParams('');
    setClearActive(false);
  }

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchOnChange}
          value={filterParams}
          onKeyDown={
            (e) => e.type === 'keydown' &&
              (e.key === 'Enter' || e.key === 'done') &&
              handleSearchBarClick(filterParams)
          }
        />

      </div>

      {renderClearButton &&
        <Button onClick={handleClearClick} classes={filterParams || clearActive ? { root: classes.clearSerchButtonActive } : { root: classes.clearSearchButtonInactiave }} >
          <Typography>
            clear
              </Typography>
        </Button>
      }
    </div>
  );
}

export default SearchBar;