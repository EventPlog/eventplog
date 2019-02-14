import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCategories,
  followCategory,
  getCategoriesSuggestions,
} from '../../actions'

import {
  getEvents,
  getEventsSuggestions,
  mockGetEvents,
  attendEvent
} from 'js/components/events/actions'

import checkEqual from 'js/utils/checkEqual'
import { paramsToObj } from 'js/utils'
import { secureAction } from 'js/auth/actions'

class MainContentContainer extends Component {
  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  getCategories = (e, meta) => {
    const { per_page } = this.props.categories.meta || {}
    this.props.getCategories({page: meta.activePage, per_page})
      .then(() => document.querySelector('.pusher').scrollTop = 0)
  }

  getCategoriesSuggestions = (e, meta) => {
    const { per_page } = this.props.categories_suggestions.meta || {}
    this.props.getCategoriesSuggestions({page: meta.activePage, per_page})
  }

  getData() {
    this.props.getCategories({page: 1, per_page: 10})
    this.props.getCategoriesSuggestions({page: 1, per_page: 10})
    this.props.getEventsSuggestions({page: 1, per_page: 3})
  }

  getParams = () => {
    return {...paramsToObj(this.props.location.search.substr(1))}
  }

  getProps = () => ({
    ...this.props,
    ...this.getParams(),
    getCategories: this.getCategories,
    getCategoriesSuggestions: this.getCategoriesSuggestions,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {loading, events = [], events_suggestions = []} = state.events
  const {categories = [], categories_suggestions = []} = state.categories
  return {
    loading,
    categories,
    categories_suggestions,
    events_suggestions
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCategories,
    getEventsSuggestions,
    getCategoriesSuggestions,
    attendEvent: secureAction(attendEvent),
    followCategory: secureAction(followCategory),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))