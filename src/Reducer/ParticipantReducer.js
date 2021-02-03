const ParticipantReducer = (state, {type, participants, participant, id}) => {
    switch (type) {
        case "POPULATE":
            return participants
        case "ADD_PARTICIPANT":
            return [...state, participant]
        case "DEL_PARTICIPANT":
            return state.filter((participant)=>participant.id!==id)
        default:
            return state;
    }
}

export default ParticipantReducer