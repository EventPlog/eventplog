import React from 'react';
import MyCommunities from '../MyCommunities';
import CommunitiesSection from 'js/components/communities/scenes/communities/components/communities-section'
import { shallow } from 'enzyme';

describe('MyCommunities', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <MyCommunities  /> );

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(CommunitiesSection).length).toEqual(1);
  })
});