import React from 'react';
import CommunitiesSection from './CommunitiesSection';
import { shallow } from 'enzyme';

describe('CommunitiesSection', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <CommunitiesSection/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.communities-section').length).toEqual(1);
  })
});