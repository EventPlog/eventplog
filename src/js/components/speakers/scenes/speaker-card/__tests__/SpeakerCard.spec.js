import React from 'react';
import {
  SpeakerCard,
  generateTitle,
  generateDescription,
  generateMeta,
} from '../SpeakerCard';
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme'
import variables from 'js/styles/theme/variables'
import { getUserAvatar } from 'js/utils'

describe('SpeakerCard', () => {
  const props = {
    event: {id: 3},
    speaker: {
      id: 1,
      title: 'An awesome title',
      presentation_type: 'talk',
      summary: 'A short summary',
      details: 'A lot of details',
      user: {id: 1},
      comments: {
        data: []
      }
    },
    theme: variables,
    currentUser: {id: 1},
    handleViewCount: () => {}
  }

  const wrapper = shallow( <SpeakerCard {...props} /> );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(ContentPanel.Card).length).toEqual(1);
  })

  it('renders the right props', () => {
    let ContentPanelCard = wrapper.find(ContentPanel.Card).at(0)

    expect(ContentPanelCard.props().title)
        .toEqual(generateTitle(props.speaker, props.event, props.handleViewCount))

    expect(ContentPanelCard.props().description)
        .toEqual(generateDescription(props.speaker))

    expect(ContentPanelCard.props().meta)
        .toEqual(generateMeta(props.speaker))

    expect(ContentPanelCard.props().featured_image)
      .toEqual(getUserAvatar(props.speaker.user))
  })

});