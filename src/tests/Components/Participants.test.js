import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json';

import Participants from '../../Components/Participants'
import * as BillsManagerContext from '../../Context/BillsManagerContext'
import { billFixture} from '../Fixtures/BillFixture'
import {participantFixture} from '../Fixtures/ParticipantFixture'

let wrapper, partDispatch, billDispatch

beforeEach(() => {
  partDispatch = jest.fn()
  billDispatch = jest.fn()

  const contextValues = {
    partDispatch,
    billDispatch,
    bills: billFixture,
    participants: participantFixture
  }

  jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
    .mockImplementation(() => contextValues)

  wrapper = shallow( <Participants / > )
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})

afterEach(() => {
  expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('remove participant', () => {
  wrapper.find('button').at(1).simulate('click')

  expect(partDispatch).toHaveBeenLastCalledWith({
    type: "DEL_PARTICIPANT",
    id : participantFixture[1].id
  })

  expect(billDispatch).toHaveBeenCalledWith({
    type : "DEL_PARTICIPANT_FROM_BILL",
    id: billFixture[1].id,
    participant: {
      id : participantFixture[1].id
    },
    unitCount : billFixture[1].allocation.unitCount
  })

  expect(billDispatch).toHaveBeenCalledWith({
    type : "DEL_PARTICIPANT_FROM_BILL",
    id: billFixture[3].id,
    participant: {
      id : participantFixture[1].id
    },
    unitCount : billFixture[3].allocation.unitCount - 1
  })

})