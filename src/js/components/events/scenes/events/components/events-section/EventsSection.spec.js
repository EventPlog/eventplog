import React from 'react';
import EventsSection from './EventsSection';
import { shallow } from 'enzyme';

describe('EventsSection', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <EventsSection/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.events-section').length).toEqual(1);
  })
});