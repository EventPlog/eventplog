import React from 'react';
import MyEvents from '../MyEvents';
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { shallow } from 'enzyme';

describe('MyEvents', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MyEvents  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EventsSection).length).toEqual(1);
  })
});