import React from 'react';
import ResetPassword from '../ResetPassword';
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('ResetPassword', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <ResetPassword /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});