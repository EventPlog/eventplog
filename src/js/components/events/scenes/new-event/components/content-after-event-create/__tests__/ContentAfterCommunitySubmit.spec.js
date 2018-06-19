import React from'react'
import ContentAfterCommunitySubmit from '../ContentAfterEventCreate'
import {shallow, mount} from 'enzyme'

describe('ContentAfterCommunitySubmit', () => {

  test('it renders correctly', () => {
    const wrapper = shallow(<ContentAfterCommunitySubmit />)
    expect(wrapper).toMatchSnapshot()
  })
})