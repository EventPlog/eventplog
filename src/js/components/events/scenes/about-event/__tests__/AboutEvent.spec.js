import React from 'react';
import Event from '../AboutEvent';
import Announcements from 'js/components/shared/announcements'
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';

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
    expect(wrapper.find(Announcements).length).toEqual(1);
    expect(wrapper.find(ContentPanel).length).toEqual(2);
  })
});