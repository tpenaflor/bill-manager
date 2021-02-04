import React from 'react'
import Bill from './Bill'
import {useBillsManagerContext} from '../Context/BillsManagerContext'

const BillList = () => {
    const {bills} = useBillsManagerContext()
    
    return bills.map((bill) => <Bill 
        className="billEntry" 
        key={bill.id} bill={bill}/>) 
}

export default BillList