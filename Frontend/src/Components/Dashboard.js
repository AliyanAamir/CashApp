import {React,useState,useEffect} from 'react';
import './css/Dashboard.css';
import TransactionList from './TransactionList';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import { unsetUserToken } from '../features/authSlice';
import {setUserInfo,unsetUserInfo} from '../features/userSlice'
import { getToken, removeToken } from '../services/LocalStorageServices';
import { useGetUserInfoShowQuery } from '../services/UserAuthApi';



export default function Dashboard  () {
    const handleLogout = () => {
        dispatch(unsetUserInfo({ name: "", cashtag: "" }))
        dispatch(unsetUserToken({ access_token: null }))
        removeToken()
        navigate('/login')
      }
      
      const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const LoadHandler = () => {
    navigate('/loadfunds');
} 
const SendHandler = () => {
    navigate('/sendfunds');
} 
const { data, isSuccess } = useGetUserInfoShowQuery(access_token)
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

  
  return (
    

    <body className='DashboardBody'>
        <nav className='sidebar'>
            <ul className='sidebarUL' id='sidebarUL'>
                <li>
                    <a href='#' >
                        <img src= {require('./css/svg/Ellipse 11.png')} id='Ellipse11'></img>
                        <img src= {require('./css/svg/Group378.png')} id='group378'></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group377.png')} id='group377'></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/VectorD1.png')} id='vectorD1'></img>
                    </a>
                </li>
                <li>
                    <a href='#'>
                    <img src= {require('./css/svg/Group40.png')} id='group40'></img>
                    </a>
                </li>
                <li>
                    <button onClick={handleLogout}>
                    <img src= {require('./css/svg/Group375.png')} id='group375'></img>
                    </button>
                </li>
            </ul>
        </nav>
        <div className='top-leftdiv'>
            <p id='greeting-msg'>Good Evening!</p>
            <p id='account-name-ip'> {userData.name}</p>
        </div>
        <div className='fiat-balance-div'>
            <p id='fiatbalancep1'>Fiat Balance</p>
            <div className='ellipse1'></div>
            <div className='ellipse2'></div>
            <FiatBalance balance={userData.balance}/>
            <img src= {require('./css/svg/Group368.png')} id='group368'></img>
            <a href='#' id='fiat-details'>
                <p>Details</p>
                <img src= {require('./css/svg/VectorBalanceDiv.png')} id='group1'></img>
            </a>

        </div>
        

        <hr />
        <TransactionList/>
        <button id='load_btn' onClick={LoadHandler}>Load</button>
        <button id='send_btn' onClick={SendHandler}>Send</button>

    </body>
  );
}


function FiatBalance(props){
    return(<h3>${props.balance}</h3>);
}

