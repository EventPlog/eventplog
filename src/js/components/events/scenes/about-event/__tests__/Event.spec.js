import React from 'react';
import Event from '../AboutEvent';
import EventBanner from '../components/event-banner'
import EventSidebar from '../components/event-sidebar'
import { shallow } from 'enzyme';
import mockData from '../../../mockApi'

describe('Event', () => {
  const props = {
    event: {},
    community: {},
    events_suggestions: [],
    communities_suggestions: [],
  }

  it('should render correctly', () => {
    const wrapper = shallow( <Event {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EventBanner).length).toEqual(1);
    expect(wrapper.find(EventSidebar).length).toEqual(1);
  })
});