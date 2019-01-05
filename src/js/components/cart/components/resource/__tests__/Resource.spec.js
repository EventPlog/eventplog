import React from 'react';
import {
  Resource,
  featuredImageGen,
  generateTitle,
  generateDescription,
  generateMeta
} from '../Resource';
import ContentPanel from 'js/components/shared/content-panel'
import Button from 'js/components/shared/button'
import NewResource from 'js/components/resources/components/new-resource/NewResource'
import { shallow } from 'enzyme';

const props = {
  className: 'sth',
  resource: {
    id: 1,
    title: 'A new resource',
    description: 'The description',
    resource_type: 'ebook',
    category: 'slides',
    recipient_id: 1,
    url: 'https://example.com'
  },
  event: {id: 1},
  presentationsOptions: [],
  handleCreate: () => {},
  handleChange: () => {},
  handleUpdate: () => {},
  handleDelete: () => {},
  handleViewCount: () => {},
}

const wrapper = shallow( <Resource {...props} /> );

describe('Resource', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find(ContentPanel.Card).length).toEqual(1)
  })

  describe('when editing a resource', () => {
    const editingWrapper = shallow(<Resource {...{...props, editing: true}} />)

    it('renders the content panel with the right props', () => {
      const ContentPanelInstance = editingWrapper.find(ContentPanel).at(0)

      expect(ContentPanelInstance.props().title).toEqual(`Edit or delete "${props.resource.title}"`)
    })

    it('renders the new resource component', () => {
      const NewResourceInstance = editingWrapper.find(NewResource).at(0)

      expect(NewResourceInstance.props().editResource).toEqual(true)
      expect(NewResourceInstance.props().resource).toEqual(props.resource)
      expect(NewResourceInstance.props().event).toEqual(props.event)
      expect(NewResourceInstance.props().handleChange).toEqual(props.handleChange)
      expect(NewResourceInstance.props().handleUpdate).toEqual(props.handleUpdate)
      expect(NewResourceInstance.props().handleDelete).toEqual(props.handleDelete)
    })
  })

  describe('when not editing a resource', () => {
    const ContentPanelCard = wrapper.find(ContentPanel.Card).at(0)

    it('effects the classname passed in', () => {
      expect(ContentPanelCard.props().className).toEqual(props.className)
    })

    it('renders the title correctly', () => {
      expect(ContentPanelCard.props().title)
        .toEqual(generateTitle(props.resource, props.handleViewCount))
    })

    it('renders the description correctly', () => {
      expect(ContentPanelCard.props().description)
        .toEqual(generateDescription(props.resource))
    })

    it('passes the right featured image to the card', () => {
      expect(ContentPanelCard.props().featured_image)
        .toEqual(featuredImageGen(props.resource.resource_type))
    })

    it('renders the meta data correctly', () => {
      expect(ContentPanelCard.props().meta)
        .toEqual(generateMeta(props.resource))
    })
  })
});