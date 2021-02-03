
const BillReducer = (state, {type, bills, bill, id, participant, unitCount}) => {
    switch (type) {
        case "POPULATE":
            return bills
        case "ADD_BILL":
            return [...state, bill]
        case "DEL_BILL":
            return state.filter((bill)=>bill.id!==id)
        case "ADD_PARTICIPANT_TO_BILL":
            return state.map((bill) => {
                if (bill.id === id && !!!bill.allocation.participant.find(({id})=>id===participant.id)){
                    return {...bill, 
                        allocation : {
                            participant: [...bill.allocation.participant, participant],
                            unitCount
                        } 
                    }
                }
                return bill
            })
        case "DEL_PARTICIPANT_FROM_BILL":
            return state.map((bill) => {
                if (bill.id === id){
                    return {...bill, 
                        allocation : {
                            participant: bill.allocation.participant.filter(({id})=>id!==participant.id),
                            unitCount
                        }
                    }
                }
                return bill
            })
        case "SET_ALLOCATION":
            return state.map((bill) => {
                if (bill.id === id){
                    const clean = bill.allocation.participant.filter(({id})=>id!==participant.id)
                    return {...bill, 
                        allocation : {
                            ...bill.allocation,
                            participant: [...clean, participant],
                        }
                    }
                }
                return bill
            })


        // case "SET_ALLOCATION":
        //     return state.map((bill) => {
        //         if (bill.id === id){
        //             const allocation = {...bill.allocation, allocated}
        //             return {...bill, allocation}
        //         }
        //         return bill
        //     })
        default:
            return state;
    }
}

export default BillReducer