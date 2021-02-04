import React, {useEffect, useReducer} from 'react'

import AddBill from './AddBill.js'
import AddParticipant from './AddParticipant.js'
import BillList from './BillList.js'
import BillSummary from './BillSummary.js'
import Participants from './Participants.js'

import billReducer from '../Reducer/BillReducer'
import participantReducer from '../Reducer/ParticipantReducer'

import BillsManagerContext from '../Context/BillsManagerContext'

const BillManagerApp = () => {
  const [bills, billDispatch] = useReducer(billReducer, [])
  const [participants, partDispatch] = useReducer(participantReducer, [])

  useEffect(() => {
      const localBills = JSON.parse(localStorage.getItem('bills'))
      const localParicipant = JSON.parse(localStorage.getItem('participants'))

      if (localBills){
        billDispatch({type:"POPULATE", bills:localBills})
      }
      if (localParicipant){
        partDispatch({type:"POPULATE", participants:localParicipant})
      }
  },[])

  useEffect(() =>{
    console.log(bills)
      localStorage.setItem('bills', JSON.stringify(bills))
    },[bills])

  useEffect(() =>{
    localStorage.setItem('participants', JSON.stringify(participants))
  },[participants])

  return (
    <BillsManagerContext.Provider value={{bills, participants, billDispatch, partDispatch}}>
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