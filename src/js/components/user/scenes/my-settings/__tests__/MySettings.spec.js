import React from 'react';
import MySettings from '../MySettings';
import EditUser from 'js/components/user/scenes/edit-user'
import { shallow } from 'enzyme';

describe('MySettings', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MySettings  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EditUser).length).toEqual(1);
  })
});