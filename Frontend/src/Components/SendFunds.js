import React from "react";
import './css/SendFunds.css';
import NavBar2 from './NavBar2';
import ToggleSendFunds from "./toggleSendFunds";





export default class SendFunds extends React.Component{
    // constructor(props){
    //   super(props);
    //   this.state = {
    //     id: props.id,
    //     bank: props.bank,
    //     account_num: props.account_num,
    //     currency: props.currency,
    //     memo: props.memo,
    //     sender: props.sender,
    //     receiver: props.receiver,
    //     amount: props.amount,
    //     isDebit: true,
    //     isFiat: props.isFiat,
    //   };
    // }
  
    
  
    render() {

      
        return(
        <>
        <NavBar2/>
        <div className="sf-div1">
          <p>Send Funds</p>
          <hr className="hr1"></hr>
        </div>
        <div className="sf-div2">
          <p>Payment method</p>
           
        </div>
        <ToggleSendFunds/>
        <hr className="hr-2"></hr>
        <div>
          
    </div>
    



        </>);
    }
}

