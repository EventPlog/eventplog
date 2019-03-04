import React from 'react';
import Event from '../AboutEvent';
import Announcements from 'js/components/shared/announcements'
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';

describe('Event', () => {
  const props = {
    event: {
      announcements: {data: [{id: 1}]},
      agenda: 'somethings'
    },
    organizers: [{id: 1}],
    community: {},
    events_suggestions: [],
    communities_suggestions: [],
  }

  it('should render correctly', () => {
    const wrapper = shallow( <Event {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Announcements).length).toEqual(1);
    expect(wrapper.find(ContentPanel).length).toEqual(4);
  })

  it('should not render announcement when none is passed in', () => {
    const wrapper = shallow( <Event {...{...props, event: {...props.event, announcements: {} }  }} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Announcements).length).toEqual(0);
    expect(wrapper.find(ContentPanel).length).toEqual(4);
  })
});