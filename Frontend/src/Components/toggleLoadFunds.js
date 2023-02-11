import React,{ useState, useEffect } from "react";
import './css/LoadFunds.css';
import Dropdown from "./Dropdown";
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { unsetUserToken } from '../features/authSlice';
import {setUserInfo,unsetUserInfo} from '../features/userSlice'
import { getToken, removeToken } from '../services/LocalStorageServices';
import { useGetUserInfoShowQuery } from '../services/UserAuthApi';



export default function ToggleLoadFunds(props) {
  const [hide, setHide] = useState(false);
  const { access_token } = getToken()
  const { data, isSuccess } = useGetUserInfoShowQuery(access_token)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
const [userData, setUserData] = useState({
   cashtag: "",
    name: "",
    balance: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        cashtag: data.cashtag,
        name: data.name,
        balance: data.balance
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        cashtag: data.cashtag,
        name: data.name,
        balance: data.balance
      }))
    }
  }, [data, isSuccess, dispatch])

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <div>
     
    <div className="sf-2-fiat-div" style={{ display: hide ? "none" : "block" }}>
    <p className="loadf-h1">Receiving Details</p>
    <div className="div-wallet">
        <p className="Cashtag-h-p">Cashtag</p>
        <p className="cashtag-value">{userData.cashtag}</p>
        <br/>
        <br/>
        
        <div className="QR-code">
          <img id="qrcode" src={require('./css/icons/qrcode.png')} width='142.24px' height='142.24px'></img>
        </div>
      
      </div>

      </div>
    {/* <button id="sf-div2-cryptobtn" onClick={toggleHide}>Crypto</button> */}
    <button id="sf-div2-fiatbtn">Fiat</button>
    

    </div>
      
   
  );
}