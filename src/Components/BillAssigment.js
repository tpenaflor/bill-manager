import React, {useState, useContext} from 'react'
import BillsManagerContext from '../Context/BillsManagerContext'

import {participantBill} from '../Selector/billSelector'

const BillAssignment = ({part, bill}) => {
    const {bills, billDispatch} = useContext(BillsManagerContext)
    const [isActive, setActive] = useState(!!bill.allocation.participant.find(({id})=>id===part.id))
    const [unitCount, setUnitCount] = useState(bill.allocation.allocated)

    const setUnitAllocation = (e)=> {
        setUnitCount(e.target.value)
        
        const participant = {
            id : part.id,
            count : parseInt(e.target.value)
        }

        billDispatch({
            type : "SET_ALLOCATION",
            participant,
            id : bill.id
        })
    }

    const handleCheckBox = () => {
        setActive(!isActive)
        const participant = {
            id : part.id,
            count : 1
        }

        const offset = !isActive ? 1 : -1
        const type = !isActive ? "ADD_PARTICIPANT_TO_BILL" : "DEL_PARTICIPANT_FROM_BILL"

        billDispatch({
            type,
            participant,
            unitCount : bill.allocation.participant.length + offset,
            id : bill.id
        })
    }

    return (
        <div>
            {bill.splitOpt === 'even' ? (
                <input type="checkbox" 
                    checked={isActive} 
                    onChange={handleCheckBox}  />
            ) :
            (
                 <select id='unitCount'
                    value={unitCount}
                    onChange={setUnitAllocation}>
                     {
                         [...Array(parseInt(bill.allocation.unitCount) + 1)].map((e, i)=>(
                             <option key={i}>{i}</option>
                             ))
                     }
                 </select>
            )}
            
            <p>{`${part.name} ${bill.desc} ${participantBill(part.id, bill.id, bills)}`}</p> 
        </div>
    )
}


export default BillAssignment