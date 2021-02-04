import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import BillList from '../../Components/BillList'
import * as BillsManagerContext from '../../Context/BillsManagerContext'
import {billFixture} from '../Fixtures/BillFixture'

test('render bill list', ()=> {
    const contextValues = {
        bills : billFixture
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)

    const wrapper = shallow(<BillList />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})