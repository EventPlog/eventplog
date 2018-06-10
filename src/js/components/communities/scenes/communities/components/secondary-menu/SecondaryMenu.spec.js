import React from 'react';
import SecondaryMenu from './SecondaryMenu';
import { shallow } from 'enzyme';

describe('SecondaryMenu', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <SecondaryMenu/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.app-container').length).toEqual(1);
  })
});