import React, { useState } from "react";
import './css/Login.css';
import { useNavigate , useDispatch } from "react-router-dom";
import { Typography, Alert , Box, Button, CircularProgress} from '@mui/material';
import { useLoginUserMutation } from "../services/UserAuthApi";


export const Login = () => {

    

  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
//   const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      cashtag: data.get('cashtag'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      navigate('/')
    }}
    

  return (
    <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input  type="text" placeholder=" Your Cashtag" id="cashtag" name="cashtag" />
                {server_error.cashtag ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.cashtag[0]}</Typography> : ""}
                <input   type="password" placeholder="password" id="password" name="password" />
                {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
                <Box textAlign='center'>
                     {isLoading ? <CircularProgress /> : <button type="submit" >Login</button>}
                </Box>
                
                
                <a href="#">Forgot Email / Password</a>
                {server_error.non_field_errors ? <Alert severity='error' style={{marginLeft:'30px',width:'270px',marginTop:'10px'}}>{server_error.non_field_errors[0]}</Alert> : ''}
            </form>
        </div>
  )
}
