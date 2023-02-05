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
  Tab
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useEffect, ChangeEvent } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import $ from 'jquery';
import { deleteCookie } from '../utilityFunctions/cookie';
import { USE_AUTH } from '../utilityComponents/authentication';
import '../App.scss';
import './header.scss';
/* eslint-disable no-console */

function DropDownMenu(props: { NAVIGATE: (url:string, component?:string)=> void}) {
  const AUTH: {setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, isLoggedIn: boolean} = USE_AUTH();

  const LOGOUT = ()=> {
    console.log('clicked log out');
    deleteCookie('user_session');
    deleteCookie('userId');
    AUTH.setLoggedIn(false);
    props.NAVIGATE('/login');
  };

  return (
    <Stack className="dropdown-ct" direction="row" spacing={2}>
      <Paper sx={{ width: '100%' }}>
        <MenuList>
          <MenuItem className="dropdown-route" onClick={()=> props.NAVIGATE('/', 'home')}> Home </MenuItem>
          <MenuItem className="dropdown-route" onClick={()=> props.NAVIGATE('/about-us', 'about')}> About </MenuItem>
          {AUTH.isLoggedIn ? <MenuItem>Logout</MenuItem>
            : <MenuItem className="dropdown-route" onClick={()=> LOGOUT()}> Login </MenuItem>}
        </MenuList>
      </Paper>
    </Stack>
  );
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header(_props:{className: string}) {
  var location = useLocation();
  var [pageLoadColor, setPageLoadColor] = useState('#dd993b');
  var [component, setComponent] = useState('home');
  var [navOpen, setNav] = useState(false);
  var [searchResults, setSearchResults]: [
    string[] | null,
    React.Dispatch<React.SetStateAction<null | string[]>>
  ] = useState(null);

  const AUTH: {setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, isLoggedIn: boolean} = USE_AUTH();
  const NAVIGATION = useNavigate();
  var [resultsVisable, setResultsVisable] = useState(false);
  const NAVIGATE = (url: string, componentToChange?: string)=> {
    console.log('changing it up');
    if (componentToChange) {
      setComponent(componentToChange.toLowerCase());
    }
    setNav(false);
    NAVIGATION(url, { replace: true });
  };

  useEffect(()=> {
    $('.App').on('click', (event: { target: { closest: (arg0: string) => null; }; })=> {
      if (event.target.closest('.hamburger') == null
      && (event.target).closest('.dropdown-route') == null) {
        setNav(false);
      }
    });
    // proably a better way to do this.
    if (location.pathname === '/') {
      setComponent('home');
      setPageLoadColor('transparent');
    } else {
      const ROUTE = location.pathname.split('/')[1];
      const LIST_OF_ACCEPTABLE_TABS = [
        'home',
        'product-search',
        'product-details'
      ];
      if (LIST_OF_ACCEPTABLE_TABS.includes(ROUTE)) {
        setComponent(ROUTE);
      }
      setPageLoadColor('#dd993b');
    }
  }, [location, setComponent, setPageLoadColor]);

  const LOGOUT = ()=> {
    deleteCookie('user_session');
    deleteCookie('userId');
    AUTH.setLoggedIn(false);
    NAVIGATE('/', 'home');
  };

  const KEY_DOWN = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    callback: ()=> void
  )=> {
    if (e.key === 'enter') {
      callback();
    }
  };

  function search() {
    // go to search page with ?qs='trains'
  }
  function focusSearch() {
    if (searchResults != null) {
      setResultsVisable(true);
    }
  }
  function searchKeyWords(e: ChangeEvent): void {
    // pull down related keywords
    const TARGET = e.target as HTMLButtonElement;
    if (TARGET.value) {
      // get results from test file
      setSearchResults([TARGET.value]);
      setResultsVisable(true);
    }
  }

  return (
    <AppBar
      className="top-header"
      sx={{
        backgroundColor: pageLoadColor,
        position: 'absolute'
      }}
    >
      <Toolbar variant="dense">
        <div className="hamburger">
          <IconButton
            onClick={()=> { setNav(!navOpen); }}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div
          onClick={()=> { NAVIGATE('/', 'home'); }}
          onKeyDown={(e)=> KEY_DOWN(e, ()=> { NAVIGATE('/', 'home'); })}
          tabIndex={0}
          role="button"
        >
          <img className="logo" alt="logo" src="/KuberspaceLogo.png" />
        </div>
        <Typography sx={{ marginRight: '20px' }} variant="h6" color="inherit" component="div">
          <span
            tabIndex={0}
            role="button"
            onKeyDown={(e)=> KEY_DOWN(e, ()=> { NAVIGATE('/', 'home'); })}
            onClick={()=> { NAVIGATE('/', 'home'); }}
          >
            Kuberspace
          </span>
        </Typography>
        <div className="tab-ct">
          <Tabs value={component ?? false}>
            <Tab
              onClick={()=> { NAVIGATE('/', 'home'); }}
              className="hovertab"
              label="home"
              value="home"
            />
            <Tab
              onClick={()=> { NAVIGATE('/about-us', 'about'); }}
              className="hovertab"
              label="about us"
              value="about"
            />
          </Tabs>
        </div>
        {AUTH.isLoggedIn ? (
          <span
            onClick={LOGOUT}
            onKeyDown={(e)=> KEY_DOWN(e, LOGOUT)}
            style={{
              position: 'absolute',
              right: '30px',
              cursor: 'grab'
            }}
            color="inherit"
            tabIndex={0}
            role="button"
          >
            Logout
          </span>
        ) : (
          <span
            onClick={()=> { NAVIGATE('/login'); }}
            onKeyDown={(e)=> KEY_DOWN(e, ()=> { NAVIGATE('/login'); })}
            style={{
              position: 'absolute',
              right: '30px',
              cursor: 'grab'
            }}
            color="inherit"
            role="button"
            tabIndex={0}
          >
            Login
          </span>
        )}
      </Toolbar>
      <div className="search-bar">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search.."
              onChange={searchKeyWords}
              onFocus={focusSearch}
            />
            <button onClick={search} tabIndex={0} type="button" className="search-button">
              <SearchIcon />
            </button>
          </div>
        </div>
        {resultsVisable
          ? (
            <div className="search-results">
              <div className="row">
                <span>item</span>
              </div>
            </div>
          )
          : null}

      </div>
      {navOpen ? <DropDownMenu NAVIGATE={NAVIGATE} /> : null}
    </AppBar>
  );
}
export default Header;
