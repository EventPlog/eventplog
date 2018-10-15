import React from 'react';
import EditUserForm from '../EditUserForm';
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';

describe('EditUserForm', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <EditUserForm  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel).length).toEqual(1);
  })
});