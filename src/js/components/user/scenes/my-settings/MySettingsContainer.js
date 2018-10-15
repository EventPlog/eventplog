import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getResources,
  getResourcesByVerb,
} from 'js/components/resources/actions'

import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { secureAction } from 'js/auth/actions'

const labelVerbMapping = {
  'About me': 'about_me',
}

class MainContentContainer extends Component {
  state = {
    labelVerbMapping,
    activeItem: Object.keys(labelVerbMapping)[0]
  }

  componentWillMount(props) {
    this.getData()
    mixpanel.track('USER_PROFILE_SETTINGS_INDEX_PAGE_VIEW')
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
      mixpanel.track('USER_PROFILE_SETTINGS_INDEX_PAGE_VIEW')
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.getResourcesByVerb(name)
  }

  getData() {
    const { labelVerbMapping, activeItem } = this.state
    this.getResourcesByVerb(activeItem)
  }

  getResourcesByVerb(label, page = 1, per_page = 10) {
    this.props.getResourcesByVerb({
      verb: labelVerbMapping[label],
      page,
      per_page,
      user_id: this.props.user.id
    });
  }

  getResources = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    const { activeItem } = this.state
    this.getResourcesByVerb(activeItem, meta.activePage, per_page)
    mixpanel.track('USER_COMMUNITIES_INDEX_PAGINATION_CLICK', {meta, activeItem})
  }

  getPastEvents = (e, meta) => {
    const { per_page } = this.props.events.meta || {}
    this.props.getPastEvents({page: meta.activePage, per_page})
  }

  getProps = () => ({
    ...this.props,
    ...this.props.location,
    ...this.state,
    getResources: this.getResources,
    currentUser: Auth.currentUser(),
    handleItemClick: this.handleItemClick,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {resources = {}} = state.resources
  return {
    resources,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResources,
    getResourcesByVerb,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))
