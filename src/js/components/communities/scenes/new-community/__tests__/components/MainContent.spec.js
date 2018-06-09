import React from 'react';
import MainContent from '../../components/main-content'
import { shallow } from 'enzyme';

describe('main content - New Community component', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> );
    expect(wrapper).toMatchSnapshot()
  })

});