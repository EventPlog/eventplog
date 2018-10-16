import React from 'react';
import MyResources from '../MyResources';
import Resources from 'js/components/resources/components/resources'
import { shallow } from 'enzyme';

describe('MyResources', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MyResources  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Resources).length).toEqual(1);
  })
});