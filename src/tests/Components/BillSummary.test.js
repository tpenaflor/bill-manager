import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import BillSummary from '../../Components/BillSummary'
import * as BillsManagerContext from '../../Context/BillsManagerContext'
import {billFixture} from '../Fixtures/BillFixture'
import {participantFixture} from '../Fixtures/participantFixture'

test('show bill summary', ()=> {
    const contextValues = {
        bills : billFixture,
        participants : participantFixture
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)

    const wrapper = shallow(<BillSummary />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})