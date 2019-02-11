import React from 'react';
import Events from '../Search';
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('Events', () => {
  const props = {
    events: [1,2,3]
  }

  it('should render correctly', () => {
    const wrapper = shallow( <Events {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});