import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import BillAssigment from '../../Components/BillAssigment'
import * as BillsManagerContext from '../../Context/BillsManagerContext'
import {billFixture} from '../Fixtures/BillFixture'
import {participantFixture} from '../Fixtures/ParticipantFixture'

let billDispatch, wrapper

beforeEach( ()=> {
    billDispatch = jest.fn()

    const contextValues = {
        billDispatch,
        bills : billFixture
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)
})

afterEach(()=>{
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('set bill allocation to participant', ()=> {
    wrapper = shallow(<BillAssigment part={participantFixture[0]} bill={billFixture[0]}/>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()

    const value = 3
    wrapper.find('select').simulate('change', {target:{value}})

    expect(billDispatch).toHaveBeenLastCalledWith({
        type : "SET_ALLOCATION",
        participant : {
            id : participantFixture[0].id,
            count : value
        },
        id : billFixture[0].id
    })
})

test('tick participant checkbox', ()=> {
    wrapper = shallow(<BillAssigment part={participantFixture[1]} bill={billFixture[2]}/>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()

    wrapper.find('input').simulate('change')

    expect(billDispatch).toHaveBeenLastCalledWith({
        type : "ADD_PARTICIPANT_TO_BILL",
        participant:{
            id : participantFixture[1].id,
            count : 1
        },
        unitCount : billFixture[2].allocation.participant.length + 1,
        id : billFixture[2].id
    })
})


test('untick participant checkbox', ()=> {
    wrapper = shallow(<BillAssigment part={participantFixture[0]} bill={billFixture[2]}/>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()

    wrapper.find('input').simulate('change')

    expect(billDispatch).toHaveBeenLastCalledWith({
        type : "DEL_PARTICIPANT_FROM_BILL",
        participant:{
            id : participantFixture[0].id,
            count : 1
        },
        unitCount : billFixture[2].allocation.participant.length -1,
        id : billFixture[2].id
    })
})