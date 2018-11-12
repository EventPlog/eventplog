import React from 'react';
import {
  EditUserForm,
  genderOptions
} from '../EditPresentationForm';
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import Loading from 'js/components/shared/loading'
import variables from 'js/styles/theme/variables'
import { shallow } from 'enzyme'

import {
  getUserAvatar,
  genUserProfileLink,
  titleize,
} from 'js/utils'

describe('EditUserForm', () => {
  const user = {
    id: 1,
    first_name: 'john',
    last_name: 'doe',
    gender: 'male',
    unconfirmed_email: 'someone@example.com',
    avatar_url: 'http://sample-avatar.com/a.jpg',
    bio: 'An amazing person',
    occupation: 'Engineer',
    twitter_profile: 'twitter.com/john',
    linkedin_profile: 'linkedin.com/john',
    github_profile: 'github.com/john',
    site_link: 'john.com',
  }

  const props = {
    user,
    theme: variables,
    currentUser: user,
    persistedUser: user,
  }

  const wrapper = shallow( <EditUserForm {...props} /> );

  test('it should render correctly', () => {

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(Input).length).toEqual(9);
    expect(wrapper.find(TextArea).length).toEqual(1);
    expect(wrapper.find(Select).length).toEqual(1);
  })

  test('it renders the save button correctly', () => {
    expect(wrapper.find(Button).length).toEqual(1);
    expect(wrapper.find(Button).at(0).props().children).toEqual('Save');
  })

  test('it renders the back/cancel link correctly', () => {
    expect(wrapper.find(Button.Link).length).toEqual(1);
    expect(wrapper.find(Button.Link).at(0).props().children).toEqual('Back/Cancel');
  })

  describe('when rendering the form fields', () => {
    test('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(0).props().name).toEqual('first_name')
      expect(wrapper.find(Input).at(0).props().value)
        .toEqual(titleize(props.user.first_name))
    })

    test('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(1).props().name).toEqual('last_name')
      expect(wrapper.find(Input).at(1).props().value)
        .toEqual(titleize(props.user.last_name))
    })

    test('renders the email input correctly', () => {
      expect(wrapper.find(Input).at(2).props().name).toEqual('unconfirmed_email')
      expect(wrapper.find(Input).at(2).props().value).toEqual(props.user.unconfirmed_email)
    })

    test('renders the presentation type select field correctly', () => {
      expect(wrapper.find(Select).at(0).props().name).toEqual('gender')
      expect(wrapper.find(Select).at(0).props().value).toEqual(props.user.gender)
      expect(wrapper.find(Select).at(0).props().options).toEqual(genderOptions)
    })

    test('renders the summary textarea correctly', () => {
      expect(wrapper.find(TextArea).at(0).props().name).toEqual('bio')
      expect(wrapper.find(TextArea).at(0).props().value).toEqual(props.user.bio)
    })

    test('renders the occupation input correctly', () => {
      expect(wrapper.find(Input).at(3).props().name).toEqual('occupation')
      expect(wrapper.find(Input).at(3).props().value).toEqual(props.user.occupation)
    })

  })
});