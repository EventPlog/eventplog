import React from 'react'
import CommunityCard from '../../../components/community-card'
import { shallow, mount} from 'enzyme'

describe('CommunityCard', () => {
  test('it renders correctly', () => {
    const wrapper = shallow( <CommunityCard /> )
    expect(wrapper).toMatchSnapshot()
  })

  test('it renders based on props', () => {
    // setup
    const props = {
      name: 'Dev C Lagos',
      description: 'An amazing community',
      no_of_followers: 20,
      no_of_upcoming_events: 4,
      community_focus: 'technology'
    }

    // action
    const wrapper = mount( <CommunityCard {...props} />)

    // assert
    expect(wrapper.find('.header').text()).toEqual(props.name)
    expect(wrapper.find('.description').text()).toEqual(props.description)
  })
})