import React from 'react';
import Index from '../index';
import { shallow } from 'enzyme';

describe('index', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <Index /> );

    expect(wrapper).toMatchSnapshot()
  })

});