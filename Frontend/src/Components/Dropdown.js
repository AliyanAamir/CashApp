import React, { useState } from "react";
import Select, { components, NonceProvider } from "react-select";
import './css/Dropdown.css';
import btcIcon from './css/icons/btc_icon.png';
import ethIcon from './css/icons/eth_icon.png';
import usdtIcon from './css/icons/usdt_icon.png';
import bnbIcon from './css/icons/bnb_icon.png';
import adaIcon from './css/icons/ada_icon.png';
import dogeIcon from './css/icons/doge_icon.png';
import sadapayIcon from './css/icons/sadapay_icon.png';
import ablIcon from './css/icons/ABL_icon.png';
import jazzcashIcon from './css/icons/jazzcash_icon.png';
import easypaisaIcon from './css/icons/easypaisa_icon.png';
import BAFLIcon from './css/icons/BAF_icon.png';



const banks = [
  {value:'CashApp', label:'CashApp', icon:sadapayIcon},
  
]

const currency = [
  {value:'USD', label:'USD - US DOLLAR'},
]


const Option = (props) => (
  <components.Option {...props} className="select-options">
    <img src={props.data.icon} alt="logo" className="selected-logo" />
    <div className="options-text">{props.data.label}</div>
  </components.Option>
);

const Dropdown = (props) => {

  const [bank_val, setBank] = useState(banks[0]);
  const [currency_val, setCurrency] = useState(currency[0]);

  const handleChangeBank = (value) => {
    setBank(value);
  };
  const handleChangeCurrency = (value) => {
    setCurrency(value);
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img src={props.data.icon} alt="s-logo" className="selected-logo" />
      <div className="text">{children}</div>
      
    </components.SingleValue>
  );

  return (
    <>

    <div>
        <div>
      <Select
        value={bank_val}
        options={banks}
        onChange={handleChangeBank}
        id = 'bank-select-dropdown'
        styles={{
          container: (base) => (
            {
              boxSizing: 'border-box',
  
              position: 'absolute',
              width: '332px',
              height: '52px',
              left: '112px',
              top: '530px',
              
            }
          ),
          control: (base) =>({
            
            background: 'none',
            border: '1px solid #4D4D4D',
            width: '332px',
            height: '52px',
            borderRadius: '10px',

            "&:hover": {
              borderColor: 'hsl(0deg 0% 70%)',
            }

          }),

          input: (base) => (
            {
              display: 'none'
            }
          ), 
      
          valueContainer : (base) => (
            {
             
              width: '332px',
              height: '52px',
      
            }

          ),
          
          

          Option: (base) => ( 
            {
              position: 'relative',
              background: 'none',
              left: '5px',
              background:'none'
            }
          ),
          option: (base) => (
            {
              ...base,
              background: '#121212',
              borderRadius: '10px',
              position:'relative',
              left:'0px',

              "&:active":{
                background: '#24A405'
              },
              "&:focus":{
                background: '#24A405'
              },
              "&:hover": {
                background: '#24A405'
              }
              
            }
          )
          ,

          menu : (base) => (
            {
              background: '#121212',
              position: 'relative',
              zIndex:'1',
              color: 'white',
              border: '1px solid #4D4D4D',
              borderRadius: '10px',
              borderTop:'none',
              fontFamily: 'Poppins',
          


            
            }
          ),

          menuList: (base) => (
            {
              ...base,
              overflowX: 'hidden',

            }
          ),

          dropdownIndicator: (base) => ( {
            position: 'relative',
            top: '-38px',
            right: '-2px',
            display:'flex',
            width: '315px',
            height:'33px',
            flexDirection:'row-reverse'
          }
          ),

          singleValue: (base) => ({
             
            width: '332px',
            height: '52px',
            color: 'white',
            position: 'relative',
            left: '0px',
            top:'6px',
            
            

            fontFamily: 'Poppins',
            fontStyle: 'normal',
          }),
          
        }}
        components={{
          Option,
          SingleValue
        }}
      />
    </div>
    <div >
    <Select 
        value={currency_val}
        options={currency}
        onChange={handleChangeCurrency}
        styles= {
          {

          
            container: (base) => (
              {
                
                boxSizing: 'border-box',
  
                position: 'absolute',
                width: '332px',
                height: '52px',
                left: '904px',
                top: '529px',
                
              }
            ),

            control : (base) => (
              {
                
                background: 'none',
                border: '1px solid #4D4D4D',
                width: '332px',
                height: '52px',
                borderRadius: '10px',

                "&:hover": {
                  borderColor: 'hsl(0deg 0% 70%)',
                }

              }
            ),

            dropdownIndicator: (base) => ( {
              position: 'relative',
              top: '-8px',
              right: '-2px',
              display:'flex',
              width: '315px',
              height:'33px',
              flexDirection:'row-reverse'
            }
            ),

           


            input: (base) => (
              {
                display: 'none'
              }
            ), 

            valueContainer: (base) => (
              {
                
                position: 'relative',
                top: '15px'
              }
            ),

            singleValue: (base) => (
              {
               
                maxWidth: 'fit-content',
                color: 'white',
                position: 'relative',
                left: '24px',
    
                fontFamily: 'Poppins',
                fontStyle: 'normal',
              }

            ),

            menu : (base) => (
              {
                background: '#121212',
                position: 'relative',
                zIndex:'1',
                color: 'white',
                border: '1px solid #4D4D4D',
                borderRadius: '10px',
                borderTop:'none',
                fontFamily: 'Poppins',


              
              }
            ),

            option: (base) => (
              {
                ...base,
                background: 'none',
                borderRadius: '10px',
                position:'relative',
                left:'0px',

                "&:active":{
                  background: '#24A405'
                },
                "&:focus":{
                  background: '#24A405'
                },
                "&:hover": {
                  background: '#24A405'
                }
                
              }
            )
            
          }
        }/>
      </div>

    </div>
    
    
    </>
    
    
  );
};

export default Dropdown;