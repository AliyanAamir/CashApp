import { render } from '@testing-library/react';

import './css/NavBar2.css';
import {React,useState,useEffect} from 'react';
import './css/Dashboard.css';
import TransactionList from './TransactionList';
import { useDispatch } from 'react-redux';
import { useNavigate, Navigate, NavLink } from 'react-router-dom';
import { unsetUserToken } from '../features/authSlice';
import {setUserInfo,unsetUserInfo} from '../features/userSlice'
import { getToken, removeToken } from '../services/LocalStorageServices';
import { useGetUserInfoShowQuery } from '../services/UserAuthApi';
import { Button } from '@mui/material';

function NavBar2 () {
    const handleLogout = () => {
        dispatch(unsetUserInfo({ name: "", cashtag: "" }))
        dispatch(unsetUserToken({ access_token: null }))
        removeToken()
        navigate('/login')
      }
      
      const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()


const { data, isSuccess } = useGetUserInfoShowQuery(access_token)
const [userData, setUserData] = useState({
   cashtag: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        cashtag: data.cashtag,
        name: data.name
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        cashtag: data.cashtag,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])
  
        

    return (
        <div className='NavBar2'>
            <div className='profile_icon'>
                <img src= {require('./css/svg/Group40.png')} id='profile_vector'></img>
            </div>
            <p id='greetingmsg'>Good Evening!</p>
            <p id='profile-name'>{userData.name}</p>

            <ul className='navUL' id='navUL'>

                <li>
                    <NavLink to='/dashboard'>
                    <img src= {require('./css/svg/Group377.png')} id=''></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard'>
                    <img src= {require('./css/svg/VectorD1.png')} id=''></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard'>
                    <img src= {require('./css/svg/Group40.png')} id=''></img>
                    </NavLink>
                </li>
                <li>
                    <button onClick={handleLogout} style={{backgroundColor:'transparent',cursor:'pointer'}}>
                    <img src= {require('./css/svg/Group375.png')} id=''></img>
                    </button>
                </li>
            </ul>
        </div>
      );

    }

    
  


export default NavBar2;


