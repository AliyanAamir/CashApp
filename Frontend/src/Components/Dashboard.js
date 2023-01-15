import React from 'react';
import './css/Dashboard.css';
import TransactionList from './TransactionList';

export default function Dashboard  () {
    
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
                    <a href='#'>
                    <img src= {require('./css/svg/Group375.png')} id='group375'></img>
                    </a>
                </li>
            </ul>
        </nav>
        <div className='top-leftdiv'>
            <p id='greeting-msg'>Good Evening!</p>
            <p id='cashtag'>John Doe</p>
        </div>
        <div className='fiat-balance-div'>
            <p id='fiatbalancep1'>Fiat Balance</p>
            <div className='ellipse1'></div>
            <div className='ellipse2'></div>
            <FiatBalance balance={'1000'}/>
            <img src= {require('./css/svg/Group368.png')} id='group368'></img>
            <a href='#' id='fiat-details'>
                <p>Details</p>
                <img src= {require('./css/svg/VectorBalanceDiv.png')} id='group1'></img>
            </a>

        </div>
        <div className='crypto-balance-div'>
            <p  id='cryptobalancep1'>Est. Crypto Balance</p>
            <CryptoBalance balance={'1000'}/>
            <img src= {require('./css/svg/Rectangle53.png')} id='rectangle53'></img>
            <a href='#' id='crypto_details_link'>
                <p id='cryptobalancep2'>Details</p>
                <img src= {require('./css/svg/VectorBalanceDiv.png')} id='group1'></img>

            </a>
            <img src= {require('./css/svg/Group4.png')} id='group4'></img>
            

        </div>

        <hr />
        <TransactionList/>
        <button id='load_btn'>Load</button>
        <button id='send_btn'>Send</button>

    </body>
  );
}

function setCashtag(props){
   return( <p id='cashtag'>props.cashtag</p>)
}
function FiatBalance(props){
    return(<h3>${props.balance}</h3>);
}

function CryptoBalance(props){
    return(<h3>${props.balance}</h3>);
}
