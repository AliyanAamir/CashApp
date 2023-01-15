import React from 'react';
import Transaction from './Transaction';
import './css/TransactionList.css';


function TransactionList() {
    
    const transactions = [
        {date:'13 Nov 2022',sender:'Leena Kamran',amount:'100',isDebit:true},
        {date:'15 Nov 2022',receiver:'Sadia Kamran',amount:'50',isDebit:false},
        {date:'17 Nov 2022',receiver:'Rohan Kamran',amount:'600',isDebit:false},
      ]

    return(

        <>
            <div className='headings'>
                <p id='p1'>My Transactions</p>
                <p id='p2'>Amount</p>
            </div>
            <div className='TransactionList'>
        {
            transactions.map((transactions) => <Transaction date={transactions.date} sender={transactions.sender} receiver={transactions.receiver} amount={transactions.amount} isDebit={transactions.isDebit}/>)
        }
        </div>
    
        </>
    );    

}

export default TransactionList;