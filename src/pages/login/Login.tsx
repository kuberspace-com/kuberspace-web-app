import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
// import axios from 'axios';
import {
  Button,
  TextField,
  Alert
} from '@mui/material';
// import { FormGroup, FormControl } from '@kuberspace/kuberform';
// import { createCookie, deleteCookie } from '../../utility_functions/cookie';

function Login() {
  return (
    <main className="login">
      <div className="form-ct">
        <div className="grid-item form">
          <div className="login-wrapper">
            <h2 style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Link to="/sign-up">Sign Up</Link>
            </h2>

            <div className="input-box">
              <Alert severity="error">Username or Password is not correct! Try Again</Alert>
              <TextField
                sx={{ margin: '15px auto' }}
                id="filled-basic"
                label="Username"
                variant="filled"
                style={{ width: '100%' }}
                error
                size="small"
                helperText="Username is required"
              />
              <TextField
                sx={{ margin: '15px auto' }}
                id="filled-basic"
                label="Password"
                variant="filled"
                style={{ width: '100%' }}
                error
                helperText="Password is required"
              />
              <a href="/forgot-password">Forgot Password?</a>
              <button type="button"> Sign In </button>
              <span style={{ fontSize: '20px' }}>
                ----- or -----
              </span>
              <button type="button">
                Sign In With Google
              </button>

            </div>
          </div>
        </div>
        <div className="grid-item banner">
          <p>
            Welcome Back!
          </p>

          <span>
            Don&apos;t have an account? Don&apos;t Worry
          </span>
          <button type="button">
            Sign Up
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
