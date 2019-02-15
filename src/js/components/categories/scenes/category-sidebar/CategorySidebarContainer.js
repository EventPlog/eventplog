import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getParentEventsSuggestions,
  attendEvent
} from 'js/components/events/actions'

import checkEqual  from 'js/utils/checkEqual'
import { secureAction } from 'js/auth/actions'


class CategoryContainer extends Component {

  componentDidMount(props) {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (props.match.url !== this.props.match.url) {
      this.getData()
    }
  }

  shouldComponentUpdate(nextProps) {
    return !checkEqual(this.props, nextProps);
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/categories/:category_id/events/:id') || this.props.match).params
  }

  getData() {
    const {category_id, id} = this.getParams()
    const sureCategoryId = category_id || id

    this.props.getParentEventsSuggestions({
      parent_id: this.props.category.id,
      parent_type: 'Category',
      page: 1,
      per_page: 3
    })
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { events_suggestions = {} } = state.events
  const { category = {} } = state.categories

  return {
    events_suggestions,
    category
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    attendEvent: secureAction(attendEvent),
    getParentEventsSuggestions,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryContainer))