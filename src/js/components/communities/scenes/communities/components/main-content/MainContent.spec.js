import React from 'react';
import MainContent from './MainContent';
import { shallow } from 'enzyme';

describe('MainContent', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MainContent/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.main-body').length).toEqual(1);
  })
});