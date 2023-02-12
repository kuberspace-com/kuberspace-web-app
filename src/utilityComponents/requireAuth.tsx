import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { USE_AUTH } from './authentication';

function RequireAuth(props) {
  var { children } = props;
  var location = useLocation();
  const AUTH: {isLoggedin: boolean, setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>} = USE_AUTH();
  if ((!AUTH.isLoggedin && !props.accessibleTo.includes('admin') === false)
   || (!props.accessibleTo.includes('user') === false)) {
    return <Navigate to="/login" state={{ from: location, isLoggedin: AUTH.isLoggedin }} replace />;
  }
  return children;
}

export default RequireAuth;
