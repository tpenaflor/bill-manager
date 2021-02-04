import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import BillManagerApp from '../../Components/BillManagerApp'
import * as BillsManagerContext from '../../Context/BillsManagerContext'
import {billFixture} from '../Fixtures/BillFixture'

test('render bill list', ()=> {
    const contextValues = {
        bills : billFixture
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)

    const wrapper = shallow(<BillManagerApp />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})