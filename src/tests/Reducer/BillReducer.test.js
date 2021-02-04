import BillReducer from '../../Reducer/BillReducer'
import {billFixture} from '../Fixtures/BillFixture'

test('populate bill reducer', ()=>{
    const result = BillReducer([], {
        type: "POPULATE",
        bills : billFixture
    })

    expect(result).toEqual(billFixture)
})

test('add bill reducer', ()=>{
    const bill = {
        newItem : "something new"
    }

    const result = BillReducer(billFixture, {
        type: "ADD_BILL",
        bill
    })

    expect(result).toEqual([...billFixture, bill])
})

test('remove bill reducer', ()=>{
    const result = BillReducer(billFixture, {
        type: "DEL_BILL",
        id : billFixture[2].id
    })

    expect(result).toEqual([billFixture[0], billFixture[1],billFixture[3]])
})

test('add participant to even bill reducer', ()=>{
    const participant = "new participant id"

    const result = BillReducer(billFixture, {
        type: "ADD_PARTICIPANT_TO_BILL",
        participant,
        unitCount : billFixture[3].allocation.participant.length + 1,
        id : billFixture[3]
    })

    let expected = billFixture
    expected[3].allocation.participant.push(participant)
    expected[3].allocation.unitCount += 1

    expect(result).toEqual(expected)
})

test('remove participant from even bill reducer', ()=>{
    const result = BillReducer(billFixture, {
        type: "DEL_PARTICIPANT_FROM_BILL",
        id : billFixture[3].id,
        participant : {
          id : billFixture[3].allocation.participant[0].id
        },
        unitCount : billFixture[3].allocation.unitCount-1
    })

    let expected = billFixture
    expected[3].allocation.participant.splice(0,1)
    expected[3].allocation.unitCount -= 1

    expect(result).toEqual(expected)
})

test('remove participant from by unit bill reducer', ()=>{
    const result = BillReducer(billFixture, {
        type: "DEL_PARTICIPANT_FROM_BILL",
        id : billFixture[1].id,
        participant : {
          id : billFixture[1].allocation.participant[0].id
        },
        unitCount : billFixture[1].allocation.unitCount
    })

    let expected = billFixture
    expected[1].allocation.participant.splice(0,1)

    expect(result).toEqual(expected)
})

test('set allocation on bill reducer', ()=>{
    const count = '10'
    const result = BillReducer(billFixture, {
        type: "SET_ALLOCATION",
        id : billFixture[1].id,
        participant : {
          id : billFixture[1].allocation.participant[0].id,
          count
        }
    })

    let expected = billFixture
    expected[1].allocation.participant[0].count = count

    expect(result).toEqual(expected)
})