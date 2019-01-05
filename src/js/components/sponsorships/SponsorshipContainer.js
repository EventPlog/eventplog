import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import Auth from 'js/auth'
import checkEqual from 'js/utils/checkEqual'

import {
  getSponsorship,
  createSponsorship,
  updateSponsorship,
  deleteSponsorship,
} from './actions'

import {
  getEvent,
  updateEvent,
  addEventToStore,
} from 'js/components/events/actions'

class SponsorshipContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('SPONSORSHIP_OFFER_PAGE_VIEW')
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getSponsorship()
      this.allowNext()
    }
  }

  allowNext = () => {
    const { sponsorship, allowNext } = this.props
    allowNext && allowNext(!!sponsorship.organizer_terms_accepted_by)
  }

  getData() {
    const { event = {}, match} = this.props
    if (event.id) {
      this.getSponsorship(event)
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false})
      this.props.addEventToStore(event)
      this.getSponsorship(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.event_id)
      .then(event => {
        this.setState({loading: false})
        this.getSponsorship(event)
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getSponsorship = (event = {}, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.sponsorship.meta || {}

    this.props.getSponsorship({
      per_page,
      page: meta.activePage || 1,
      event_id: event.id,
    }).finally(res => {
      this.setState({ loading: false})
      this.allowNext()
      if (typeof FB != 'undefined') FB.XFBML.parse()
    })
  }

  createSponsorship = (partner_id, sponsorship_type = 'item') => {
    this.setState({ loading: true })
    this.props.createSponsorship({
      partner_id,
      sponsorship_type,
      sponsorship_id: this.props.sponsorship.id,
    })
      .then(res => {
        this.setState({ loading: false })
        this.allowNext()
      })
      .catch(error => this.setState({ loading: false, error}))
  }

  deleteSponsorship = (id) => {
    this.setState({ loading: true })
    this.props.deleteSponsorship({id, deleted: true})
      .then(() => this.setState({loading: false}))
      .catch(e => this.setState({error: 'Delete not successful', loading: false}))
  }

  handleChange = (key, value) => {
    const sponsorship = this.state.sponsorship && this.state.sponsorship.id
      ? this.state.sponsorship
      : this.props.sponsorship
    this.setState({sponsorship: {...sponsorship, [key]: value }})
  }

  handleSubmit = () => {
    const sponsorshipOffer = this.state.sponsorship
      ? this.state.sponsorship
      : this.props.sponsorship
    return this.props.updateSponsorship(sponsorshipOffer)
                .then(sponsorship => this.setState({sponsorship}))
  }

  handleStateUpdate = (key, value) => this.setState({[key]: value})

  updateSponsorship = (updates) => {
    this.setState({ loading: true })

    // update sponsorship
    const sponsorship = {
      id: this.props.sponsorship.id,
      ...updates
    }
    this.props.updateSponsorship(sponsorship)
      .then(sponsorship => {
        this.allowNext()
        this.setState({ loading: false, sponsorship })
      })
      .catch(error => this.setState({ loading: false, error}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getSponsorship: this.getSponsorship,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    deleteSponsorship: this.deleteSponsorship,
    handleStateUpdate: this.handleStateUpdate,
    updateSponsorship: this.updateSponsorship,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {}} = state.events
  const {
    sponsorship,
    sponsorships,
    sponsorship_offer = {},
  } = state.sponsorships


  return {
    event,
    sponsorship,
    sponsorships,
    sponsorship_offer,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    updateEvent,
    addEventToStore,
    getSponsorship,
    createSponsorship,
    updateSponsorship,
    deleteSponsorship,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SponsorshipContainer))
