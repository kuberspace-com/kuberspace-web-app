import {React,useRef,useState} from 'react';
import {useNavigate,Link} from "react-router-dom";
import './login.scss';
import axios from 'axios';
import {createCookie,deleteCookie} from '../../utility_functions/cookie';
import {Button,Box} from '@mui/material';
import {FormGroup, FormControl} from '@kuberspace/kuberform';

function Login(props){
  console.log(FormGroup)
  let navigate = useNavigate()
  const ref = useRef(null);
  const [error_message,setError_message] = useState(null)

  // var fgroup = {
  //   "username":{
  //     "type":"formControl",
  //     "required":true,
  //     "helperText":"",
  //     "label":"Please enter  your username",
  //     "validator": (val,obs)=>{
  //       // make req to server to check users
  //       if (val.length >0){
  //         obs.next(true);
  //       } else {
  //         obs.next(false);
  //       }
  //     }
  //   },
  //   "password":{
  //     "type":"formControl",
  //     "required":true,
  //     "label":"Please enter your password",
  //     "validator": (val,obs)=>{
  //       if (val.length >0){
  //         obs.next(true);
  //       } else {
  //         obs.next(false);
  //       }
  //     }
  //   }

  // }

  var Submit = (event)=> {
    // event.preventDefault();
    //  if (ref.current){
    //    var form = ref.current;
    //   if (form.state.status === "VALID"){
    //     var data = form.getData();
    //     form.reset();

    //     axios.post('/login',data).then(response=>{
    //       console.log('response',response);
    //       if (response.data.token !== undefined){
    //         deleteCookie('user_session')
    //         deleteCookie('userId')
    //         createCookie('userId',response.data.userId,2)
    //         createCookie('user_session',response.data.token,2)
    //       }
    //       if (response.data.redirect !== undefined){
    //         navigate(response.data.redirect,{ replace: true });
    //       }
    //     }).catch(err=>{
    //       console.log(err)
    //       setError_message("there is mismatch information that was submitted")
    //       setTimeout(()=>{
    //         setError_message(null)
    //       },4000)
    //     })
    //   }
    //  }
  }

return (
  <div className="login">
     {error_message?<Box sx={{ flexGrow: 1 }} className="error_message">{error_message}</Box>:null}
  <div className="background-image"  style={{ "backgroundImage": "url(/images/main_photo.jpg)"}}>
    <div className="alignment">
        <div className="wrapper">
          <div style={{ "backdropFilter": "blur(5px)", width: "500px",height: "auto"}}>
        <FormGroup groupName="login" ref={ref} >
          <FormControl controlName="username" >
            {(props)=>{
                return (
                <label>username
                  <input type="text" />
                </label>)
            }}
          </FormControl>
          <FormControl controlName="password" >
            {(props)=>{
                return (
                <label>password
                  <input type="password" />
                </label>)
            }}
          </FormControl>
        </FormGroup>
        <Link to="/signup"><span className="signup-btn">Sign up</span></Link>

        <div className="btn-wrapper"><Button onClick={Submit} variant="contained" type="submit">Submit</Button></div>
        </div>
        </div>
    </div>
    </div>


  </div>
);

}

export default Login;