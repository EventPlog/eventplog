import React from 'react';
import EventSuggestions from '../EventsSuggestions';
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { shallow, mount } from 'enzyme';

describe('MainContent', () => {
  const events_suggestions = [{id: 3}, {id: 4}]

  it('should render correctly', () => {
    const wrapper = shallow( <EventSuggestions /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EventsSection).length).toEqual(1)
  })

  it('should pass the right props to EventsSection', () => {
    const wrapper = shallow( <EventSuggestions {...{events: events_suggestions}} /> );

    // retrieve child props instances
    const eventSectionInstances = wrapper.find(EventsSection)

    // assert titles
    expect(eventSectionInstances.at(0).props().title).toEqual("From Communities you follow")
  })
});