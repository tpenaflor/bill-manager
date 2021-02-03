
export const participantBill = (partId, billId, bills) => {
    const bill = bills.find(({id})=>id===billId)
    if (bill) {
        const participant = bill.allocation.participant.find(({id})=>id===partId)
        if (participant){
            return bill.amount * (parseInt(participant.count) / parseInt(bill.allocation.unitCount))
        }
    }

    return 0
}

export const participantBillSummary = (partId, bills) => {
    return bills.reduce((total, bill)=>{
        return participantBill(partId, bill.id, bills) + total
    },0)
}

export const totalBillAllocation = (bill) => {
    return bill.allocation.participant.reduce((total, part)=>{
        return part.count + total
    },0)
}