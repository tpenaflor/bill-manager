import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import AddBill from '../../Components/AddBill'
import * as BillsManagerContext from '../../Context/BillsManagerContext'

let billDispatch, wrapper

beforeEach( ()=> {
    billDispatch = jest.fn()
    const contextValues = {
        billDispatch
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)

    wrapper = shallow(<AddBill />)
})

afterEach(()=>{
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('render add bill evenly', ()=> {
    wrapper.find('select').simulate('change', {target:{value: 'even'}})
    expect(shallowToJson(wrapper)).toMatchSnapshot()

    const desc = "test description"
    const amount = "1000"

    wrapper.find('input').at(0).simulate('change', {target:{value: desc}})
    wrapper.find('input').at(1).simulate('change', {target:{value: amount}})

    wrapper.find('form').simulate('submit', {preventDefault:()=>{}})

    expect(billDispatch).toHaveBeenLastCalledWith({
        type:"ADD_BILL", 
        bill: {
          id : expect.any(String),
          desc,
          allocation : {
            participant : [],
            unitCount : ''
          },
          amount,
          splitOpt : 'even'
        }})

})

test('render add bill by unit', ()=> {
    wrapper.find('select').simulate('change', {target:{value: 'unit'}})
    expect(shallowToJson(wrapper)).toMatchSnapshot()

    const desc = "test description"
    const amount = "1000"
    const unitCount = "10"

    wrapper.find('input').at(0).simulate('change', {target:{value: desc}})
    wrapper.find('input').at(1).simulate('change', {target:{value: unitCount}})
    wrapper.find('input').at(2).simulate('change', {target:{value: amount}})

    wrapper.find('form').simulate('submit', {preventDefault:()=>{}})

    expect(billDispatch).toHaveBeenLastCalledWith({
        type:"ADD_BILL", 
        bill: {
          id : expect.any(String),
          desc,
          allocation : {
            participant : [],
            unitCount
          },
          amount,
          splitOpt : 'unit'
        }})

})