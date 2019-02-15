import React from 'react';
import MainContent from '../../components/main-content'
import { shallow } from 'enzyme';

describe('main content - join a community component', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> );
    expect(wrapper).toMatchSnapshot()
  })

  it('should show the right message', () => {
    const wrapper = shallow(<MainContent />)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper.find('h2').text()).toContain('Follow your favorite communities')
    expect(wrapper.find('p').text()).toContain('To know when they might host an event or share an event-related news')
  })
});