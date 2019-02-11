import React from 'react';
import { MainContent } from './MainContent';
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'
import Tab from 'js/components/shared/tab'
import { shallow, mount } from 'enzyme';

describe('MainContent', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Tab).length).toEqual(1)
    expect(wrapper.find(ContentSection).length).toEqual(1)
    expect(wrapper.find(ContentSection.Body).length).toEqual(1)
    expect(wrapper.find(ContentSection.Sidebar).length).toEqual(1)
  })

});