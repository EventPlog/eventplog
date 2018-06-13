
import React from 'react';
import EventsSection, {
  generateTitle,
  generateDescription,
  generateMeta
} from './EventsSection';
import { shallow } from 'enzyme';

import Sidebar from 'js/components/shared/sidebar'
import data from 'js/mock-api/data'

describe('EventsSection', () => {
  const events = data.events

  it('should render correctly', () => {
    const wrapper = shallow( <EventsSection events={events} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Sidebar).length).toEqual(1);
    expect(wrapper.find(Sidebar.Card).length).toEqual(events.length);
  })

  it('should pass the right props to children', () => {
    const wrapper = shallow( <EventsSection events={events} />)

    const sidebarCardInstances = wrapper.find(Sidebar.Card)

    expect(sidebarCardInstances.at(0).props().title).toEqual(generateTitle(events[0], events[0].community.id))
    expect(sidebarCardInstances.at(0).props().description).toEqual(generateDescription(events[0].community))
    expect(sidebarCardInstances.at(0).props().featured_image).toEqual(events[0].featured_image)
    expect(sidebarCardInstances.at(0).props().meta).toEqual(generateMeta(events[0]))
  })
});