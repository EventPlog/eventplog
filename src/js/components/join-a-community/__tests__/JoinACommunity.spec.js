import React from 'react';
import { JoinACommunity } from '../JoinACommunity';
import LoggedinHeader from '../../event-plog/header'
import Footer from '../../login/components/footer'
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('JoinACommunity', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <JoinACommunity/> );

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(LoggedinHeader).length).toEqual(1);
    expect(wrapper.find(MainContent).length).toEqual(1);
    expect(wrapper.find(Footer).length).toEqual(1);
  })
});