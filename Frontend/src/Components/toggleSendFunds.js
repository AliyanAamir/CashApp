import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Dropdown from "./Dropdown";
import { useSelector } from 'react-redux';
import { useTransactionMutation } from "../services/UserAuthApi";
import { useGetTransactionDetailsQuery } from "../services/UserAuthApi";
import { Typography, Alert , Box, CircularProgress} from '@mui/material';




export default function ToggleSendFunds() {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };

  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const { access_token } = useSelector(state => state.auth)
  const [Payment, { isLoading }] = useTransactionMutation()
  // const [cashtag, Setcashtag] = useState('')
  // const [balance, Setbalance] = useState('')
  // const [memo, Setmemo] = useState('')
  // const handleInput = () => {
  //   const actualData = {
  //     cashtag: cashtag,
  //     balance: balance,
  //     memo: memo,
  //   }
  //   const res = Payment(actualData)
  //   if (res.error) {
  //     console.log(typeof (res.error.data.errors))
  //     console.log(res.error.data.errors)
  //     // setServerError(res.error.data.errors)
  //   };
  //   if (res.data) {
  //     // console.log(typeof (res.data))
  //     // console.log(res.data)
  //     navigate('/dashboard')
  //   }
  // }
  
 
  
  const Data = useGetTransactionDetailsQuery(access_token);
  const [Enter,setEnter] = useState('')
  
  const Entries = async()=> {const entries= await Data.data.data;
      setEnter(entries)
     
  };
  
  const handleSend = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      cashtag: data.get('cashtag'),
      balance: data.get('balance'),
      memo: data.get('memo'),

    }
    
    const res = await Payment(actualData)
    if (res.error) {
      // console.log(typeof (res.error))
      // console.log(res)
    
      setServerError(res.error.data.errors)
      
      
    }
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      {Entries()}
      navigate('/dashboard')
    }
  }
  return (
        <form onSubmit={handleSend}>
    <div>

      <div className="sf-2-fiat-div" style={{ display: hide ? "none" : "block" }}>


          <Dropdown datatype='bank' />
          <input id="account-name" placeholder="$Cashtag" type='text' name="cashtag"></input>
          <div className="selection-headings">
            <p className="select-coin">Bank Type</p>
            <p className="select-network-sf" >Cashtag</p>

          </div>
          <div className="div-bottom">
            <p className="amount-heading">Amount</p>
            <p className="memo-heading">Memo</p>
            <input className="amount-input" placeholder="Enter the Amount" name="balance"></input>
            <input className="memo-input" placeholder="Type Here" name="memo"></input>
            {/* {server_error ? <Alert severity='error' style={{ fontSize: 12, color: 'red', bottom:'900px',left:'1000px',border:'0px' }}>{server_error.msg}</Alert> : ""} */}

            
          </div>

      </div>
      {/* <button id="sf-div2-cryptobtn" onClick={toggleHide}>Crypto</button> */}
      
      <div id="sf-div2-fiatbtn" >Fiat</div>
      
      <button className="send-btn">Send</button>

    </div >
        </form>


  );
}