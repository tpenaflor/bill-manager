import React from 'react'
import {shallow} from 'enzyme'
import { shallowToJson  } from 'enzyme-to-json';

import AddParticipant from '../../Components/AddParticipant'
import * as BillsManagerContext from '../../Context/BillsManagerContext'

let partDispatch, wrapper

beforeEach( ()=> {
    partDispatch = jest.fn()
    const contextValues = {
      partDispatch
    }

    jest.spyOn(BillsManagerContext, 'useBillsManagerContext')
        .mockImplementation(() => contextValues)

    wrapper = shallow(<AddParticipant />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})

afterEach(()=>{
    expect(shallowToJson(wrapper)).toMatchSnapshot()
})

test('render add participants', ()=> {
    const name = "participant name"
    wrapper.find('input').at(0).simulate('change', {target:{value: name}})
    expect(shallowToJson(wrapper)).toMatchSnapshot()
    
    wrapper.find('form').simulate('submit', {preventDefault:()=>{}})

    expect(partDispatch).toHaveBeenLastCalledWith({
        type:"ADD_PARTICIPANT", 
        participant: {
          id : expect.any(String),
          name
        }})

})
