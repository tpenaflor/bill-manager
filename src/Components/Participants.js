import React, {useContext} from 'react'
import BillsManagerContext from '../Context/BillsManagerContext'

const Participants = () => {
  const {participants, partDispatch} = useContext(BillsManagerContext)

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