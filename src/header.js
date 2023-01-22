import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Paper,
  MenuItem,
  MenuList,
  Stack
} from '@mui/material';
import { useState, useEffect, React } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteCookie } from './utility_functions/cookie';
import { UseAuth } from './utility_components/authentication';
import Settings from './app_settings/settings';

var routeObject = Settings.getRoutes();

function DropDownMenu() {
  const AUTH = UseAuth();
  const NAVIGATE = useNavigate();

  const LOGOUT = ()=> {
    deleteCookie('user_session');
    deleteCookie('userId');
    AUTH.setLoggedin(false);
    NAVIGATE('/');
  };

  function nav(route) {
    NAVIGATE(route);
  }

  return (
    <Stack className="dropdown-ct" direction="row" spacing={2}>
      <Paper>
        <MenuList>
          {Object.keys(routeObject).map((key)=> {
            var r = routeObject[key];
            r.label[0].toUpperCase();
            if (key !== 'login') {
              if (r.redirect) {
                r.path = r.redirect;
              }
              return <MenuItem key={key} onClick={()=> { nav(r.path); }}>{r.label}</MenuItem>;
            }
            return null;
          })}
          {AUTH.isLoggedIn ? <MenuItem>Logout</MenuItem>
            : <MenuItem onClick={()=> { LOGOUT(); nav('/login'); }}>Login</MenuItem>}
        </MenuList>
      </Paper>
    </Stack>
  );
}

function Header() {
  var location = useLocation();
  var [pageLoadColor, setPageLoadColor] = useState('#d1b58f');
  var [component, setComponent] = useState('home');
  var [navOpen, setNav] = useState(false);
  const AUTH = UseAuth();
  const NAVIGATE = useNavigate();

  useEffect(()=> {
    if (location.pathname === '/') {
      setComponent('home');
      setPageLoadColor('transparent');
    } else {
      const ROUTE_PATH = location.pathname.split('/')[1];
      setComponent(ROUTE_PATH);
      setPageLoadColor('#d1b58f');
    }
  }, [location, setComponent, setPageLoadColor]);

  const LOGOUT = ()=> {
    deleteCookie('user_session');
    deleteCookie('userId');
    AUTH.setLoggedin(false);
    NAVIGATE('/');
  };

  const CHANGE_TAB = (path, value)=> {
    setComponent(value);
    NAVIGATE(path, { replace: true });
  };

  function toggelNav(bool) {
    if (bool !== undefined) {
      setNav(!bool);
    } else {
      setNav(!navOpen);
    }
  }

  function keyDown(e, callback) {
    if (e.target.hasFocus()) {
      if (e.keyCode === '13') {
        callback();
      }
    }
  }

  return (
    <AppBar className="top_header" style={{ backgroundColor: pageLoadColor }} position="static">
      <Toolbar variant="dense">
        <div className="hamburger">
          <IconButton onClick={()=> { toggelNav(); }} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </div>
        <div
          onClick={()=> { CHANGE_TAB('/', 'home'); }}
          onKeyDown={keyDown(()=> { CHANGE_TAB('/', 'home'); })}
          tabIndex="0"
          role="button"
        >
          <img className="logo" alt="logo" src="/images/logo.png" />
        </div>
        <Typography className="logoName" variant="h6" color="inherit" component="div">
          Zenabyss
        </Typography>
        <div className="tab-ct">
          <Tabs value={component ?? false}>
            {Object.keys(routeObject).map((key)=> {
              var r = routeObject[key];
              if (r.makeTab) {
                if (r.redirect) {
                  r.path = r.redirect;
                }
                return (
                  <Tab
                    onClick={()=> { CHANGE_TAB(r.path, key); }}
                    className="hovertab"
                    key={key}
                    label={r.label}
                    value={key}
                  />
                );
              }
              return null;
            })}
          </Tabs>
        </div>
        {AUTH.isLoggedin ? (
          <span
            onClick={LOGOUT}
            onKeyDown={keyDown(LOGOUT)}
            style={{
              position: 'absolute',
              right: '30px',
              cursor: 'grab'
            }}
            color="inherit"
            tabIndex="0"
            role="button"
          >
            Logout
          </span>
        ) : (
          <span
            onClick={()=> { NAVIGATE('/login', { replace: true }); }}
            onKeyDown={keyDown(()=> { NAVIGATE('/login', { replace: true }); })}
            style={{
              position: 'absolute',
              right: '30px',
              cursor: 'grab'
            }}
            color="inherit"
            role="button"
            tabIndex="0"
          >
            Login
          </span>
        )}
      </Toolbar>
      {navOpen ? <DropDownMenu setNav={setNav}> </DropDownMenu> : null}
    </AppBar>
  );
}
export default Header;
