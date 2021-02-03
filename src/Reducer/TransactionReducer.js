const TransactionReducer = (state, {type, transactions, transaction, partId, id, allocation}) => {
    switch (type) {
        case "POPULATE":
            return transactions
        case "ADD_TRANS":
            return [...state, transaction]
        case "DEL_TRANS":
            return state.filter((trans)=>trans.id!==id)
        case "ADD_PARTICIPANT_TO_TRANS":
            return state.map((trans) => {
                if (trans.id === id && !trans.participant.includes(partId)){
                    return {...trans, 
                        participant: [...trans.participant, partId]}
                }
                return trans
            })
        case "DEL_PARTICIPANT_FROM_TRANS":
            return state.map((trans) => {
                if (trans.id === id){
                    return {...trans, 
                        participant: trans.participant.filter((id)=>id!==partId)}
                }
                return trans
            })
        case "SET_ALLOCATION":
            return state.map((bill) => {
                if (bill.id === id){
                    return {...bill, allocation}
                }
                return bill
            })
        default:
            return state;
    }
}

export default TransactionReducer