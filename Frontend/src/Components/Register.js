import React, { useState } from "react";
import "./css/Register.css";
import { useRegisterUserMutation } from "../services/UserAuthApi";
import { Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { storeToken } from "../services/LocalStorageServices";
import Header from './Header'

export const Register = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      date_of_birth: data.get("date_of_birth"),
      cashtag: data.get("cashtag"),
      password: data.get("password"),
      password2: data.get("password2"),
      
      
    };
  

    const res = await registerUser(actualData);
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      
      storeToken(res.data.token)
      navigate('/dashboard')
    }
  
  };

  return (
    <>
  <Header />
    <div className="RegisterPage">
      <h2>Register</h2>
      <form className="RegForm"  onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          id="name"
          name="name"
        />
        {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 150}}>{server_error.name[0]}</Typography> : ""}
        <input type="date" placeholder="Date of Birth" id="date_of_birth" name="date_of_birth" />
        {server_error.date_of_birth ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 30 }}>{server_error.date_of_birth[0]}</Typography> : ""}
        <input
          type="text"
          placeholder="Your Cashtag"
          id="cashtag"
          name="cashtag"
        />
        {server_error.cashtag ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 150}}>{server_error.cashtag[0]}</Typography> : ""}
        
        <input type="password" placeholder="PIN" name ="password" id="password" />
        {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 150}}>{server_error.password[0]}</Typography> : ""}
        
        <input type="password" placeholder="Confirm PIN" name ="password2" id="password2" />
        {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 150}}>{server_error.password2[0]}</Typography> : ""}
        <button type="submit" >Register</button>
      </form>
      

      {server_error.non_field_errors ? <Alert severity='error' style={{position:'relative',marginTop:'600px'}}>{server_error.non_field_errors[0]}</Alert> : ''}
     
    </div>
    </>
  );
};
