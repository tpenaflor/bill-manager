
import React, {useState} from 'react'
import {useBillsManagerContext} from '../Context/BillsManagerContext'
import { v4 } from 'uuid';

const AddParticipant = () => {
    const {partDispatch} = useBillsManagerContext()
    const [name, setName] = useState('')

    const addParticipant = (e) => {
        e.preventDefault()
        partDispatch({type:"ADD_PARTICIPANT", participant:{id:v4(), name}})
        setName('')
      }

  return (
    <form onSubmit={addParticipant}>
      <input value ={name} 
        onChange={(e)=> setName(e.target.value.trim())}
        placeholder='Name'  />
      <button>Add Participant</button>
    </form>
  )
}

export default AddParticipant