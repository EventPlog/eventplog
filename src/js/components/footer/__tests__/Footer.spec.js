import React from 'react';
import Footer from '../Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <Footer /> );

    expect(wrapper).toMatchSnapshot()
  })
});