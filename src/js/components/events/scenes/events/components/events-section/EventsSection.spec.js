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
  const { events } = data

  it('should render correctly', () => {
    const wrapper = shallow( <EventsSection title={title} events={events} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel).length).toEqual(1);
    expect(wrapper.find(ContentPanel).props().title).toEqual(title)
    expect(wrapper.find(ContentPanel.Card).length).toEqual(events.data.length);
  })

  it('should pass the right props to children', () => {
    const wrapper = shallow( <EventsSection title={title} events={events} /> );

    const controlPanelCardInstances = wrapper.find(ContentPanel.Card)
    const event = events.data[0]

    expect(controlPanelCardInstances.at(0).props().title).toEqual(generateTitle(event, event.community))
    expect(controlPanelCardInstances.at(0).props().description).toEqual(generateDescription(event.community))
    expect(controlPanelCardInstances.at(0).props().featured_image).toEqual(event.featured_image)
    expect(controlPanelCardInstances.at(0).props().meta).toEqual(generateMeta(event))
  })

  describe('when data is not complete', () => {
    it('should render without crashing', () => {
      const shabbyEvents = {
        data: [{id: 1}],
        meta: {}
      }

      const wrapper = shallow(<EventsSection title={title} events={shabbyEvents} />)

      expect(wrapper.find(ContentPanel).length).toEqual(1)
    })
  })
});