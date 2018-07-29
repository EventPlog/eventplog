import React from 'react';
import GuestRow from '../GuestRow';
import { shallow } from 'enzyme';
import { Table } from 'semantic-ui-react'

describe('GuestRow', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <GuestRow  /> );

    expect(wrapper).toMatchSnapshot()
  })
});