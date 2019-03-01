import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ============== INTERNAL ==============
import { genEventLink } from 'js/utils'
import Auth from 'js/auth'
import SlackService from 'js/utils/slackService'
import config from 'js/config'

const CURRENCY = process.env.REACT_APP_CURRENCY

import {
  getPartnerLead,
  createPartnerLead,
  updatePartnerLead,
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

const defaultPartnerLead = {
  partner_type: 'media'
}

const sendToSlack = (partner_lead, event, offer) => {
  const slackPayload = {
    title: `${offer.title} - ${CURRENCY}${offer.amount}`,
    url: window.location.origin + genEventLink(event),
    prefixMsg: 'A new sponsorship request have just been submitted',
<<<<<<< HEAD
    channel: '#events-demand',
=======
    channel: config.slack.partnerReportChannel,
>>>>>>> feature/new-events-landing-page
    description: `
      Details
      Name: ${partner_lead.user.first_name} ${partner_lead.user.last_name} 
      Email: ${partner_lead.user.email || ''}
      Phone Number: ${partner_lead.user.phone_number || ''}
      Company: ${partner_lead.company_name || ''}
      Sponsorship Type: ${offer.sponsorship_type} 
      Additional Details: ${partner_lead.extra_details || ''}
      `
  }
  SlackService.send(slackPayload)
}

class PartnerLeadContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { partner_lead: {
      editing: false,
    } }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentWillMount() {
    this.setState({partner_lead: {
      ...this.state.partner_lead,
      user: {
        ...this.state.partner_lead.user,
        ...this.props.currentUser
      }
    }})
  }

  getData() {
    const { event = {}, match} = this.props
    this.props.getPartnerLead()
      .then(partner => {
        this.setState({loading: false, partner})
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getPartnerLead = (event = {}, meta = {}) => {
    this.setState({ loading: true })
    this.props.getPartnerLead(this.props.match.params.id)
      .then(partner_lead => this.setState({ partner_lead, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
  }

  handleChange = (key, value, elementType) => {
    this.setState({partner_lead: {...this.state.partner_lead, [key]: value}})
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  handleCreate = () => {
    this.setState({loading: true})
    const { partner_lead } = this.state
    const { offer_item = {}, custom_offer } = this.props
    const payload = {
      partner_lead: {
        ...partner_lead,
        ...offer_item,
        custom_offer,
      }
    }

    sendToSlack(partner_lead, this.props.event, this.props.offer)

    this.props.createPartnerLead(payload).then(response => {
<<<<<<< HEAD
=======
      const successMsg =  "Thank you for your interest in sponsoring this event! " +
        "A partner advocate at EventPlog will contact you via email or phone within 2 business days."

      EVENTPLOG.toast.success({title:"Success!!", body: successMsg})

>>>>>>> feature/new-events-landing-page
      this.setState(() => ({
        partner_lead: {},
        loading: false,
        error: false,
<<<<<<< HEAD
        success: "Thank you for your interest in sponsoring this event! " +
                  "A partner advocate at EventPlog will contact you via email or phone within 2 business days."
=======
        success: successMsg
>>>>>>> feature/new-events-landing-page
      }))

    }).catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_CREATE', {
      partner_type: payload.partner_type
    })
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this partner?')
    if (!confirmed) { return }
    this.props.deletePartnerLead({id: this.state.partner.id, deleted: true})
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

    return this.props.updatePartnerLead({partner: this.state.partner})
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
      recipient_type: 'PartnerLead'
    })
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    currency: CURRENCY,
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
    getPartnerLead,
    createPartnerLead,
    updatePartnerLead,
    updateViewCount,
    getEvent,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PartnerLeadContainer))