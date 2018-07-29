import React from 'react';
import MessengerCheckIn from '../MessengerCheckIn';
import { shallow } from 'enzyme';

describe('MessengerCheckIn', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MessengerCheckIn  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('img').length).toEqual(1);
  })
});