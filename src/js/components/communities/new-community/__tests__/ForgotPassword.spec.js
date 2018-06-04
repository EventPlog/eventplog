import React from 'react';
import ForgotPassword from '../NewCommunity';
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('ForgotPassword', () => {
  const props = {
    email: 'john@gmail.com',
    emailSubmitted: false,
    handleChange: () => {},
    submitEmail: () => {}
  }

  it('should render correctly', () => {
    const wrapper = shallow( <ForgotPassword {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});