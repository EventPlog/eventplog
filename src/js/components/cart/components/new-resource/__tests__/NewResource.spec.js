import React from 'react'
import NewResource, {
  categoryOptions,
  resourceTypeOptions,
} from '../NewResource'
import Input from 'js/components/shared/input'
import TextArea from 'js/components/shared/text-area'
import Button from 'js/components/shared/button'
import Select from 'js/components/shared/select'
import { shallow } from 'enzyme'

const props = {
  resource: {
    title: 'A new resource',
    description: 'The description',
    resource_type: 'ebook',
    category: 'slides',
    recipient_id: 1,
    url: 'https://example.com'
  },
  event: {id: 1},
  presentationsOptions: [],
  showPresentationsOptions: true,
  handleCreate: () => {},
  handleUpdate: () => {},
  handleDelete: () => {},
}


const wrapper = shallow(<NewResource {...props} />)

describe('NewResource', () => {
  it('renders correctly', () => {

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(Input).length).toEqual(2)
    expect(wrapper.find(TextArea).length).toEqual(1)
    expect(wrapper.find(Select).length).toEqual(3)
  })

  describe('for a resource that is not yet created', () => {
    it('renders only the save button', () => {
      const buttons = wrapper.find(Button)

      expect(buttons.length).toEqual(1)
      expect(buttons.at(0).props().children).toEqual('Save')
      expect(buttons.at(0).props().onClick).toEqual(props.handleCreate)
    })
  })

  describe('for a resource that exists', () => {
    it('renders with the delete button when the resource exists', () => {
      const existingResource = {...props.resource, id: 1}
      const existingWrapper = shallow(<NewResource {...{...props, resource: existingResource}} />)

      const buttons = existingWrapper.find(Button)

      expect(buttons.length).toEqual(2)
      expect(buttons.at(0).props().children).toEqual('Save')
      expect(buttons.at(0).props().onClick).toEqual(props.handleUpdate)

      expect(buttons.at(1).props().children).toEqual('Delete')
      expect(buttons.at(1).props().onClick).toEqual(props.handleDelete)
    })
  })

  describe('when rendering the form field', () => {
    it('renders the title input correctly', () => {
      expect(wrapper.find(Input).at(0).props().name).toEqual('title')
      expect(wrapper.find(Input).at(0).props().value).toEqual(props.resource.title)
    })

    it('renders the description textarea correctly', () => {
      expect(wrapper.find(TextArea).at(0).props().name).toEqual('description')
      expect(wrapper.find(TextArea).at(0).props().value).toEqual(props.resource.description)
    })

    it('renders the url input correctly', () => {
      expect(wrapper.find(Input).at(1).props().name).toEqual('url')
      expect(wrapper.find(Input).at(1).props().value).toEqual(props.resource.url)
    })

    it('renders the category select field correctly', () => {
      expect(wrapper.find(Select).at(0).props().name).toEqual('category')
      expect(wrapper.find(Select).at(0).props().value).toEqual(props.resource.category)
      expect(wrapper.find(Select).at(0).props().options).toEqual(categoryOptions)
    })

    it('renders the recipient select field correctly', () => {
      expect(wrapper.find(Select).at(1).props().name).toEqual('recipient_id')
      expect(wrapper.find(Select).at(1).props().value).toEqual(props.resource.recipient_id)
      expect(wrapper.find(Select).at(1).props().options).toEqual([])
    })

    it('renders the resource type select field correctly', () => {
      expect(wrapper.find(Select).at(2).props().name).toEqual('resource_type')
      expect(wrapper.find(Select).at(2).props().value).toEqual(props.resource.resource_type)
      expect(wrapper.find(Select).at(2).props().options).toEqual(resourceTypeOptions)
    })
  })
})


