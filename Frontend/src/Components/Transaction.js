import React, {useState, useContext} from 'react';
import './css/Transaction.css';
// import { GlobalContext } from '../context/GlobalState';



export default class Transaction extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      date: props.date,
      time: '1:45 PM',
      sender: props.sender,
      receiver: props.receiver,
      amount: props.amount,
      isDebit: props.isDebit,
      isCredit: props.isCredit
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
              <p id='transaction_receiver'>{this.state.sender}</p>
              <p id='transaction_time'>01:45 PM</p>
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
          <p id='transaction_receiver'>{this.state.receiver}</p>
          <p id='transaction_time'>01:45 PM</p>
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




