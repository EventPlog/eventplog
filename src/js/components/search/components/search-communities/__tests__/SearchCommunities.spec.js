import React from 'react';
import SearchCommunities from '../SearchCommunities';
import CommunitiesSection from 'js/components/communities/scenes/communities/components/communities-section'
import { shallow } from 'enzyme';

describe('SearchCommunities', () => {
  const events = [{id: 1}, {id: 2}]
  const past_events = [{id: 3}, {id: 4}]

  it('should render correctly', () => {
    const wrapper = shallow( <SearchCommunities /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(CommunitiesSection).length).toEqual(1)
  })

  it('should pass the right props to EventsSection', () => {
    const wrapper = shallow( <SearchCommunities {...{events: past_events}} /> );

    // retrieve child props instances
    const eventSectionInstances = wrapper.find(CommunitiesSection)

    // assert titles
    expect(eventSectionInstances.at(0).props().title).toEqual("Results (0)")
  })
});