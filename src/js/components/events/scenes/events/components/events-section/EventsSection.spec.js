import React from 'react';
import EventsSection, {
  generateTitle,
  generateDescription,
  generateMeta
} from './EventsSection';
import { shallow } from 'enzyme';

import ContentPanel from 'js/components/shared/content-panel'
import data from 'js/mock-api/data'

describe('Communities::Communities::EventsSection', () => {
  const title = 'Events Section'
  const events = data.events

  it('should render correctly', () => {
    const wrapper = shallow( <EventsSection title={title} events={events} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel).length).toEqual(1);
    expect(wrapper.find(ContentPanel).props().title).toEqual(title)
    expect(wrapper.find(ContentPanel.Card).length).toEqual(events.length);
  })

  it('should pass the right props to children', () => {
    const wrapper = shallow( <EventsSection title={title} events={events} /> );

    const controlPanelCardInstances = wrapper.find(ContentPanel.Card)

    expect(controlPanelCardInstances.at(0).props().title).toEqual(generateTitle(events[0]))
    expect(controlPanelCardInstances.at(0).props().description).toEqual(generateDescription(events[0].community))
    expect(controlPanelCardInstances.at(0).props().featured_image).toEqual(events[0].featured_image)
    expect(controlPanelCardInstances.at(0).props().meta).toEqual(generateMeta(events[0]))
  })
});