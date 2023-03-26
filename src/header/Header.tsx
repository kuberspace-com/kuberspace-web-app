import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Paper,
  MenuItem,
  MenuList,
  Stack,
  Tab,
  Input
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useState, useEffect, ChangeEvent } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import '../App.scss';
import './header.scss';
import InsetList from './KeyWordResults';
import FakeKeyWords from './fakeKeyWords.json';
import { Result } from '../interfaces/Result.interface';
import GENERAL_CONTEXT from '../context/GeneralContext';

function DropDownMenu(props: { NAVIGATE: (url: string, componentToChange: string | boolean | null)=> void, CONTEXT}) {
  return (
    <Stack className="dropdown-ct" direction="row" spacing={2}>
      <Paper sx={{ width: '100%' }}>
        <MenuList>
          <MenuItem className="dropdown-route" onClick={()=> props.NAVIGATE('/', 'home')}> Home </MenuItem>
          <MenuItem className="dropdown-route" onClick={()=> props.NAVIGATE('/about-us', 'about')}> About </MenuItem>
          {props.CONTEXT.state.user.loggedIn ? <MenuItem>Logout</MenuItem>
            : <MenuItem className="dropdown-route" onClick={()=> props.CONTEXT.logout()}> Login </MenuItem>}
        </MenuList>
      </Paper>
    </Stack>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header(_props:{className: string}) {
  var [navOpen, setNav] = useState(false);
  var [searchResults, setSearchResults]: [
    Result[],
    React.Dispatch<React.SetStateAction<null | Result[]>>
  ] = useState([]);
  var [resultsVisable, setResultsVisable] = useState(false);
  const CONTEXT = React.useContext(GENERAL_CONTEXT);
  // eslint-disable-next-line no-console

  const NAVIGATE = (url: string, componentToChange: string | boolean | null)=> {
    setNav(false);
    CONTEXT.NAVIGATE(url, componentToChange);
  };

  console.log(CONTEXT.state);
  useEffect(()=> {
    $('.App').on('click', (event: { target: { closest: (arg0: string) => null; }; })=> {
      if (event.target.closest('.hamburger') == null
      && (event.target).closest('.dropdown-route') == null) {
        setNav(false);
      }
      if (event.target.closest('.search-result-dropdown') == null) {
        setResultsVisable(false);
      }
    });
  }, [setNav, setResultsVisable]);

  const KEY_DOWN = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    callback: ()=> void
  )=> {
    if (e.key === 'enter') {
      callback();
    }
  };

  const SEARCH_QUERY = (keyWord: string)=> {
    // go to search page with ?qs='trains'
    // eslint-disable-next-line no-console
    console.log('keyWord: ', keyWord);
    setResultsVisable(false);
    NAVIGATE(`/product-list?keyWord=${keyWord}`, false);
    // send to page router
  };

  // function focusSearch() {
  //   if (searchResults != null) {
  //     setResultsVisable(true);
  //   }
  // }
  function searchKeyWords(keyword: string): void {
    // pull down related keywords
    if (keyword !== '') {
      // get results from test file
      setSearchResults(FakeKeyWords.keyWords);
      setResultsVisable(true);
    } else {
      setResultsVisable(false);
    }
  }

  return (
    <AppBar
      className="top-header"
      sx={CONTEXT.state.page === '/' ? { background: 'transparent' } : { background: 'red' }}
    >
      <Toolbar variant="dense">
        <div className="hamburger">
          <IconButton
            onClick={()=> { setNav(!navOpen); }}
            edge="start"
            color="inherit"
            aria-label="menu"
            name="drop-down button"
            sx={{ mr: 2 }}
          >
            <MenuIcon className="hover-icon" />
          </IconButton>
        </div>
        <div
          onClick={()=> { NAVIGATE('/', 'home'); }}
          onKeyDown={(e)=> KEY_DOWN(e, ()=> { NAVIGATE('/', 'home'); })}
          tabIndex={0}
          role="button"
        >
          <img className="logo hover-icon" alt="logo" src="/KuberspaceLogo.png" />
        </div>
        <Typography
          sx={{ marginRight: '20px' }}
          variant="h6"
          color="inherit"
          component="div"
        >
          <span
            tabIndex={0}
            role="button"
            className="kuberspace-link hover-icon"
            onKeyDown={(e)=> KEY_DOWN(e, ()=> { NAVIGATE('/', 'home'); })}
            onClick={()=> { NAVIGATE('/', 'home'); }}
          >
            Kuberspace
          </span>
        </Typography>
        <div className="tab-ct">
          <Tabs value={CONTEXT.state.component ?? false}>
            <Tab
              onClick={()=> { NAVIGATE('/', 'home'); }}
              className="hovertab"
              label="home"
              value="home"
              tabIndex={0}
            />
            <Tab
              onClick={()=> { NAVIGATE('/about-us', 'about'); }}
              className="hovertab"
              label="about us"
              value="about"
              tabIndex={0}
            />
          </Tabs>
        </div>
        <span
            // onClick={LOGOUT}
            // onKeyDown={(e)=> KEY_DOWN(e, LOGOUT)}
          style={{
            position: 'absolute',
            right: '130px',
            cursor: 'pointer'
          }}
          color="inherit"
          className="hover-icon"
          tabIndex={0}
          role="button"
        >
          <ShoppingCartIcon />
        </span>
        <span
            // onClick={LOGOUT}
            // onKeyDown={(e)=> KEY_DOWN(e, LOGOUT)}
          style={{
            position: 'absolute',
            right: '90px',
            cursor: 'pointer'
          }}
          color="inherit"
          className="hover-icon"
          tabIndex={0}
          role="button"
        >
          <AccountCircleIcon />
        </span>
        {CONTEXT.state.user.loggedIn ? (
          <span
            onClick={CONTEXT.logout}
            onKeyDown={(e)=> KEY_DOWN(e, CONTEXT.logout)}
            style={{
              position: 'absolute',
              right: '30px',
              cursor: 'pointer'
            }}
            className="hover-icon"
            color="inherit"
            tabIndex={0}
            role="button"
          >
            Logout
          </span>
        ) : (
          <span
            onClick={()=> {
              NAVIGATE('/login', null);
            }}
            onKeyDown={(e)=> KEY_DOWN(e, ()=> { NAVIGATE('/login', null); })}
            style={{
              position: 'absolute',
              right: '30px',
              cursor: 'pointer'
            }}
            className="hover-icon"
            color="inherit"
            role="button"
            tabIndex={0}
          >
            Login
          </span>
        )}
      </Toolbar>
      <div className="search-bar">
        <div className="search-container">
          {/* this need to have elastic search for similar queries */}
          <div className="search-input-wrapper">
            <button
              type="button"
              className="search-icon-wrapper"
              tabIndex={0}
            >
              <SearchIcon />
            </button>
            <Input
              style={{ textIndent: '50px' }}
              className="header-search-input"
              sx={{
                cursor: 'text',
                color: 'black',
                padding: '4px',
                width: '100%'
              }}
              onClick={(event): void=> {
                const TARGET = event.target as HTMLInputElement;
                if (TARGET.value !== '') {
                  setResultsVisable(true);
                }
              }}
              onChange={(e: ChangeEvent): void=> {
                const TARGET = e.target as HTMLInputElement;
                const VALUE: string = TARGET.value;
                searchKeyWords(VALUE);
              }}
              placeholder="Search…"
              aria-label="search"
            />
            <button
              type="button"
              className="search-icon-wrapper"
              tabIndex={0}
              style={{ background: '#e43131' }}
            >
              <CancelIcon />
            </button>
            {resultsVisable
              ? (
                <InsetList SEARCH_QUERY={SEARCH_QUERY} results={searchResults} />
              )
              : null}
          </div>
        </div>
      </div>
      {navOpen ? <DropDownMenu NAVIGATE={NAVIGATE} CONTEXT={CONTEXT} /> : null}
    </AppBar>
  );
}
export default Header;
