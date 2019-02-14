import React from 'react';
import CategorySidebar from '../CategorySidebar';
import EventsSection from 'js/components/communities/scenes/communities/components/events-section'
import { shallow } from 'enzyme';

describe('MainContent', () => {
  const events = [{id: 1}, {id: 2}]
  const past_events = [{id: 3}, {id: 4}]

  it('should render correctly', () => {
    const wrapper = shallow( <CategorySidebar /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EventsSection).length).toEqual(1)
  })

});