import React from'react'
import ContentBeforeCommunitySubmit from '../ContentBeforeEventCreate'
import {shallow, mount} from 'enzyme'
import data from 'js/mock-api/data'

describe('ContentBeforeCommunitySubmit', () => {
  const { communities } = data
  test('it renders correctly', () => {
    const wrapper = shallow(<ContentBeforeCommunitySubmit user_communities={communities} />)
    expect(wrapper).toMatchSnapshot()
  })
})