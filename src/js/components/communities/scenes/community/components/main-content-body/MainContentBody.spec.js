import React from 'react';
import ContentSection from 'js/components/shared/v2/content-section'
import CommunityEvents from 'js/components/communities/scenes/community-events'
import CommunitySidebar from 'js/components/communities/scenes/community-sidebar'
import Loading from 'js/components/shared/loading'
import MainContent from './MainContentBody'
import { shallow, mount } from 'enzyme';

describe('Communities::Community::MainContent', () => {
  const events = [{id: 1}, {id: 2}]
  const events_suggestions = [{id: 3}, {id: 4}]
  const communities_suggestions = [{id: 5}, {id: 6}]

  it('should render correctly', () => {
    const wrapper = shallow( <MainContent/> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(CommunityEvents).length).toEqual(1)
    expect(wrapper.find(ContentSection).length).toEqual(1)
    expect(wrapper.find(ContentSection.Body).length).toEqual(1)
    expect(wrapper.find(ContentSection.Sidebar).length).toEqual(1)
    expect(wrapper.find(CommunitySidebar).length).toEqual(1)
  })

  it('should show the loading component when loading data', () => {
    const wrapper = shallow(<MainContent loading/>)

    expect(wrapper.find(Loading).length).toEqual(1)
  })
});