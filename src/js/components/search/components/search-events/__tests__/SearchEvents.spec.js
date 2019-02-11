import React from 'react';
import SearchEvents from '../SearchEvents';
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { shallow } from 'enzyme';

describe('SearchEvents', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <SearchEvents /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EventsSection).length).toEqual(1)
  })

  it('should pass the right props to EventsSection', () => {
    const wrapper = shallow( <SearchEvents /> );

    // retrieve child props instances
    const eventSectionInstances = wrapper.find(EventsSection)

    // assert titles
    expect(eventSectionInstances.at(0).props().title).toEqual("Results")
  })
});