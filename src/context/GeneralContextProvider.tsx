import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, {
  Dispatch, SetStateAction, useEffect, useState
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GENERAL_CONTEXT from './GeneralContext';

function GeneralContextProvider(props): ReactJSXElement {
  var location = useLocation();
  var navigate = useNavigate();

  var [component, setComponent]: [
    string | boolean,
    Dispatch<SetStateAction<string | boolean>>
  ] = useState('home');

  var [page, setPage]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState('/');

  var [userId, setUserId]: [
    string | null,
    Dispatch<SetStateAction<string | null>>
  ] = useState(null);

  var [loggedIn, setLoggedIn]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);

  var [userPermissions, setUserPermissions]: [
    object,
    Dispatch<SetStateAction<object>>
  ] = useState({});

  var [userAuthToken, setUserAuthToken]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState('');

  function logout(): void {
    // deleteCookie
    // set user fields to null
  }

  function login(userName: string, password: string): void {
    // axios call for authentication
    // set user fields
  }

  function createCookie(name, value) {
    // eslint-disable-next-line no-undef
    document.cookie = `${name}=${value || ''};`;
  }

  function getCookie(name) {
    var nameEQ = `${name}=`;
    // eslint-disable-next-line no-undef
    var ca = document.cookie.split(';');
    var c: null | string = null;
    for (let i = 0; i < ca.length; i++) {
      c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  // eslint-disable-next-line vars-on-top, import/no-mutable-exports
  var deleteCookie = (name)=> {
    if (getCookie(name)) {
      // eslint-disable-next-line no-undef
      document.cookie = `${name}=`
        + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const NAVIGATE = (url: string, componentToChange?: string | null | boolean)=> {
    if (componentToChange && typeof componentToChange === 'string') {
      setComponent(componentToChange.toLowerCase());
    } else {
      setComponent(false);
    }
    setPage(url);
    navigate(url, { replace: true });
  };

  useEffect(()=> {
    setPage(location.pathname);
    if (location.pathname === '/') {
      setComponent('home');
    }
  }, [
    component,
    page,
    userId,
    userPermissions,
    userAuthToken,
    loggedIn
  ]);

  return (
    <GENERAL_CONTEXT.Provider value={
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          {
            state: {
              page,
              component,
              user: {
                userId,
                userPermissions,
                userAuthToken,
                loggedIn
              }
            },
            setComponent,
            setUserId,
            setPage,
            deleteCookie,
            getCookie,
            createCookie,
            login,
            logout,
            NAVIGATE
          }
    }
    >
      <div>{props.children}</div>
    </GENERAL_CONTEXT.Provider>
  );
}
export default GeneralContextProvider;
