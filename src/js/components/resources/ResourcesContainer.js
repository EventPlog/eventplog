import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import { getResources } from './actions'
import Auth from 'js/auth'

class EventResourcesContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('EVENT_RESOURCES_INDEX_PAGE_VIEW')
  }

  getData() {
    this.getResources()
  }

  getResources = (e, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.resources.meta || {}

    this.props.getResources({
      per_page,
      page: meta.activePage || 1,
      resource: { ...this.props.requester }
    }).finally(res => this.setState({ loading: false}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getResources: this.getResources,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {resources = {}} = state.resources
  const { event = {}} = state.events

  const requester = ownProps.requester || {
      trackable_id: event.id,
      trackable_type: 'Event'
    }

  return {
    resources,
    event,
    requester,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResources,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventResourcesContainer)
