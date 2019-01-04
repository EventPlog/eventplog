import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import Auth from 'js/auth'
import checkEqual from 'js/utils/checkEqual'

import {
  getPartners,
  getPartnersByName,
} from './actions'

import {
  getEvent,
  addEventToStore,
} from 'js/components/events/actions'

import {
  createSponsorship,
} from 'js/components/sponsorships/actions'

class PartnersContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('PARTNERS_INDEX_PAGE_VIEW')
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getPartners()
    }
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        partner: {
          ...state.partner, [key]: value,
        }
      }
      if  (key == 'partner_name') {
        this.getPartners(value)
      }
      return newState
    })
  }

  getData() {
    const { event = {}, match} = this.props
    if (event.id) {
      this.getPartners(event)
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      this.getPartners(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.event_id)
      .then(event => {
        this.setState({loading: false, event})
        this.getPartners(event)
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getPartners = (searchQuery, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.partners.meta || {}

    return this.props.getPartners({
              per_page,
              page: meta.activePage || 1,
              partner: {
                name: searchQuery,
              }
            }).finally(res => this.setState({ loading: false}))
  }

  getPartnersByName = (searchQuery, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.partners.meta || {}

    return this.props.getPartnersByName({
      per_page,
      page: meta.activePage || 1,
      partner: {
        name: searchQuery,
      }
    }).then(res => {
      this.setState({ loading: false})
      return res
    })
  }

  handlePartnerSelect = (partner_id, sponsorship_type = 'media') => {
    this.setState({ loading: true })
    this.props.createSponsorship({
      partner_id,
      sponsorship_type: this.props.sponsorship_type || sponsorship_type,
      sponsorship_offer_id: this.props.sponsorship_offer.id,
    }).then(res => {
      const partner = this.props.partners.data &&
                      this.props.partners.data.find(p => p.id == partner_id)
      this.setState({ loading: false, partner })
      if (typeof FB != 'undefined') FB.XFBML.parse()
    }).catch(error => this.setState({loading: false, error}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getPartners: this.getPartners,
    getPartnersByName: this.getPartnersByName,
    handleChange: this.handleChange,
    handlePartnerSelect: this.handlePartnerSelect,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {partners = {}} = state.partners
  const { event = {}} = state.events
  const { sponsorship_offer = {} } = state.sponsorships

  return {
    event,
    partners,
    sponsorship_offer,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    getPartners,
    getPartnersByName,
    createSponsorship,
    addEventToStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PartnersContainer))
