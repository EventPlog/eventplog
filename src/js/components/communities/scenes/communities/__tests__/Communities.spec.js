import React from 'react';
import Communities from '../Communities';
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('Communities', () => {
  const props = {
    communities: [1,2,3]
  }

  it('should render correctly', () => {
    const wrapper = shallow( <Communities {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});