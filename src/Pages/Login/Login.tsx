import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.scss';
// import axios from 'axios';
import { Button, Box } from '@mui/material';
import { FormGroup, FormControl } from '@kuberspace/kuberform';
// import { createCookie, deleteCookie } from '../../utility_functions/cookie';

function Login() {
  var [errorMessage, setErrorMessage] = useState(null);
  const NAVIGATE = useNavigate();
  const REF = useRef(null);

  function submit() {
    // do nothing for now
  }

  return (
    <div className="login">
      {errorMessage ? <Box sx={{ flexGrow: 1 }} className="error_message">{errorMessage}</Box> : null}
      <div className="background-image" style={{ backgroundImage: 'url(/images/main_photo.jpg)' }}>
        <div className="alignment">
          <div className="wrapper">
            <div style={{ backdropFilter: 'blur(5px)', width: '500px', height: 'auto' }}>
              <FormGroup groupName="login" ref={REF}>
                <FormControl controlName="username">
                  {()=> (
                    <label>
                      username
                      <input type="text" />
                    </label>
                  )}
                </FormControl>
                <FormControl controlName="password">
                  {()=> (
                    <label>
                      password
                      <input type="password" />
                    </label>
                  )}
                </FormControl>
              </FormGroup>
              <Link to="/signup"><span className="signup-btn">Sign up</span></Link>
              <div className="btn-wrapper">
                <Button
                  onClick={()=> {
                    submit();
                  }}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
