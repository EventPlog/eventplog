import React from 'react';
import MainContent from '../../components/main-content'
import { shallow } from 'enzyme';

describe('main content - forgot password component', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> );
    expect(wrapper).toMatchSnapshot()
  })

  it('should show the right message', () => {
    const wrapper = shallow(<MainContent />)
    expect(wrapper.find('h3').text()).toContain('Forgot your password?')
  })
});