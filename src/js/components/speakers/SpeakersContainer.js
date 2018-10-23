import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import { getSpeakers } from './actions'
import Auth from 'js/auth'

class SpeakersContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('SPEAKERS_INDEX_PAGE_VIEW')
  }

  getData() {
    this.getSpeakers()
  }

  getSpeakers = (e, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.speakers.meta || {}

    this.props.getSpeakers({
      per_page,
      page: meta.activePage || 1,
      speaker: {
        recipient_id: this.props.event.id,
        recipient_type: 'Event'
      }
    }).finally(res => this.setState({ loading: false}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getSpeakers: this.getSpeakers,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {speakers = {}} = state.speakers
  const { event = {}} = state.events

  return {
    speakers,
    event,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSpeakers,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeakersContainer)
