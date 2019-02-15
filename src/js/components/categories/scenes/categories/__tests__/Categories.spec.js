import React from 'react';
import Categories from '../Categories';
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('Categories', () => {
  const props = {
    categories: [1,2,3]
  }

  it('should render correctly', () => {
    const wrapper = shallow( <Categories {...props} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(MainContent).length).toEqual(1);
  })
});