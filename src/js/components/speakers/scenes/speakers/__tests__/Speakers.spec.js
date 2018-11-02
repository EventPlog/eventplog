import React from 'react';
import { Speakers, generateTitle } from '../Speakers';
import SpeakersList from '../SpeakersList';
import NewSpeaker from '../../new-speaker'
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';
import variables from 'js/styles/theme/variables'
import { getUserAvatar } from 'js/utils'

describe('Speakers', () => {
  const props = {
    event: {id: 3, is_stakeholder: true},
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

  const wrapper = shallow( <Speakers {...props} /> );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(SpeakersList).length).toEqual(1);
  })

  it('renders the right props', () => {
    let SpeakersListInstance = wrapper.find(SpeakersList).at(0)

    expect(SpeakersListInstance.props().title)
        .toEqual(generateTitle(props.event))

    expect(SpeakersListInstance.props().currentUser).toEqual(props.currentUser)

    expect(SpeakersListInstance.props().speakers).toEqual(props.speakers)
  })

  describe('when the logged in user is a stakeholder of the event', () => {
    it('shows the new speaker form', () => {
      expect(wrapper.find(ContentPanel).length).toEqual(1);
      expect(wrapper.find(ContentPanel).at(0).props().title).toEqual('Add a speaker');
      expect(wrapper.find(NewSpeaker).length).toEqual(1);
    })
  })

});