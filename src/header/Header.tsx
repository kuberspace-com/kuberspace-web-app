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
import { useNavigate, useLocation } from 'react-router-dom';
import $ from 'jquery';
import { deleteCookie } from '../utilityFunctions/cookie';
import { USE_AUTH } from '../utilityComponents/authentication';
import '../App.scss';
import './header.scss';
import InsetList from './KeyWordResults';
import FakeKeyWords from './fakeKeyWords.json';
import { Result } from '../sharedComponents/interfaces/Result.interface';

function DropDownMenu(props: { NAVIGATE: (url:string, component?:string | boolean | undefined)=> void}) {
  const AUTH: {setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, isLoggedIn: boolean} = USE_AUTH();
  const LOGOUT = ()=> {
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
  var [component, setComponent]: [
    string | boolean,
    React.Dispatch<React.SetStateAction<string | boolean>>
  ] = useState('home');
  var [navOpen, setNav] = useState(false);
  var [searchResults, setSearchResults]: [
    Result[],
    React.Dispatch<React.SetStateAction<null | Result[]>>
  ] = useState([]);

  const AUTH: {setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>, isLoggedIn: boolean} = USE_AUTH();
  const NAVIGATION = useNavigate();
  var [resultsVisable, setResultsVisable] = useState(false);

  const NAVIGATE = (url: string, componentToChange?: string | undefined | boolean)=> {
    if (componentToChange && typeof componentToChange === 'string') {
      setComponent(componentToChange.toLowerCase());
    } else {
      setComponent(false);
    }
    // may need to allow null for set component so it does highlight under
    setNav(false);
    NAVIGATION(url, { replace: true });
  };

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
    // proably a better way to do this.
    if (location.pathname === '/') {
      setComponent('home');
      setPageLoadColor('#0000005c');
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
        <Typography sx={{ marginRight: '20px' }} variant="h6" color="inherit" component="div">
          <span
            tabIndex={0}
            role="button"
            className="hover-icon"
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
        {AUTH.isLoggedIn ? (
          <span
            onClick={LOGOUT}
            onKeyDown={(e)=> KEY_DOWN(e, LOGOUT)}
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
            onClick={()=> { NAVIGATE('/login'); }}
            onKeyDown={(e)=> KEY_DOWN(e, ()=> { NAVIGATE('/login'); })}
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
      {navOpen ? <DropDownMenu NAVIGATE={NAVIGATE} /> : null}
    </AppBar>
  );
}
export default Header;
