import React from 'react';
import CategoriesSection, {
  generateTitle,
  generateDescription,
  generateMeta
} from './CategoriesSection';
import { shallow } from 'enzyme';

import ContentPanel from 'js/components/shared/content-panel'
import data from 'js/mock-api/data'

describe('Categories::Categories::CategoriesSection', () => {
  const title = 'Events Section'
  const {categories} = data
  
  it('should render correctly', () => {
    const wrapper = shallow( <CategoriesSection {...{title, categories}} /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel).length).toEqual(1);
    expect(wrapper.find(ContentPanel).props().title).toEqual(title)
    expect(wrapper.find(ContentPanel.Card).length).toEqual(categories.data.length);
  })

  it('should pass the right props to children', () => {
    const wrapper = shallow( <CategoriesSection title={title} categories={categories} /> );

    const controlPanelCardInstances = wrapper.find(ContentPanel.Card)
    const community = categories.data[0]

    expect(controlPanelCardInstances.at(0).props().title).toEqual(generateTitle(community))
    expect(controlPanelCardInstances.at(0).props().featured_image).toEqual(community.featured_image)
    expect(controlPanelCardInstances.at(0).props().meta).toEqual(generateMeta(community))
  })
});