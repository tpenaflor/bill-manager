import React from 'react'
import SplitAssignment from './SplitAssignment'
import {useBillsManagerContext} from '../Context/BillsManagerContext'

import {totalBillUnitAllocation} from '../Selector/BillSelector'
import {currency} from '../tools/formatter'

const Bill = ({bill}) => {
    const {billDispatch} = useBillsManagerContext()

    const removeBill = (id) => {
        billDispatch({type:"DEL_BILL", id})
    }

    return (
        <div className="entry">
            <div>
                <button onClick={()=>removeBill(bill.id)}>x</button>
                {bill.desc} 
                {bill.splitOpt === 'unit' && ` (${totalBillUnitAllocation(bill)}/${bill.allocation.unitCount})`}
                {` ${currency(bill.amount)}`}
            </div>
            <SplitAssignment bill={bill}/>
        </div> 
    )
}


export default Bill