import React from 'react';
import ExternalFooter from '../ExternalFooter';
import { shallow } from 'enzyme';

describe('ExternalFooter', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <ExternalFooter /> );

    expect(wrapper).toMatchSnapshot()
  })
});