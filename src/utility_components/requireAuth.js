
import React from 'react'
import {useLocation ,Navigate} from "react-router-dom";
import {UseAuth} from './authentication';


function RequireAuth(props) {
  var children = props.children
  var location = useLocation();
  let auth = UseAuth();

  if ((!auth.isLoggedin && !props.accessibleTo.includes('admin') === false) || (!props.accessibleTo.includes('user') === false) ) {
    return <Navigate to="/login" state={{ from: location, isLoggedin:auth.isLoggedin }} replace={true} />;
  } else {
    return children;
  }
}

export default RequireAuth