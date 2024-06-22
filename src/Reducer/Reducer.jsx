import React, {  useContext, useReducer } from 'react'
import { BankContext } from '../App2'

const transaction = (state,action) =>{ 
    //action={type:"d/w",payload:amount}
    switch(action.type){
        case "DEPOSIT" : 
        return state +action.payload
        case "WITHDRAW" : 
        return state - action.payload
        default :
        return state
    }
}

const Reducer = () => {

    const initialAmount = useContext(BankContext)

    const [state, dispatch] = useReducer(transaction,initialAmount)

    const handleDeposit = (amount) =>{
        dispatch({type:"DEPOSIT",payload:amount})
    }

    const handleWithdraw = (amount) =>{
        dispatch({type:"WITHDRAW",payload:amount})
    }

  return (
    <>
    <h1>Balance : {state}</h1>
    <button onClick={()=>handleDeposit(500)}>Deposit</button>
    <button onClick={()=>handleWithdraw(200)}>Withdraw</button>
    </>
  )
}

export default Reducer