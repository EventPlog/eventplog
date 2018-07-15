import React from'react'
import ContentAfterEventCreate from '../ContentAfterEventCreate'
import {shallow, mount} from 'enzyme'

describe('ContentAfterEventCreate', () => {

  test('it renders correctly', () => {
    const wrapper = shallow(<ContentAfterEventCreate />)
    expect(wrapper).toMatchSnapshot()
  })
})