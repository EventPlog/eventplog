import React from 'react';
import Guests from '../Guests';
import { shallow } from 'enzyme';

import PageHeader from 'js/components/shared/PageHeader';

describe('Guests', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <Guests  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(PageHeader).length).toEqual(1);
  })
});