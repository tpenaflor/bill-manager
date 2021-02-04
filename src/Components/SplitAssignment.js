import React from 'react'
import BillAssignment from './BillAssigment'
import {useBillsManagerContext} from '../Context/BillsManagerContext'

const SplitAssignment = ({bill}) => {
    const {participants} = useBillsManagerContext()
    return participants.map((part) => (
        <BillAssignment key={part.id} part={part} bill={bill}/>
    ))
}


export default SplitAssignment