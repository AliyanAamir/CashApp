import React, {useState, useContext} from 'react';
import './css/Transaction.css';
// import { GlobalContext } from '../context/GlobalState';



export default class Transaction extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
      
      date: props.date,
      sender: props.sender,
      reciever: props.reciever,
      amount: props.amount,
      isDebit: props.isDebit,
     
    };
  }

  

  render() { 

    return (
      <>
      {this.state.isDebit?
          <div className='div-transactioncomp'>
              <div className='rectangle5'>
                <img id='vectorDebit' src={require('./css/svg/VectorDebit.png')}></img>
              </div>
              <p id='transaction_type'>Debit</p>
              <p id='transaction_reciever'>{this.state.reciever}</p>
              <p id='transaction_date'>{this.state.date}</p>
              <p id='transaction_amount'>${this.state.amount}</p>
              <a href='#' id='details_a'>Details
              </a>
          </div>
        : 
        <div className='div-transactioncomp1'>
            <div className='rectangle5'>
            <img id='vectorDebit' src={require('./css/svg/VectorCredit.png')}></img>
          </div>
          <p id='transaction_type'>Credit</p>
          <p id='transaction_reciever'>{this.state.sender}</p>
          <p id='transaction_date'>{this.state.date}</p>
          <p id='transaction_amount'>${this.state.amount}</p>
          <a href='#' id='details_a'>Details
          </a>
          </div>

        }

      </>
        
      );
  }
}



