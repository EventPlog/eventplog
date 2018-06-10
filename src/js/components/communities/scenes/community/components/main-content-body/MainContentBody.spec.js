import React from 'react';
import MainContentBody from './MainContentBody';
import { shallow } from 'enzyme';

describe('MainContentBody', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MainContentBody/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.main-body').length).toEqual(1);
  })
});