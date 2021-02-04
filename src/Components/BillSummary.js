import React from 'react'
import {useBillsManagerContext} from '../Context/BillsManagerContext'

import {participantBillSummary} from '../Selector/billSelector'

const BillSummary = () => {
  const {participants, bills} = useBillsManagerContext()

  return (
    <div>
      {participants.map((part)=> (
        <div key={part.id}>
          <p>{`${part.name} total bill ${participantBillSummary(part.id, bills)}`}</p>
        </div>
      ))}
    </div>
  )
}

export default BillSummary