import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ============== INTERNAL ==============
import { genEventLink } from 'js/utils'
import Auth from 'js/auth'

import {
  getPresentation,
  createPresentation,
  updatePresentation,
  deletePresentation,
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

const defaultPresentation = {
  presentation_type: 'ebook', category: 'presentation',
}

class PresentationContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { presentation: {
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
    const { event, newPresentation } = nextProps
    if (newPresentation) return
    return {
      presentation: nextProps.presentation || defaultPresentation,
      link_back: `${genEventLink(event, event.community)}`
    }
  }

  getData() {
    const { event = {}, match} = this.props

    if ((this.props.presentation && this.props.presentation.id) || !match.params.id) {
      return
    }

    this.getPresentation()

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

  getPresentation = (event = {}, meta = {}) => {

    // likely in an event page. No need to retrieve presentation
    if (!this.props.match.params.event_id) return

    this.setState({ loading: true })
    this.props.getPresentation(this.props.match.params.id)
      .then(presentation => this.setState({ presentation, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        presentation: {
          ...state.presentation, [key]: value,
        }
      }
      if  (elementType == 'select') {
        // props.updatePresentation(newState.presentation)
      }
      return newState
    })
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  handleCreate = () => {
    this.setState({loading: true})
    const { presentation } = this.state
    const payload = {
      presentation: {...presentation, event_id: this.props.event.id}
    }
    this.props.createPresentation(payload).then(presentation => {
      this.setState(() => ({
        presentation: {},
        loading: false,
        error: false,
        success: 'A presentation has been successfully added.'
      }))
    }).catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_CREATE', {
      presentation_type: payload.presentation_type
    })
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this presentation?')
    if (!confirmed) { return }
    this.props.deletePresentation({id: this.state.presentation.id, deleted: true})
      .then(presentation => {
        this.setState(() => ({
          presentation,
          loading: false,
          editing: false,
          success: 'Your presentation has been successfully deleted'}))
      })
      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_DELETE', {
      presentation_type: this.state.presentation.presentation_type
    })
  }

  handleUpdate = (elementType) => {
    this.setState({loading: true})

    mixpanel.track('EVENT_RESOURCES_UPDATE', {
      presentation_type: this.state.presentation.presentation_type
    })

    return this.props.updatePresentation({presentation: this.state.presentation})
      .then(presentation => this.setState({editing: false, loading: false}))
      .catch(error => this.setState(() => ({error, loading: false})))
  }

  handleViewCount = () => {
    const { currentUser = {}, recipient_id, recipient_type } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.presentation.id,
      recipient_type: 'Presentation'
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
  const {presentations = {data: []}} = state.presentations

  const { event_id, id } = ownProps.match.params

  // don't fetch the presentation if it exists in store
  // use presentation if it exists as standalone
  let { presentation }  = state.presentations
  if (event_id && (!presentation || !presentation.id)) {
    presentation = presentations.data.find(sp => sp.id == id) || {}
  }
  return {
    event,
    presentation,
    comments: presentation.comments,
    recipient_id: event.id,
    recipient_type: 'Event',
    currentUser: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPresentation,
    createPresentation,
    updatePresentation,
    deletePresentation,
    updateViewCount,
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PresentationContainer))