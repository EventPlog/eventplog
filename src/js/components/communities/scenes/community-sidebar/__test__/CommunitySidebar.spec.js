import React from 'react';
import CommunitySidebar from '../CommunitySidebar';
import CommunitiesSection from 'js/components/events/scenes/events/components/communities-section'
import { shallow } from 'enzyme';

describe('MainContent', () => {
  const events = [{id: 1}, {id: 2}]
  const past_events = [{id: 3}, {id: 4}]

  it('should render correctly', () => {
    const wrapper = shallow( <CommunitySidebar /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(CommunitiesSection).length).toEqual(1)
  })

});