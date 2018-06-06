import React from 'react';
import NewCommunity from '../NewCommunity';
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('NewCommunity', () => {
  const props = {
    community: {name: 'A new community'},
    communitySubmitted: false,
    handleChange: () => {},
    submitEmail: () => {}
  }

  it('should render correctly', () => {
    const wrapper = shallow( <NewCommunity {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});