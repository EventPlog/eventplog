import React from 'react';
import NewSpeaker, {
  presentationTypeOptions
} from '../NewSpeaker';
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import Loading from 'js/components/shared/loading'
import variables from 'js/styles/theme/variables'
import { shallow } from 'enzyme'

describe('NewSpeaker', () => {
  const props = {
    event: {id: 3},
    speaker: {
      title: 'An awesome title',
      presentation_type: 'talk',
      summary: 'A short summary',
      details: 'A lot of details',
      user: {id: 1, email: 'some@one.com'}
    },
    theme: variables,
    user: {id: 1},
    currentUser: {id: 1},
  }

  const wrapper = shallow( <NewSpeaker {...props} /> );

  it('should render correctly', () => {

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(Input).length).toEqual(2);
    expect(wrapper.find(TextArea).length).toEqual(2);
    expect(wrapper.find(Select).length).toEqual(1);
  })

  describe('when rendering the buttons', () => {
    it('shows only the save button when the speaker id does not exist', () => {
      expect(wrapper.find(Button).length).toEqual(1);
      expect(wrapper.find(Button).at(0).props().children).toEqual('Save');
    })

    it('shows only the save button when the speaker id exists', () => {
      const modifiedProps = {...props, speaker: {...props.speaker, id: 1} }
      const existingSpeakerWrapper = shallow( <NewSpeaker {...modifiedProps} /> );

      expect(existingSpeakerWrapper.find(Button).length).toEqual(2);
      expect(existingSpeakerWrapper.find(Button).at(0).props().children).toEqual('Save');
      expect(existingSpeakerWrapper.find(Button).at(1).props().children).toEqual('Delete');
    })
  })

  describe('when rendering the form fields', () => {
    it('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(0).props().name).toEqual('email')
      expect(wrapper.find(Input).at(0).props().value).toEqual(props.speaker.user.email)
    })

    it('renders the title input correctly', () => {
      expect(wrapper.find(Input).at(1).props().name).toEqual('title')
      expect(wrapper.find(Input).at(1).props().value).toEqual(props.speaker.title)
    })

    it('renders the presentation type select field correctly', () => {
      expect(wrapper.find(Select).at(0).props().name).toEqual('presentation_type')
      expect(wrapper.find(Select).at(0).props().value).toEqual(props.speaker.presentation_type)
      expect(wrapper.find(Select).at(0).props().options).toEqual(presentationTypeOptions)
    })

    it('renders the summary textarea correctly', () => {
      expect(wrapper.find(TextArea).at(0).props().name).toEqual('summary')
      expect(wrapper.find(TextArea).at(0).props().value).toEqual(props.speaker.summary)
    })

    it('renders the summary textarea correctly', () => {
      expect(wrapper.find(TextArea).at(1).props().name).toEqual('details')
      expect(wrapper.find(TextArea).at(1).props().value).toEqual(props.speaker.details)
    })
  })
});