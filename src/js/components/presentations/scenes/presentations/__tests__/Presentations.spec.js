import React from 'react';
import { Presentations } from '../Presentations';
import PresentationsList from '../PresentationsList';
import NewPresentation from '../../new-presentation'
import ContentPanel from 'js/components/shared/content-panel'
import { shallow } from 'enzyme';
import variables from 'js/styles/theme/variables'
import { getUserAvatar } from 'js/utils'

describe('Presentations', () => {
  const props = {
    event: {id: 3, is_stakeholder: true},
    presentation: {
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

  const wrapper = shallow( <Presentations {...props} /> );

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(PresentationsList).length).toEqual(1);
  })

  it('renders the right props', () => {
    let PresentationsListInstance = wrapper.find(PresentationsList).at(0)

    expect(PresentationsListInstance.props().title)
        .toEqual('All Presentations')

    expect(PresentationsListInstance.props().currentUser).toEqual(props.currentUser)

    expect(PresentationsListInstance.props().presentations).toEqual(props.presentations)
  })

  describe('when the logged in user is a stakeholder of the event', () => {
    it('shows the new presentation form', () => {
      expect(wrapper.find(ContentPanel).length).toEqual(1);
      expect(wrapper.find(ContentPanel).at(0).props().title).toEqual('Add a presentation');
      expect(wrapper.find(NewPresentation).length).toEqual(1);
    })
  })

});