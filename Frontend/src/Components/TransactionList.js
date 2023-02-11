import React, { useState } from 'react';
import Transaction from './Transaction';
import './css/TransactionList.css';
import { useGetTransactionDetailsQuery } from '../services/UserAuthApi';
import { getToken, removeToken } from '../services/LocalStorageServices';

import { useSelector } from 'react-redux';




function TransactionList() {
    
    const {access_token} = useSelector(state => state.auth)
    const data = useGetTransactionDetailsQuery(access_token);
    const [Enter,setEnter] = useState('')
    
    const Entries = async()=> {const entries= await data.data.data;
        setEnter(entries)
       
    };
    
   
    {Entries()}
    


   
    return(

        <>
            <div className='headings'>
                <p id='p1'>My Transactions</p>
                <p id='p2'>Amount</p>
            </div>
            <div className='TransactionList'>
                
        {   
            
            Enter &&Enter.map((data) => <Transaction date={data.date} sender={data.reciever} reciever={data.sender} amount={data.amount} isDebit={data.isDebit}/>)
            
           
        }
        </div>
    
        </>
    );    

}
// 
          

export default TransactionList;