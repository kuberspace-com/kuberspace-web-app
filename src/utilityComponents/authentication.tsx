import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  useMemo
} from 'react';
import axios from 'axios';
import { getCookie, deleteCookie } from '../utilityFunctions/cookie';

// Context<null>
// ProviderExoticComponent<ProviderProps<{ children: any; isLoggedin: Boolean; setLoggedIn: Function; }>>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var AUTH_CONTEXT: React.Context<null> | any = createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AUTH_PROVIDER(props: {children: any}) {
  var [isLoggedIn, setLoggedIn]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);
  AUTH_CONTEXT = createContext({ isLoggedIn, setLoggedIn });

  useEffect(()=> {
    axios.get('/authenticate', {
      params: {
        userId: getCookie('userId')
      },
      headers: {
        Authorization: `Bearer ${getCookie('user_session')}`
      }
    }).then((response)=> {
      if (response.data.authorized) {
        setLoggedIn(true);
      } else {
        deleteCookie('user_session');
        deleteCookie('userId');
        setLoggedIn(false);
      }
    });
  });
  const LOGIN = useMemo(()=> ({ isLoggedIn, setLoggedIn }), []);

  return (
    <AUTH_CONTEXT.Provider value={LOGIN}>
      {props.children}
    </AUTH_CONTEXT.Provider>
  );
}

const USE_AUTH: any = ()=> useContext(AUTH_CONTEXT);
export { AUTH_PROVIDER, USE_AUTH };
