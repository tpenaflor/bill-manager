import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import SplitAssignment from '../../Components/SplitAssignment'
import * as BillsManagerContext from '../../Context/BillsManagerContext'
import {participantFixture} from '../Fixtures/ParticipantFixture'

test('render bill list', ()=> {
    const contextValues = {
        participants : participantFixture
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)

    const wrapper = shallow(<SplitAssignment />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})