import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ============== INTERNAL ==============
import { genEventLink } from 'js/utils'
import Auth from 'js/auth'

import {
  getSpeaker,
  createSpeaker,
  updateSpeaker,
  deleteSpeaker,
  updateViewCount,
} from './actions'

import {
  getEvent,
  addEventToStore,
  createComment,
  updateComment,
  getComments,
} from 'js/components/events/actions'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

const defaultSpeaker = {
  speaker_type: 'ebook', category: 'speaker',
}

class SpeakerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { speaker: {
      presentation_type: 'talk',
      editing: false,
    } }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  static getDerivedStateFromProps(nextProps, prevState) {
    const { event, newSpeaker } = nextProps
    if (newSpeaker) return
    return {
      speaker: nextProps.speaker || defaultSpeaker,
      link_back: `${genEventLink(event, event.community)}`
    }
  }

  getData() {
    const { event = {}, match} = this.props

    if ((this.props.speaker && this.props.speaker.id) || !match.params.id) {
      return
    }

    this.getSpeaker()

    if (event.id) {
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.event_id)
      .then(event => {
        this.setState({loading: false, event})
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getSpeaker = (event = {}, meta = {}) => {

    // likely in an event page. No need to retrieve speaker
    if (!this.props.match.params.event_id) return

    this.setState({ loading: true })
    this.props.getSpeaker(this.props.match.params.id)
      .then(speaker => this.setState({ speaker, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        speaker: {
          ...state.speaker, [key]: value,
        }
      }
      if  (elementType == 'select') {
        // props.updateSpeaker(newState.speaker)
      }
      return newState
    })
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  handleCreate = () => {
    this.setState({loading: true})
    const { speaker } = this.state
    const payload = {
      speaker: {...speaker, event_id: this.props.event.id}
    }
    this.props.createSpeaker(payload).then(speaker => {
      this.setState(() => ({
        speaker: {},
        loading: false,
        error: false,
        success: 'A speaker has been successfully added.'
      }))
    }).catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_CREATE', {
      speaker_type: payload.presentation_type
    })
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this speaker?')
    if (!confirmed) { return }
    this.props.deleteSpeaker({id: this.state.speaker.id, deleted: true})
      .then(speaker => {
        this.setState(() => ({
          speaker,
          loading: false,
          editing: false,
          success: 'Your speaker has been successfully deleted'}))
      })
      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_DELETE', {
      speaker_type: this.state.speaker.presentation_type
    })
  }

  handleUpdate = (elementType) => {
    this.setState({loading: true})

    mixpanel.track('EVENT_RESOURCES_UPDATE', {
      speaker_type: this.state.speaker.presentation_type
    })

    return this.props.updateSpeaker({speaker: this.state.speaker})
      .then(speaker => this.setState({editing: false, loading: false}))
      .catch(error => this.setState(() => ({error, loading: false})))
  }

  handleViewCount = () => {
    const { currentUser = {}, recipient_id, recipient_type } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.speaker.id,
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
  const {speakers = {data: []}} = state.speakers

  const { event_id, id } = ownProps.match.params

  // don't fetch the speaker if it exists in store
  // use speaker if it exists as standalone
  let { speaker }  = state.speakers
  if (event_id && (!speaker || !speaker.id)) {
    speaker = speakers.data.find(sp => sp.id == id) || {}
  }
  return {
    event,
    speaker,
    comments: speaker.comments,
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
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpeakerContainer))