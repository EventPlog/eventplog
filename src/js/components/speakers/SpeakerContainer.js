import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getSpeaker,
  createSpeaker,
  updateSpeaker,
  deleteSpeaker,
  updateViewCount,
} from './actions'

import { genEventLink } from 'js/utils'
import Auth from 'js/auth'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

const defaultSpeaker = {
  resource_type: 'ebook', category: 'resource',
}

class SpeakerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { resource: {
      resource_type: 'ebook', category: 'resource',
      editing: false,
    } }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { event } = nextProps
    return {
      resource: nextProps.resource || defaultSpeaker,
      link_back: `${genEventLink(event, event.community)}`
    }
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        resource: {
          ...state.resource, [key]: value,
        }
      }
      if  (elementType == 'select') {
        // props.updateSpeaker(newState.resource)
      }
      return newState
    })
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  handleCreate = () => {
    this.setState({loading: true})
    const { recipient_id, recipient_type } = this.props
    const payload = {
      ...this.state.resource,
      recipient_id,
      recipient_type
    }
    this.props.createSpeaker(payload).then(resource => {
      this.setState(() => ({
        resource: {},
        loading: false,
        error: false,
        success: 'Your resource has been successfully added.'
      }))
    }).catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_CREATE', {
      resource_type: payload.resource_type
    })
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this resource?')
    if (!confirmed) { return }
    this.props.deleteSpeaker({id: this.state.resource.id, deleted: true})
      .then(resource => {
        this.setState(() => ({
          resource,
          loading: false,
          editing: false,
          success: 'Your resource has been successfully deleted'}))
      })
      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_DELETE', {
      resource_type: this.state.resource.resource_type
    })
  }

  handleUpdate = (elementType) => {
    this.setState({loading: true})
    this.props.updateSpeaker(this.state.resource)
      .then(resource => this.setState({resource, editing: false, loading: false}))

      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_UPDATE', {
      resource_type: this.state.resource.resource_type
    })
  }

  handleViewCount = () => {
    const { currentUser = {}, recipient_id, recipient_type } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.resource.id,
      recipient_type: 'Speaker'
    })
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleUpdate: this.handleUpdate,
    handleCreate: this.handleCreate,
    handleEdit: this.handleEdit,
    handleDelete: this.handleDelete,
    handleViewCount: this.handleViewCount
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {} } = state.events

  return {
    event,
    recipient_id: event.id,
    recipient_type: 'Event',
    currentUser: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSpeaker,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
    updateViewCount,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpeakerContainer))