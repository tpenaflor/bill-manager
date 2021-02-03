import React, {useContext} from 'react'
import BillAssignment from './BillAssigment'
import BillsManagerContext from '../Context/BillsManagerContext'

const SplitAssignment = ({bill}) => {
    const {participants} = useContext(BillsManagerContext)
    return participants.map((part) => (
        <BillAssignment key={part.id} part={part} bill={bill}/>
    ))
}


export default SplitAssignment