import React, {useContext} from 'react'
import Bill from './Bill'
import BillsManagerContext from '../Context/BillsManagerContext'

const BillList = () => {
    const {bills} = useContext(BillsManagerContext)
    return bills.map((bill) => <Bill 
        className="billEntry" 
        key={bill.id} bill={bill}/> 
        )
}

export default BillList