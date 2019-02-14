import React from 'react';
import JoinACommunity from '../JoinACommunity';
import LoggedinHeader from 'js/components/header'
import Footer from 'js/components/footer'
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('JoinACommunity', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <JoinACommunity/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});