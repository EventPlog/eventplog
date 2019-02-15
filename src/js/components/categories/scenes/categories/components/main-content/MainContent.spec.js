import React from 'react';
import MainContent from './MainContent';
import CategoriesSection from '../categories-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'
import { shallow } from 'enzyme';

describe('Communities::Communities::MainContent', () => {
  const communities = [{id: 1}, {id: 2}]
  const events_suggestions = [{id: 3}, {id: 4}]
  const communities_suggestions = [{id: 5}, {id: 6}]

  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> )

    expect(wrapper).toMatchSnapshot()
  })

});