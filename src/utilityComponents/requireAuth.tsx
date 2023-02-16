import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { USE_AUTH } from './authentication';

function RequireAuth(props) {
  var { children } = props;
  var location = useLocation();
  const AUTH: {isLoggedIn: boolean, setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>} = USE_AUTH();
  if ((!AUTH.isLoggedIn && !props.accessibleTo.includes('admin') === false)
   || (!props.accessibleTo.includes('user') === false)) {
    return <Navigate to="/login" state={{ from: location, isLoggedin: AUTH.isLoggedIn }} replace />;
  }
  return children;
}

export default RequireAuth;
