import React from'react'
import ContentBeforeEmailSubmit from '../ContentBeforeEmailSubmit'
import {shallow, mount} from 'enzyme'

describe('ContentBeforeEmailSubmit', () => {
  const email = 'someone@example.com'

  test('it renders correctly', () => {
    const wrapper = shallow(<ContentBeforeEmailSubmit/>)
    expect(wrapper).toMatchSnapshot()
  })
})