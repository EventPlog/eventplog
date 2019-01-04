import React from 'react';
import {
  SponsorCard,
  generateTitle,
  generateDescription,
  generateMeta,
} from '../SponsorCard';
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme'
import variables from 'js/styles/theme/variables'
import { getUserAvatar } from 'js/utils'

describe('SponsorCard', () => {
  const props = {
    event: {id: 3},
    sponsorship_offer_item: {
      id: 1,
      title: 'An awesome title',
      sponsor_type: 'talk',
      summary: 'A short summary',
      details: 'A lot of details',
      user: {id: 1},
      comments: {
        data: []
      }
    },
    theme: variables,
    currentUser: {id: 1},
    handleViewCount: () => {},
    handleEdit: () => {},
  }

  const wrapper = shallow( <SponsorCard {...props} /> );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel.Card).length).toEqual(1);
  })

  it('renders the right props', () => {
    let ContentPanelCard = wrapper.find(ContentPanel.Card).at(0)

    expect(ContentPanelCard.props().title)
        .toEqual(generateTitle(props.sponsorship_offer_item, props.event, props.handleViewCount))

    expect(ContentPanelCard.props().description)
        .toEqual(generateDescription(props.sponsorship_offer_item))

    expect(ContentPanelCard.props().meta)
        .toEqual(generateMeta(props.sponsorship_offer_item, props.handleEdit, props.event))

    expect(ContentPanelCard.props().featured_image)
      .toEqual(getUserAvatar(props.sponsorship_offer_item.user))
  })

});