import ParticipantReducer from '../../Reducer/ParticipantReducer'
import {participantFixture} from '../Fixtures/ParticipantFixture'

test('populate participant reducer', ()=>{

    const result = ParticipantReducer(undefined, {
        type: "POPULATE",
        participants : participantFixture
    })

    expect(result).toEqual(participantFixture)
})

test('add participant reducer', ()=>{
    const participant = "new participant"

    const result = ParticipantReducer(participantFixture, {
        type: "ADD_PARTICIPANT",
        participant
    })

    expect(result).toEqual([...participantFixture, participant])
})

test('remove participant reducer', ()=>{

    const result = ParticipantReducer(participantFixture, {
        type: "DEL_PARTICIPANT",
        id : participantFixture[1].id
    })

    expect(result).toEqual([participantFixture[0],participantFixture[2],participantFixture[3]])
})