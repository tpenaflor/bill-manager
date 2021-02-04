import React, {useState} from 'react'
import {useBillsManagerContext} from '../Context/BillsManagerContext'
import { v4 } from 'uuid';

const AddBill = () => {
    const {billDispatch} = useBillsManagerContext()
    const [amount, setAmount] = useState('')
    const [unitCount, setUnitCount] = useState('')
    const [desc, setDesc] = useState('')
    const [splitOpt, setSplitOpt] = useState('even')

    const updateAmount = (e)=> {
      const amnt = e.target.value.trim()
      if (!amnt || amnt.match(/^\d{1,}(\.\d{0,2})?$/))
          return setAmount(amnt)
    }

    const updateUnitCount = (e)=> {
      const count = e.target.value.trim()
      if (!count || count.match(/^\d{1,}?$/))
          return setUnitCount(count)
    }

    const addBill = (e) => {
        e.preventDefault()
        
        if (amount && desc) {
          const id = v4()
          billDispatch({
            type:"ADD_BILL", 
            bill: {
              id,
              desc,
              allocation : {
                participant : [],
                unitCount
              },
              amount,
              splitOpt
            }})

          setDesc('')
          setAmount('')
        }
      }

  return (
    <form onSubmit={addBill}>
      <label>Split Option</label>
      <select 
        id='splitOption' 
        value={splitOpt} 
        onChange={(e)=> { setSplitOpt(e.target.value)}}
      >
        <option value='even'>Split Evenly</option>  
        <option value='unit'>Split per Unit</option>
      </select>

      <input value ={desc} 
        onChange={(e)=>setDesc(e.target.value.trim())}
        placeholder='Bill Description'  />
      {splitOpt === 'unit' && <input value ={unitCount} 
        onChange={updateUnitCount}
        placeholder='Number of Units'  />}
      <input value ={amount} 
        onChange={updateAmount}
        placeholder='Amount'  />
      <button>Add Bill</button>
    </form>
  )
}

export default AddBill