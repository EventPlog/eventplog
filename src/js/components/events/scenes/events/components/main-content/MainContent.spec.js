import React from 'react';
import { MainContent } from './MainContent';
import ContentSection from 'js/components/shared/v2/content-section'
import Sidebar from 'js/components/shared/v2/sidebar'
import { shallow, mount } from 'enzyme';

describe('MainContent', () => {
  const events = [{id: 1}, {id: 2}]
  const communities_suggestions = [{id: 3}, {id: 4}]
  const events_suggestions = [{id: 5}, {id: 6}]

  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentSection).length).toEqual(2)
    expect(wrapper.find(ContentSection.Body).length).toEqual(2)
    expect(wrapper.find(ContentSection.Sidebar).length).toEqual(2)
    expect(wrapper.find(Sidebar.Communities).length).toEqual(2)
  })

});