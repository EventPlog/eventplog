import React from 'react';
import CommunityHeader from './CommunityHeader';
import { shallow } from 'enzyme';

describe('CommunityHeader', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <CommunityHeader/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.nav-holder').length).toEqual(1);
  })
});