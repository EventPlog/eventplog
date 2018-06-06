import React from 'react';
import NewCommunity from '../NewCommunity';
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('NewCommunity', () => {
  const props = {
    email: 'john@gmail.com',
    emailSubmitted: false,
    handleChange: () => {},
    submitEmail: () => {}
  }

  it('should render correctly', () => {
    const wrapper = shallow( <NewCommunity {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});