import React from 'react';
import CheckInForm from '../CheckInForm';
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';

describe('CheckInForm', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <CheckInForm  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel).length).toEqual(1);
  })
});