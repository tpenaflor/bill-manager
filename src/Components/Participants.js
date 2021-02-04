import React from 'react'
import {useBillsManagerContext} from '../Context/BillsManagerContext'

const Participants = () => {

  const {bills, participants, partDispatch, billDispatch} = useBillsManagerContext()
  const remParticipant = (id) => {
    partDispatch({
      type:"DEL_PARTICIPANT",
      id
    })
    
    bills.forEach((bill)=> {
      let unitCount
      if (bill.splitOpt === 'even') {
        unitCount = bill.allocation.participant.length - 1
      }
      else {
        unitCount = bill.allocation.unitCount
      }

      billDispatch(
        {
          type : "DEL_PARTICIPANT_FROM_BILL",
          id : bill.id,
          participant : {
            id
          },
          unitCount
        }
      )
    })
  }

  return (
    <div className="entry">
      <div> </div>
      {participants.map((part)=> (
        <div key={part.id}>
          <button onClick={()=>remParticipant(part.id)} >x</button>
          <p>{part.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Participants