import React from 'react';
import ShowMoreButton from '../ShowMoreButton';
import { shallow } from 'enzyme';

describe('ShowMoreButton', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <ShowMoreButton  /> );

    expect(wrapper).toMatchSnapshot()
  })
});