import React, {useContext} from 'react'
import SplitAssignment from './SplitAssignment'
import BillsManagerContext from '../Context/BillsManagerContext'

import {totalBillAllocation} from '../Selector/billSelector'

const Bill = ({bill}) => {
    const {billDispatch} = useContext(BillsManagerContext)

    const removeBill = (id) => {
        billDispatch({type:"DEL_BILL", id})
    }

    return (
        <div>
            <button onClick={()=>removeBill(bill.id)}>x</button>
            <div>
                {bill.desc} 
                {bill.splitOpt === 'unit' && ` ${totalBillAllocation(bill)}/${bill.allocation.unitCount}`}
            </div>
            <div>{bill.amount}</div>
            <SplitAssignment bill={bill}/>
        </div> 
    )
}


export default Bill