import React from 'react';
import { Presentation } from '../Presentation';
import ContentPanel from 'js/components/shared/content-panel'
import ContentSection from "js/components/shared/content-section";
import ContentEditable from 'js/components/shared/content-editable'
import Sidebar from 'js/components/shared/sidebar'
import { shallow } from 'enzyme';
import variables from 'js/styles/theme/variables'
import AddComment from "js/components/shared/comments/add-comment";
import Comments from "js/components/shared/comments";
import AboutUser from 'js/components/user/scenes/user/components/AboutUser'
import Button from 'js/components/shared/button'
import Loading from 'js/components/shared/loading'

describe('Presentation', () => {
  const props = {
    event: {id: 3},
    presentation: {
      id: 1,
      title: 'An awesome title',
      presentation_type: 'talk',
      summary: 'A short summary',
      details: 'A lot of details',
      user: {id: 1}
    },
    theme: variables,
    user: {id: 1},
    currentUser: {id: 1},
  }

  const wrapper = shallow( <Presentation {...props} /> );

  it('should render correctly', () => {

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(ContentSection).length).toEqual(1);
    expect(wrapper.find(ContentSection.Body).length).toEqual(2);
    expect(wrapper.find(ContentSection.Sidebar).length).toEqual(1);
    expect(wrapper.find(ContentSection.FullRow).length).toEqual(1);
    expect(wrapper.find(ContentPanel).length).toEqual(4);
    expect(wrapper.find(Sidebar).length).toEqual(1);
  })

  describe('when it renders the content panels', () => {

    test('it renders the title panel with the right info and children', () => {
      const contentPanelInstances = wrapper.find(ContentPanel)

      expect(contentPanelInstances.at(0).props().title).toEqual(`Title of the ${props.presentation.presentation_type}`)
      expect(contentPanelInstances.at(0).find(ContentEditable).length).toEqual(1)
      expect(contentPanelInstances.at(0).find(ContentEditable).at(0).props().defaultValue).toEqual(props.presentation.title)
    })


    test('it renders the summary panel with the right info and children', () => {
      const contentPanelInstances = wrapper.find(ContentPanel)

      expect(contentPanelInstances.at(1).props().title).toEqual(`Summary`)
      expect(contentPanelInstances.at(1).find(ContentEditable).length).toEqual(1)
      expect(contentPanelInstances.at(1).find(ContentEditable).at(0).props().defaultValue).toEqual(props.presentation.summary)
    })

    test('it renders the details panel with the right info and children', () => {
      const contentPanelInstances = wrapper.find(ContentPanel)

      expect(contentPanelInstances.at(2).props().title).toEqual(`Details`)
      expect(contentPanelInstances.at(2).find(ContentEditable).length).toEqual(1)
      expect(contentPanelInstances.at(2).find(ContentEditable).at(0).props().defaultValue).toEqual(props.presentation.details)
    })


    test('it renders the comments panel with the right info and children', () => {
      const contentPanelInstances = wrapper.find(ContentPanel)

      expect(contentPanelInstances.at(3).props().title).toEqual(`Questions/Comments`)

      expect(contentPanelInstances.at(3).find(AddComment).length).toEqual(1)
      expect(contentPanelInstances.at(3).find(AddComment).at(0).props().recipient_type).toEqual('Presentation')
      expect(contentPanelInstances.at(3).find(AddComment).at(0).props().recipient_id).toEqual(props.presentation.id)

      expect(contentPanelInstances.at(3).find(Comments).length).toEqual(1)
      expect(contentPanelInstances.at(3).find(Comments).at(0).props().recipient_type).toEqual('Presentation')
      expect(contentPanelInstances.at(3).find(Comments).at(0).props().recipient_id).toEqual(props.presentation.id)
    })
  })

  describe('when the sidebar is rendered', () => {
    const sidebar = wrapper.find(Sidebar)

    test('it renders with the right title', () => {
      expect(sidebar.at(0).props().title).toEqual('About the speaker')
    })

    test('it renders the AboutUser component with the right props', () => {
      expect(sidebar.at(0).find(AboutUser).length).toEqual(1)
      expect(sidebar.at(0).find(AboutUser).at(0).props().user).toEqual(props.presentation.user)
    })

    test('it shows the edit button if the user is the current user or a stakeholder', () => {
      expect(sidebar.at(0).find(AboutUser).at(0).find(Button.Link).length).toEqual(1)
    })
  })
});