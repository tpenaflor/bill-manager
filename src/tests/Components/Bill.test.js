import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import Bill from '../../Components/Bill'
import * as BillsManagerContext from '../../Context/BillsManagerContext'
import {billFixture} from '../Fixtures/BillFixture'

let billDispatch, wrapper

beforeEach( ()=> {
    billDispatch = jest.fn()
    const contextValues = {
        billDispatch
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)

    wrapper = shallow(<Bill bill={billFixture[0]}/>)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})

afterEach(()=>{
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('delete bill', ()=> {
    wrapper.find('button').at(0).simulate('click')

    expect(billDispatch).toHaveBeenLastCalledWith({
        type:"DEL_BILL", 
        id : billFixture[0].id
      })

})