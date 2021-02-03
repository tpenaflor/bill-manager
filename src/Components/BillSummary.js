import React, {useContext} from 'react'
import BillsManagerContext from '../Context/BillsManagerContext'

import {participantBillSummary} from '../Selector/billSelector'

const BillSummary = () => {
  const {participants, bills} = useContext(BillsManagerContext)

  return (
    <div className="entry">
      <div> </div>
      {participants.map((part)=> (
        <div key={part.id}>
          <p>{`${part.name} total bill ${participantBillSummary(part.id, bills)}`}</p>
        </div>
      ))}
    </div>
  )
}

export default BillSummary