import React from 'react';
import CommunitiesSection, {
  generateTitle,
  generateDescription,
  generateMeta
} from './CommunitiesSection';
import { shallow } from 'enzyme';

import Sidebar from 'js/components/shared/v2/sidebar'
import data from 'js/mock-api/data'

describe('v2::sidebar::CommunitiesSection', () => {
  const { communities } = data

  it('should render correctly', () => {
    const wrapper = shallow( <CommunitiesSection {...{communities}} /> );

    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find(Sidebar).length).toEqual(1);
    // expect(wrapper.find(Sidebar).props().title).toEqual('Communities you may know');
    // expect(wrapper.find(Sidebar.Card).length).toEqual(communities.data.length);
  })

  it('should pass the right props to children', () => {
    // const wrapper = shallow( <CommunitiesSection communities={communities} />)
    //
    // const sidebarCardInstances = wrapper.find(Sidebar.Card)
    // const community = communities.data[0]
    //
    // expect(sidebarCardInstances.at(0).props().title).toEqual(generateTitle(community))
    // expect(sidebarCardInstances.at(0).props().description).toEqual(generateDescription(community.topic_interests))
    // expect(sidebarCardInstances.at(0).props().featured_image).toEqual(community.featured_image)
    // expect(sidebarCardInstances.at(0).props().meta).toEqual(generateMeta(community))
  })
});