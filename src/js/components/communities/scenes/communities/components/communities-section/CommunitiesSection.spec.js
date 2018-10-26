import React from 'react';
import CommunitiesSection, {
  generateTitle,
  generateDescription,
  generateMeta
} from './CommunitiesSection';
import { shallow } from 'enzyme';

import ContentPanel from 'js/components/shared/content-panel'
import data from 'js/mock-api/data'

describe('Communities::Communities::CommunitiesSection', () => {
  const title = 'Events Section'
  const communities = {
    data: data.communities,
    meta: {}
  }

  it('should render correctly', () => {
    const wrapper = shallow( <CommunitiesSection {...{title, communities}} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel).length).toEqual(1);
    expect(wrapper.find(ContentPanel).props().title).toEqual(title)
    expect(wrapper.find(ContentPanel.Card).length).toEqual(communities.data.length);
  })

  it('should pass the right props to children', () => {
    const wrapper = shallow( <CommunitiesSection title={title} communities={communities} /> );

    const controlPanelCardInstances = wrapper.find(ContentPanel.Card)
    const community = communities.data[0]

    expect(controlPanelCardInstances.at(0).props().title).toEqual(generateTitle(community))
    expect(controlPanelCardInstances.at(0).props().featured_image).toEqual(community.featured_image)
    expect(controlPanelCardInstances.at(0).props().meta).toEqual(generateMeta(community))
  })
});