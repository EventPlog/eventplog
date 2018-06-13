import React from 'react';
import MainContent from './MainContent';
import CommunitiesSection from '../communities-section'
import EventsSection from '../events-section'
import ContentSection from 'js/components/shared/content-section'
import { shallow } from 'enzyme';

describe('Communities::Communities::MainContent', () => {
  const communities = [{id: 1}, {id: 2}]
  const events_suggestions = [{id: 3}, {id: 4}]
  const communities_suggestions = [{id: 5}, {id: 6}]

  it('should render correctly', () => {
    const wrapper = shallow( <MainContent/> )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentSection).length).toEqual(1)
    expect(wrapper.find(ContentSection.Body).length).toEqual(1)
    expect(wrapper.find(ContentSection.Sidebar).length).toEqual(1)
    expect(wrapper.find(CommunitiesSection).length).toEqual(2)
    expect(wrapper.find(EventsSection).length).toEqual(1)
  })

  it('should pass the right props to children', () => {
    const wrapper = shallow( <MainContent {...{communities, events_suggestions, communities_suggestions}} /> );

    const communitiesSectionInstances = wrapper.find(CommunitiesSection)
    const eventsSectionInstances = wrapper.find(EventsSection)

    // asserts titles are correct
    expect(communitiesSectionInstances.at(0).props().title).toEqual('My communities')
    expect(communitiesSectionInstances.at(1).props().title).toEqual('Related communities')

    // assert the right props are passed.
    expect(communitiesSectionInstances.at(0).props().communities).toEqual(communities)
    expect(communitiesSectionInstances.at(1).props().communities).toEqual(communities_suggestions)
    expect(eventsSectionInstances.at(0).props().events).toEqual(events_suggestions)
  })
});