import React from 'react';
import MainContent from './MainContent';
import EventsSection from '../events-section'
import CommunitiesSection from '../communities-section'
import ContentSection from 'js/components/shared/content-section'
import Sidebar from 'js/components/shared/sidebar'
import { shallow, mount } from 'enzyme';

describe('MainContent', () => {
  const events = [{id: 1}, {id: 2}]
  const events_suggestions = [{id: 3}, {id: 4}]
  const communities_suggestions = [{id: 5}, {id: 6}]

  it('should render correctly', () => {
    const wrapper = shallow( <MainContent /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(EventsSection).length).toEqual(2)
    expect(wrapper.find(ContentSection).length).toEqual(1)
    expect(wrapper.find(ContentSection.Body).length).toEqual(1)
    expect(wrapper.find(ContentSection.Sidebar).length).toEqual(1)
    expect(wrapper.find(Sidebar.Communities).length).toEqual(1)
  })

  it('should pass the right props to EventsSection', () => {
    const wrapper = shallow( <MainContent {...{events, events_suggestions, communities_suggestions}} /> );

    // retrieve child props instances
    const eventSectionInstances = wrapper.find(EventsSection)
    const communitySectionInstances = wrapper.find(Sidebar.Communities)

    // assert titles
    expect(eventSectionInstances.at(0).props().title).toEqual('Your events')
    expect(eventSectionInstances.at(1).props().title).toEqual('Events you may like')

    // assert other props
    expect(eventSectionInstances.at(0).props().events).toEqual(events)
    expect(eventSectionInstances.at(1).props().events).toEqual(events_suggestions)
    expect(communitySectionInstances.at(0).props().communities).toEqual(communities_suggestions)

  })
});