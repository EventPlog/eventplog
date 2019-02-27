import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import Auth from 'js/auth'
import checkEqual from 'js/utils/checkEqual'

import {
  getSponsorshipOffer,
  updateSponsorshipOffer,
  deleteSponsorship,
  createSponsorship,
  updateSponsorship,
} from './actions'

import {
  getEvent,
  updateEvent,
  addEventToStore,
} from 'js/components/events/actions'

class SponsorshipOfferContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    this.allowNext()
    mixpanel.track('SPONSORSHIP_OFFER_PAGE_VIEW')
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  allowNext = () => {
    const { cart, allowNext } = this.props
    allowNext && allowNext(cart.data && cart.data.length > 0)
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getSponsorshipOffer()
    }
  }

  getData() {
    const { event = {}, match} = this.props
    if (event.id) {
      if (this.sponsorshipsAbsent()) this.getSponsorshipOffer(event)
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false})
      this.props.addEventToStore(event)
      if (this.sponsorshipsAbsent()) this.getSponsorshipOffer(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(this.props.event_id || match.params.event_id)
      .then(event => {
        this.setState({loading: false})
        if (this.sponsorshipsAbsent()) this.getSponsorshipOffer(event)
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  sponsorshipsAbsent() {
    return !(this.props.sponsorship_offer && this.props.sponsorship_offer.event_id == this.props.event.id)
  }

  getSponsorshipOffer = (event = {}, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.sponsorship_offer.meta || {}

    this.props.getSponsorshipOffer({
      per_page,
      page: meta.activePage || 1,
      event_id: event.id,
    }).then(res => {
      this.setState({ loading: false})
      if (typeof FB != 'undefined') FB.XFBML.parse()
    }).catch(res => {
      this.setState({ loading: false})
      if (typeof FB != 'undefined') FB.XFBML.parse()
    })
  }

  createSponsorship = (partner_id, sponsorship_type = 'item') => {
    this.setState({ loading: true })
    this.props.createSponsorship({
      partner_id,
      sponsorship_type,
      sponsorship_offer_id: this.props.sponsorship_offer.id,
    }).then(res => {
      this.setState({ loading: false })
    })
  }

  deleteSponsorship = (id) => {
    this.setState({ loading: true })
    this.props.deleteSponsorship({id, deleted: true})
      .then(() => this.setState({loading: false}))
      .catch(e => this.setState({error: 'Delete not successful', loading: false}))
  }

  handleChange = (key, value) => {
    const sponsorship_offer = this.state.sponsorship_offer && this.state.sponsorship_offer.id
      ? this.state.sponsorship_offer
      : this.props.sponsorship_offer
    this.setState({sponsorship_offer: {...sponsorship_offer, [key]: value }})
  }

  handleSubmit = () => {
    const sponsorshipOffer = this.state.sponsorship_offer
      ? this.state.sponsorship_offer
      : this.props.sponsorship_offer
    return this.props.updateSponsorshipOffer(sponsorshipOffer)
                .then(sponsorship_offer => this.setState({sponsorship_offer}))
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
      .then(res => this.setState({ loading: false }))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getSponsorshipOffer: this.getSponsorshipOffer,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    deleteSponsorship: this.deleteSponsorship,
    handleStateUpdate: this.handleStateUpdate,
    updateSponsorship: this.updateSponsorship,
    allowNext: this.allowNext,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {}} = state.events
  const { organizers } = state.organizers
  const {
    sponsorship,
    sponsorships,
    sponsorship_offer = {},
    sponsorship_offer_items = {}
  } = state.sponsorships

  const { cart } = state.cart

  return {
    event,
    cart,
    organizers,
    sponsorship,
    sponsorships,
    sponsorship_offer,
    sponsorship_offer_items,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    updateEvent,
    addEventToStore,
    getSponsorshipOffer,
    updateSponsorshipOffer,
    createSponsorship,
    updateSponsorship,
    deleteSponsorship,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SponsorshipOfferContainer))
