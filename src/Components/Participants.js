import React from 'react'
import {useBillsManagerContext} from '../Context/BillsManagerContext'

const Participants = () => {
  const {participants, partDispatch} = useBillsManagerContext()

  const remParticipant = (id) => {
    partDispatch({type:"DEL_PARTICIPANT",id})
  }

  return (
    <div>
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