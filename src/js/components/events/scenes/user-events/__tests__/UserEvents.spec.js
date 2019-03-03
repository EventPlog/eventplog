import React from 'react';
import UserEvents from '../UserEvents';
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { shallow } from 'enzyme';

describe('MainContent', () => {
  const events = [{id: 1}, {id: 2}]
  const past_events = [{id: 3}, {id: 4}]

  it('should render correctly', () => {
    const wrapper = shallow( <UserEvents /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EventsSection).length).toEqual(2)
  })

  it('should pass the right props to EventsSection', () => {
    const wrapper = shallow( <UserEvents {...{events: past_events}} /> );

    // retrieve child props instances
    const eventSectionInstances = wrapper.find(EventsSection)

    // assert titles
    expect(eventSectionInstances.at(0).props().title).toEqual("Upcoming Events")
    expect(eventSectionInstances.at(1).props().title).toEqual("Past")
  })
});