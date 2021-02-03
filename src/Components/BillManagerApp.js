import React, {useEffect, useReducer} from 'react'

import AddBill from './AddBill.js'
import AddParticipant from './AddParticipant.js'
import BillList from './BillList.js'
import BillSummary from './BillSummary.js'
import Participants from './Participants.js'

import billReducer from '../Reducer/BillReducer'
import participantReducer from '../Reducer/ParticipantReducer'
import transactionReducer from '../Reducer/TransactionReducer'

import BillsManagerContext from '../Context/BillsManagerContext'

const BillManagerApp = () => {
  const [bills, billDispatch] = useReducer(billReducer, [])
  const [participants, partDispatch] = useReducer(participantReducer, [])
  const [transactions, transDispatch] = useReducer(transactionReducer, [])

  useEffect(() => {
      const localBills = JSON.parse(localStorage.getItem('bills'))
      const localParicipant = JSON.parse(localStorage.getItem('participants'))
      const localTransactions = JSON.parse(localStorage.getItem('transactions'))

      if (localBills){
        billDispatch({type:"POPULATE", bills:localBills})
      }
      if (localParicipant){
        partDispatch({type:"POPULATE", participants:localParicipant})
      }
      if (localTransactions){
        transDispatch({type:"POPULATE", transactions:localTransactions})
      }
  },[])

  useEffect(() =>{
      localStorage.setItem('bills', JSON.stringify(bills))
    },[bills])

  useEffect(() =>{
    localStorage.setItem('participants', JSON.stringify(participants))
  },[participants])

  useEffect(() =>{
      localStorage.setItem('transactions', JSON.stringify(transactions))
    },[transactions])

  return (
    <BillsManagerContext.Provider value={{bills, participants, transactions, transDispatch, billDispatch, partDispatch}}>
      <h1>Bill Manager</h1>
      <AddBill />
      <AddParticipant />
      <Participants />
      <BillList/>
      <BillSummary />
    </BillsManagerContext.Provider>    
  )
}

export default BillManagerApp