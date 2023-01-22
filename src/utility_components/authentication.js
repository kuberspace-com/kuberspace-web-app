import {useState,useContext, useEffect,createContext,React} from 'react';
import axios from 'axios';
import {getCookie,deleteCookie} from '../utility_functions/cookie'
const AuthContext = createContext(null);

const AuthProvider = (props)=>{
const [isLoggedin, setLoggedin] = useState(false);

useEffect(()=>{
  axios.get('/authenticate',{params:{userId:getCookie('userId')}, headers:{ Authorization:'Bearer '+getCookie('user_session')}}).then(response=>{
    if (response.data.authorized){
      setLoggedin(true);
    } else {
      deleteCookie('user_session');
      deleteCookie('userId');
      setLoggedin(false);
    }
})
})

return (
  <AuthContext.Provider isLoggedin={isLoggedin} value={{isLoggedin:isLoggedin,setLoggedin:setLoggedin}}>
    {props.children}
  </AuthContext.Provider>
  )
}

var UseAuth = ()=>{
  return useContext(AuthContext);
}
export  {AuthProvider, UseAuth};

//make catagories for dashboard
// when user is seller then give acess to dashboard on client, rn its set to all
// display user name on client with local storage and delete local storage on log out or when cookeie is not active