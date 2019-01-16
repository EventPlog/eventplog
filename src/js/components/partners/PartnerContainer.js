import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ============== INTERNAL ==============
import { genEventLink } from 'js/utils'
import Auth from 'js/auth'

import {
  getPartner,
  createPartner,
  updatePartner,
  deletePartner,
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

const defaultPartner = {
  partner_type: 'media'
}

class PartnerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { partner: {
      partner_type: 'media',
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
    const { event, newPartner } = nextProps
    if (newPartner) return
    return {
      partner: nextProps.partner || defaultPartner,
      link_back: `${genEventLink(event, event.community)}`
    }
  }

  getData() {
    const { event = {}, match} = this.props

    if ((this.props.partner && this.props.partner.id) || !match.params.id) {
      return
    }

    this.getPartner()

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

  getPartner = (event = {}, meta = {}) => {

    // likely in an event page. No need to retrieve partner
    if (!this.props.match.params.event_id) return

    this.setState({ loading: true })
    this.props.getPartner(this.props.match.params.id)
      .then(partner => this.setState({ partner, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        partner: {
          ...state.partner, [key]: value,
        }
      }
      if  (elementType == 'select') {
        // props.updatePartner(newState.partner)
      }
      return newState
    })
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  handleCreate = () => {
    this.setState({loading: true})
    const { partner } = this.state
    const payload = {
      partner: {...partner, event_id: this.props.event.id}
    }
    this.props.createPartner(payload).then(partner => {
      this.setState(() => ({
        partner: {},
        loading: false,
        error: false,
        success: 'A partner has been successfully added.'
      }))
    }).catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_CREATE', {
      partner_type: payload.partner_type
    })
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this partner?')
    if (!confirmed) { return }
    this.props.deletePartner({id: this.state.partner.id, deleted: true})
      .then(partner => {
        this.setState(() => ({
          partner,
          loading: false,
          editing: false,
          success: `${partner.name} has been successfully deleted`}))
      })
      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_DELETE', {
      partner_type: this.state.partner.partner_type
    })
  }

  handleUpdate = (elementType) => {
    this.setState({loading: true})

    mixpanel.track('EVENT_RESOURCES_UPDATE', {
      partner_type: this.state.partner.partner_type
    })

    return this.props.updatePartner({partner: this.state.partner})
      .then(partner => this.setState({editing: false, loading: false}))
      .catch(error => this.setState(() => ({error, loading: false})))
  }

  handleViewCount = () => {
    const { currentUser = {}, recipient_id, recipient_type } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.partner.id,
      recipient_type: 'Partner'
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
  const {partners = {data: []}} = state.partners

  const { event_id, id } = ownProps.match.params

  // don't fetch the partner if it exists in store
  // use partner if it exists as standalone
  let { partner }  = state.partners
  if (event_id && (!partner || !partner.id)) {
    partner = partners.data.find(sp => sp.id == id) || {}
  }
  return {
    event,
    partner,
    comments: partner.comments,
    recipient_id: event.id,
    recipient_type: 'Event',
    currentUser: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getPartner,
    createPartner,
    updatePartner,
    deletePartner,
    updateViewCount,
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PartnerContainer))