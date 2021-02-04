import * as BillSelector from '../../Selector/BillSelector'
import {billFixture} from '../Fixtures/BillFixture'
import {participantFixture} from '../Fixtures/ParticipantFixture'
import {currency} from '../../tools/formatter'

test('get participant bill - no entry', ()=>{
    const result = BillSelector.participantBill(participantFixture[0].id, billFixture[0].id, billFixture)
    expect(result).toBe(0)
})

test('get participant bill - with entry', ()=>{
    const result = BillSelector.participantBill(participantFixture[1].id, billFixture[1].id, billFixture)
    const ans = parseInt(billFixture[1].amount) * (billFixture[1].allocation.participant[0].count / parseInt(billFixture[1].allocation.unitCount))
    expect(result).toBe(ans)
})

test('get participant bill summary - no entry', ()=>{
    const result = BillSelector.participantBillSummary(participantFixture[3].id, billFixture)
    expect(result).toBe(currency(0))
})

test('get participant bill summary - with entry', ()=>{
    const result = BillSelector.participantBillSummary(participantFixture[2].id, billFixture)
    expect(result).toBe(currency(400))
})

test('calculate total unit allocation on bill', ()=>{
    const result = BillSelector.totalBillUnitAllocation(billFixture[1])
    expect(result).toBe(4)
})

test('calculate total unit allocation on bill - no allocation', ()=>{
    const result = BillSelector.totalBillUnitAllocation(billFixture[0])
    expect(result).toBe(0)
})